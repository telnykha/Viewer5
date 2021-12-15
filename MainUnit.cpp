//---------------------------------------------------------------------------

#include <vcl.h>
#pragma hdrstop
 #include <mshtml.h>
 #include "mshtmdid.h"
#include "MainUnit.h"
#include "System.Win.Registry.hpp"
//---------------------------------------------------------------------------
#pragma package(smart_init)
#pragma link "SHDocVw_OCX"

#pragma resource "*.dfm"
Tviewer5Form *viewer5Form;
//---------------------------------------------------------------------------
__fastcall Tviewer5Form::Tviewer5Form(TComponent* Owner)
	: TForm(Owner)
{
	m_s = NULL;
	m_fullScreen = false;
}
//---------------------------------------------------------------------------
void __fastcall Tviewer5Form::FormCreate(TObject *Sender)
{
	ClientWidth = 1024;
	ClientHeight = 768;
	UnicodeString cHomePath = "SOFTWARE";
	UnicodeString cFeatureBrowserEmulation =
		"Microsoft\\Internet Explorer\\Main\\FeatureControl\\FEATURE_BROWSER_EMULATION\\";
	int cIE11 = 11001;
	UnicodeString sKey = ExtractFileName(ParamStr(0));
	TRegIniFile *Reg = new TRegIniFile(cHomePath);
	__try {
		TRegistry *reg1 = dynamic_cast<TRegistry*>(Reg);
		if (Reg->OpenKey(cFeatureBrowserEmulation,
			true) && !(reg1->KeyExists(sKey) && reg1->ReadInteger(sKey)
			== cIE11)) {
			reg1->WriteInteger(sKey, cIE11);
		}
	}
	__finally {
		Reg->Free();
	}
	CppWebBrowser1->Silent=true;

	UnicodeString url = L"localhost\\index.html";
	CppWebBrowser1->Navigate(url.c_str());
}

int GetFullPage(UnicodeString& url, UnicodeString& html)
{
	UnicodeString fileName2 = url;
	fileName2  = ExtractFilePath(url) + L"\\text.html";
	if (!FileExists(url)|| !FileExists(fileName2)){
	   return 404;
	}

	int result = 200;
	TStringList* pageList = new TStringList();
	TStringList* textList = new TStringList();

	html = L"";


	pageList->LoadFromFile(url, TEncoding::UTF8);
	textList->LoadFromFile(fileName2);

	UnicodeString page = pageList->Text;
	UnicodeString text = textList->Text;

	int sp = text.Pos(L"<body");
	if (sp > 0 )
	{
		text = text.SubString(sp, text.Length() - sp);
		sp = text.Pos(L">");
	}
	else
	{
		delete pageList;
		delete textList;
		return 440;
	}
	int ep = text.Pos(L"</body>");

	if (sp == -1 || ep == -1)
	{
		result = 440;
		delete pageList;
		delete textList;
		return result;
	}

	text = text.SubString(sp+1, ep-sp);
	text = text.SubString(0,ep);

	sp = page.Pos(L"<div id=\"filecontents\">");
	UnicodeString div_id = L"<div id=\"filecontents\">";
	sp += div_id.Length();
	page.Insert(text, sp);
	html = page;
	delete pageList;
	delete textList;
	return result;
}

int Tviewer5Form::GetPresentationPage(UnicodeString& url, UnicodeString& str)
{
	int result = 200;
	UnicodeString _str = url;
	_str += L"\\present.xml";
	XMLDocument1->LoadFromFile(_str);
	if (!XMLDocument1->Active) {
	   return 404;
	}
	String doc_name = XMLDocument1->DocumentElement->NodeName;
	if (doc_name != L"xtree") {
		 return 404;
	}
	if (XMLDocument1->DocumentElement->ChildNodes->Count == 0) {
		return 404;
	}
	str = L"<html>";
	str += L"<header>";
	str += L"</header>";
	str += L"<body>";

	for (int i = 0; i < XMLDocument1->DocumentElement->ChildNodes->Count; i++)
	{
		 IXMLNode* node = XMLDocument1->DocumentElement->ChildNodes->Nodes[i];
		 if (node->NodeName != "document") {
			str = L"";
			return 404;
		 }
		 str +=  L"<p><a href = ..\\..\\";
		 str += node->Attributes["url"];
		 str += L"\\text.html";
		 str += L">";
		 str += node->ChildNodes->Nodes[0]->Text;
		 str += L"</a></p>";
	}
	str += L"</body>";
	str += L"</html>";
	return result;
}


