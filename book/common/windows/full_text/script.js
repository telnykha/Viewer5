// -------------------------- value ------------------------------
var span = 0;
var iTimeoutID = 0;

var path = new String(location.href);
path = path.slice(0,path.lastIndexOf("/")+1);

window.onload = onload_window;
// --------------------------------------------------------

// -------------------------- common ------------------------------
function onload_window()
{
	if (!window.DATA)
	{
		window.setTimeout(onload_window, 100);
		return;
	}

	var url = "chapter.html";
	req("chapter.html,data.js,texthandler.js,full_text.css");
	
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
	return span ? span + ",false," + Text.document.body.scrollLeft + "," + Text.document.body.scrollTop : null;
}

function onDocumentLoaded( span_id, hash )
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
	var obj = GetSpanObject( Text.document, span_id );
	CheckRes( obj );
	if( obj ) {
	    var disable = parent.GetAutoSpan() || obj.waitcomplete != undefined;

	    span = span_id;

	    Text.update ( span, navigate, disable );

        window.clearTimeout(iTimeoutID);
	    iTimeoutID = window.setTimeout( UpdateFlash, 1000);
	    window.setTimeout( UpdateFlashPrint, 250);
	}
	//setPrint();
}

function setPrint() {

	Print.window.evalSize2 = function(w){
	    /*var width = Print.document.body.offsetWidth
	        -parseInt(Print.document.body.currentStyle.marginLeft)
	        -parseInt(Print.document.body.currentStyle.marginRight)-26;*/
	    var width = 980;
	    return Math.floor( parseInt(w) * width /980 ) + "px";
	}
	Print.document.createStyleSheet( parent.pathToBook + 'common/full_text.css' );
	Print.document.body.innerHTML = Text.document.body.innerHTML;
	Print.document.body.style.border = 'none';
	
    var span_col = Print.document.all.tags("span");
    if( span_col ) {
        for ( var i=0, c = span_col.length; i < c; ++i ) {
            var obj = span_col(i);
            if(obj && obj.style ) {
                obj.style.color = "black";
            }
        };
    }
	var col = Print.document.all.tags( "object");
	if ( col != null) {
		for ( var i=0, col_len = col.length; i < col_len ; ++i ) { 
			var obj = col(i);
			if ( obj.classid && obj.classid == 'CLSID:D27CDB6E-AE6D-11cf-96B8-444553540000' )
			{
			    obj.attachEvent ('FSCommand', FSCommandPrint );
			}
		}
	}
	Print.onunload = function() {
	    var col = Print.document.all.tags( "object");
	    if ( col != null) {
		    for ( var i=0, col_len = col.length; i < col_len ; ++i ) { 
			    var obj = col(i);
			    if ( obj.classid && obj.classid == 'CLSID:D27CDB6E-AE6D-11cf-96B8-444553540000' )
			    {
			        obj.detachEvent ('FSCommand', FSCommandPrint );
			    }
		    }
	    }
	}
   
//  	var headID = Print.document.getElementsByTagName("head")[0];
//  	
//     var newScript = Print.document.createElement('script');
//     newScript.type = 'text/javascript';
//     newScript.src = parent.pathToBook + 'common/texthandler.js';
//     headID.appendChild(newScript);
    
//     
//     newScript = Print.document.createElement('script');
//     newScript.type = 'text/javascript';
//     newScript.src = parent.pathToBook + 'common/texthandler.js';
//     headID.appendChild(newScript);
}

function Change( span_id, navigate )
{
	var obj = GetSpanObject( Text.document, span_id );
	CheckRes( obj );
	if( !obj) return;

	var disable = parent.GetAutoSpan() || obj.waitcomplete != undefined;

	span = span_id;
	
	Text.update ( span, navigate, disable );
	//Print.update( span, navigate, disable );
	UpdateFlash();
	//UpdateFlashPrint();

	return true;
}

function ReplayStep()
{
	Change( span, false );
}

