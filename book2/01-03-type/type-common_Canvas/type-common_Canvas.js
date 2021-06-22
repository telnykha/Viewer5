(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"type_common_Canvas_atlas_", frames: [[0,1344,265,340],[0,0,527,670],[806,1014,204,340],[0,672,403,670],[405,672,399,670],[267,1344,203,340],[806,672,205,340],[529,0,404,670]]}
];


// symbols:



(lib.kran311360 = function() {
	this.spriteSheet = ss["type_common_Canvas_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.kran670 = function() {
	this.spriteSheet = ss["type_common_Canvas_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.ventil311360 = function() {
	this.spriteSheet = ss["type_common_Canvas_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.ventil670 = function() {
	this.spriteSheet = ss["type_common_Canvas_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.zadvig01625723 = function() {
	this.spriteSheet = ss["type_common_Canvas_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.zadvig311360 = function() {
	this.spriteSheet = ss["type_common_Canvas_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.zaslon311360 = function() {
	this.spriteSheet = ss["type_common_Canvas_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.zaslon670 = function() {
	this.spriteSheet = ss["type_common_Canvas_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.стрелка68 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF00FF").s().p("AhjCWIBjkrIBkErg");
	this.shape.setTransform(0,15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.стрелка68, new cjs.Rectangle(-10,0,20,30), null);


(lib.arrow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("ApzAAIJMm6IAADDIKaAAIAAHxIqaAAIAADBg");
	this.shape.setTransform(62.8,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.arrow, new cjs.Rectangle(0,-44.2,125.5,88.5), null);


(lib.clip = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{common:0,zadvig:9,ventil:19,kran:29,zatvor:39});

	// timeline functions:
	this.frame_8 = function() {
		this.stop();
	}
	this.frame_18 = function() {
		this.stop();
	}
	this.frame_28 = function() {
		this.stop();
	}
	this.frame_38 = function() {
		this.stop();
	}
	this.frame_48 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(8).call(this.frame_8).wait(10).call(this.frame_18).wait(10).call(this.frame_28).wait(10).call(this.frame_38).wait(10).call(this.frame_48).wait(1));

	// Слой 8
	this.instance = new lib.стрелка68();
	this.instance.parent = this;
	this.instance.setTransform(323,296.2,1.456,1.4,0,0,-15.9);

	this.instance_1 = new lib.стрелка68();
	this.instance_1.parent = this;
	this.instance_1.setTransform(323,475.2,1.456,1.4,0,180,164.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF00FF").ss(9,1,1).p("AAAqsIAAVZ");
	this.shape.setTransform(323,385.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF00FF").ss(9,1,1).p("AtNjIQIDK2SYn6");
	this.shape_1.setTransform(305.4,475.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FF00FF").ss(9,1,1).p("ArHAbQO8ECHTmb");
	this.shape_2.setTransform(278.2,348.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape,p:{x:323}},{t:this.instance_1,p:{x:323,scaleX:1.456,scaleY:1.4,skewX:180,skewY:164.1,y:475.2}},{t:this.instance,p:{x:323,scaleX:1.456,scaleY:1.4,skewX:0,skewY:-15.9,y:296.2}}]},9).to({state:[{t:this.shape,p:{x:318}},{t:this.instance_1,p:{x:318,scaleX:1.456,scaleY:1.4,skewX:180,skewY:164.1,y:475.2}},{t:this.instance,p:{x:318,scaleX:1.456,scaleY:1.4,skewX:0,skewY:-15.9,y:296.2}}]},10).to({state:[{t:this.shape_1},{t:this.instance_1,p:{x:202.4,scaleX:2.076,scaleY:1.733,skewX:-45,skewY:-11.6,y:436.9}},{t:this.instance,p:{x:424.7,scaleX:1.812,scaleY:1.777,skewX:79.6,skewY:39.6,y:469.5}}]},10).to({state:[{t:this.shape_2},{t:this.instance_1,p:{x:180,scaleX:1.911,scaleY:1.821,skewX:-83.2,skewY:-28.8,y:348}},{t:this.instance,p:{x:366.1,scaleX:1.676,scaleY:1.322,skewX:57,skewY:9.1,y:325}}]},10).wait(10));

	// Слой 6
	this.instance_2 = new lib.arrow();
	this.instance_2.parent = this;
	this.instance_2.setTransform(197.7,554.3,0.573,0.543,0,0,-18.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00FF00").s().p("A8yJ2QgGgDgBgFQgDgGADgGQADgGAGgBIYboOIABAAIAAAAIA5gTQAFgCAGADQAGADABAGQADAGgDAGQgDAFgGACIg5ATIAAAAIAAAAI4bINIgFABQgEAAgDgCgAilBDQgFgDgCgGQgCgFADgGQADgGAFgCIA6gTQAFgBAGACQAGADACAGQACAGgDAFQgDAGgGACIg5ATIgFABQgDAAgEgCgAgyAdQgGgDgCgGQgCgFADgGQADgGAGgBIA3gSQAGgDAGADQAGADABAGQADAGgDAEQgDAGgGACIg4ATIgFABQgDAAgDgCgAA+gIQgFgDgCgFQgCgGADgGQADgGAGgBIA5gTQAFgDAGADQAGADABAGQADAGgDAGQgDAFgGACIg5ATIgFABQgDAAgEgCgACwguQgFgDgCgFQgCgGADgGQADgGAFgBIA6gUQAFgCAGADQAGADACAGQACAGgDAGQgDAFgGACIg5ATIgFABQgDAAgEgCgAEjhUQgGgDgCgGQgCgFADgGQADgGAGgCIA4gTQAGgBAGACQAGADABAGQADAGgDAGQgDAFgGACIg5ATIgFABQgDAAgDgCgAGUh6QgFgDgCgGQgCgFADgGQADgGAGgCIA5gSQAFgDAGADQAGADABAGQADAGgDAFQgDAGgGACIg5ATIgFABQgDAAgEgCgAIGigQgFgDgCgFQgCgGADgGQADgGAFgBIA6gTQAFgDAGADQAGADACAGQACAGgDAFQgDAGgGACIg5ATIgFABQgDAAgEgCgAJ5jGQgGgDgCgFQgCgGADgGQADgGAGgBIA4gTQAGgDAGADQAGADABAGQADAGgDAGQgDAFgGACIg5ATIgFABQgDAAgDgCgALqjsQgFgDgCgFQgCgGADgGQADgGAGgCIA5gTQAFgCAGADQAGADABAGQADAGgDAGQgDAFgGACIg5ATIgFABQgDAAgEgCgANckSQgFgDgCgGQgCgFADgGQADgGAFgCIA6gTQAFgBAGACQAGADACAGQACAGgDAFQgDAGgGACIg5ATIgFABQgDAAgEgCgAPPk4QgGgDgCgGQgCgFADgGQADgGAGgBIA4gTQAGgDAGADQAGADABAGQADAGgDAFQgDAGgGACIg5ATIgFABQgDAAgDgCgARAleQgFgDgCgFQgCgGADgGQADgGAGgBIA5gTQAFgDAGADQAGADABAGQADAGgDAGQgDAFgGACIg5ATIgFABQgDAAgEgCgASymEQgFgDgCgFQgCgGADgGQADgGAFgBIA6gUQAFgCAGADQAGADACAGQACAGgDAGQgDAFgGACIg5ATIgFABQgDAAgEgCgAUlmqQgGgDgCgGQgCgGADgGQADgFAGgCIA4gTQAGgCAGADQAGADABAFQADAGgDAGQgDAGgGABIg5ATIgFABQgDAAgDgBgAWWnRQgFgDgCgGQgCgGADgFQADgGAGgCIA5gTQAFgCAGADQAGADABAGQADAFgDAGQgDAGgGACIg5ASIgFABQgDAAgEgBgAYJn4QgGgDgCgGQgCgGADgFQACgGAGgCIA5gUQAGgCAGADQAFACADAGQACAGgDAGQgDAFgGADIg5AUIgFAAQgDAAgDgBgAZ7ofQgGgDgCgGQgCgGADgFQACgGAGgCIA5gUQAGgCAGADQAFACACAGQADAGgDAGQgDAFgGACIg5AUIgFABQgDAAgDgBgAbtpGQgGgDgCgGQgCgGADgFQACgGAGgCIA5gUQAGgCAGADQAFACACAGQADAGgDAGQgDAFgGADIg5ATIgFABQgDAAgDgBg");
	this.shape_3.setTransform(313.8,515.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00FF00").s().p("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");
	this.shape_4.setTransform(337.8,532.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00FF00").s().p("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");
	this.shape_5.setTransform(315.2,547);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00FF00").s().p("AzQKtQgGgBgDgGQgDgFACgGQACgGAFgDIVXrqIAAAAIABgBIA0gcQAGgDAGABQAGACADAGQADAFgCAGQgCAGgFADIg1AdIgBAAI1WLqQgEACgEAAIgEgBgADxh3QgGgBgDgGQgDgFACgGQACgGAFgDIA1gdQAGgDAGABQAGACADAGQADAFgCAGQgCAGgFADIg1AdQgEACgEAAIgEgBgAFbixQgGgBgDgGQgDgFACgGQACgGAFgDIA1gdQAGgDAGABQAGACADAGQADAFgCAGQgCAGgFADIg1AdQgEACgEAAIgEgBgAHFjrQgGgBgDgGQgDgFACgGQACgGAFgDIA1gdQAGgDAGABQAGACADAGQADAFgCAGQgCAGgFADIg1AdQgEACgEAAIgEgBgAIvklQgGgBgDgGQgDgFACgGQACgGAFgDIA1gdQAGgDAGABQAGACADAGQADAFgCAGQgCAGgFADIg1AdQgEACgEAAIgEgBgAKZlfQgGgBgDgGQgDgFACgGQACgGAFgDIA1gdQAGgDAGABQAGACADAGQADAFgCAGQgCAGgFADIg1AdQgEACgEAAIgEgBgAMDmZQgGgBgDgGQgDgFACgGQACgGAFgDIA1gdQAGgDAGABQAGACADAGQADAFgCAGQgCAGgFADIg1AdQgEACgEAAIgEgBgANtnTQgGgBgDgGQgDgFACgGQACgGAFgDIA1gdQAGgDAGABQAGACADAGQADAFgCAGQgCAGgFADIg1AdQgEACgEAAIgEgBgAPXoNQgGgBgDgGQgDgFACgGQACgGAFgDIA1gdQAGgDAGABQAGACADAGQADAFgCAGQgCAGgFADIg1AdQgEACgEAAIgEgBgARBpHQgGgCgDgFQgDgGACgGQACgFAFgDIA1gcQAGgDAGACQAGABADAGQACAFgBAGQgCAGgGADIg1AcQgDACgEAAIgEgBgASrqAQgGgCgDgFQgDgFACgGQABgGAGgDIAegQQAFgDAGACQAGABADAGQADAFgCAGQgCAGgFADIgeAQQgDACgEAAIgEgBg");
	this.shape_6.setTransform(256.9,512.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3},{t:this.instance_2,p:{scaleX:0.573,skewY:-18.7,x:197.7,y:554.3}}]},9).to({state:[{t:this.shape_4},{t:this.instance_2,p:{scaleX:0.442,skewY:-35.4,x:193.3,y:571.6}}]},10).to({state:[{t:this.shape_5},{t:this.instance_2,p:{scaleX:0.561,skewY:-14.9,x:123,y:593.7}}]},10).to({state:[{t:this.shape_6},{t:this.instance_2,p:{scaleX:0.468,skewY:-29.3,x:205.7,y:540.4}}]},10).wait(10));

	// Слой 25
	this.instance_3 = new lib.zaslon311360();
	this.instance_3.parent = this;
	this.instance_3.setTransform(370.3,376.3);

	this.instance_4 = new lib.kran311360();
	this.instance_4.parent = this;
	this.instance_4.setTransform(27.8,376.3);

	this.instance_5 = new lib.ventil311360();
	this.instance_5.parent = this;
	this.instance_5.setTransform(370.8,14.8);

	this.instance_6 = new lib.zadvig311360();
	this.instance_6.parent = this;
	this.instance_6.setTransform(58.8,14.8);

	this.instance_7 = new lib.zadvig01625723();
	this.instance_7.parent = this;
	this.instance_7.setTransform(114.5,30.5);

	this.instance_8 = new lib.ventil670();
	this.instance_8.parent = this;
	this.instance_8.setTransform(115,30.5);

	this.instance_9 = new lib.kran670();
	this.instance_9.parent = this;
	this.instance_9.setTransform(53,30.5);

	this.instance_10 = new lib.zaslon670();
	this.instance_10.parent = this;
	this.instance_10.setTransform(114.5,30.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3}]}).to({state:[{t:this.instance_7}]},9).to({state:[{t:this.instance_8}]},10).to({state:[{t:this.instance_9}]},10).to({state:[{t:this.instance_10}]},10).wait(10));

	// фон
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D2E2EF").s().p("EgxcA5HMAAAhyNMBi5AAAMAAAByNg");
	this.shape_7.setTransform(316.5,365.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(49));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,633,731);


// stage content:
(lib.typecommon_Canvas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.klip = new lib.clip();
	this.klip.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.klip).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(316.5,365.5,633,731);
// library properties:
lib.properties = {
	id: '9B252AD162F54C4AB647B07AC484EA03',
	width: 633,
	height: 731,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/type_common_Canvas_atlas_.png?1623317341084", id:"type_common_Canvas_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['9B252AD162F54C4AB647B07AC484EA03'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;