//---------------------------------------------------------------------------
void __fastcall Tviewer5Form::IdHTTPServer1CommandGet(TIdContext *AContext, TIdHTTPRequestInfo *ARequestInfo,
		  TIdHTTPResponseInfo *AResponseInfo)
{
  //AResponseInfo->ContentType = "text/html; charset = windows-1251";
  AResponseInfo->ContentType = "text/html; charset = utf-8";
  AContext->Connection->IOHandler->DefStringEncoding = TIdTextEncoding_UTF8;

	UnicodeString str = ExtractFileDir(Application->ExeName);
	UnicodeString req = UTF8Decode(ARequestInfo->Document);
 //	UnicodeString req = ARequestInfo->Document;
	TReplaceFlags Flags1;
	req = StringReplace(req,L"/",L"\\", TReplaceFlags() << rfReplaceAll << rfIgnoreCase);
	str += "\\book\\";
	str += req;
		UnicodeString name = ExtractFileName(str);
		if(ARequestInfo->Document=="/" || ARequestInfo->Document=="/index.html")
		{
			UnicodeString str;
			UnicodeString url = ExtractFileDir(Application->ExeName);
			url += L"\\book\\index.html";

			TStringList* list = new TStringList();
			list->LoadFromFile(url);
			AResponseInfo->ContentText=UTF8Encode(list->Text);
			AResponseInfo->ResponseNo=200;
			delete list;
		}
		else if (!FileExists(str)) {
			UnicodeString html;
			AResponseInfo->ResponseNo=404;
		}
	   else if (name == L"text.html") {

				UnicodeString html;
				int res = MakePresentation(str, html);

				if (AResponseInfo->ResponseNo == res)
				{
					AResponseInfo->ContentText=UTF8Decode(html);
				}

			 }
		else
		{
			UnicodeString ext = ExtractFileExt(str);
			ext = ext.LowerCase();
			if (ext == ".jpg" || ext == ".jpeg" || ext == ".png" || ext == ".gif")
			{
				if (m_s != NULL) {
					delete m_s;
					m_s = NULL;
				}
				TStream* m_s = new TFileStream(str, fmOpenRead);
				AResponseInfo->ContentType ="image/jpeg";
				AResponseInfo->ContentLength =m_s->Size;
				AResponseInfo->ContentStream = m_s;
				AResponseInfo->ContentText = L"";

			}
			else if (ext == ".eot")
			{
				if (m_s != NULL) {
					delete m_s;
					m_s = NULL;
				}
				TStream* m_s = new TFileStream(str, fmOpenRead);
				AResponseInfo->ContentType ="applicatioin/vnd.ms-fontobject";
				AResponseInfo->ContentLength =m_s->Size;
				AResponseInfo->ContentStream = m_s;
				AResponseInfo->ContentText = L"";

			}
			else if(ext == ".ttf")
			{
				if (m_s != NULL) {
					delete m_s;
					m_s = NULL;
				}
				TStream* m_s = new TFileStream(str, fmOpenRead);
				AResponseInfo->ContentType ="font/ttf";
				AResponseInfo->ContentLength =m_s->Size;
				AResponseInfo->ContentStream = m_s;
				AResponseInfo->ContentText = L"";
			}
			else if(ext == ".woff")
			{
				if (m_s != NULL) {
					delete m_s;
					m_s = NULL;
				}
				TStream* m_s = new TFileStream(str, fmOpenRead);
				AResponseInfo->ContentType ="font/woff";
				AResponseInfo->ContentLength =m_s->Size;
				AResponseInfo->ContentStream = m_s;
				AResponseInfo->ContentText = L"";
			}
			else
			{
				TStringList* list = new TStringList();
				list->LoadFromFile(str);

				if (ext == ".js") {
				   AResponseInfo->ContentType ="text/javascript";
				   AResponseInfo->CharSet = "utf-8";
				   AResponseInfo->ContentText = UTF8Encode(list->Text);
				}
				if (ext == ".css")
				{
				   AResponseInfo->ContentType ="text/css";
				   AResponseInfo->CharSet = "utf-8";
				   AResponseInfo->ContentText = UTF8Encode(list->Text);
				}
				else
				{
					AResponseInfo->CharSet = "utf-8";
					AResponseInfo->ContentText=UTF8Encode(list->Text);
				}
				AResponseInfo->ResponseNo=200;
				delete list;
			}
		}


}
//---------------------------------------------------------------------------
void __fastcall Tviewer5Form::SpeedButton2Click(TObject *Sender)
{
	if (m_s != NULL) {
		delete m_s;
		m_s = NULL;
	}
	Close();
}
//---------------------------------------------------------------------------

