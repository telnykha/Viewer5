(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"term_common_HTML5 Canvas_atlas_", frames: [[0,0,625,723],[0,725,625,723],[0,1450,337,325],[339,1450,335,160]]}
];


// symbols:



(lib.common625723 = function() {
	this.spriteSheet = ss["term_common_HTML5 Canvas_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.direct625723 = function() {
	this.spriteSheet = ss["term_common_HTML5 Canvas_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.type01337 = function() {
	this.spriteSheet = ss["term_common_HTML5 Canvas_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.type02337 = function() {
	this.spriteSheet = ss["term_common_HTML5 Canvas_atlas_"];
	this.gotoAndStop(3);
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


(lib.палка02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(50,1,1).p("Aaa6ZMg0zA0z");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.палка02, new cjs.Rectangle(-194,-194,388,388), null);


(lib.палка01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(50,1,1).p("A6Z6ZMA0zA0z");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.палка01, new cjs.Rectangle(-194,-194,388,388), null);


(lib.моргалканаправление = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(5,1,1).p("Ar072IogAAQB6CSBXCkIIXgZQhAiTiIiKgAH8UyIIuglQC+CfAtEAIpRBLQg7jciNjpg");

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},10).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-132.5,-180.7,265.1,361.5);


(lib.квадрат01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#47829E").s().p("AvdFeQigAAAAigIAAl7QAAigCgAAIe7AAQCgAAAACgIAAF7QAACgigAAg");
	this.shape.setTransform(20,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.квадрат01, new cjs.Rectangle(-95,-35,230,70), null);


(lib.квадрат = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#47829E").s().p("A/FFeQigAAAAigIAAl7QAAigCgAAMA+LAAAQCgAAAACgIAAF7QAACgigAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.квадрат, new cjs.Rectangle(-215,-35,430,70), null);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#47829E").s().p("AvdKKQigAAAAigIAAvTQAAigCgAAIe7AAQCgAAAACgIAAPTQAACgigAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(-115,-65,230,130), null);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AhMXBQghggAAguQAAguAhggQAMgNAPgHMAAAgrAQAAgUAPgPQAOgOAUAAQAVAAAOAOQAOAPABAUIAAABIAAABMAAAAq+QAPAHANANQAgAgAAAuQAAAuggAgQghAggtAAQgsAAggggg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(-11,-150.5,22,301), null);


(lib.bad_play = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{stop:0,play:9});

	// timeline functions:
	this.frame_4 = function() {
		/* stop();*/
	}
	this.frame_34 = function() {
		/* stop();
		parent.play();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(30).call(this.frame_34).wait(17));

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_24 = new cjs.Graphics().p("AqVWGMBCShCRIWGWGMhCTBCRg");
	var mask_graphics_25 = new cjs.Graphics().p("AtSWGMBCShCRIWGWGMhCTBCRg");
	var mask_graphics_26 = new cjs.Graphics().p("AwPWGMBCShCRIWGWGMhCTBCRg");
	var mask_graphics_27 = new cjs.Graphics().p("AzMWGMBCShCRIWGWGMhCTBCRg");
	var mask_graphics_28 = new cjs.Graphics().p("A2JWGMBCShCRIWGWGMhCSBCRg");
	var mask_graphics_29 = new cjs.Graphics().p("A5GWGMBCShCRIWGWGMhCSBCRg");
	var mask_graphics_30 = new cjs.Graphics().p("A8DWGMBCShCRIWGWGMhCSBCRg");
	var mask_graphics_31 = new cjs.Graphics().p("A/AWGMBCShCRIWGWGMhCSBCRg");
	var mask_graphics_32 = new cjs.Graphics().p("Egh9AWGMBCShCRIWGWGMhCSBCRg");
	var mask_graphics_33 = new cjs.Graphics().p("Egk6AWGMBCShCRIWGWGMhCSBCRg");
	var mask_graphics_34 = new cjs.Graphics().p("Egn3AWGMBCShCRIWGWGMhCSBCRg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(24).to({graphics:mask_graphics_24,x:499.5,y:-191.1}).wait(1).to({graphics:mask_graphics_25,x:480.6,y:-153.3}).wait(1).to({graphics:mask_graphics_26,x:461.7,y:-115.5}).wait(1).to({graphics:mask_graphics_27,x:442.8,y:-77.7}).wait(1).to({graphics:mask_graphics_28,x:423.9,y:-39.9}).wait(1).to({graphics:mask_graphics_29,x:405,y:-2.1}).wait(1).to({graphics:mask_graphics_30,x:386.1,y:35.7}).wait(1).to({graphics:mask_graphics_31,x:367.2,y:73.5}).wait(1).to({graphics:mask_graphics_32,x:348.3,y:111.3}).wait(1).to({graphics:mask_graphics_33,x:329.4,y:149.1}).wait(1).to({graphics:mask_graphics_34,x:310.5,y:186.9}).wait(17));

	// Слой 8
	this.instance = new lib.палка02();
	this.instance.parent = this;
	this.instance.setTransform(315,210);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24).to({_off:false},0).wait(27));

	// Слой 6 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_14 = new cjs.Graphics().p("EgsLgWFIWG2GMBCRBCRI2GWGg");
	var mask_1_graphics_15 = new cjs.Graphics().p("EgsLgWFIWG2GMBCRBCRI2GWGg");
	var mask_1_graphics_16 = new cjs.Graphics().p("EgsLgWFIWG2GMBCRBCRI2GWGg");
	var mask_1_graphics_17 = new cjs.Graphics().p("EgsLgWFIWG2GMBCRBCRI2GWGg");
	var mask_1_graphics_18 = new cjs.Graphics().p("EgsLgWFIWG2GMBCRBCRI2GWGg");
	var mask_1_graphics_19 = new cjs.Graphics().p("EgsLgWFIWG2GMBCRBCRI2GWGg");
	var mask_1_graphics_20 = new cjs.Graphics().p("EgsLgWFIWG2GMBCRBCRI2GWGg");
	var mask_1_graphics_21 = new cjs.Graphics().p("EgsLgWFIWG2GMBCRBCRI2GWGg");
	var mask_1_graphics_22 = new cjs.Graphics().p("EgsLgWFIWG2GMBCRBCRI2GWGg");
	var mask_1_graphics_23 = new cjs.Graphics().p("EgsLgWFIWG2GMBCRBCRI2GWGg");
	var mask_1_graphics_24 = new cjs.Graphics().p("EgregWFIWG2GMBCSBCRI2HWGg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(14).to({graphics:mask_1_graphics_14,x:-86.1,y:-191.1}).wait(1).to({graphics:mask_1_graphics_15,x:-48.3,y:-153.3}).wait(1).to({graphics:mask_1_graphics_16,x:-10.5,y:-115.5}).wait(1).to({graphics:mask_1_graphics_17,x:27.3,y:-77.7}).wait(1).to({graphics:mask_1_graphics_18,x:65.1,y:-39.9}).wait(1).to({graphics:mask_1_graphics_19,x:102.9,y:-2.1}).wait(1).to({graphics:mask_1_graphics_20,x:140.7,y:35.7}).wait(1).to({graphics:mask_1_graphics_21,x:178.5,y:73.5}).wait(1).to({graphics:mask_1_graphics_22,x:216.3,y:111.3}).wait(1).to({graphics:mask_1_graphics_23,x:254.1,y:149.1}).wait(1).to({graphics:mask_1_graphics_24,x:287.4,y:186.9}).wait(27));

	// Слой 4
	this.instance_1 = new lib.палка01();
	this.instance_1.parent = this;
	this.instance_1.setTransform(315,210);
	this.instance_1.shadow = new cjs.Shadow("#333333",4,4,5);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({_off:false},0).wait(37));

	// Слой 7 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_24 = new cjs.Graphics().p("AqVWGMBCShCRIWGWGMhCTBCRg");
	var mask_2_graphics_25 = new cjs.Graphics().p("AtSWGMBCShCRIWGWGMhCTBCRg");
	var mask_2_graphics_26 = new cjs.Graphics().p("AwPWGMBCShCRIWGWGMhCTBCRg");
	var mask_2_graphics_27 = new cjs.Graphics().p("AzMWGMBCShCRIWGWGMhCTBCRg");
	var mask_2_graphics_28 = new cjs.Graphics().p("A2JWGMBCShCRIWGWGMhCSBCRg");
	var mask_2_graphics_29 = new cjs.Graphics().p("A5GWGMBCShCRIWGWGMhCSBCRg");
	var mask_2_graphics_30 = new cjs.Graphics().p("A8DWGMBCShCRIWGWGMhCSBCRg");
	var mask_2_graphics_31 = new cjs.Graphics().p("A/AWGMBCShCRIWGWGMhCSBCRg");
	var mask_2_graphics_32 = new cjs.Graphics().p("Egh9AWGMBCShCRIWGWGMhCSBCRg");
	var mask_2_graphics_33 = new cjs.Graphics().p("Egk6AWGMBCShCRIWGWGMhCSBCRg");
	var mask_2_graphics_34 = new cjs.Graphics().p("Egn3AWGMBCShCRIWGWGMhCSBCRg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(24).to({graphics:mask_2_graphics_24,x:499.5,y:-191.1}).wait(1).to({graphics:mask_2_graphics_25,x:480.6,y:-153.3}).wait(1).to({graphics:mask_2_graphics_26,x:461.7,y:-115.5}).wait(1).to({graphics:mask_2_graphics_27,x:442.8,y:-77.7}).wait(1).to({graphics:mask_2_graphics_28,x:423.9,y:-39.9}).wait(1).to({graphics:mask_2_graphics_29,x:405,y:-2.1}).wait(1).to({graphics:mask_2_graphics_30,x:386.1,y:35.7}).wait(1).to({graphics:mask_2_graphics_31,x:367.2,y:73.5}).wait(1).to({graphics:mask_2_graphics_32,x:348.3,y:111.3}).wait(1).to({graphics:mask_2_graphics_33,x:329.4,y:149.1}).wait(1).to({graphics:mask_2_graphics_34,x:310.5,y:186.9}).wait(17));

	// Слой 5
	this.instance_2 = new lib.палка02();
	this.instance_2.parent = this;
	this.instance_2.setTransform(315,210);
	this.instance_2.shadow = new cjs.Shadow("#333333",4,4,5);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(24).to({_off:false},0).wait(27));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"stop":0,"play":9});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}
	this.frame_29 = function() {
		/* stop();
		parent.play();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(29).call(this.frame_29).wait(6));

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgZAuQgMgNABghQgBgTAFgNQAEgMAIgHQAIgHAMAAQAJABAHAEQAHADAFAHQAEAHADAKQACAKABAQQgBAUgEANQgEAMgIAHQgJAGgMAAQgPAAgKgMgAgPglQgHAKAAAbQAAAcAHAJQAHAKAIAAQAJAAAIgKQAGgJAAgcQAAgcgGgIQgIgKgJAAQgJAAgGAJg");
	this.shape.setTransform(24.1,-129.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgUA4QAAgNAGgTQAEgTAKgRQAIgSALgMIg3AAIAAgNIBJAAIAAALQgLALgLATQgKATgFAUQgFAOAAARg");
	this.shape_1.setTransform(15.2,-129.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgZAuQgMgOABggQgBgUAFgLQAEgNAIgHQAIgGAMAAQAJAAAHADQAHAEAFAHQAEAHADAKQACAKABAQQgBAUgEANQgEAMgIAGQgJAIgMAAQgPgBgKgMgAgPgmQgHALAAAbQAAAcAHAJQAHAKAIAAQAJAAAIgKQAGgJAAgcQAAgbgGgKQgIgJgJAAQgJAAgGAIg");
	this.shape_2.setTransform(24.1,-99.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgaAtQgLgNAAgdQAAggANgQQAKgNARABQAOAAAJAHQAIAIACANIgOABQgCgIgDgEQgGgGgIAAQgGAAgFAEQgHAEgEAKQgEAJAAARQAFgIAIgDQAHgEAHAAQAOAAAKAKQAKAKAAAQQAAALgFAKQgEAIgJAFQgIAGgKAAQgRgBgLgNgAgOABQgHAIAAAKQAAAHAEAHQADAHAFADQAGAEAFAAQAJAAAGgHQAHgIAAgMQAAgLgHgIQgGgFgKAAQgIAAgHAFg");
	this.shape_3.setTransform(15.1,-99.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgZAvQgMgOABghQgBgTAFgNQAEgMAIgHQAIgGAMgBQAJAAAHAFQAHADAFAHQAEAHADAKQACAKABAQQgBAUgEAMQgEANgIAGQgJAIgMgBQgPABgKgMgAgPgmQgHALAAAbQAAAcAHAKQAHAJAIAAQAJAAAIgJQAGgKAAgcQAAgbgGgKQgIgJgJAAQgJAAgGAIg");
	this.shape_4.setTransform(24.1,-69.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgaAwQgJgIgCgOIAPgCQABALAHAFQAFAGAJAAQAJAAAHgIQAHgHAAgNQAAgMgHgGQgGgHgLAAQgGAAgFADQgGADgDAEIgOgBIAMg7IA3AAIAAAOIgsAAIgGAfQAKgIALAAQAOAAALALQAKAJAAARQAAAPgJAMQgLAOgSgBQgPABgLgKg");
	this.shape_5.setTransform(15.2,-69.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgZAvQgMgOABghQgBgTAFgMQAEgNAIgHQAIgGAMgBQAJAAAHAFQAHADAFAHQAEAHADAKQACAKABAQQgBAUgEAMQgEANgIAGQgJAIgMgBQgPABgKgMgAgPgmQgHALAAAbQAAAcAHAKQAHAJAIAAQAJAAAIgJQAGgKAAgcQAAgbgGgKQgIgJgJAAQgJAAgGAIg");
	this.shape_6.setTransform(24.1,20.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AglA6QAAgFACgFQADgIAGgIQAGgHAMgKQASgPAHgIQAGgJAAgIQAAgJgGgFQgGgGgJAAQgKAAgGAGQgGAHAAAKIgOgBQABgQAKgJQAKgJAPAAQAQAAAKAJQAKAKAAAOQAAAGgDAHQgDAHgGAGIgWAUIgPAPQgEADgCAEIA3AAIAAAOg");
	this.shape_7.setTransform(15,20.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgZAvQgMgOABghQgBgTAFgNQAEgMAIgHQAIgGAMgBQAJAAAHAFQAHADAFAHQAEAHADAKQACAKABAQQgBAUgEAMQgEANgIAGQgJAIgMgBQgPABgKgMgAgPgmQgHALAAAbQAAAcAHAKQAHAJAIAAQAJAAAIgJQAGgKAAgcQAAgbgGgKQgIgJgJAAQgJAAgGAIg");
	this.shape_8.setTransform(24.1,110.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAHA6IAAhZIgMAJIgPAIIAAgOQAMgFAIgIQAIgIAEgIIAJAAIAABzg");
	this.shape_9.setTransform(14.6,110.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgZAuQgMgNABghQgBgTAFgNQAEgMAIgHQAIgHAMAAQAJABAHAEQAHADAFAHQAEAHADAKQACAKABAQQgBAUgEANQgEAMgIAHQgJAGgMAAQgPAAgKgMgAgPglQgHAKAAAbQAAAcAHAJQAHAKAIAAQAJAAAIgKQAGgJAAgcQAAgcgGgIQgIgKgJAAQgJAAgGAJg");
	this.shape_10.setTransform(24.1,-39.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAKA5IAAgbIgxAAIAAgNIA0hJIALAAIAABJIAQAAIAAANIgQAAIAAAbgAgZARIAjAAIAAgzg");
	this.shape_11.setTransform(14.9,-39.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgZAuQgMgOABggQgBgUAFgLQAEgNAIgHQAIgGAMAAQAJAAAHADQAHAEAFAHQAEAHADAKQACAKABAQQgBAUgEANQgEAMgIAGQgJAIgMAAQgPgBgKgMgAgPgmQgHALAAAbQAAAcAHAJQAHAKAIAAQAJAAAIgKQAGgJAAgcQAAgbgGgKQgIgJgJAAQgJAAgGAIg");
	this.shape_12.setTransform(24.1,-9.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgZAyQgKgKgBgOIAOgCQACANAGAFQAGAFAIAAQAJAAAHgHQAHgHAAgKQAAgJgGgHQgHgHgJAAQgDAAgGADIABgMIACAAQAIAAAHgEQAIgGAAgJQAAgIgGgFQgFgFgHAAQgIAAgGAFQgFAGgCAJIgOgCQADgOAJgHQAJgJAOABQAIAAAIADQAIAFAEAGQAEAIAAAHQAAAIgEAGQgEAGgHAEQAJACAGAGQAFAIAAALQABAOgLALQgLALgQAAQgPgBgKgIg");
	this.shape_13.setTransform(15.2,-9.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgZAuQgMgNABghQgBgTAFgNQAEgMAIgHQAIgHAMAAQAJABAHAEQAHADAFAHQAEAHADAKQACAKABAQQgBAUgEANQgEAMgIAHQgJAGgMAAQgPAAgKgMgAgPglQgHAKAAAbQAAAcAHAJQAHAKAIAAQAJAAAIgKQAGgJAAgcQAAgcgGgIQgIgKgJAAQgJAAgGAJg");
	this.shape_14.setTransform(24.1,50.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAHA5IAAhYIgMAJIgPAIIAAgNQAMgHAIgHQAIgIAEgIIAJAAIAAByg");
	this.shape_15.setTransform(14.6,50.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgZAuQgMgOABggQgBgTAFgMQAEgNAIgHQAIgGAMAAQAJAAAHADQAHAEAFAHQAEAHADAKQACAKABAQQgBAUgEANQgEAMgIAHQgJAHgMAAQgPgBgKgMgAgPglQgHAKAAAbQAAAcAHAJQAHAKAIAAQAJAAAIgKQAGgJAAgcQAAgbgGgKQgIgJgJAAQgJAAgGAJg");
	this.shape_16.setTransform(24.1,80.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgiAsQgPgQAAgbQAAgcAPgPQAPgQAXAAQAUAAAOAMQAHAIAFANIgYAGQgCgJgGgFQgHgFgJAAQgLAAgIAJQgIAJAAAUQAAAVAHAJQAJAJALAAQAKAAAGgFQAGgGADgNIAXAHQgFATgMAJQgMAJgTAAQgVAAgPgPg");
	this.shape_17.setTransform(22.7,139.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgRAeQgGgJAAgVQAAgUAHgKQAGgHAKAAQALAAAGAHQAHAJAAAVQAAAVgHAJQgGAIgLAAQgKAAgHgIgAgDgXQgDABgBAEQgBAFAAANIABASQABAEADACQAAABABAAQAAAAABABQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABgBAAAAQABAAABgBIADgFQACgGgBgNQABgNgCgEQgCgFgBgBQgBgBgBAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAABQgBAAAAABg");
	this.shape_18.setTransform(14,136.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(35));

	// Слой 6
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(1,1,1).p("AAA3gQAVAAAPAOQAOAPAAAUQAAAAAAABQAAABAAAAMAAAAq+QAPAHANANQAgAgAAAuQAAAuggAgQggAgguAAQgtAAggggQggggAAguQAAguAgggQANgNAPgHMAAAgrAQABgUANgPQAPgOAUAAg");
	this.shape_19.setTransform(-10,0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_19).wait(35));

	// Слой 10 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("Aj5Z0MAAAgnDIHzAAMAAAAnDg");
	var mask_graphics_14 = new cjs.Graphics().p("Aj5Z0MAAAgnDIHzAAMAAAAnDg");
	var mask_graphics_15 = new cjs.Graphics().p("Aj5ZAMAAAgnDIHzAAMAAAAnDg");
	var mask_graphics_16 = new cjs.Graphics().p("Aj5YMMAAAgnDIHzAAMAAAAnDg");
	var mask_graphics_17 = new cjs.Graphics().p("Aj5XYMAAAgnDIHzAAMAAAAnDg");
	var mask_graphics_18 = new cjs.Graphics().p("Aj5WkMAAAgnDIHzAAMAAAAnDg");
	var mask_graphics_19 = new cjs.Graphics().p("Aj5VwMAAAgnDIHzAAMAAAAnDg");
	var mask_graphics_20 = new cjs.Graphics().p("Aj5U8MAAAgnDIHzAAMAAAAnDg");
	var mask_graphics_21 = new cjs.Graphics().p("Aj5UIMAAAgnDIHzAAMAAAAnDg");
	var mask_graphics_22 = new cjs.Graphics().p("Aj5TiMAAAgnDIHzAAMAAAAnDg");
	var mask_graphics_23 = new cjs.Graphics().p("Aj5TiMAAAgnDIHzAAMAAAAnDg");
	var mask_graphics_24 = new cjs.Graphics().p("Aj5TiMAAAgnDIHzAAMAAAAnDg");
	var mask_graphics_25 = new cjs.Graphics().p("Aj5TiMAAAgnDIHzAAMAAAAnDg");
	var mask_graphics_26 = new cjs.Graphics().p("Aj5TiMAAAgnDIHzAAMAAAAnDg");
	var mask_graphics_27 = new cjs.Graphics().p("Aj5TiMAAAgnDIHzAAMAAAAnDg");
	var mask_graphics_28 = new cjs.Graphics().p("Aj5TiMAAAgnDIHzAAMAAAAnDg");
	var mask_graphics_29 = new cjs.Graphics().p("Aj5TiMAAAgnDIHzAAMAAAAnDg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-10,y:165.2}).wait(14).to({graphics:mask_graphics_14,x:-10,y:165.2}).wait(1).to({graphics:mask_graphics_15,x:-10,y:160}).wait(1).to({graphics:mask_graphics_16,x:-10,y:154.8}).wait(1).to({graphics:mask_graphics_17,x:-10,y:149.6}).wait(1).to({graphics:mask_graphics_18,x:-10,y:144.4}).wait(1).to({graphics:mask_graphics_19,x:-10,y:139.2}).wait(1).to({graphics:mask_graphics_20,x:-10,y:134}).wait(1).to({graphics:mask_graphics_21,x:-10,y:128.8}).wait(1).to({graphics:mask_graphics_22,x:-10,y:122.3}).wait(1).to({graphics:mask_graphics_23,x:-10,y:111.9}).wait(1).to({graphics:mask_graphics_24,x:-10,y:101.5}).wait(1).to({graphics:mask_graphics_25,x:-10,y:91.1}).wait(1).to({graphics:mask_graphics_26,x:-10,y:80.7}).wait(1).to({graphics:mask_graphics_27,x:-10,y:70.3}).wait(1).to({graphics:mask_graphics_28,x:-10,y:59.9}).wait(1).to({graphics:mask_graphics_29,x:-10,y:49.5}).wait(6));

	// Слой 5
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF0000").s().p("AhMRMQghggAAguQAAgtAhghQAMgNAPgHMAAAggHIBjAAMAAAAgHQAPAHANANQAgAhAAAtQAAAuggAgQghAggtAAQgsAAggggg");
	this.shape_20.setTransform(-10,37.7);

	var maskedShapeInstanceList = [this.shape_20];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_20).wait(35));

	// Слой 4
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(1,1,1).p("AhjB4IDHAAAhjP8IDHAAAhjPAIDHAAAhjQ4IDHAAAhjMMIDHAAAhjNIIDHAAAhjKUIDHAAAhjLQIDHAAAhjR0IDHAAAiVEsIErAAAiVOEIErAAAiVJYIErAAAiVSwIErAAAhjHgIDHAAAhjIcIDHAAAhjFoIDHAAAhjGkIDHAAAhjDwIDHAAAhjC0IDHAAAiVyvIErAAAiVuDIErAAAiVpXIErAAAiVAAIErAAAiVkrIErAAAhjw3IDHAAAhjxzIDHAAAhju/IDHAAAhjv7IDHAAAhjrPIDHAAAhjqTIDHAAAhjsLIDHAAAhjmjIDHAAAhjobIDHAAAhjnfIDHAAAhjtHIDHAAAhjizIDHAAAhjg7IDHAAAhjh3IDHAAAhjjvIDHAAAhjlnIDHAAAhjA8IDHAA");
	this.shape_21.setTransform(-10,-9.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_21).wait(35));

	// Слой 3
	this.instance = new lib.Символ2();
	this.instance.parent = this;
	this.instance.setTransform(-10,0.5);
	this.instance.shadow = new cjs.Shadow("#333333",4,4,5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(35));

	// Слой 7
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#333333").ss(1,1,1).p("ADI4/ImPAAQiWAAAACWMAAAAtTQAACWCWAAIGPAAQCWAAAAiWMAAAgtTQAAiWiWAAg");

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["#82AED2","#D2E2EF","#D2E2EF","#82AED2"],[0,0.263,0.533,0.992],-35,0,35,0).s().p("AjHZAQiWAAAAiWMAAAgtTQAAiWCWAAIGPAAQCWAAAACWMAAAAtTQAACWiWAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22}]}).wait(35));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36,-161,72,324);


(lib.clip = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{common:4,davlenie:14,direct:24,temp:39});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}
	this.frame_10 = function() {
		/* stop();
		parent.stepEnd();*/
	}
	this.frame_22 = function() {
		/* stop();
		parent.stepEnd();*/
	}
	this.frame_33 = function() {
		/* stop();
		parent.stepEnd();*/
	}
	this.frame_39 = function() {
		/* term.gotoAndPlay("stop");
		bad.gotoAndPlay("stop");*/
	}
	this.frame_44 = function() {
		/* stop();
		term.gotoAndPlay("play");*/
	}
	this.frame_49 = function() {
		/* bad.gotoAndPlay("play");*/
	}
	this.frame_54 = function() {
		/* stop();
		parent.stepEnd();*/
	}
	this.frame_76 = function() {
		/* stop();
		parent.stepEnd();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10).call(this.frame_10).wait(12).call(this.frame_22).wait(11).call(this.frame_33).wait(6).call(this.frame_39).wait(5).call(this.frame_44).wait(5).call(this.frame_49).wait(5).call(this.frame_54).wait(22).call(this.frame_76).wait(29));

	// Слой 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhFBXQgegfAAg2QAAg4AegfQAdghAwAAQAqAAAaAZQAQAPAHAcIgtALQgFgTgMgJQgNgLgTAAQgYAAgQATQgQARAAApQAAArAQASQAPATAYAAQATAAANgMQANgMAGgYIAtANQgKAmgYATQgYASglAAQgtgBgdgfg");
	this.shape.setTransform(203.3,681.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgiAjQgPgOAAgVQAAgUAPgOQAOgPAUAAQAVAAAOAPQAPAPAAATQAAAVgPAOQgOAPgVAAQgUAAgOgPgAgQgQQgHAHAAAJQAAAKAHAHQAHAHAJAAQAKAAAHgHQAHgHAAgKQAAgJgHgHQgHgHgKAAQgJAAgHAHg");
	this.shape_1.setTransform(185.3,674.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhMBzQACgXANgUQANgWAlghQAcgbAHgKQAJgOAAgNQAAgPgIgIQgIgIgOAAQgMAAgJAIQgIAJgBATIgsgEQAEglAVgPQAUgQAeAAQAiAAATASQAUASAAAcQAAAPgGAOQgFAOgMAPQgIAJgVAUQgVATgEAGIgJAMIBWAAIAAApg");
	this.shape_2.setTransform(169.7,681.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag0BiQgUgRgEgdIAsgEQACAPAJAIQAJAJAMAAQANAAAJgLQAKgMAAgWQAAgVgJgKQgKgLgOAAQgTAAgPAQIgkgEIAXh3IBzAAIAAApIhSAAIgHAnQAPgIAOABQAdAAAVAVQAUAUAAAiQAAAdgQAWQgXAegmAAQggAAgUgRg");
	this.shape_3.setTransform(152.5,682);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag8A6QgRgWAAgjQAAgoAWgXQAWgYAhAAQAkAAAVAZQAVAYgBAxIhtAAQABAUAKALQAKALAOAAQALAAAHgGQAHgGADgMIAsAHQgIAYgSANQgTANgbAAQgqAAgVgdgAgWgqQgJALAAASIBBAAQgBgTgJgKQgJgKgOAAQgNAAgKAKg");
	this.shape_4.setTransform(125.5,684.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhvBTIAAilIAoAAIAACCIAzAAIAAiCIAoAAIAACCIAzAAIAAiCIApAAIAAClg");
	this.shape_5.setTransform(103.4,684.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ABGBTIAAilIAsAAIAAClgAhxBTIAAilIArAAIAABFIAtAAQAZAAANADQANAEAKALQAKANAAAQQgBAZgQAMQgRAMggAAgAhGA3IApAAQAQAAAHgFQAHgFAAgLQAAgMgJgFQgJgEgYAAIgdAAg");
	this.shape_6.setTransform(76.5,684.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhPBTIAAilIBfAAQAdAAAPALQAPAKAAAWQAAAOgIALQgIAKgNADQASAEAIALQAIAMAAAOQAAATgOAMQgOAMgcAAgAgjA3IAjAAQARAAAJgFQAJgEAAgMQAAgMgKgFQgKgEgcAAIgWAAgAgjgNIAcAAQAUAAAJgFQAJgGAAgLQAAgKgIgEQgJgFgVAAIgcAAg");
	this.shape_7.setTransform(53.4,684.8);

	this.instance = new lib.квадрат01();
	this.instance.parent = this;
	this.instance.setTransform(109,682);
	this.instance.shadow = new cjs.Shadow("#333333",4,4,5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},39).to({state:[]},40).wait(26));

	// Слой 5
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAoBTIAAhFIgFAAQgOAAgGAEQgHADgIAMIgCADIgcAvIg0AAIAggwQANgVALgDQgTgBgLgMQgLgMAAgVQAAgQAIgLQAHgMANgDQAMgFAZAAIBVAAIAAClgAgPgwQgHAEAAAMQAAALAIAFQAIAFARAAIAdAAIAAgrIggAAQgQAAgHAGg");
	this.shape_8.setTransform(406.6,684.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAiBTIAAhpIhDBpIgqAAIAAilIAqAAIAABoIBChoIArAAIAAClg");
	this.shape_9.setTransform(388.6,684.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAfBTIAAhFIg+AAIAABFIgrAAIAAilIArAAIAAA9IA+AAIAAg9IAsAAIAAClg");
	this.shape_10.setTransform(369.1,684.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag8A6QgRgWAAgjQAAgoAWgXQAWgYAhAAQAkAAAVAZQAVAYgBAxIhtAAQABAUAKALQAKALAOAAQALAAAHgGQAHgGADgMIAsAHQgIAYgSANQgTANgbAAQgqAAgVgdgAgWgqQgJALAAASIBBAAQgBgTgJgKQgJgKgOAAQgNAAgKAKg");
	this.shape_11.setTransform(350.4,684.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhYBRIAAggIAIABIAKAAQAJAAACgGQACgGAAgbIAAheICSAAIAACkIgsAAIAAiBIg7AAIAABKQABAcgIALQgGAMgIADQgIAEgRAAQgLAAgRgDg");
	this.shape_12.setTransform(331,685);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhPBTIAAilIBfAAQAdAAAPALQAPAKAAAWQAAAOgIALQgIAKgNADQASAEAIALQAIAMAAAOQAAATgOAMQgOAMgcAAgAgjA3IAjAAQARAAAJgFQAJgEAAgMQAAgMgKgFQgKgEgcAAIgWAAgAgjgNIAcAAQAUAAAJgFQAJgGAAgLQAAgKgIgEQgJgFgVAAIgcAAg");
	this.shape_13.setTransform(312.8,684.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ag+BJQgPgOAAgWQAAgOAHgLQAHgLAMgEQAMgGAXgFQAdgGAMgFIAAgEQAAgNgGgFQgGgFgRAAQgLAAgHAEQgGAFgEALIgogHQAGgYARgLQAQgMAhAAQAcAAAOAHQAPAHAGALQAFAKAAAdIAAAyQAAAWACALQACAKAGAMIgrAAIgFgNIgBgFQgMALgMAFQgMAGgPAAQgZAAgPgOgAAAAKQgTAEgFADQgJAHAAAJQAAAJAHAHQAHAHAKAAQALAAALgIQAIgGADgJQABgFAAgQIAAgJIgZAHg");
	this.shape_14.setTransform(293.5,684.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AhQB0IAAjkIApAAIAAAZQAIgNANgIQAOgHAQAAQAdAAAUAWQAUAXAAAoQAAApgUAXQgVAXgcAAQgNAAgLgFQgLgGgNgNIAABTgAgahEQgKAMgBAYQAAAcAMANQALANAPAAQAPAAAKgMQAKgLAAgcQABgagLgNQgLgNgPAAQgPAAgLANg");
	this.shape_15.setTransform(275.3,687.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAdBTIAAiCIg6AAIAACCIgrAAIAAilICRAAIAAClg");
	this.shape_16.setTransform(255.2,684.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("Ag+BJQgPgOAAgWQAAgOAHgLQAHgLAMgEQAMgGAXgFQAdgGAMgFIAAgEQAAgNgGgFQgGgFgRAAQgLAAgHAEQgGAFgEALIgogHQAGgYARgLQAQgMAhAAQAcAAAOAHQAPAHAGALQAFAKAAAdIAAAyQAAAWACALQACAKAGAMIgrAAIgFgNIgBgFQgMALgMAFQgMAGgPAAQgZAAgPgOgAAAAKQgTAEgFADQgJAHAAAJQAAAJAHAHQAHAHAKAAQALAAALgIQAIgGADgJQABgFAAgQIAAgJIgZAHg");
	this.shape_17.setTransform(236.8,684.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAfBTIAAhFIg+AAIAABFIgrAAIAAilIArAAIAAA9IA+AAIAAg9IAsAAIAAClg");
	this.shape_18.setTransform(218.2,684.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AhPBTIAAilIAsAAIAABFIArAAQAaAAANADQAPAEAJAMQAJAMAAAQQAAAZgRAMQgQAMghAAgAgjA3IAoAAQATAAAFgGQAGgHAAgIQAAgMgJgFQgKgEgXAAIgcAAg");
	this.shape_19.setTransform(190.4,684.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AhYBRIAAggIAIABIAKAAQAJAAACgGQACgGAAgbIAAheICSAAIAACkIgsAAIAAiBIg7AAIAABKQABAcgIALQgGAMgIADQgIAEgRAAQgLAAgRgDg");
	this.shape_20.setTransform(169,685);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("Ag8A6QgRgWAAgjQAAgoAWgXQAWgYAhAAQAkAAAVAZQAVAYgBAxIhtAAQABAUAKALQAKALAOAAQALAAAHgGQAHgGADgMIAsAHQgIAYgSANQgTANgbAAQgqAAgVgdgAgWgqQgJALAAASIBBAAQgBgTgJgKQgJgKgOAAQgNAAgKAKg");
	this.shape_21.setTransform(150.6,684.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgVBTIAAiCIg1AAIAAgjICVAAIAAAjIg1AAIAACCg");
	this.shape_22.setTransform(134.1,684.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("Ag+BJQgPgOAAgWQAAgOAHgLQAHgLAMgEQAMgGAXgFQAdgGAMgFIAAgEQAAgNgGgFQgGgFgRAAQgLAAgHAEQgGAFgEALIgogHQAGgYARgLQAQgMAhAAQAcAAAOAHQAPAHAGALQAFAKAAAdIAAAyQAAAWACALQACAKAGAMIgrAAIgFgNIgBgFQgMALgMAFQgMAGgPAAQgZAAgPgOgAAAAKQgTAEgFADQgJAHAAAJQAAAJAHAHQAHAHAKAAQALAAALgIQAIgGADgJQABgFAAgQIAAgJIgZAHg");
	this.shape_23.setTransform(117.3,684.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AhGAoIAogHQAJAYAWAAQAMAAAIgGQAHgHAAgJQAAgJgIgGQgIgFgMAAIgHAAIAAgcQALAAAFgBQAFgCAFgGQAEgFAAgIQAAgHgFgHQgGgHgLAAQgIAAgHAEQgHAEgGAOIglgIQAGgWASgLQATgLAWAAQAeAAARAOQAQAOAAAUQAAANgHAJQgHAIgPAIQASAEAJAKQAJAKAAAPQAAAUgSAOQgSAOgiAAQg6AAgNgvg");
	this.shape_24.setTransform(100.4,684.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("Ag+BJQgPgOAAgWQAAgOAHgLQAHgLAMgEQAMgGAXgFQAdgGAMgFIAAgEQAAgNgGgFQgGgFgRAAQgLAAgHAEQgGAFgEALIgogHQAGgYARgLQAQgMAhAAQAcAAAOAHQAPAHAGALQAFAKAAAdIAAAyQAAAWACALQACAKAGAMIgrAAIgFgNIgBgFQgMALgMAFQgMAGgPAAQgZAAgPgOgAAAAKQgTAEgFADQgJAHAAAJQAAAJAHAHQAHAHAKAAQALAAALgIQAIgGADgJQABgFAAgQIAAgJIgZAHg");
	this.shape_25.setTransform(83.6,684.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAWBTIgVgvQgHgPgEgEQgGgEgJgBIAABHIgsAAIAAikIAsAAIAABDQALgBAFgGQAEgFAGgSQAIgZAKgHQAKgGAQAAIASABIAAAdQgRAAgGACQgFAEgFARQgIAXgOAGQAVAEAOAfIACADIAZAtg");
	this.shape_26.setTransform(67.8,684.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AhGByIgDgiQAKACAIAAQAPAAAHgJQAIgJAEgOIg/imIAvAAIAmB1IAnh1IAuAAIg8CfIgKAdQgFAOgFAIQgGAIgGAFQgHAEgJADQgLADgMAAQgMAAgNgDg");
	this.shape_27.setTransform(49.7,688.2);

	this.instance_1 = new lib.квадрат();
	this.instance_1.parent = this;
	this.instance_1.setTransform(229,682);
	this.instance_1.shadow = new cjs.Shadow("#333333",4,4,5);

	this.bad = new lib.bad_play();
	this.bad.name = "bad";
	this.bad.parent = this;
	this.bad.setTransform(-30,140);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},24).to({state:[{t:this.bad}]},15).to({state:[]},40).wait(26));

	// Слой 2
	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("Ag+BJQgPgOAAgWQAAgOAHgLQAHgLAMgEQAMgGAXgFQAdgGAMgFIAAgEQAAgNgGgFQgGgFgRAAQgLAAgHAEQgGAFgEALIgogHQAGgYARgLQAQgMAhAAQAcAAAOAHQAPAHAGALQAFAKAAAdIAAAyQAAAWACALQACAKAGAMIgrAAIgFgNIgBgFQgMALgMAFQgMAGgPAAQgZAAgPgOgAAAAKQgTAEgFADQgJAHAAAJQAAAJAHAHQAHAHAKAAQALAAALgIQAIgGADgJQABgFAAgQIAAgJIgZAHg");
	this.shape_28.setTransform(547.5,570.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAtByIAAi9IhZAAIAAC9IguAAIAAjjIC1AAIAADjg");
	this.shape_29.setTransform(527.1,567);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("ABEByIAAizIguCzIgrAAIguizIAACzIgrAAIAAjjIBGAAIAoCaIApiaIBGAAIAADjg");
	this.shape_30.setTransform(502.3,567);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("Ag1BaQgXgbAAg+QAAg9AYgcQAXgcAkAAQAaAAARAPQARAOAGAcIgrAEQgBgNgIgFQgGgHgLAAQgMAAgJANQgKAMgDAnQAQgSAYgBQAbAAAUAVQAUAUgBAiQABAigVAWQgUAVghAAQghAAgXgbgAgRAHQgJAJAAAUQAAAVAKAMQAJALAMAAQANAAAHgJQAIgKAAgVQABgXgJgKQgJgJgNAAQgLgBgJAKg");
	this.shape_31.setTransform(471.3,567.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgXAeQANgFAGgHQAFgIAAgNIgUAAIAAgsIArAAIAAAgQAAASgEALQgDALgJAJQgIAIgOAGg");
	this.shape_32.setTransform(457.6,578.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAGBzIAAilQgXAXggALIAAgoQARgGAUgQQATgPAIgVIAjAAIAADlg");
	this.shape_33.setTransform(443.1,567);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAxBpIAAgsIiEAAIAAilIAsAAIAACBIA+AAIAAiBIAsAAIAACBIARAAIAABQg");
	this.shape_34.setTransform(547.9,534.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("Ag8A6QgRgWAAgjQAAgoAWgXQAWgYAhAAQAkAAAVAZQAVAYgBAxIhtAAQABAUAKALQAKALAOAAQALAAAHgGQAHgGADgMIAsAHQgIAYgSANQgTANgbAAQgqAAgVgdgAgWgqQgJALAAASIBBAAQgBgTgJgKQgJgKgOAAQgNAAgKAKg");
	this.shape_35.setTransform(528.4,532.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AAfBTIAAhFIg+AAIAABFIgrAAIAAilIArAAIAAA9IA+AAIAAg9IAsAAIAAClg");
	this.shape_36.setTransform(509.9,532.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("Ag+BJQgPgOAAgWQAAgOAHgLQAHgLAMgEQAMgGAXgFQAdgGAMgFIAAgEQAAgNgGgFQgGgFgRAAQgLAAgHAEQgGAFgEALIgogHQAGgYARgLQAQgMAhAAQAcAAAOAHQAPAHAGALQAFAKAAAdIAAAyQAAAWACALQACAKAGAMIgrAAIgFgNIgBgFQgMALgMAFQgMAGgPAAQgZAAgPgOgAAAAKQgTAEgFADQgJAHAAAJQAAAJAHAHQAHAHAKAAQALAAALgIQAIgGADgJQABgFAAgQIAAgJIgZAHg");
	this.shape_37.setTransform(491.4,532.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AhYBSIAAghIAHAAIALABQAJAAACgGQACgGAAgaIAAhgICSAAIAACmIgsAAIAAiCIg6AAIAABKQgBAcgGALQgHAMgIAEQgIADgSAAQgKAAgRgCg");
	this.shape_38.setTransform(471.4,532.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgUCSIAAhTQgKAMgLAGQgLAGgMAAQgbAAgSgZQgRgZAAglQAAglAUgZQAUgYAXAAQANABALAFQAKAGAJAMIAAhTIAqAAIAABUQAIgMALgHQALgFAPgBQAaAAARAaQARAaAAAjQAAAkgTAZQgTAZgaAAQgLAAgLgGQgKgGgJgMIAABTgAAegkQgJAQABAWQAAAYAJANQAIAOAMABQANAAAJgQQAJgQAAgVQAAgVgIgQQgJgQgOAAQgMAAgJAQgAhHglQgKAOAAAXQAAAYAJAOQAIAPAOAAQAMAAAJgPQAJgOAAgYQAAgcgKgLQgJgNgLAAQgMAAgJAPg");
	this.shape_39.setTransform(448.9,532.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("Ag+BJQgPgOAAgWQAAgOAHgLQAHgLAMgEQAMgGAXgFQAdgGAMgFIAAgEQAAgNgGgFQgGgFgRAAQgLAAgHAEQgGAFgEALIgogHQAGgYARgLQAQgMAhAAQAcAAAOAHQAPAHAGALQAFAKAAAdIAAAyQAAAWACALQACAKAGAMIgrAAIgFgNIgBgFQgMALgMAFQgMAGgPAAQgZAAgPgOgAAAAKQgTAEgFADQgJAHAAAJQAAAJAHAHQAHAHAKAAQALAAALgIQAIgGADgJQABgFAAgQIAAgJIgZAHg");
	this.shape_40.setTransform(571.9,204.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AAtBzIAAi+IhZAAIAAC+IguAAIAAjlIC1AAIAADlg");
	this.shape_41.setTransform(551.5,201);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("ABEBzIAAi0IguC0IgrAAIgui0IAAC0IgrAAIAAjlIBGAAIAoCbIApibIBGAAIAADlg");
	this.shape_42.setTransform(526.7,201);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("Ag1BaQgWgbgBg9QABg/AXgbQAXgcAlAAQAZAAARAOQASAPAFAcIgrAEQgCgMgHgHQgGgGgLAAQgMAAgJANQgLAMgCAoQARgUAXABQAbAAAUAUQATAUAAAiQABAigVAVQgUAWghAAQghAAgXgbgAgRAGQgJALAAATQAAAVAKAMQAJAMAMgBQANABAIgKQAHgJAAgWQABgWgJgLQgJgKgNAAQgMAAgIAJg");
	this.shape_43.setTransform(495.7,201.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgXAdQANgEAGgHQAFgIAAgMIgUAAIAAgsIArAAIAAAfQAAASgEALQgDALgJAJQgIAJgOAEg");
	this.shape_44.setTransform(482,212.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("Ag1BcQgUgbAAhBQAAhAAWgdQATgXAgAAQAhAAATAYQAWAcAABAQAABBgWAdQgTAXghAAQggAAgVgZgAgNhLQgGAFgEANQgEARAAAoQAAApAEAPQAEAPAGAFQAGAEAHAAQAIAAAGgEQAHgFADgOQAFgRAAgoQAAgogFgPQgEgPgGgFQgGgEgIAAQgHAAgGAEg");
	this.shape_45.setTransform(468.7,201.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgqBMQgVgKgLgUQgKgUAAgcQAAgVAKgVQALgUATgLQAVgLAXAAQAlAAAYAZQAZAYAAAlQAAAlgZAZQgYAZglAAQgWAAgUgLgAgcglQgLANAAAYQAAAYALAOQAMANAQAAQARAAAMgNQAMgOAAgYQAAgYgMgNQgMgNgRAAQgQAAgMANg");
	this.shape_46.setTransform(441.4,204.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AA/BpIAAgsIh9AAIAAAsIgjAAIAAhQIASAAQALgMAHgaQAIgbABhAICFAAIAACBIASAAIAABQgAgkAZIBJAAIABhdIg1AAQgDBEgSAZg");
	this.shape_47.setTransform(421,206.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("Ag+BJQgPgOAAgWQAAgOAHgLQAHgLAMgEQAMgGAXgFQAdgGAMgFIAAgEQAAgNgGgFQgGgFgRAAQgLAAgHAEQgGAFgEALIgogHQAGgYARgLQAQgMAhAAQAcAAAOAHQAPAHAGALQAFAKAAAdIAAAyQAAAWACALQACAKAGAMIgrAAIgFgNIgBgFQgMALgMAFQgMAGgPAAQgZAAgPgOgAAAAKQgTAEgFADQgJAHAAAJQAAAJAHAHQAHAHAKAAQALAAALgIQAIgGADgJQABgFAAgQIAAgJIgZAHg");
	this.shape_48.setTransform(542.3,166.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgvBqQgUgMgIgWQgJgWAAgyQAAg8AWgaQAWgaA2AAIAWAAQAJAAADgGIAeAAQgBAUgJAKQgJAKgkAAIgIAAIgGAAQgUAAgNAFQgNAEgIAOQgJANAAAdQAKgSAPgJQAQgJAUAAQAhAAAWAZQAXAZAAAhQAAAjgYAZQgYAZglAAQgbAAgUgNgAgcgBQgLAMAAAXQAAAWALANQALAOARAAQARAAALgOQALgOAAgVQAAgWgLgNQgMgNgQAAQgQAAgMANg");
	this.shape_49.setTransform(523.6,163.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AhPBTIAAilIAsAAIAABFIArAAQAaAAANADQAPAFAJALQAJAMAAAQQAAAZgQAMQgRAMghAAgAgjA3IAoAAQATAAAFgGQAGgHAAgIQAAgMgJgFQgKgEgXAAIgcAAg");
	this.shape_50.setTransform(504.4,166.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AhGAoIAogHQAJAYAWAAQAMAAAIgGQAHgHAAgJQAAgJgIgGQgIgFgMAAIgHAAIAAgcQALAAAFgBQAFgCAFgGQAEgFAAgIQAAgHgFgHQgGgHgLAAQgIAAgHAEQgHAEgGAOIglgIQAGgWASgLQATgLAWAAQAeAAARAOQAQAOAAAUQAAANgHAJQgHAIgPAIQASAEAJAKQAJAKAAAPQAAAUgSAOQgSAOgiAAQg6AAgNgvg");
	this.shape_51.setTransform(485.6,166.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("Ag8A6QgRgWAAgjQAAgoAWgXQAWgYAhAAQAkAAAVAZQAVAYgBAxIhtAAQABAUAKALQAKALAOAAQALAAAHgGQAHgGADgMIAsAHQgIAYgSANQgTANgbAAQgqAAgVgdgAgWgqQgJALAAASIBBAAQgBgTgJgKQgJgKgOAAQgNAAgKAKg");
	this.shape_52.setTransform(469.1,166.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AhQB0IAAjkIApAAIAAAZQAIgNAOgIQAOgHAPAAQAdAAAUAWQAUAXAAAoQAAApgUAXQgVAXgcAAQgNAAgMgFQgLgGgMgNIAABTgAgZhEQgMAMAAAYQAAAcAMANQALANAPAAQAPAAALgMQAJgLABgcQAAgagLgNQgLgNgPAAQgPAAgKANg");
	this.shape_53.setTransform(451,169.4);

	this.instance_2 = new lib.Символ3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(496,182.5);
	this.instance_2.shadow = new cjs.Shadow("#333333",4,4,5);

	this.instance_3 = new lib.Символ3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(496,548.5);
	this.instance_3.shadow = new cjs.Shadow("#333333",4,4,5);

	this.instance_4 = new lib.моргалканаправление();
	this.instance_4.parent = this;
	this.instance_4.setTransform(363.7,259);

	this.term = new lib.Символ1();
	this.term.name = "term";
	this.term.parent = this;
	this.term.setTransform(573.5,222,1.3,1.3);
	this.term.shadow = new cjs.Shadow("#333333",4,4,10);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28}]},14).to({state:[{t:this.instance_4}]},10).to({state:[{t:this.term}]},15).to({state:[]},40).wait(26));

	// Слой 25
	this.instance_5 = new lib.common625723();
	this.instance_5.parent = this;
	this.instance_5.setTransform(4,4);

	this.instance_6 = new lib.type01337();
	this.instance_6.parent = this;
	this.instance_6.setTransform(20,386);

	this.instance_7 = new lib.type02337();
	this.instance_7.parent = this;
	this.instance_7.setTransform(21,102.5);

	this.instance_8 = new lib.direct625723();
	this.instance_8.parent = this;
	this.instance_8.setTransform(4,4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5}]}).to({state:[{t:this.instance_7},{t:this.instance_6}]},14).to({state:[{t:this.instance_8}]},10).to({state:[{t:this.instance_5}]},15).to({state:[]},40).wait(26));

	// фон
	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#D2E2EF").s().p("EgxcA5HMAAAhyNMBi5AAAMAAAByNg");
	this.shape_54.setTransform(316.5,365.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_54).to({_off:true},79).wait(26));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,633,731);


// stage content:
(lib.termcommon_HTML5Canvas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.clip = new lib.clip();
	this.clip.name = "clip";
	this.clip.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.clip).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(316.5,365.5,633,731);
// library properties:
lib.properties = {
	id: 'A9090F3E7D4499429A6DD804389D26A2',
	width: 633,
	height: 731,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/term_common_HTML5 Canvas_atlas_.png", id:"term_common_HTML5 Canvas_atlas_"}
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
an.compositions['A9090F3E7D4499429A6DD804389D26A2'] = {
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