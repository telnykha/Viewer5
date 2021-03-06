var TEXTHANDLER = true;

window.onerror = on_error;
function on_error() {return true}; // выключить ошибки на странице

// функия вычисляет (W * текущая ширина / эталонная ширина) (для данных пропорций = 721) и возращает полученное значение
function evalSize1(w)
{
	var width = document.body.offsetWidth-parseInt(document.body.currentStyle.marginLeft)-parseInt(document.body.currentStyle.marginRight)-26;
	return Math.floor( w * width /335 ) + "px";
}
function evalSize2(w)
{
	var width = document.body.offsetWidth-parseInt(document.body.currentStyle.marginLeft)-parseInt(document.body.currentStyle.marginRight)-22;
	return Math.floor( w * width /980 ) + "px";
}

if( window.external.isViewer ){
    window.onload = Initialize;
    window.onunload = onunload_window;
}

function Initialize()
{
	if ( !window.DATA || !window.TEXTHANDLER )
	{
		window.setTimeout(Initialize, 100);
		return
	}
	if (window.custom) window.custom();

	var id = 1;
	var tags = new Array ("img", "span", "object", "div");
	
	for ( k=0; k < tags.length; k++ )
	{
		var collection = document.all.tags( tags[k]);
		if ( !collection ) continue;

		for (i=0, len_coll = collection.length ; i<len_coll; i++)
		{
			var obj = collection(i);
			switch (k)
			{
				case 0: //img
				{
					switch( obj.type )
					{
						case "static":
						{
							req(obj.img_file);
							req(obj.img_file);

							if ( obj.img_from && obj.img_from.toLowerCase() == "common")
							{
								obj.src = pathToBook + "common\\img\\" + obj.img_file;
							}
							else
							{
								obj.src = "img/" + obj.img_file;
							}
						}
						break;
						
						case "link":
						{
							obj.src = pathToBook + "common\\img\\link1.jpg";
							obj.onmouseover = LightLink;
							obj.onmouseout  = deLightLink;
							if (!obj.onclick)
							{
								obj.onclick = LinkClicked;
							}
						}
						break;
					}
				}
				break;

			case 1: //span
			
				if ( obj.type == "swf2" )
				{
				    obj.style.textIndent = "0px";
					var swf_id = obj.swf_id;
					var file = swf_id + ".swf";
					req( file );
					req( file );
					var p = "swf\\" + file;
					if ( obj.swf_from && obj.swf_from.toLowerCase() == "common")
					{
						p = pathToBook + "common\\swf\\" + file;
					}
					
					obj.innerHTML = GetFlashObjectString ( 
						swf_id, 
						p, 
						obj.swf_backcolor ? obj.swf_backcolor : "#d2e2ef", 
						!(obj.swf_stretch) ? false : true, 
						obj.swf_params ? obj.swf_params : params
					);
					if ( parent.FSCommandFromText )
					{
						document.getElementById( swf_id ).attachEvent ('FSCommand', parent.FSCommandFromText );
					}
					break;
				}
				
				if ( obj.type == "img" )
				{
					req(obj.img_file);
					req(obj.img_file);

					var src;
					if ( obj.img_from && obj.img_from.toLowerCase() == "common")
					{
						src = pathToBook + "common\\img\\" + obj.img_file;
					}
					else
					{
						src = "img/" + obj.img_file;
					}
					obj.innerHTML = "<img src='" + src + "'>";
					break;
				}
				
				if ( !obj.id )
				{
					obj.id = id++; // если id не указан, то проставляем авто id
				}
				obj.style.color = "blue";
				obj.style.cursor = "hand";
				obj.onmouseover = Light;
				obj.onmouseout  = deLight;
				if ( !obj.onclick )
				{
					obj.onclick = SpanClicked;
				}
				break;
					
			case 2: //object
				if ( obj.type == "video" )
				{
					var playURL = obj.playURL;
					
					req( playURL );
					req( playURL );

					with( obj )
					{
						AutoStart = 1;
						PlayCount = 1;
						ClickToPlay = 0;
						EnableContextMenu = 0;
						ShowControls = 0;
						Volume = parent.GetVolumeDB();
						Enabled = 0;
						PreviewMode = 0;
						EnableFullScreenControls = 0;
						VideoBorder3D = 0;
						ShowCaptioning = 0;
					}
					var path = new String(location.href);
					path = path.slice(0,path.lastIndexOf("/")+1);
					obj.Open ( window.external.PrepareFile( path + "video/" + playURL ) );
					break;
				}
			
				if (obj.name.toLowerCase() == "flash")
				{
					obj.Loop = true;
					obj.Menu = false;
					obj.Quality2 = "High";
					obj.BackgroundColor = 0xFFFFFF;
					obj.Scale = "exactfit";
					break;
				}

				break;

			case 3: //div
				if ( !obj.type || ( obj.type.toLowerCase() != "swf" && obj.type.toLowerCase() != "swf2") ) break; //проверяем если type не swf и не swf2 пропускаем
				var t2 = obj.type.toLowerCase() == "swf2"; // определяем что type swf2()
				req( ( t2 ? obj.swf_id : obj.swf_file) +".swf" );
				req( ( t2 ? obj.swf_id : obj.swf_file) +".swf" );
				var file = "swf\\" + ( t2 ? obj.swf_id : obj.swf_file) +".swf"; // "swf\\file.swf" т.е. путь в папке документа
				if ( obj.swf_from && obj.swf_from.toLowerCase() == "common") file = /*"file:" + */pathToBook + "common\\" + file; //  <div type="swf" swf_from="common" swf_id....
				if ( obj.swf_from && obj.swf_from.toLowerCase() == "common-pr") file = /*"file:" + */pathToBook + parent.project + "common\\" + file; //  <div type="swf" swf_from="common-pr" swf_id....
				
				var params = "<param name='FlashVars' value='";
				params  += "idName="+obj.swf_id;
				params  += obj.swf_View ? ("&initVar=" + obj.swf_View) : "";
				params  += obj.swf_noNavigate == undefined ? "" : "&Navigate=false";
				params  += "'/>";
				// на выходе получаем типа такого <param name='FlashVars' value='idName=..&initVar=..&Navigate=false' />
				
				obj.innerHTML = GetFlashObjectString ( 
					obj.swf_id, 
					"",//file, 
					obj.swf_backcolor ? obj.swf_backcolor : "#d2e2ef", 
					obj.swf_stretch == undefined ? false : true, 
					obj.swf_params ? obj.swf_params : params,
					parent.type == 'full_text'
				);
				
				if ( parent.FSCommandFromText )
				{
					document.getElementById( obj.swf_id ).attachEvent ('FSCommand', parent.FSCommandFromText );
				}
				document.getElementById( obj.swf_id ).movie = file;
				break;
			}
		}
	}
	var span_id = null;

	var span_obj = GetFirstSpanObject( document );
	if ( span_obj )
	{
		span_id = span_obj.id;
	}

	if ( parent.onDocumentLoaded )
	{
		parent.onDocumentLoaded( span_id, location.hash ); // сказать родителю, что загрузились
	}
	else
	{
		var navigate = false;

		if ( location.hash )
		{
			var a = location.hash.slice(1).split(",");
			span_id = a[0];
			navigate = a.length<2 || GetBool( a[1] );
			if ( !navigate && a.length > 2 )
			{
				document.body.scrollLeft = parseInt(a[2]);
				document.body.scrollTop = parseInt(a[3]);
			}
		}
		if ( span_obj )
		{
			update ( span_id, navigate );
		}
	}
}