void __fastcall Tviewer5Form::SpeedButton1Click(TObject *Sender)
{
	UnicodeString url = L"localhost\\book\\about\\about.html";
	CppWebBrowser1->Navigate(url.c_str());
}
//---------------------------------------------------------------------------



void __fastcall Tviewer5Form::SpeedButton6Click(TObject *Sender)
{
	UnicodeString url = L"localhost\\book\\intro\\intro.html";

	 url = StringReplace(url,L"\\.\\",L"\\", TReplaceFlags() << rfReplaceAll << rfIgnoreCase);
	CppWebBrowser1->Navigate(url.c_str());
}
//---------------------------------------------------------------------------

void __fastcall Tviewer5Form::SpeedButton3Click(TObject *Sender)
{
	UnicodeString url = L"localhost\\book\\common\\frames\\help.html";
	CppWebBrowser1->Navigate(url.c_str());
}
//---------------------------------------------------------------------------

void __fastcall Tviewer5Form::SpeedButton4Click(TObject *Sender)
{
	UnicodeString url = L"localhost\\book\\common\\frames\\present.html";
	CppWebBrowser1->Navigate(url.c_str());
}
//---------------------------------------------------------------------------

void __fastcall Tviewer5Form::SpeedButton5Click(TObject *Sender)
{
	UnicodeString url = L"localhost\\book\\common\\frames\\content.html";
	CppWebBrowser1->Navigate(url.c_str());
}
//---------------------------------------------------------------------------

