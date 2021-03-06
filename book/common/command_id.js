
var COMMAND_ID = true;

function GetAutoSpan()
{
    return g_fieldonoff || IsPresentMode();
}

function GetVolume()
{
	var state = "100";//GetNodeFromID ( xmlDocument, "volume" ).getAttribute("state");
	return parseInt( state );
}

function GetVolumeDB()
{
	var state = "100";//GetNodeFromID ( xmlDocument, "volume" ).getAttribute("state");
	var iValue = parseInt( state );
	if( iValue == 0 )
	{
		return -10000;
	}
	return ( 33.22 * 100 * Math.log( iValue / 100 ) / Math.LN10 );
}

function IsPresentMode()
{
    return g_courentPresent != (-1);
}

function DocumentCallBack ( message )
{
	switch( message )
	{
	case "document_end":
	    {
	        if ( IsPresentMode() && !g_show_menu )
	        {
	            if ( PlayNextPresent() )
	            {
	                return false;
	            }
	        }
	    }
		return true;
	}
	return false;
};

function make_action( id, x, y, state )
{
    if ( id > 0 && id < 50 )
    {
        GetNodeFromID ( xmlDocument, id ).setAttribute ("state", state );
	    mouse_handled = true;
	    return true;
    }

    switch( id )
    {
    case "exit":
        {
	        window.external.close();
        }
	    break;

	 case "volume":
        {
            GetNodeFromID ( xmlDocument, id ).setAttribute ("state", state );
            
			var volume = parseInt ( state );
		    
			var splayer = view_frame.document.getElementById("soundPlayer");
//			CheckRes( splayer );

			var volumeDB = GetVolumeDB();
//			splayer.volume = volumeDB;
			if ( splayer )
			{
				splayer.volume = volumeDB;
			}
			
			if ( view_frame.SetVolume )
			{
				view_frame.SetVolume( volumeDB );
			}
        }
	    mouse_handled = true;
	    break;

    	
    case "help":
        {
			req("help.html,data.js");
			view_frame.location = pathToBook + "common/frames/help.html";
			header_obj.SetVariable ( "State", "head_txt=" + GetNodeFromID ( xmlDocument, id ).getAttribute ("text") );
        }
	    break;

    default:
	    return false;
    }
    return true;
};
