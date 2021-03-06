// -------------------------- value ------------------------------
var span = 0;
var iTimeoutID = 0;
var lastPlaySound = ''; 
var content = false;

var path = new String(location.href);
path = path.slice(0,path.lastIndexOf("/")+1);

window.onload = onload_window;
window.onunload = onunload_window;

function onload_window()
{
	if (!window.DATA)
	{
		window.setTimeout(onload_window, 100);
		return;
	}
	var url = "text.html";
	req("text.html,data.js,texthandler.js,flash_text.css");
	req("pss_akb_video.swf,pss_akb_zero.swf,navigator.swf,simulator_mag_2.swf");
	
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
	parent.UpdatePrintButton( 3 );
}

function GetState()
{
	return span ? span + ",false," + Text.document.body.scrollLeft + "," + Text.document.body.scrollTop : null;
}

function onunload_window()
{
	if ( frame_left.Flash )
	{
		frame_left.Flash.detachEvent ('FSCommand', FSCommand );
	}
}

function onDocumentLoaded( span_id, hash  )
{
	var navigate = false;
	if ( hash )
	{
		var a = hash.slice(1).split(",");
		span_id = a[0];
		navigate = a.length<2 || GetBool( a[1] );
		if ( !navigate && a.length > 2 )
		{
			Text.document.body.scrollLeft = parseInt(a[2]);
			Text.document.body.scrollTop = parseInt(a[3]);
		}
	}
	span = span_id;
	contentLoaded(navigate);
}

function setPrint() {
	return;
	Print.window.evalSize1 = function(w){
	    /*var width = Print.document.body.offsetWidth
	        -parseInt(Print.document.body.currentStyle.marginLeft)
	        -parseInt(Print.document.body.currentStyle.marginRight)-26;*/
	    var width = 335;
	    return Math.floor( parseInt(w) * width /335 ) + "px";
	}
    
	Print.document.createStyleSheet( parent.pathToBook + 'common/flash_text.css' );
 	Print.document.body.innerHTML = Text.document.body.innerHTML;
 	
	var span_col = Print.document.all.tags("span");
	for ( var i=0, c = span_col.length; i < c; ++i ) {
	    var obj = span_col(i);
	    obj.style.color = "black";
	}
 	Print.document.body.style.border = 'none';
/*    var movie = frame_left.Flash.movie;
    req( movie.slice(movie.lastIndexOf("\\")+1) );
    
	Print.window.evalSize1 = function(w){
	    var width = Print.document.body.offsetWidth
	        -parseInt(Print.document.body.currentStyle.marginLeft)
	        -parseInt(Print.document.body.currentStyle.marginRight)-26;
	    return Math.floor( w * width /335 ) + "px";
	}

	Print.document.createStyleSheet( parent.pathToBook + 'common/flash_text.css' );
	Print.document.body.innerHTML = 
	    GetFlashObjectStringWH("Print_Flash", frame_left.Flash.movie, "white", "", "", 
	    getIEVersionNumber() > 6 ? "width='654px' height=731px" : "width=640px height=714px" ) 
	    + Text.document.body.innerHTML;
	Print.document.body.style.border = 'none';*/
}

function contentLoaded(navigate)
{
	if ( content )
	{
		var obj = GetSpanObject( Text.document, span );
		CheckRes( obj );
		var disable = parent.GetAutoSpan() || obj.waitcomplete != undefined;

		Text.update ( span, navigate, disable );
		setPrint();
        SetField();
	}
	content = true;
}

function Change( span_id, navigate )
{
	var obj = GetSpanObject( Text.document, span_id );
	CheckRes( obj );
	var disable = parent.GetAutoSpan() || obj.waitcomplete != undefined;
	
	span = span_id;
	
	SetField ();
	Text.update ( span, navigate, disable );
    lastPlaySound = '';
    
	return true;
}

function ReplayStep()
{
	Change( span, false );
}

function FSCommandFromText( comm, args )
{
	//alert ( "FSCommandFromText" );
}