int Tviewer5Form::MakePresentation(UnicodeString& url, UnicodeString& str)
{
   str = L"";
   // проверка URL (url должна содержать им€ файла text.html)
   if (!FileExists(url))
	return 404;
   // проверка информационного файла content.xml
	UnicodeString tmpStr = ExtractFilePath(url);
	tmpStr += L"\\content.xml";
	if (!FileExists(tmpStr))
		return 404;

   // считывание информации из файла content.xml
   UnicodeString strAnimation = L"";
   UnicodeString strTitle = L"";
   UnicodeString strScript = L"";
   UnicodeString strPage = L"";
   UnicodeString strLibname = L"";
   UnicodeString strLibid = L"";

   if (!GetContentXml(tmpStr, strAnimation, strTitle, strScript,strPage,
   strLibname, strLibid))
	return 404;

   // загрузка скрипта
   UnicodeString Script = L"";
   tmpStr = ExtractFilePath(url);
   tmpStr += L"\\" + strAnimation;
   tmpStr += L"\\" + strPage;
   if (!LoadAnimationScript(tmpStr, Script))
		return 404;


   // загрузка данных из странички text.html
   UnicodeString strBody = L"";
   if (!LoadTextHtml(url, strBody))
		return 404;

   //сборка странички
   str += L"<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 5.01" "http://www.w3.org/TR/html4/loose.dtd\">\r";
   str += L"<html>\r";
   str += L"<head>\r";
   str += L"<meta charset=\"UTF-8\"\r>";
   str += L"<title>\r";
   str += strTitle;
   str += L"</title>\r";
/*
   str += L"<style>html, body {\r";
   str += L"scrollbar-fase-color: #213852;\r";
   str += L"scrollbar-base-color : #41566E;\r";
   str += L"scrollbar-highlight-color : #41566E;\r";
   str += L"scrollbar-darkshadow-color : #41566E;\r";
   str += L"scrollbar-track-color : #8EA3BE;\r";
   str += L"scrollbar-arrow-color : #D2E2EF;\r";
   str += L"scrollbar-3dlight-color : #41566E;\r";
   str += L"scrollbar-shadow-color : #41566E;\r";
   str += L"scrollbar-width: 16px;\r";
   str += L"height: 100%;}\r";

  str += L".head1  {\r";
	str += L"font-family : Arial;\r";
	str += L"font-style : normal;\r";
	str += L"color : #D2E2EF;\r";
	str += L"font-size : 16;\r";
	str += L"background-color : #41566E;\r";
	str += L"width : 100%;\r";
	str += L"height : 16;\r";
	str += L"font-weight : bold;\r";
	str += L"margin : 0;\r";
	str += L"padding : 5;\r";
	str += L"}\r";

   str += L"</style>\r";*/


   str += L"<script src = \"..\\..\\common\\createjs.min.js\" charset = \"utf-8\"></script>\r";
   str += L"<script src=\"";
   str += strAnimation;
   str += L"\\";
   str += strScript;
   str += L"\"charset = \"utf-8\"></script>\r";
   str += L"<script src = \"..\\..\\common\\playcanvas.js\" charset = \"utf-8\"></script>\r";
   str += L"<script>\r";
   str += Script;

   str += L"/script>\r";
   str += L"<link type=\"text/css\" rel=\"stylesheet\" href=\"..\\..\\common\\flash_text.css\">\r";

   UnicodeString div_id =  L"<div id=\"filecontents0\" style=\"position:absolute; left: 636px;top:0px;width: 374px; height: 731px; border: 1px solid;border-color:#213852;overflow-y: auto;\">";

   str += L"</head>\r";
   str += L"<body  onload=\"InitEx();\" style=\"margin:0px;\" scroll=\"no\">\r";

   str += L"	<div id=\"animation_container\" style=\"POSITION:absolute;left:0px;top:0px;height:733px;width:633px;border:1px solid;border-color:#213852;\">\r";
   str += L"		<canvas id=\"canvas\" width=\"633\" height=\"731px\" style=\"DISPLAY: block\"></canvas>\r";
   str += L"		<div id=\"dom_overlay_container\" style=\"OVERFLOW: hidden; HEIGHT: 0px; WIDTH: 0px; POSITION: absolute; DISPLAY: block; pointer-events: none\"> \r";
   str += L"		</div>\r";
   str += L"	</div>  \r";
   str += div_id;
   str += L"</div>\r";

   str += L"</body>\r";
   str += L"</html>\r";
	int sp = str.Pos(div_id);
	sp += div_id.Length();
	str.Insert(strBody, sp);
#ifdef _DEBUG
  TStringList* htmlList = new TStringList();
  htmlList->Text = UTF8Encode(str);
  htmlList->SaveToFile("htmldump.html");
  delete htmlList;
#endif
	return 200;
}

bool Tviewer5Form::GetContentXml(UnicodeString& url, UnicodeString& animation, UnicodeString& title, UnicodeString& script,
 UnicodeString& page, UnicodeString& libname, UnicodeString& libid)
{
	XMLDocument1->LoadFromFile(url);
	if (!XMLDocument1->Active) {
	   return false;
	}
	String doc_name = XMLDocument1->DocumentElement->NodeName;
	if (doc_name != L"Viewer5Content") {
		 return false;
	}
	animation = XMLDocument1->DocumentElement->Attributes["animation"];
	title     = XMLDocument1->DocumentElement->Attributes["title"];
	script    = XMLDocument1->DocumentElement->Attributes["script"];
	page      = XMLDocument1->DocumentElement->Attributes["page"];
	libname   = XMLDocument1->DocumentElement->Attributes["libname"];
	libid     = XMLDocument1->DocumentElement->Attributes["libid"];

	return true;
}

bool Tviewer5Form::LoadTextHtml(UnicodeString& url, UnicodeString& body)
{

	if (!FileExists(url)){
	   return false;
	}

	TStringList* textList = new TStringList();
	textList->LoadFromFile(url);
	UnicodeString text = textList->Text;

	int sp = text.Pos(L"<body");
	if (sp > 0 )
	{
		text = text.SubString(sp, text.Length() - sp);
		sp = text.Pos(L">");
	}
	else
	{
		delete textList;
		return false;
	}
	int ep = text.Pos(L"</body>");

	if (sp == -1 || ep == -1)
	{
		delete textList;
		return false;
	}

	text = text.SubString(sp+1, ep-sp-1);
	body = text;

	delete textList;
	return true;
}

