// -------------------------- value ------------------------------
var span = 0;
var iTimeoutID = 0;
var lastPlaySound = ''; 

var path = new String(location.href);
path = path.slice(0,path.lastIndexOf("/")+1);

window.onload = onload_window;

function onload_window()
{
	if (!window.DATA)
	{
		window.setTimeout(onload_window, 100);
		return;
	}

	var url = "chapter.html";
	req("chapter.html,data.js,texthandler.js");
	req("purpose_mag_video_part_01.swf,purpose_mag_video_part_02.swf,purpose_mag_video_part_03.swf");
	
	var state = parent.getCurState();
	if ( state )
	{
		url += "#" + state;
	}
	else if(location_hash) {
		url += "#" + location_hash;
	}
	document.getElementById("Text").contentWindow.document.bgColor = "#d2e2ef";
	document.getElementById("Text").src = url;
	
	parent.resetOnLoad();
	parent.UpdatePrintButton( 2 );
}

function GetState()
{	
	var st = parent.state ? parent.state : "1";
	return span ? span + ",false," + Text.document.body.scrollLeft + "," + Text.document.body.scrollTop : st;
	//return span ? span + ",false," + Text.document.body.scrollLeft + "," + Text.document.body.scrollTop : null;
}

function ReplayStep()
{
	FSCommandFromText( "onload" );
}

function onDocumentLoaded( span_id )
{
	//FSCommandFromText( "onload", "" );
	//setPrint();
	//Text.document.body.style.backgroundColor = "white";
	//Text.document.body.bgcolor = "white";
	
	var frame_div = Text.document.all.tags( "div")[0];
	var frame_obj = Text.document.all.tags( "object")[0];
	
/* - флеш не правильно масштабируется при 16-9
     новый кусок кода
*/
	var oStyleSheet=Text.document.createStyleSheet();
    Text.window.evalSize = function(h){
        var height = Text.document.body.offsetHeight
            -parseInt(Text.document.body.currentStyle.marginTop)
            -parseInt(Text.document.body.currentStyle.marginBottom);
        return Math.ceil( parseInt(h) * height /731 ) + "px";
    }
	
/* - флеш не правильно масштабируется при 16-9
     старый кусок кода
	
	var oStyleSheet=Text.document.createStyleSheet();
	Text.window.evalSize = function(w){
	    var width = Text.document.body.offsetWidth
	        -parseInt(Text.document.body.currentStyle.marginLeft)
	        -parseInt(Text.document.body.currentStyle.marginRight);
	    return Math.ceil( parseInt(w) * width /1010 ) + "px";
	}
*/    
	oStyleSheet.addRule(".scaleable","width : expression(evalSize(swidth));height : expression(evalSize(sheight));");

	frame_div.className="scaleable";
	frame_div.swidth="1010";
	frame_div.sheight="731";
	
	frame_obj.bgcolor = "white";

	//frame_div.removeAttribute('width');
	//frame_div.removeAttribute('height');
	
	//alert( Text.document.body.innerHTML );
}

function setPrint() {
	return;
	var frame_obj = Text.document.all.tags( "object")[0];//1010x731
	Print.document.body.innerHTML = 
	    GetFlashObjectStringWH("Print_Flash", frame_obj.movie, "white", "", "", 
	    "width=640px height=463px" );
	Print.document.body.style.border = 'none';	
 	Print.Print_Flash.attachEvent ('FSCommand', function(comm, args) {
    Print.Print_Flash.SetVariable ("state", parent.state);
	if(Print.Print_Flash.SetVariableAS3){
		Print.Print_Flash.SetVariableAS3 ("type", "full_flash");
		Print.Print_Flash.SetVariableAS3 ("state", parent.state);
	}
 	});
}

function FSCommandFromText( comm, args )
{
	switch( comm.toLowerCase() )
	{
		case "gowin":
		{	
			var sBuf = args.split("&");			
//			window.alert("Comm = "+sBuf[0]+"  Args = "+sBuf[1]);			
			Go_window(sBuf[0],sBuf[1]);
		}
		break;
		case "onload":
		{
			var frame_obj = Text.document.all.tags( "object")[0];
			var frame_div = Text.document.all.tags( "div")[0];

			CheckRes( frame_obj );
			CheckRes( frame_div );		
//			window.alert("State = "+parent.state);	
//			frame_obj.SetVariable ("state", parent.state);

			frame_obj.SetVariable ("state", frame_div.command);
			frame_obj.SetVariable ("volume", parent.GetVolume());

			if(frame_obj.SetVariableAS3){
                 try {
				    frame_obj.SetVariableAS3 ("type", "full_flash");
				    frame_obj.SetVariableAS3 ("state", frame_div.command);
				    frame_obj.SetVariableAS3 ("volume", parent.GetVolume());
                 }
                 catch (e) {
                 }
			}
		}
		break;
		
		case "playsound":
		if(!parent.g_show_menu)
		{
            //playsound( path, args );
            lastPlaySound != args && playsound(path, args );
            lastPlaySound = args;
		}
		break;
		
		case "requestresource":
		//if(!parent.g_show_menu)
		{
			req(args);
			//alert(args);
		}
		break;

		case "endstep":
		if(!parent.g_show_menu)
		{
		    if ( parent.GetAutoSpan() )
		    {
				parent.DocumentCallBack("document_end");
		    }
		}
		break;				
	}
}

function Go_window(url,step)
{
	parent.Go_window(url,step);
}

function SoundComplete()
{
	var flash = Text.document.all.tags( "object")[0];
	CheckRes( flash );	
	flash.SetVariable ( "obj_sound", "end" );
	if(flash.SetVariableAS3){
         try {
		    flash.SetVariableAS3 ("type", "full_flash");
		    flash.SetVariableAS3 ( "obj_sound", "end" );
         }
         catch (e) {
         }
	}
}

function SetVolume()
{
	var flash = Text.document.all.tags( "object")[0];	
	flash.SetVariable ("volume", parent.GetVolume() );
	if(flash.SetVariableAS3){
         try {
		    flash.SetVariableAS3 ("type", "full_flash");
		    flash.SetVariableAS3 ("volume", parent.GetVolume() );
         }
         catch (e) {
         }
	}
}

function BreakStep()
{
    stopsound();
    
	var frame_obj = Text.document.all.tags( "object")[0];
	CheckRes( frame_obj );
	frame_obj.SetVariable ("pause", "on" );
	if(frame_obj.SetVariableAS3){
         try {
		    frame_obj.SetVariableAS3 ("type", "full_flash");
		    frame_obj.SetVariableAS3 ("pause", "on" );
         }
         catch (e) {
         }
	}
} 