function FSCommand( comm, args )
{//alert("A1= "+comm+"  A2= "+args);
	switch( comm.toLowerCase() )
	{
		case "onload":
		{
			var span_obj = GetSpanObject( Text.document, span );
			CheckRes( frame_left );
			CheckRes( frame_left.Flash );
			CheckRes( span_obj );
			frame_left.Flash.SetVariable ( "volume", parent.GetVolume() );
			frame_left.Flash.SetVariable ( "state", span_obj.command );
			
			try{			
				if(frame_left.Flash.SetVariableAS3){
					frame_left.Flash.SetVariableAS3("type", "flash_text");
					frame_left.Flash.SetVariableAS3("volume", parent.GetVolume());
					frame_left.Flash.SetVariableAS3("state", span_obj.command);
				}
			}catch(e){;}
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
		}
		break;
		
		case "endstep":
		if(!parent.g_show_menu)
		{ 
		    if ( parent.GetAutoSpan() )
		    {
		        var next = GetNextSpanObject( Text.document, span );
		        if( next )
		        {
		            Change( next.id, true );
		        }
		        else
		        {
		            var retry = parent.DocumentCallBack("document_end");
		            if ( retry )
		            {
			            Change( GetFirstSpanObject( Text.document ).id, true );
		            }
		        }
		    }
		    else
		    {
				Text.update ( span );
		    }
		}
		break;
	}
}

function SetField ()
{
    var create = false;
    
	if ( !frame_left.Flash ) // динамически создаем флэш, если его еще нет
	{
		frame_left.FlashBox.innerHTML = GetFlashObjectString ( "Flash", "", "d2e2ef");
		frame_left.Flash.attachEvent ('FSCommand', FSCommand );
		
        window.clearTimeout(iTimeoutID);
	    iTimeoutID = window.setTimeout( SetField, 1000);
	    return;
	}
	
	var span_obj = GetSpanObject( Text.document, span );

	switch ( span_obj.type )
	{
		case "flash":
		{ 
			with (frame_left)
			{ // показаваем flash
				ImgDiv.style.display = "none";
				DivFlash.style.display = "block";
			}
			var str = span_obj.to;
			var p = null;
			
			if ( str.indexOf("COMMON:") != -1 )
			{
				req(str.slice(7) + ".swf");
				p = pathToBook + "common\\swf\\" + str.slice(7) + ".swf";
			}
			else
			{
				req(str +".swf");
				p = path + "swf\\" + str +".swf";
			}
			frame_left.Flash.movie = p;
			!create &&
			    FSCommand( "onload", "" );
		}
		break;
	}
}

function SetAutoSpan( fieldonoff )
{
	if ( fieldonoff )
	{
		Change( span, false );
	}
	else
	{
		var obj = GetSpanObject( Text.document, span );
		CheckRes( obj );
		var disable = parent.GetAutoSpan() || obj.waitcomplete != undefined;
		Text.update ( span, navigate, disable );
	}
}

function SoundComplete()
{
	CheckRes( frame_left.Flash )
	frame_left.Flash.SetVariable ( "obj_sound", "end" );
//	alert(frame_left.Flash.SetVariableAS3);
	if(frame_left.Flash.SetVariableAS3){
         try {
		    frame_left.Flash.SetVariableAS3("type", "flash_text");
		    frame_left.Flash.SetVariableAS3("obj_sound", "end");
         }
         catch (e) {
         }
	}
}

function SetVolume()
{
	frame_left.Flash.SetVariable ( "volume", parent.GetVolume() );
	if(frame_left.Flash.SetVariableAS3){
         try {
		    frame_left.Flash.SetVariableAS3("type", "flash_text");
		    frame_left.Flash.SetVariableAS3("volume", parent.GetVolume());
         }
         catch (e) {
         }
	}
}

function Go_window(url,step)
{
	parent.Go_window(url,step);
}

function BreakStep()
{
    stopsound();
    
	CheckRes( frame_left );
	CheckRes( frame_left.Flash );
	frame_left.Flash.SetVariable ("pause", "on");
	if(frame_left.Flash.SetVariableAS3){
         try {
		    frame_left.Flash.SetVariableAS3("type", "flash_text");
		    frame_left.Flash.SetVariableAS3("pause", "on");
         }
         catch (e) {
         }
	}
}
