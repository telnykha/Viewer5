var ALLOBJECTS = true;

window.onerror = on_error;
function on_error() {return true};

//var fso = new ActiveXObject("Scripting.FileSystemObject");

/*var path = new String(location.pathname);
if ( path.charAt(0) == '/') path = path.slice(1);
path = path.slice(0,path.lastIndexOf("\\"));
path = path.slice(0,path.lastIndexOf("\\"));
path = path.slice(0,path.lastIndexOf("\\")+1);*/

//alert (location.protocol)
var path = new String(location.href);
path = path.slice(0,path.indexOf(".ht"));
path = path.slice(0,path.lastIndexOf("/"));
path = path.slice(0,path.lastIndexOf("/"));
path = path.slice(0,path.lastIndexOf("/")+1); //получаем "file:/// | http:// .... /book/"
//alert (path)

var debugMode = true;
function Go_window(ref,step) { parent.Go_window(ref,step);}

function button_mouseover(obj)
{
	if (obj.className=="enable") obj.style.color = "#FFD400";
}
function button_mouseout(obj)
{
	if (obj.className=="enable") obj.style.color = "#D2E2EF";
}
