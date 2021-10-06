//---------------------------------------------------------------------------

#ifndef MainUnitH
#define MainUnitH
//---------------------------------------------------------------------------
#include <System.Classes.hpp>
#include <Vcl.Controls.hpp>
#include <Vcl.StdCtrls.hpp>
#include <Vcl.Forms.hpp>
#include <SHDocVw.hpp>
#include <Vcl.OleCtrls.hpp>
#include "SHDocVw_OCX.h"
#include <IdBaseComponent.hpp>
#include <IdComponent.hpp>
#include <IdCustomHTTPServer.hpp>
#include <IdCustomTCPServer.hpp>
#include <IdHTTPServer.hpp>
#include <IdContext.hpp>
#include <Vcl.ExtCtrls.hpp>
#include <Vcl.Buttons.hpp>
#include <Xml.XMLDoc.hpp>
#include <Xml.xmldom.hpp>
#include <Xml.XMLIntf.hpp>
#include <Vcl.Graphics.hpp>
//---------------------------------------------------------------------------
class Tviewer5Form : public TForm
{
__published:	// IDE-managed Components
	TIdHTTPServer *IdHTTPServer1;
	TXMLDocument *XMLDocument1;
	TWebBrowser *CppWebBrowser1;
	void __fastcall FormCreate(TObject *Sender);
	void __fastcall IdHTTPServer1CommandGet(TIdContext *AContext, TIdHTTPRequestInfo *ARequestInfo,
          TIdHTTPResponseInfo *AResponseInfo);
	void __fastcall SpeedButton2Click(TObject *Sender);
	void __fastcall SpeedButton1Click(TObject *Sender);
	void __fastcall SpeedButton6Click(TObject *Sender);
	void __fastcall SpeedButton3Click(TObject *Sender);
	void __fastcall SpeedButton4Click(TObject *Sender);
	void __fastcall SpeedButton5Click(TObject *Sender);
	void __fastcall FormResize(TObject *Sender);
	void __fastcall CppWebBrowser1DocumentComplete(TObject *Sender, LPDISPATCH pDisp,
          Variant *URL);
	void __fastcall CppWebBrowser1WindowClosing(TObject *ASender, WordBool IsChildWindow,
          WordBool &Cancel);
	void __fastcall FormAlignPosition(TWinControl *Sender, TControl *Control, int &NewLeft,
          int &NewTop, int &NewWidth, int &NewHeight, TRect &AlignRect, TAlignInfo &AlignInfo);
	void __fastcall CppWebBrowser1NavigateComplete2(TObject *ASender, IDispatch * const pDisp,
          const OleVariant &URL);





private:	// User declarations
	 void __fastcall CreateParams(TCreateParams &Params);

	 TStream* m_s;
	 int GetPresentationPage(UnicodeString& url, UnicodeString& str);
	 int MakePresentation(UnicodeString& url, UnicodeString& str);
	 bool GetContentXml(UnicodeString& url,  UnicodeString& animation, UnicodeString& title, UnicodeString& script, UnicodeString& page, UnicodeString& libname, UnicodeString& libid);
	 bool LoadTextHtml(UnicodeString& url, UnicodeString& body);
	 bool LoadAnimationScript(UnicodeString& url, UnicodeString& script);
public:		// User declarations
	__fastcall Tviewer5Form(TComponent* Owner);
};
//---------------------------------------------------------------------------
extern PACKAGE Tviewer5Form *viewer5Form;
//---------------------------------------------------------------------------
#endif