function onunload_window()
{
	var col = document.all.tags( "object" );
	if ( !col ) return;

	for ( var i=0, len_coll = col.length ; i<len_coll; ++i )
	{
		var obj = col(i);
		if ( obj.classid && obj.classid == 'CLSID:D27CDB6E-AE6D-11cf-96B8-444553540000' )
		{
			obj.detachEvent ('FSCommand', parent.FSCommandFromText );
		}
	}
}

function update ( newactive, navigate, disable )
{
	var span_col = document.all.tags("span");

	for ( var i=0, c = span_col.length; i < c; ++i )
	{
        var obj = span_col(i);
        
        if ( obj.id == newactive )
        {
	        obj.style.color = "red";
	        if ( GetBool( navigate ) )
	        {
		        var label = document.anchors ( String(newactive) );
		        if (label)
		        {
		            document.body.scrollTop = GetOffset(label);
		        }
		        else
		        {
		            document.body.scrollTop = GetOffset(obj);
		        }
	        }
			obj.onclick = SpanClicked;
        }
        else
        {
            obj.style.color = GetBool( disable ) ? "gray" : "blue";
			obj.onclick = GetBool( disable ) ? null : SpanClicked ;
        }
    }
    active = newactive;
}

function GetOffset(obj)
{
	var obj_offset = obj.offsetTop;
	var obj_parent = obj.offsetParent;
	while (obj_parent)
	{
		obj_offset += obj_parent.offsetTop;
		obj_parent = obj_parent.offsetParent;
	}
	return obj_offset;
}
function Light()
{
	var obj = event.srcElement;
	while ( obj.tagName != "SPAN" )
	{
		obj = obj.parentElement;
		if (obj == null) return;
	}
	obj.style.borderBottom = "solid thin";
}

function deLight()
{
	var obj = event.srcElement;
	while ( obj.tagName != "SPAN" )
	{
		obj = obj.parentElement;
		if (obj == null) return;
	}
	obj.style.borderBottom = "none";
}

function SpanClicked()
{
	var obj = event.srcElement;
	altKeyPress = event.altKey;
	
	while ( obj.tagName != "SPAN" )
	{
		obj = obj.parentElement;
		if (obj == null) break;
	}
	
	if (obj != null)
	{
		if (parent.Change)
		{
		    parent.Change( obj.id, obj.navigate != undefined );
		}
	}
}

///////////////////////////////////////////////////
/// link
function LinkClicked()
{
	var url = event.srcElement.url;
	if( url )
	{
		parent.Go_window( url, event.srcElement.step );
	}
	else if(event.srcElement.step)
	{
	    parent.Change( event.srcElement.step, true );
	}
}

function LightLink()
{
	event.srcElement.src = pathToBook + "common\\img\\link2.jpg"; //красная стрелка
}

function deLightLink()
{
	event.srcElement.src = pathToBook + "common\\img\\link1.jpg"; //синяя стрелка
}
