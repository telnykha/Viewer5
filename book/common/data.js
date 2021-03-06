var DATA = true;

var fso = null;
var WshShell = null;

try {
    fso = new ActiveXObject("Scripting.FileSystemObject");
    WshShell = new ActiveXObject("WScript.Shell");
} catch(e) {
} 

var ForReading = 1, ForWriting = 2, ForAppending = 8, TristateTrue = -1, TristateFalse = 0;

window.onerror = on_error;

function stopsound()
{
	var splayer = document.getElementById("soundPlayer");
	CheckRes( splayer );
	
	splayer.Stop();
}

function playsound(path, args)
{
	var p = "";
	if ( args )
	{
		if ( args.indexOf("COMMON:") == 0 )
		{
			req(args.slice(7));
			p = pathToBook + "common\\sound\\" + args.slice(7);
		}
		else
		{
			req(args);
			p = path + "sound/" + args;
		}
	}
	var splayer = document.getElementById("soundPlayer");
	CheckRes( splayer );
	
	if ( p )
	{
	    splayer.Stop();
		var path = window.external.PrepareFile( p );
		splayer.volume = parent.GetVolumeDB();
		//splayer.timerID = window.setTimeout(function()
		{
		    splayer.Open ( path );
		    splayer.Play();
		}//, 1);
	}
}

function on_error()
{
	return true;
};

function GetSpanObject( document, id )
{
	var spans = document.all.tags("span");
	if ( spans.length )
	{
		for ( var i=0; i< spans.length; i++ )
		{
			if ( spans(i).id == id && spans(i).type != "swf2" )
			{
				return spans(i);
			}
		}
	}
	return null;
}

function GetFirstSpanObject( document )
{
	var spans = document.all.tags("span");
	if ( spans.length )
	{
		for ( var i = 0; i < spans.length; i++ )
		{
			if ( spans(i).type != "swf2" )
			{
				return spans( i );
			}
		}
	}
	//alert ( "не найден ни один span" );
	return null;
}

function GetNextSpanObject( document, id )
{
	var spans = document.all.tags("span");
	if ( !spans.length ) return null;
	
	for ( var i = 0, len = (spans.length - 1); i < len; ++i )
	{
		if ( spans(i).id == id )
		{
		    ++i;
        	for ( ; i < spans.length; ++i )
	        {
	            if ( spans(i).type != "swf2" )
	            {
	                return spans( i );
	            }
	        }
		}
	}
	return null;
}

function req(r,win)
{	
	var w = win ? win : window;
	if (w.external && w.external.isViewer )
	{
		var a = r.split(",");
		for (var i=0; i< a.length; i++)
		{
			w.external.requestResource(a[i]);
		}
	}
}

function CheckRes( obj )
{
	/*if ( !obj )
	{
		alert ( "нет объекта" );
		err++;
	}*/
}

function GetFlashObjectString ( name, path, bgcolor, scale, params, notransparent )
{
	var str = "";
	var codebase = pathToBook + "swflash.cab#version=9,0,0,0";
	str += "<object codebase='"+codebase+"' id='" + name + "' name='FLASH' width='100%' height='100%' classid='CLSID:D27CDB6E-AE6D-11cf-96B8-444553540000'>"
	str += "<param name='movie' value='" + path + "'>";
	str += "<param name='loop' value='true'>";
	str += notransparent ? "" : "<param name='wmode' value='transparent'>";
	str += "<param name='allowScriptAccess' value='always'>";
	str += "<param name='menu' value='false'>";
	str += "<param name='quality' value='high'>";
	str += "<param name='bgcolor' value='" + bgcolor + "'>";
	str += scale ? "<param name='scale' value='exactfit'>" : "";
	str += params ? params : "";
	str += "</object>";
	return str;
}

function GetFlashObjectStringWH ( name, path, bgcolor, scale, params, widhtheight )
{
	var str = "<div align='center'>";
	var codebase = pathToBook + "swflash.cab#version=9,0,0,0";
	str += "<object codebase='"+codebase+"' id='" + name + "' name='FLASH' "+widhtheight+" classid='CLSID:D27CDB6E-AE6D-11cf-96B8-444553540000'>"
	str += "<param name='movie' value='" + path + "'>";
	str += "<param name='loop' value='true'>";
	str += "<param name='allowScriptAccess' value='always'>";
	str += "<param name='menu' value='false'>";
	str += "<param name='quality' value='high'>";
	str += "<param name='bgcolor' value='" + bgcolor + "'>";
	str += scale ? "<param name='scale' value='exactfit'>" : "";
	str += params ? params : "";
	str += "</object></div>";
	return str;
}

function getIEVersionNumber() {
    var ua = navigator.userAgent;
    var MSIEOffset = ua.indexOf("MSIE ");
    
    if (MSIEOffset == -1) {
        return 0;
    } else {
        return parseFloat(ua.substring(MSIEOffset + 5, ua.indexOf(";", MSIEOffset)));
    }
}

var nextNodeID = 50;

function MakeItemID ( nodes )
{
	for ( var i=0; i < nodes.childNodes.length; i++ )
	{
		var item = nodes.childNodes.item(i);
		if ( item.nodeType == 1)
		{
			if ( item.tagName == "item" )
			{
				if ( item.getAttribute("id" ) == null )
				{
					item.setAttribute("id", nextNodeID++ );
				}
			}
			MakeItemID ( item );
		}
	}
}

function GetNodeFromID ( nodes, id )
{
	for ( var i=0; i<nodes.childNodes.length; i++ )
	{
		var item = nodes.childNodes.item(i);
		if ( item.nodeType == 1)
		{
			if ( item.getAttribute("id")== id ) return item;
			item = GetNodeFromID(item, id);
			if ( item ) return item;
		}
	}
	return null;
}

function FindNodeFromURL ( nodes, url )
{
	for ( var i=0; i<nodes.childNodes.length; i++ )
	{
		var item = nodes.childNodes.item(i);
		if ( item.nodeType == 1)
		{
			if ( item.getAttribute("url")== url ) return item;
			item = FindNodeFromURL(item, url);
			if ( item ) return item;
		}
	}
	return null;
}

function RemoveMenuNodes (nodes)
{
	for ( var i=0; i < nodes.childNodes.length; i++ )
	{
		var item = nodes.childNodes.item(i);
		if ( item.nodeType == 1)
		{
			if ( item.tagName == "menu" )
			{
				var menu_obj_id = item.getAttribute ("menu_obj");
				if ( menu_obj_id )
				{
					document.getElementById( menu_obj_id ).detachEvent ('FSCommand', FSCommand );
					item.removeAttribute ( "menu_obj" );
				}
				
				var menu_div_id = item.getAttribute ("menu_div");
				if ( menu_div_id )
				{
					document.body.removeChild ( document.getElementById( menu_div_id ) );
					item.removeAttribute ( "menu_div" );
				}
			}
			RemoveMenuNodes ( item );
		}
	}
}

function CheckNumber(value, min, max)
{
	if ( min > max )
	{
		if ( confirm ( "Неверное значение. Прервать ?" ))
		{
			error = error;
		}
	}
	if ( (isNaN(value)==true) || (value<min || value>max) )
	{
		if ( confirm ( "Неверное значение. Прервать ?" ))
		{
			error = error;
		}
		return false;
	}
	return true;
}

function GetBool( val )
{
	switch ( typeof( val ) )
	{ // т.к. тип n может быть любым
	case "string":
	    return val.toLowerCase() == "true";
	
	case "number":
	    return val != 0;
	    
	case "boolean":
	    return val;
	    
	default:
		return false;
	}
}