bool Tviewer5Form::LoadAnimationScript(UnicodeString& url, UnicodeString& script)
{
	if (!FileExists(url)){
	   return false;
	}

	TStringList* textList = new TStringList();
	textList->LoadFromFile(url);
	UnicodeString text = textList->Text;

	int sp = text.Pos(L"var canvas");
	if (sp > 0 )
		text = text.SubString(sp, text.Length() - sp);
	else
	{
		delete textList;
		return false;
	}
	int ep = text.Pos(L"</script>");
	if (ep == -1)
	{
		delete textList;
		return false;
	}

	text = text.SubString(0,ep);
	UnicodeString strInsert = L"		Window.start_frame = 1; \r";
		strInsert += L"Window.stop_frame = exportRoot.totalFrames;\r";
		strInsert += L"stage.tickEnabled = false;\r";
		strInsert += L"AddClickHandler(exportRoot);\r";
		strInsert += L"AddTickHandler(stage);\r";
		strInsert += L"StartPlay();\r";
	int pos = text.Pos(L"fnStartAnimation();");
	if (pos < 0) {
		return false;
	}
	text.Insert(strInsert, pos);
	script = text;
	delete textList;
	return true;

}

void __fastcall Tviewer5Form::FormResize(TObject *Sender)
{
 // изменить размеры содержимого
}
//---------------------------------------------------------------------------

void __fastcall Tviewer5Form::CppWebBrowser1DocumentComplete(TObject *Sender, LPDISPATCH pDisp,
		  Variant *URL)
{
		UnicodeString str = URL->bstrVal;
		if (str.Pos("index.html") == 0)
            return;
		IHTMLDocument2 *pHTMLDocument = NULL ;
		if (SUCCEEDED(CppWebBrowser1->Document->QueryInterface(IID_IHTMLDocument2, (LPVOID*)&pHTMLDocument)))
		{
			IHTMLElementCollection* pCollection = NULL;
			HRESULT hr = pHTMLDocument->get_all(&pCollection);
			if (SUCCEEDED(hr)) {
				Variant varID("fullID");
				Variant varIdx(0);
				IHTMLElement* pElem = NULL;
				IDispatch* pDisp = NULL;
				if (SUCCEEDED(pCollection->item(varID, varIdx, &pDisp)) && pDisp != NULL)
				{
					if (SUCCEEDED(pDisp->QueryInterface( IID_IHTMLElement, (void**)&pElem )) && pElem != NULL)
					{
						BSTR bsHtml;
						pElem->get_id(&bsHtml);
						UnicodeString s = bsHtml;
						if (s == "fullID") {
						   //	ShowMessage("Ёлемент найден. Id = " + s);
						   ConnectEvents(pElem);
						}
						pElem->Release();
					}
					pDisp->Release();
				}
				pCollection->Release();
			}

			pHTMLDocument->Release();
		}
}
//---------------------------------------------------------------------------
void __fastcall Tviewer5Form::CreateParams(TCreateParams &Params)
{

	TForm::CreateParams(Params);
	//Params.Style = Params.Style ^ 0x00040000L;
}



void __fastcall Tviewer5Form::CppWebBrowser1WindowClosing(TObject *Sender, VARIANT_BOOL IsChildWindow,
		  VARIANT_BOOL *Cancel)
{
	Close();
}


class CEventSink : public IDispatch
{
private:
	  ULONG       m_cRefs;        // ref count
	  Tviewer5Form* m_wnd;
public:
	 CEventSink(Tviewer5Form* wnd)
	 {
	   m_cRefs = 0;
	   m_wnd = wnd;
	 }

   // *** IUnknown Methods ***
    STDMETHOD(QueryInterface)(REFIID riid, PVOID *ppvObject);
    STDMETHOD_(ULONG, AddRef)(void);
    STDMETHOD_(ULONG, Release)(void);