function FSCommandPrint( comm, args )
{
	switch( comm.toLowerCase() )
	{
		case "requestresource":
		{
			req(args);
		}
		break;
	}
}

function FSCommandFromText( comm, args )
{
	switch( comm.toLowerCase() )
	{
		case "onload":
		{
		    window.clearTimeout(iTimeoutID);
		    iTimeoutID = window.setTimeout( UpdateFlash, 1000);
		}
		break;
		
		case "playsound":
		if(!parent.g_show_menu)
		{
			playsound( path, args );
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

function UpdateFlashPrint ()
{
    return;
	span_obj = GetSpanObject( Text.document, span );

	var col = Print.document.all.tags( "object");

	if ( col != null)
	{
		for ( var i=0, col_len = col.length; i < col_len ; ++i )
		{ 
			var obj = col(i);
			if ( obj.classid && obj.classid == 'CLSID:D27CDB6E-AE6D-11cf-96B8-444553540000' )
			{
				if ( span_obj && span_obj.to )
				{
					var comm = ( obj.id == span_obj.to ) ? ( "book/" + span_obj.command ) : ( "reset" );
					obj.SetVariable ("state", comm );
				}
			}
		}
	}
}

function UpdateFlash ()
{
	span_obj = GetSpanObject( Text.document, span );

	var col = Text.document.all.tags( "object");

	if ( col != null)
	{
		for ( var i=0, col_len = col.length; i < col_len ; ++i )
		{ 
			var obj = col(i);
			if ( obj.classid && obj.classid == 'CLSID:D27CDB6E-AE6D-11cf-96B8-444553540000' )
			{
				if ( span_obj && span_obj.to )
				{
					var comm = ( obj.id == span_obj.to ) ? ( "book/" + span_obj.command ) : ( "reset" );
					obj.SetVariable ("state", comm );
	                if(obj.SetVariableAS3){
                         try {
		                    //obj.SetVariableAS3 ("type", "full_text");//не работает, кривой флеш. если исправят, то можно вернуть..
		                    obj.SetVariableAS3 ("type", "flash_text");
		                    obj.SetVariableAS3 ("state", comm);
                         }
                         catch (e) {
                         }
	                }
				}
			}
		}
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
	var col = Text.document.all.tags( "object");
	
	if ( col != null)
	{
		for ( var i=0, col_len = col.length; i < col_len ; ++i )
		{ 
			var obj = col(i);
			if ( obj.classid && obj.classid == 'CLSID:D27CDB6E-AE6D-11cf-96B8-444553540000' )
			{
				obj.SetVariable ( "obj_sound", "end" );
				obj.SetVariable ("volume", parent.GetVolume());
				
	            if(obj.SetVariableAS3){
                     try {
	                    //obj.SetVariableAS3 ("type", "full_text");//не работает, кривой флеш. если исправят, то можно вернуть..
	                    obj.SetVariableAS3 ("type", "flash_text");
		                obj.SetVariableAS3 ( "obj_sound", "end" );
                     }
                     catch (e) {
                     }
	            }
			}
		}
	}
}

function SetVolume()
{
	var flash = Text.document.all.tags( "object")[0];	
	flash.SetVariable ("volume", parent.GetVolume() );
}

function Go_window(url,step)
{
	parent.Go_window(url,step);
}

function BreakStep()
{
    stopsound();
    
	var col = Text.document.all.tags( "object");
	
	if ( col != null)
	{
		for ( var i=0, col_len = col.length; i < col_len ; ++i )
		{ 
			var obj = col(i);
			if ( obj.classid && obj.classid == 'CLSID:D27CDB6E-AE6D-11cf-96B8-444553540000' )
			{
				obj.SetVariable ("pause", "on" );
	            if(obj.SetVariableAS3){
                     try {
		                //obj.SetVariableAS3 ("type", "full_text");
		                obj.SetVariableAS3 ("type", "flash_text");
		                obj.SetVariableAS3 ("pause", "on" );
                     }
                     catch (e) {
                     }
	            }
			}
		}
	}
}
