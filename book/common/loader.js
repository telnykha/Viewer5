var LOADER = true;

window.onerror = on_error;
function on_error()
{
	return true;
};

function req(r)
{
	var a = r.split(",");
	for (var i=0; i< a.length; i++)
	{
		window.external.requestResource(a[i]);
	}
}

window.onload = play;

function play()
{
	if ( !window.type )
	{
		window.setTimeout(play, 100);
		return;
	}

	var search = location.search.slice(1);
	var location_hash = location.hash.slice(1);
	var pathToBook = parent.pathToBook;
	parent.save_type = type;
	
	req("interface.css,data.js,script.js,page.js");

	var start = "";
	start += String("<html><head>");
	start += String("<meta http-equiv='Content-Type' content='text/html; charset=unicode'>");
	start += String("<link rel='stylesheet' type='text/css' href='"+pathToBook+"common\\frames\\interface.css'>");
	start += String("<script language='javascript' src='"+pathToBook+"common\\data.js'></script>");
	start += String("<script language='javascript' src='"+pathToBook+"common\\windows\\"+type+"\\script.js'></script>");
	start += String("<script language='javascript' src='page.js'></script>");

	start += String("<script language='javascript'>var location_hash = '" + location_hash + "'; </script>");
	start += String("<script language='javascript'>var pathToBook = '" + pathToBook + "'; </script>");
	start += String("<script language='javascript'>var type = '" + type + "'; </script>");

	var textframe = new String("<iframe id='Text' class='new_type2' style='height:100%' allowTransparency='true' APPLICATION='yes'></iframe>"); 
	
	var printbody = "<object STYLE='background-color: #213852; position: absolute; left: 0; top: 0; width: 166; height: 25;' ID='kn_print' classid='CLSID:D27CDB6E-AE6D-11cf-96B8-444553540000'>";
	printbody += "<param name='movie' value='../common/swf/kn_print.swf'>";
	printbody += "<param name='loop' value='true'>";
	printbody += "<param name='wmode' value='transparent'>";
	printbody += "<param name='allowScriptAccess' value='always'>";
	printbody += "<param name='menu' value='false'>";
	printbody += "<param name='quality' value='high'>";
	printbody += "<param name='bgcolor' value='#e0dfe3'>";
	printbody += "<param name='scale' value='exactfit'>";
	printbody += "</object>";
	printbody += "<script for='kn_print' event='FSCommand(command , args)' language='javascript'>if(command.toLowerCase()=='onclick') parent.DoPrint();</script>";

	var body = "";

	switch (type)
	{
		case "flash_text":
			req("content.html");
			body += String("<body style='margin: 0px' scroll='no' onload='onload_window()'>");
			body += String("<table border='0' cellspacing='0' cellpadding='0' width='100%' height='100%'>");
			body += String("<tr>");
			body += String("<td width='63.3%' style='border: solid 3px #D2E2EF; margin:20px'>");
			body += String("<iframe id='frame_left' style='width: 100%;height: 100%;background-color: #d2e2ef;border: solid 1px #213852;' allowTransparency='true' src='"+pathToBook+"common\\windows\\"+type+"\\content.html' APPLICATION='yes'></iframe>");
			body += String("</td>");
			body += String("<td style='width:3px;background-color: #213852'><div style='width:3px'/></td>");
			body += String("<td style='border: solid 3px #D2E2EF;'>");
			body += String("<iframe id='Text' style='width: 100%;height: 100%;background-color: #d2e2ef;border: solid 1px #213852;' scrolling='no' allowTransparency='true' APPLICATION='yes'></iframe>");
			body += String("</td>");
			body += String("</tr>");
			body += String("</table>");
			//body += "<iframe id='Print' STYLE='position: absolute; left: -10000; top: -10000;'></iframe>";
			break;
			
	case "flash_text_731":
			req("content.html");
			body += String("<body style='margin: 0px' scroll='no' onload='onload_window()'>");
			body += String("<table border='0' cellspacing='0' cellpadding='0' width='100%' height='100%'>");
			body += String("<tr>");
			body += String("<td width='73%' style='border: solid 3px #FFFFFF; margin:20px'>");
			body += String("<iframe id='frame_left' style='width: 100%;height: 100%;background-color: #FFFFFF;border: solid 1px #213852;' allowTransparency='true' src='"+pathToBook+"common\\windows\\"+type+"\\content.html' APPLICATION='yes'></iframe>");
			body += String("</td>");
			body += String("<td style='width:3px;background-color: #213852'><div style='width:3px'/></td>");
			body += String("<td style='border: solid 3px #D2E2EF;'>");
			body += String("<iframe id='Text' style='width: 100%;height: 100%;background-color: #FFFFFF;border: solid 1px #213852;' scrolling='no' allowTransparency='true' APPLICATION='yes'></iframe>");
			body += String("</td>");
			body += String("</tr>");
			body += String("</table>");
			//body += "<iframe id='Print' STYLE='position: absolute; left: -10000; top: -10000;'></iframe>";
			break;			

	case "flash_text_650":
			req("content.html");
			body += String("<body style='margin: 0px' scroll='no' onload='onload_window()'>");
			body += String("<table border='0' cellspacing='0' cellpadding='0' width='100%' height='100%'>");
			body += String("<tr>");
			body += String("<td width='65%' style='border: solid 3px #FFFFFF; margin:20px'>");
			body += String("<iframe id='frame_left' style='width: 100%;height: 100%;background-color: #FFFFFF;border: solid 1px #213852;' allowTransparency='true' src='"+pathToBook+"common\\windows\\"+type+"\\content.html' APPLICATION='yes'></iframe>");
			body += String("</td>");
			body += String("<td style='width:3px;background-color: #213852'><div style='width:3px'/></td>");
			body += String("<td style='border: solid 3px #D2E2EF;'>");
			body += String("<iframe id='Text' style='width: 100%;height: 100%;background-color: #FFFFFF;border: solid 1px #213852;' scrolling='no' allowTransparency='true' APPLICATION='yes'></iframe>");
			//body += printbody;
			body += String("</td>");
			body += String("</tr>");
			body += String("</table>");
			//body += "<div onclick='alert(123)' id1='Print' STYLE='background-color: #213852; position: absolute; left: 0; top: 0; width: 100; height: 100;'>print</div>";
			//body += "<iframe id='Print' STYLE='position: absolute; left: -10000; top: -10000;'></iframe>";
			break;					
		
		case "full_text":
			body += "<body class='new_type2' scroll='no' style='background-color:" + parent.parent.b_color + "'>";
			body += textframe;
			body += "</body>";
			//body += "<iframe id='Print' STYLE='position: absolute; left: -10000; top: -10000;'></iframe>";			
			break;
			
		case "full_flash":
			body += "<body class='new_type2' scroll='no' style='background-color:" + parent.parent.b_color + "'>";
			body += textframe;
			body += "</body>";
			//body += "<iframe id='Print' STYLE='position: absolute; left: -10000; top: -10000;'></iframe>";
			break;

		case "full_video":
			body += "<body class='new_type2' scroll='no' style='background-color:" + parent.parent.b_color + "'>";
			body += textframe;
			body += "</body>";
			//body += "<iframe id='Print' STYLE='position: absolute; left: -10000; top: -10000;'></iframe>";
			break;
	}
    //try 
    {
        //var axo = new ActiveXObject('CLSID:22D6F312-B0F6-11D0-94AB-0080C74C7E95');
        //delete axo;

	    body += "<object id='SoundPlayer' style='display: none' classid='CLSID:22D6F312-B0F6-11D0-94AB-0080C74C7E95'></object>";
	    //body += "<object id='SoundPlayer' style='width:800px;height:80px;' classid='CLSID:22D6F312-B0F6-11D0-94AB-0080C74C7E95'></object>";
	    body += "<script language='JScript' for='SoundPlayer' event='EndOfStream(Result)'>SoundComplete();</script>"
    } //catch(e)
    {
    } 
    
	var end =  String("</html>");
	var newBody = String(start+body+end);
	document.write(newBody);
	document.close();
}