    // *** IDispatch Methods ***
    STDMETHOD (GetIDsOfNames)(REFIID riid, OLECHAR FAR* FAR* rgszNames, unsigned int cNames, LCID lcid, DISPID FAR* rgdispid);
    STDMETHOD (GetTypeInfo)(unsigned int itinfo, LCID lcid, ITypeInfo FAR* FAR* pptinfo);
    STDMETHOD (GetTypeInfoCount)(unsigned int FAR * pctinfo);
	STDMETHOD (Invoke)(DISPID dispid, REFIID riid, LCID lcid, WORD wFlags, DISPPARAMS FAR *pdispparams, VARIANT FAR *pvarResult, EXCEPINFO FAR * pexecinfo, unsigned int FAR *puArgErr);
};

STDMETHODIMP CEventSink::QueryInterface(REFIID riid, PVOID* ppvObject)
{
    if(!ppvObject)
        return E_POINTER;

    if( IsEqualIID(riid, IID_IDispatch) )
        *ppvObject = (IDispatch*)this;
    else
    if( IsEqualIID(riid, IID_IUnknown) )
		*ppvObject = this;
    else
    {
        *ppvObject = NULL;
        return E_NOINTERFACE;
    }

    AddRef();
    return S_OK;
}

ULONG CEventSink::AddRef(void)
{
    return ++m_cRefs;
}
//--------------------------------------------------------------------------

ULONG CEventSink::Release(void)
{
    if(--m_cRefs)
        return m_cRefs;

    delete this;
    return 0;
}
//--------------------------------------------------------------------------

HRESULT CEventSink::GetIDsOfNames(REFIID riid, OLECHAR FAR* FAR* rgszNames, unsigned int cNames,
                                  LCID lcid, DISPID FAR* rgdispid)
{
    *rgdispid = DISPID_UNKNOWN;
    return DISP_E_UNKNOWNNAME;
}
//--------------------------------------------------------------------------

HRESULT CEventSink::GetTypeInfo(unsigned int itinfo, LCID lcid, ITypeInfo FAR* FAR* pptinfo)
{
    return E_NOTIMPL;
}
//--------------------------------------------------------------------------

HRESULT CEventSink::GetTypeInfoCount(unsigned int FAR* pctinfo)
{
    return E_NOTIMPL;
}
//--------------------------------------------------------------------------
STDMETHODIMP CEventSink::Invoke(
			DISPID dispidMember,
			REFIID riid,
			LCID lcid,
			WORD wFlags,
			DISPPARAMS* pdispparams,
			VARIANT* pvarResult,
			EXCEPINFO* pexcepinfo,
			UINT* puArgErr)
{
	switch ( dispidMember )
	{
	case DISPID_HTMLELEMENTEVENTS2_ONCLICK:
		m_wnd->FullScreen();
		break;

	default:
		break;
	}
	return S_OK;
}

//---------------------------------------------------------------------------
void __fastcall Tviewer5Form::ConnectEvents(IHTMLElement* e)
{
	HRESULT hr;
	IConnectionPointContainer* pCPC = NULL;
	IConnectionPoint* pCP = NULL;
	DWORD dwCookie;
	CEventSink* es = new CEventSink(this);
		// Check that this is a connectable object.
		hr = e->QueryInterface( IID_IConnectionPointContainer, (void**)&pCPC );
		if ( SUCCEEDED(hr) )
		{
			// Find the connection point.
			hr = pCPC->FindConnectionPoint( DIID_HTMLElementEvents2, &pCP );
			if ( SUCCEEDED(hr) )
			{
				// Advise the connection point.
				// pUnk is the IUnknown interface pointer for your event sink
				hr = pCP->Advise( es, &dwCookie );
				if ( SUCCEEDED(hr) )
				{
					// Successfully advised
				   //	ShowMessage("Successfully advised");
				}
				pCP->Release();
			}
			pCPC->Release();
		}
}

void __fastcall Tviewer5Form::FullScreen()
{
	this->m_fullScreen = !this->m_fullScreen;
	if (m_fullScreen)
	{
		m_width = Width;
		m_height = Height;
		m_left = Left;
		m_top = Top;
		Left = 0;
		Top = 0;
		Width = Screen->Width;
		Height = Screen->Height;
	}
	else
	{
	   Left = m_left;
	   Top = m_top;
	   Width = m_width;
       Height = m_height;
	}
}

