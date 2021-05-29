// insert JavaScript source code here
var start_frame, stop_frame;

function hasClip()
{
     return !(exportRoot.clip === undefined);
}

function PlayAnimation(frame) {

     Window.start_frame = FindMinLabel(frame);
     Window.stop_frame  = FindMaxFrame(frame);
     mf = Window.stop_frame - Window.start_frame;
     for(key in frame)
     {
		d = frame[key] - Window.start_frame;
        if ( d > 0 && d < mf)
		{
			mf = frame[key] - Window.start_frame;
			Window.stop_frame = frame[key];
		}
     }
     if (exportRoot.clip === undefined)
         exportRoot.gotoAndPlay(Window.start_frame);
     else
         exportRoot.clip.gotoAndPlay(Window.start_frame);
     stage.tickEnabled = true;
}

function FindMaxFrame(kf)
{
   var mf = 0;
   for(key in kf)
   {
	console.log(kf[key]);
        if (kf[key] > mf)
	   mf = kf[key];
   }
   return mf;
}

function FindMinLabel(kf)
{
   var mf = 10000;
   for(key in kf)
   {
	console.log(kf[key]);
        if (kf[key] < mf)
	{
	   mf = kf[key];
	}
   }
   return mf;
}

function PlayAnimation2(l) {
     isClip = false;
	 z = exportRoot.timeline._labels;
     if (z[l] === undefined)
     {
	     z = exportRoot.clip.timeline._labels;
		 if (z[l] === undefined)
		 {
			 alert("ключеовй кадр " + l + " не определен!" );
			 return;
		 }
         isClip = true;
     }
     Window.start_frame = z[l];
     Window.stop_frame  = FindMaxFrame(z);
     mf = Window.stop_frame - Window.start_frame;
     for(key in z)
     {
		console.log(z[key]);
		d = z[key] - Window.start_frame;
			if ( d > 0 && d < mf)
		{
			mf = z[key] - Window.start_frame;
			Window.stop_frame = z[key];
		}
     }
	 if (isClip === true)
		 exportRoot.clip.gotoAndPlay(l);
	 else
		exportRoot.gotoAndPlay(l);
     stage.tickEnabled = true;
}

function StartPlay()
{
     ml = exportRoot.timeline._labels;
     if (ml === undefined)
		 ml = exportRoot.clip.timeline._labels;
	 PlayAnimation(ml);
}



function AddClickHandler(srage)
{
    stage.addEventListener("click", handleClick);
    function handleClick(event) {
	stage.tickEnabled = !stage.tickEnabled;
     }
}

function AddTickHandler(stage)
{
    stage.addEventListener("tick", handleTick2);
    function handleTick2(event)
    {
        if (hasClip())
        {
            if (exportRoot.clip.currentFrame >= Window.stop_frame)
            {
                exportRoot.clip.gotoAndStop(Window.stop_frame-1);
            }
        }
        else
        {
            if (exportRoot.currentFrame >= Window.stop_frame)
            {
                exportRoot.gotoAndStop(Window.stop_frame-1);
            }
        }
    }
}

function InitEx()
{
		init();
}