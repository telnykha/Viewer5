(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"vvedenie_Canvas_atlas_", frames: [[206,436,175,210],[0,484,204,210],[205,242,210,192],[222,0,158,240],[0,242,203,240],[0,0,220,240],[0,696,210,180]]}
];


// symbols:



(lib.ПЗК = function() {
	this.spriteSheet = ss["vvedenie_Canvas_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ПСК = function() {
	this.spriteSheet = ss["vvedenie_Canvas_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.РДУК = function() {
	this.spriteSheet = ss["vvedenie_Canvas_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.колонка = function() {
	this.spriteSheet = ss["vvedenie_Canvas_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.кран_250 = function() {
	this.spriteSheet = ss["vvedenie_Canvas_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.промоборудование = function() {
	this.spriteSheet = ss["vvedenie_Canvas_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.фильтр = function() {
	this.spriteSheet = ss["vvedenie_Canvas_atlas_"];
	this.gotoAndStop(6);
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


(lib.trube_yellow_T_20_20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgEAyIAAgeIA2AAIAAAFIgyAAIAAAZgAgxAyIAAhjIAFAAIAABjgAgEgTIAAgeIAEAAIAAAZIAyAAIAAAFg");
	this.shape.setTransform(2.5,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AglAyIAAgwIAAAAIAAgDIAAAAIAAgwIADAAIAAAwIBIAAIAAADIhIAAIAAAwg");
	this.shape_1.setTransform(3.7,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EAEACA").s().p("AggAyIAAgwIBIAAIAAADIhFAAIAAAtgAgnAyIAAhjIADAAIAAAwIAAAAIAAADIAAAAIAAAwgAgggBIAAgwIADAAIAAAtIBFAAIAAADg");
	this.shape_2.setTransform(3.5,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D6D698").s().p("AgaAyIAAgtIBEAAIAAAFIhAAAIAAAogAgpAyIAAhjIAEAAIAABjgAgagEIAAgtIAEAAIAAAoIBAAAIAAAFg");
	this.shape_3.setTransform(3.3,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C2C264").s().p("AgTAyIAAgoIBAAAIAAAFIg7AAIAAAjgAgsAyIAAhjIAFAAIAABjgAgTgJIAAgoIAFAAIAAAjIA7AAIAAAFg");
	this.shape_4.setTransform(3,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#9A9A00").s().p("AgLAyIAAgjIA6AAIAAAFIg2AAIAAAegAguAyIAAhjIAEAAIAABjgAgLgOIAAgjIAEAAIAAAeIA2AAIAAAFg");
	this.shape_5.setTransform(2.8,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-5,10,10);


(lib.trube_yellow_direct_10_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAUAZIAAgxIAFAAIAAAxgAgYAZIAAgxIAFAAIAAAxg");
	this.shape.setTransform(0,2.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgBAZIAAgxIADAAIAAAxg");
	this.shape_1.setTransform(0,2.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EAEACA").s().p("AACAZIAAgxIADAAIAAAxgAgEAZIAAgxIADAAIAAAxg");
	this.shape_2.setTransform(0,2.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D6D698").s().p("AAFAZIAAgxIAFAAIAAAxgAgJAZIAAgxIAFAAIAAAxg");
	this.shape_3.setTransform(0,2.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C2C264").s().p("AAKAZIAAgxIAFAAIAAAxgAgOAZIAAgxIAFAAIAAAxg");
	this.shape_4.setTransform(0,2.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#9A9A00").s().p("AAPAZIAAgxIAFAAIAAAxgAgTAZIAAgxIAFAAIAAAxg");
	this.shape_5.setTransform(0,2.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,0,5,5);


(lib.trube_yellow_angle_20_20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 10
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C2C264").s().p("AgTAtIAAgZIAFAAIAAAZgAgsAtIAAgZIAFAAIAAAZgAAUgOIAAgFIAZAAIAAAFgAAUgnIAAgFIAZAAIAAAFg");
	this.shape.setTransform(3,-4.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9A9A00").s().p("AgLAwIAAgaIAAAAIAEAAIAAAagAguAwIAAgaIAEAAIAAAagAAXgGIAAgGIAYAAIAAAGgAAXgqIAAgFIAYAAIAAAFg");
	this.shape_1.setTransform(2.8,-4.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D6D698").s().p("AgaArIAAgaIAEAAIAAAagAgpArIAAgaIAEAAIAAAAIAAAagAASgVIAAgGIAYAAIAAAGgAASglIAAAAIAAgEIAYAAIAAAEg");
	this.shape_2.setTransform(3.3,-4.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EAEACA").s().p("AggAoIAAgZIADAAIAAAAIAAAZgAgnAoIAAgZIADAAIAAAZgAAPgdIAAAAIAAgEIAAgCIAAgEIAZAAIAAADIgZAAIAAADIAZAAIAAAEg");
	this.shape_3.setTransform(3.5,-4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AglAmIAAgZIAAAAQAAgUAOgPQAQgPAUAAIAAADQgTAAgPAOQgNAOAAATIAAAAIAAAZgAANgiIAAgDIAZAAIAAADg");
	this.shape_4.setTransform(3.7,-3.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EFEBCE").s().p("AgUAcIAAAAQAAgVAOgNQANgOAVAAIAAADIgBAAQgSAAgNANQgNANAAASIAAABgAgXAcIgDAAIgBAAIAAgBQAAgWAQgQQAPgQAXAAIABAAIAAABIAAADQgWAAgOAPQgPAOAAAWg");
	this.shape_5.setTransform(2.2,-5.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D6D79C").s().p("AgOAeIAAAAIAAAAQAAgTANgMQAMgNATAAIAAAAIAAAAIAAAFQgRAAgLALQgLALAAARgAgdAeQAAgZARgRQARgRAZAAIAAAFIAAAAQgXAAgPAQQgQAPAAAXIAAAAg");
	this.shape_6.setTransform(2,-5.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C6C363").s().p("AgBAgIgGAAQABgQAKgMQAMgKARAAIAAAEQgPABgKAIQgJALAAAOgAggAgQAAgaATgTQASgSAcgBIAAAGQgZAAgRARQgRARAAAYg");
	this.shape_7.setTransform(1.7,-5.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#9C9A00").s().p("AAAAjQAAgPAKgKQALgKAOAAIAAAFQgMAAgJAIQgJAJAAANgAgiAjQAAgdAUgUQAUgUAdAAIAAAFQgbAAgSATQgTASAAAbg");
	this.shape_8.setTransform(1.5,-6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgEAyIAAgZQAAgNAIgJQAJgHAMAAIAZAAIAAAEIgZAAIAAAAQgKAAgIAHQgHAIAAAKIAAAZgAgxAyIAAgZIABgJIADgQIAHgOQAEgHAHgGQAHgHAJgFIAQgHQAKgDAKAAIAZAAIAAAFIgZAAQgcAAgVAUQgUAVAAAcIAAAZg");
	this.shape_9.setTransform(2.5,-5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-10,10,10);


(lib.стрелкажелтая = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1,3,true).p("AAmgdIi7AAIAAA8IC7AAIAAAYIBwg3Ihwg2g");
	this.shape.setTransform(-15,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFD400").s().p("AAmAfIi7AAIAAg8IC7AAIAAgZIBwA2IhwA3g");
	this.shape_1.setTransform(-15,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.стрелкажелтая, new cjs.Rectangle(-31,-6.5,32,13), null);


(lib.свеча = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(1,1,1,3,true).p("AASAtIAAAAIg9AAIABg7IAbgeIA7AAIAAA7gAASgOIAAA7AAsgsIgaAeAgqgOIA8AA");
	this.shape.setTransform(-0.1,-62);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#B79700","#FFD400","#B79700"],[0,0.302,1],71,3.3,71,-2).s().p("AgqAPIAbgdIA6AAIgZAdg");
	this.shape_1.setTransform(0,-65);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#B79700","#FFD400","#B79700"],[0,0.302,1],-2.5,68.8,1.7,68.8).s().p("AgMgOIAZgeIAAA8IgZAdg");
	this.shape_2.setTransform(3,-62);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E7C300").s().p("AgeAeIABg7IA8AAIAAA7IAAAAg");
	this.shape_3.setTransform(-1.4,-60.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#333333").ss(1,1,1,3,true).p("AAIEcQABgBABgBQAFgFAAgGQAAAAAAgBIAAo9IgdAAIAAI7QAAACAAABQAAAGAEAFQACABACABAAIEcIAAAMQAAADgDACQgCADgDAAQgCAAgDgDQgBgCAAgDIAAgMQADACADAAQAEAAAEgCg");
	this.shape_4.setTransform(0,-27.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#B79700","#FFD400","#B79700"],[0,0.302,1],-2.1,34.5,2.1,34.5).s().p("AgFEtQgBgCAAgDIAAgMIgEgCQgEgFAAgGIAAgDIAAo7IAdAAIAAI9IAAABQAAAGgEAFIgDACQgEACgEAAQgDAAgDgCQADACADAAQAEAAAEgCIAAAMQAAADgDACQgCADgDAAQgCAAgDgDg");
	this.shape_5.setTransform(0,-27.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.свеча, new cjs.Rectangle(-5.4,-67.5,10.7,71.8), null);


(lib.стр1210 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag7AAIB3gxIAABjg");
	this.shape.setTransform(6,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.стр1210, new cjs.Rectangle(0,-5,12,10), null);


(lib.муравей1желтый = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFD400").s().p("AhAAPIAAgdICBAAIAAAdg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.5,-1.5,13,3);


(lib.стрелка6x10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// стрелка
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgxgnIBjAnIhjAog");
	this.shape.setTransform(-5,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.стрелка6x10, new cjs.Rectangle(-10,-4,10,8), null);


(lib.кругплан = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgcAcQgLgMAAgQQAAgPALgNQANgLAPAAQAQAAAMALQAMANAAAPQAAAQgMAMQgMAMgQAAQgPAAgNgMg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4,-4,8,8);


(lib.котел = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag3A5IAAgRIAJAAQAGABACgCQADgBABgDQABgCAAgPIAAhLIBZAAIAAByIgUAAIAAhiIgyAAIAAA4QAAAUgBAGQgCAHgFAEQgGAGgLAAIgQgBg");
	this.shape.setTransform(20.9,1.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgkAsQgQgPABgcQgBgcAQgQQAOgQAXAAQAWABAPAPQAPAPAAAcIAAAFIhVAAQABASAKALQAJAKAOAAQALgBAHgFQAHgGAFgMIAUADQgEARgNAKQgNAKgUAAQgYAAgOgQgAgVgiQgIAJgCAPIA/AAQgBgOgGgIQgJgKgPgBQgNAAgJAJg");
	this.shape_1.setTransform(9.7,1.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgJA5IAAhhIglAAIAAgQIBcAAIAAAQIglAAIAABhg");
	this.shape_2.setTransform(-1.2,1.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgmAsQgOgPAAgdQAAgfARgPQAPgNAUAAQAYABAPAPQAOAPAAAcQAAAVgGAMQgHAMgMAIQgNAGgPABQgXAAgPgQgAgXggQgKALAAAVQAAAWAKALQAKALANAAQAOgBAKgKQAKgLAAgWQAAgVgKgLQgKgKgOgBQgNAAgKALg");
	this.shape_3.setTransform(-11.9,1.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAUA5IgUgkQgGgKgEgDQgFgDgHAAIAAA0IgTAAIAAhxIATAAIAAAxQAKAAADgDQAEgEAGgRQAGgOAEgDQADgFAFgBQAEgCALAAIADAAIAAAQIgFAAQgIAAgCACIgHAOQgEAMgEADQgDAFgHAEQAMACAMATIAVAkg");
	this.shape_4.setTransform(-22.3,1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(2,1,1).p("Anzj5IPnAAIAAHzIvnAAg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AnzD6IAAnzIPnAAIAAHzg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.котел, new cjs.Rectangle(-51,-26,102,52), null);


(lib.формула = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AAfBGIgfgxIgeAxIgiAAIAwhIIgrhDIAhAAIAbAtIAbgtIAgAAIgrBEIAwBHg");
	this.shape.setTransform(66.8,5.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AA0BGIAAiLIAdAAIAACLgAhPBGIAAiLIAbAAIAAA4IAmAAQAOAAALAEQAKAEAIAKQAHAKAAANQAAAPgIAKQgHAKgJADQgJAEgRAAgAg0AuIAcAAIASgBQAFgBAEgFQAEgEAAgHQAAgJgHgFQgFgFgSAAIgdAAg");
	this.shape_1.setTransform(50.8,5.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("Ag5BGIAAiLIA3AAQAQAAAIACQAIABAHAEQAGAFAEAHQAFAHAAAJQAAAKgGAIQgFAIgJAFQANADAHAIQAGAJAAAMQAAAKgEAJQgEAJgIAFQgIAGgLABQgHABgaAAgAgdAuIAaAAQAOAAAEgBQAGgBAEgEQAEgFAAgHQAAgGgDgFQgDgEgFgCQgGgCgTAAIgWAAgAgdgNIASAAIAUgBQAHgBAEgEQAEgEAAgHQAAgGgDgEQgEgEgHgBIgXgBIgQAAg");
	this.shape_2.setTransform(34.5,5.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AhRBrIAAjVIBFAAQAnAAAMADQASAFANAQQAMAQAAAaQAAATgHAOQgHAMgLAIQgLAIgMACQgPADgdAAIgcAAIAABRgAgmgJIAYAAQAYAAAJgEQAJgDAFgHQAEgHAAgKQAAgMgGgHQgHgIgLgCQgIgBgWAAIgVAAg");
	this.shape_3.setTransform(17.6,-0.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AhJAoIBmgoIhmgnIAAgqICTBAIAAAiIiTBAg");
	this.shape_4.setTransform(-9.9,-0.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AAfBGIgfgxIgeAxIgiAAIAvhIIgqhDIAgAAIAbAtIAcgtIAgAAIgrBEIAwBHg");
	this.shape_5.setTransform(-33.5,5.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("Ag5BGIAAiLIA3AAQAQAAAIACQAIABAHAEQAGAFAEAHQAFAHAAAJQAAAKgGAIQgFAIgJAFQANADAHAIQAGAJAAAMQAAAKgEAJQgEAJgIAFQgIAGgLABQgHABgaAAgAgdAuIAaAAQAOAAAEgBQAGgBAEgEQAEgFAAgHQAAgGgDgFQgDgEgFgCQgGgCgTAAIgWAAgAgdgNIASAAIAUgBQAHgBAEgEQAEgEAAgHQAAgGgDgEQgEgEgHgBIgXgBIgQAAg");
	this.shape_6.setTransform(-46,5.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AhRBrIAAjVIBFAAQAnAAAMADQASAFANAQQAMAQAAAaQAAATgHAOQgHAMgLAIQgLAIgMACQgPADgdAAIgcAAIAABRgAgmgJIAYAAQAYAAAJgEQAJgDAFgHQAEgHAAgKQAAgMgGgHQgHgIgLgCQgIgBgWAAIgVAAg");
	this.shape_7.setTransform(-62.9,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(1,1,1).p("APLkOQAaAaADAjIAAGjQgDAjgaAZQgcAdgoABI8MAAQgogBgdgdQgcgcgBgoIAAmTQABgoAcgdQAdgcAmgBIcOAAQAoABAcAcg");

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFE1").s().p("AuFEsQgogBgcgdQgdgcgBgoIAAmTQABgoAdgdQAcgcAmgBIcOAAQAoABAbAcQAbAaADAjIAAGjQgDAjgbAZQgbAdgoABg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-101,-31,202,62);


(lib.ГРПтупик = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag2BWIAAirIBtAAIAAAVIhXAAIAACWg");
	this.shape.setTransform(80.5,-0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhBBWIAAirIBBAAQAQAAAKACQAMACAJAGQAIAGAFALQAGAKgBANQAAAWgOAOQgNAPgkAAIgrAAIAABGgAgpgDIArAAQAWAAAJgIQAJgJAAgPQAAgKgFgIQgFgIgKgCQgGgCgPABIgqAAg");
	this.shape_1.setTransform(65.5,-0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAtBWIAAiWIhZAAIAACWIgXAAIAAirICGAAIAACrg");
	this.shape_2.setTransform(48.5,-0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAeBWIAAheIg6BeIgWAAIAAh8IAVAAIAABeIA6heIAWAAIAAB8gAgVg+QgJgIgCgPIAOAAQACAIAFAEQAFAEAHAAQAKAAAEgEQAFgEACgIIAOAAQgCAPgIAIQgJAIgPAAQgOAAgJgIg");
	this.shape_3.setTransform(26.5,-0.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAwA+IAAh7IAWAAIAAB7gAhFA+IAAh7IAVAAIAAAwIAbAAQAZAAAPALQANAJAAASQABAPgMALQgMALgZAAgAgwAtIAXAAQATAAAIgFQAIgFAAgKQABgIgHgHQgFgGgWAAIgZAAg");
	this.shape_4.setTransform(11.1,2.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgyA+IAAh7IAxAAQAQAAAKADQAIADAGAIQAHAIgBALQAAAJgDAGQgEAHgIAEQAKACAFAIQAGAIAAALQgBASgMAJQgLAIgWAAgAgdAtIAcAAQARAAAHgEQAGgEAAgLQAAgGgDgFQgEgFgGgBIgTgBIgaAAgAgdgJIAWAAQANAAAFgBQAFgCAEgEQAEgEAAgGQAAgKgHgEQgHgEgQAAIgXAAg");
	this.shape_5.setTransform(-3.5,2.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgpAwQgQgQAAggQAAgiATgQQAQgOAWAAQAaAAAQARQAQARAAAdQAAAXgHAOQgHAOgOAHQgOAIgQAAQgZAAgQgRgAgZgjQgLAMAAAXQAAAYALAMQAKAMAPAAQAQAAAKgMQALgMAAgYQAAgXgLgMQgKgMgQAAQgPAAgKAMg");
	this.shape_6.setTransform(-17,2.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAWA+IgWgmQgGgMgFgEQgFgDgHAAIAAA5IgWAAIAAh7IAWAAIAAA2QAKAAAEgEQAEgEAHgTQAGgPAEgEQAEgFAFgCQAFgBALAAIAEAAIAAARIgGAAQgIAAgDADQgCACgFANQgFAMgEAFQgEAFgHADQAMADAOAWIAXAmg");
	this.shape_7.setTransform(-28.2,2.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAeA+IAAhdIg6BdIgWAAIAAh7IAVAAIAABeIA6heIAWAAIAAB7g");
	this.shape_8.setTransform(-41,2.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAcA+IAAhqIg3AAIAABqIgVAAIAAh7IBhAAIAAB7g");
	this.shape_9.setTransform(-54.2,2.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgtBVIgCgUQAHACAFAAQAGAAAFgCQAEgCADgFQACgDAEgNIACgFIgvh7IAWAAIAaBIIAIAbQAEgNAFgOIAbhIIAVAAIgwB9QgHAVgDAHQgGALgHAFQgIAEgKAAQgFAAgIgCg");
	this.shape_10.setTransform(-66.6,4.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgLBWIAAiWIg4AAIAAgVICHAAIAAAVIg5AAIAACWg");
	this.shape_11.setTransform(-78.7,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Слой 2
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(1,1,1).p("AWxjhQAWAWADAdIAAFdQgDAdgWAVQgXAYghABMgrwAAAQgigBgXgYQgYgXgBghIAAlQQAAgiAZgYQAXgXAggBMAryAAAQAhAAAXAYg");

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFE1").s().p("A13D6QghgBgYgYQgYgXAAgiIAAlPQgBghAZgZQAXgWAhgCMArxAAAQAhAAAWAYQAXAWACAdIAAFdQgCAdgXAVQgWAYghABg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-149.1,-26,298.3,52);


(lib.ГРПзакольцован = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag2BWIAAirIBtAAIAAAVIhXAAIAACWg");
	this.shape.setTransform(114.7,-0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhBBWIAAirIBBAAQAQAAAKACQAMACAJAGQAIAGAFALQAGAKgBANQAAAWgOAOQgNAPgkAAIgrAAIAABGgAgpgDIArAAQAWAAAJgIQAJgJAAgPQAAgKgFgIQgFgIgKgCQgGgCgPABIgqAAg");
	this.shape_1.setTransform(99.7,-0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAtBWIAAiWIhZAAIAACWIgXAAIAAirICGAAIAACrg");
	this.shape_2.setTransform(82.7,-0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgoAwQgQgRAAgeQAAgeAQgSQAQgRAZAAQAZAAAPARQAQARAAAeIAAAFIhcAAQACAVAKALQAKALAPAAQAMAAAIgGQAIgGAFgOIAWADQgGATgOALQgNAKgWAAQgaAAgQgRgAgWglQgKAKgBAQIBEAAQgBgQgHgHQgKgNgQAAQgOAAgJAKg");
	this.shape_3.setTransform(60.6,2.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAxA+IAAh7IAUAAIAAB7gAhEA+IAAh7IAVAAIAAAwIAaAAQAZAAAOALQAOAJAAASQAAAPgLALQgMALgZAAgAgvAtIAVAAQAUAAAIgFQAJgFAAgKQgBgIgFgHQgGgGgVAAIgZAAg");
	this.shape_4.setTransform(45.4,2.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAdA+IAAg3Ig5AAIAAA3IgVAAIAAh7IAVAAIAAA0IA5AAIAAg0IAVAAIAAB7g");
	this.shape_5.setTransform(30.1,2.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAdA+IAAg3Ig5AAIAAA3IgVAAIAAh7IAVAAIAAA0IA5AAIAAg0IAVAAIAAB7g");
	this.shape_6.setTransform(16.9,2.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AguA3QgLgKAAgQQABgJAEgHQAEgIAHgEQAHgEAIgCIASgDQAZgEANgEIAAgFQgBgNgGgFQgHgIgQAAQgPAAgGAGQgIAFgDANIgVgDQADgNAGgIQAHgIAMgFQAMgEAQAAQAQAAAKAEQAJADAFAGQAFAGACAJIABATIAAAbQAAAeABAHQABAIAFAHIgXAAQgDgGgBgJQgMAKgLAEQgJAEgNAAQgUAAgMgKgAgEAIQgNACgFACQgGACgDAFQgDAEAAAGQAAAIAGAGQAHAGAMAAQAMAAAJgGQAJgFAFgJQAEgIAAgNIAAgIQgMAEgWAEg");
	this.shape_7.setTransform(3.5,2.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgyA+IAAh7IAxAAQAQAAAKADQAIADAHAIQAFAIAAALQABAJgEAGQgEAHgHAEQAIACAGAIQAGAIAAALQgBASgMAJQgLAIgWAAgAgdAtIAcAAQARAAAHgEQAGgEAAgLQAAgGgEgFQgEgFgFgBIgTgBIgaAAgAgdgJIAWAAQANAAAFgBQAFgCAEgEQAEgEAAgGQAAgKgHgEQgHgEgQAAIgXAAg");
	this.shape_8.setTransform(-8.8,2.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgpAwQgQgQAAggQAAgiATgQQAQgOAWAAQAaAAAQARQAQARAAAdQAAAXgHAOQgHAOgOAHQgOAIgQAAQgZAAgQgRgAgZgjQgLAMAAAXQAAAYALAMQAKAMAPAAQAQAAAKgMQALgMAAgYQAAgXgLgMQgKgMgQAAQgPAAgKAMg");
	this.shape_9.setTransform(-22.3,2.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAoBQIAAgkIhgAAIAAh7IAVAAIAABqIA5AAIAAhqIAVAAIAABqIAOAAIAAA1g");
	this.shape_10.setTransform(-35.1,3.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgyA+IAAh7IAVAAIAAAwIAbAAQAZAAAOALQAOAJAAASQAAAPgMALQgMALgaAAgAgdAtIAWAAQATAAAJgFQAIgFAAgKQAAgIgGgHQgHgGgUAAIgZAAg");
	this.shape_11.setTransform(-48.2,2.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("Ag8A+IAAgSIAJAAQAHAAADgBQADgCABgDQABgCAAgRIAAhRIBhAAIAAB8IgWAAIAAhqIg3AAIAAA9QAAAVgBAHQgBAHgHAFQgFAGgNAAIgRgBg");
	this.shape_12.setTransform(-62.5,2.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgpAwQgQgQAAggQAAgiATgQQAQgOAWAAQAaAAAQARQAQARAAAdQAAAXgHAOQgHAOgOAHQgOAIgQAAQgZAAgQgRgAgZgjQgLAMAAAXQAAAYALAMQAKAMAPAAQAQAAAKgMQALgMAAgYQAAgXgLgMQgKgMgQAAQgPAAgKAMg");
	this.shape_13.setTransform(-75,2.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAWA+IgWgmQgGgMgFgEQgFgDgHAAIAAA5IgWAAIAAh7IAWAAIAAA2QAKAAAEgEQAEgEAHgTQAGgPAEgEQAEgFAFgCQAFgBALAAIAEAAIAAARIgGAAQgIAAgDADQgCACgFANQgFAMgEAFQgEAFgHADQAMADAOAWIAXAmg");
	this.shape_14.setTransform(-86.3,2.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgtA3QgMgKAAgQQAAgJAFgHQAEgIAHgEQAHgEAIgCIATgDQAYgEAMgEIAAgFQABgNgHgFQgHgIgQAAQgOAAgIAGQgGAFgEANIgUgDQACgNAHgIQAGgIAMgFQAMgEAPAAQAQAAAKAEQALADAEAGQAEAGACAJIABATIAAAbQAAAeACAHQABAIAEAHIgVAAQgEgGgBgJQgLAKgLAEQgKAEgNAAQgVAAgKgKgAgEAIQgNACgGACQgFACgDAFQgDAEAAAGQAAAIAHAGQAGAGANAAQALAAAJgGQAJgFAFgJQADgIAAgNIAAgIQgLAEgWAEg");
	this.shape_15.setTransform(-99.1,2.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("Ag+AlIAWgFQADAMAKANQALAMAQAAQATAAAKgJQALgJAAgNQgBgPgKgIQgLgIgTAAIgLAAIAAgTQAPAAAJgCQAIgCAGgHQAGgIAAgJQAAgLgIgJQgJgIgPAAQgMAAgJAHQgJAGgDALQgEAKAAAGIgWgFQAIg3AzAAQAaAAAPAOQAOAOAAATQAAAYgXANQAOAEAIAKQAJALAAAQQAAAWgRAPQgRAPgdAAQgvAAgPg0g");
	this.shape_16.setTransform(-113,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(1,1,1).p("AWxjhQAWAWADAdIAAFdQgDAdgWAVQgXAYghABMgrwAAAQgigBgXgYQgYgXgBghIAAlQQAAgiAZgYQAXgXAggBMAryAAAQAhAAAXAYg");

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFE1").s().p("A13D6QghgBgYgYQgYgXAAgiIAAlPQgBghAZgZQAXgWAhgCMArxAAAQAhAAAWAYQAXAWACAdIAAFdQgCAdgXAVQgWAYghABg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-149.1,-26,298.3,52);


(lib.потребителикрасный = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// текст
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAUAqIAAg+IgmA+IgPAAIAAhTIAOAAIAAA/IAmg/IAPAAIAABTg");
	this.shape.setTransform(42.5,1.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgnApIAAgMIAGAAIAGAAIADgDIAAgNIAAg2IBAAAIAABSIgNAAIAAhGIglAAIAAAoQAAAPgBAEQgBAFgEADQgEAEgIAAIgLgBg");
	this.shape_1.setTransform(32.9,1.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgbAgQgKgLAAgVQAAgTAKgMQALgMAQAAQARAAALAMQAKALAAAUIAAADIg9AAQABAOAHAIQAHAHAJAAQAIAAAFgEQAGgFADgIIAPACQgEANgJAGQgJAIgPAAQgRAAgLgMgAgPgZQgGAHgBALIAtAAQgBgKgEgGQgHgIgKAAQgJAAgHAGg");
	this.shape_2.setTransform(24.8,1.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgGAqIAAhHIgbAAIAAgMIBDAAIAAAMIgbAAIAABHg");
	this.shape_3.setTransform(16.9,1.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAUAqIAAg+IgmA+IgPAAIAAhTIAOAAIAAA/IAmg/IAPAAIAABTg");
	this.shape_4.setTransform(8.7,1.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgVA1QgIgHgFgKQgEgLAAgZQAAghALgLQALgMAWAAIARAAQAAAAABgBQAAAAAAAAQABAAAAgBQAAAAAAgBIANABQgBAIgDADQgDAEgFABIgRAAQgRAAgGAEQgGADgDAIQgDAHAAAMQAFgIAHgEQAHgEAIAAQARAAAKALQALALAAASQAAAPgFAJQgGAJgHAGQgHAFgNAAQgOAAgIgHgAgQgEQgGAIAAAPQAAAOAHAIQAHAHAJAAQAKAAAHgJQAGgIAAgPQAAgNgGgHQgGgJgLAAQgLAAgGAJg");
	this.shape_5.setTransform(-0.3,-0.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgbAgQgKgLAAgVQAAgTAKgMQALgMAQAAQARAAALAMQAKALAAAUIAAADIg9AAQABAOAHAIQAHAHAJAAQAIAAAFgEQAGgFADgIIAPACQgEANgJAGQgJAIgPAAQgRAAgLgMgAgPgZQgGAHgBALIAtAAQgBgKgEgGQgHgIgKAAQgJAAgHAGg");
	this.shape_6.setTransform(-9.2,1.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgjA6IAAhyIANAAIAAAMQAEgHAGgDQAGgDAHgBQALABAHAFQAJAGAEAKQAEAJAAANQAAAMgEAKQgFAJgJAGQgIAFgKABQgGAAgFgDQgHgDgDgFIAAAogAgQgmQgGAJAAAPQAAAQAGAHQAHAIAJAAQAIAAAHgIQAHgIAAgPQAAgQgHgJQgGgHgJgBQgJAAgHAJg");
	this.shape_7.setTransform(-17.8,2.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgGAqIAAhHIgbAAIAAgMIBDAAIAAAMIgbAAIAABHg");
	this.shape_8.setTransform(-26.2,1.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgbAgQgLgLAAgVQAAgWANgLQALgKAOAAQARAAALAMQALALAAAUQAAAPgFAJQgFAJgJAFQgJAGgLAAQgQAAgLgMgAgRgXQgGAIAAAPQAAAQAGAIQAHAIAKAAQAKAAAHgIQAHgIAAgQQAAgPgHgIQgHgHgKAAQgKgBgHAIg");
	this.shape_9.setTransform(-34,1.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AATAqIAAhHIglAAIAABHIgOAAIAAhTIBBAAIAABTg");
	this.shape_10.setTransform(-42.7,1.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// квадрат
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(2,1,1).p("AImD6IxLAAIAAnzIRLAAg");

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("AolD6IAAnzIRLAAIAAHzg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.потребителикрасный, new cjs.Rectangle(-56,-26,112,52), null);


(lib.потребителижелтыйморгает = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// текст
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAUAqIAAg+IgmA+IgPAAIAAhTIAOAAIAAA/IAmg/IAPAAIAABTg");
	this.shape.setTransform(42.5,1.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgnApIAAgMIAGAAIAGAAIADgDIAAgNIAAg2IBAAAIAABSIgNAAIAAhGIglAAIAAAoQAAAPgBAEQgBAFgEADQgEAEgIAAIgLgBg");
	this.shape_1.setTransform(32.9,1.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgbAgQgKgLAAgVQAAgTAKgMQALgMAQAAQARAAALAMQAKALAAAUIAAADIg9AAQABAOAHAIQAHAHAJAAQAIAAAFgEQAGgFADgIIAPACQgEANgJAGQgJAIgPAAQgRAAgLgMgAgPgZQgGAHgBALIAtAAQgBgKgEgGQgHgIgKAAQgJAAgHAGg");
	this.shape_2.setTransform(24.8,1.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgGAqIAAhHIgbAAIAAgMIBDAAIAAAMIgbAAIAABHg");
	this.shape_3.setTransform(16.9,1.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAUAqIAAg+IgmA+IgPAAIAAhTIAOAAIAAA/IAmg/IAPAAIAABTg");
	this.shape_4.setTransform(8.7,1.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgVA1QgIgHgFgKQgEgLAAgZQAAghALgLQALgMAWAAIARAAQAAAAABgBQAAAAAAAAQABAAAAgBQAAAAAAgBIANABQgBAIgDADQgDAEgFABIgRAAQgRAAgGAEQgGADgDAIQgDAHAAAMQAFgIAHgEQAHgEAIAAQARAAAKALQALALAAASQAAAPgFAJQgGAJgHAGQgHAFgNAAQgOAAgIgHgAgQgEQgGAIAAAPQAAAOAHAIQAHAHAJAAQAKAAAHgJQAGgIAAgPQAAgNgGgHQgGgJgLAAQgLAAgGAJg");
	this.shape_5.setTransform(-0.3,-0.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgbAgQgKgLAAgVQAAgTAKgMQALgMAQAAQARAAALAMQAKALAAAUIAAADIg9AAQABAOAHAIQAHAHAJAAQAIAAAFgEQAGgFADgIIAPACQgEANgJAGQgJAIgPAAQgRAAgLgMgAgPgZQgGAHgBALIAtAAQgBgKgEgGQgHgIgKAAQgJAAgHAGg");
	this.shape_6.setTransform(-9.2,1.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgjA6IAAhyIANAAIAAAMQAEgHAGgDQAGgDAHgBQALABAHAFQAJAGAEAKQAEAJAAANQAAAMgEAKQgFAJgJAGQgIAFgKABQgGAAgFgDQgHgDgDgFIAAAogAgQgmQgGAJAAAPQAAAQAGAHQAHAIAJAAQAIAAAHgIQAHgIAAgPQAAgQgHgJQgGgHgJgBQgJAAgHAJg");
	this.shape_7.setTransform(-17.8,2.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgGAqIAAhHIgbAAIAAgMIBDAAIAAAMIgbAAIAABHg");
	this.shape_8.setTransform(-26.2,1.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgbAgQgLgLAAgVQAAgWANgLQALgKAOAAQARAAALAMQALALAAAUQAAAPgFAJQgFAJgJAFQgJAGgLAAQgQAAgLgMgAgRgXQgGAIAAAPQAAAQAGAIQAHAIAKAAQAKAAAHgIQAHgIAAgQQAAgPgHgIQgHgHgKAAQgKgBgHAIg");
	this.shape_9.setTransform(-34,1.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AATAqIAAhHIglAAIAABHIgOAAIAAhTIBBAAIAABTg");
	this.shape_10.setTransform(-42.7,1.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(20));

	// квадрат
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FF0000").ss(2,1,1).p("AImD6IxLAAIAAnzIRLAAg");

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,0,0,0.498)").s().p("AolD6IAAnzIRLAAIAAHzg");

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(2,1,1).p("Aolj5IRLAAIAAHzIxLAAg");

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFD400").s().p("AolD6IAAnzIRLAAIAAHzg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11}]}).to({state:[{t:this.shape_14},{t:this.shape_13}]},10).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56,-26,112,52);


(lib.потребителижелтый = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// текст
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAUAqIAAg+IgmA+IgPAAIAAhTIAOAAIAAA/IAmg/IAPAAIAABTg");
	this.shape.setTransform(42.5,1.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgnApIAAgMIAGAAIAGAAIADgDIAAgNIAAg2IBAAAIAABSIgNAAIAAhGIglAAIAAAoQAAAPgBAEQgBAFgEADQgEAEgIAAIgLgBg");
	this.shape_1.setTransform(32.9,1.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgbAgQgKgLAAgVQAAgTAKgMQALgMAQAAQARAAALAMQAKALAAAUIAAADIg9AAQABAOAHAIQAHAHAJAAQAIAAAFgEQAGgFADgIIAPACQgEANgJAGQgJAIgPAAQgRAAgLgMgAgPgZQgGAHgBALIAtAAQgBgKgEgGQgHgIgKAAQgJAAgHAGg");
	this.shape_2.setTransform(24.8,1.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgGAqIAAhHIgbAAIAAgMIBDAAIAAAMIgbAAIAABHg");
	this.shape_3.setTransform(16.9,1.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAUAqIAAg+IgmA+IgPAAIAAhTIAOAAIAAA/IAmg/IAPAAIAABTg");
	this.shape_4.setTransform(8.7,1.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgVA1QgIgHgFgKQgEgLAAgZQAAghALgLQALgMAWAAIARAAQAAAAABgBQAAAAAAAAQABAAAAgBQAAAAAAgBIANABQgBAIgDADQgDAEgFABIgRAAQgRAAgGAEQgGADgDAIQgDAHAAAMQAFgIAHgEQAHgEAIAAQARAAAKALQALALAAASQAAAPgFAJQgGAJgHAGQgHAFgNAAQgOAAgIgHgAgQgEQgGAIAAAPQAAAOAHAIQAHAHAJAAQAKAAAHgJQAGgIAAgPQAAgNgGgHQgGgJgLAAQgLAAgGAJg");
	this.shape_5.setTransform(-0.3,-0.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgbAgQgKgLAAgVQAAgTAKgMQALgMAQAAQARAAALAMQAKALAAAUIAAADIg9AAQABAOAHAIQAHAHAJAAQAIAAAFgEQAGgFADgIIAPACQgEANgJAGQgJAIgPAAQgRAAgLgMgAgPgZQgGAHgBALIAtAAQgBgKgEgGQgHgIgKAAQgJAAgHAGg");
	this.shape_6.setTransform(-9.2,1.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgjA6IAAhyIANAAIAAAMQAEgHAGgDQAGgDAHgBQALABAHAFQAJAGAEAKQAEAJAAANQAAAMgEAKQgFAJgJAGQgIAFgKABQgGAAgFgDQgHgDgDgFIAAAogAgQgmQgGAJAAAPQAAAQAGAHQAHAIAJAAQAIAAAHgIQAHgIAAgPQAAgQgHgJQgGgHgJgBQgJAAgHAJg");
	this.shape_7.setTransform(-17.8,2.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgGAqIAAhHIgbAAIAAgMIBDAAIAAAMIgbAAIAABHg");
	this.shape_8.setTransform(-26.2,1.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgbAgQgLgLAAgVQAAgWANgLQALgKAOAAQARAAALAMQALALAAAUQAAAPgFAJQgFAJgJAFQgJAGgLAAQgQAAgLgMgAgRgXQgGAIAAAPQAAAQAGAIQAHAIAKAAQAKAAAHgIQAHgIAAgQQAAgPgHgIQgHgHgKAAQgKgBgHAIg");
	this.shape_9.setTransform(-34,1.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AATAqIAAhHIglAAIAABHIgOAAIAAhTIBBAAIAABTg");
	this.shape_10.setTransform(-42.7,1.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// квадрат
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(2,1,1).p("AImj5IAAHzIxLAAIAAnzg");

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFD400").s().p("AolD6IAAnzIRLAAIAAHzg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.потребителижелтый, new cjs.Rectangle(-56,-26,112,52), null);


(lib.потребителибелый = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// текст
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAUAqIAAg+IgmA+IgPAAIAAhTIAOAAIAAA/IAmg/IAPAAIAABTg");
	this.shape.setTransform(42.5,1.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgnApIAAgMIAGAAIAGAAIADgDIAAgNIAAg2IBAAAIAABSIgNAAIAAhGIglAAIAAAoQAAAPgBAEQgBAFgEADQgEAEgIAAIgLgBg");
	this.shape_1.setTransform(32.9,1.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgbAgQgKgLAAgVQAAgTAKgMQALgMAQAAQARAAALAMQAKALAAAUIAAADIg9AAQABAOAHAIQAHAHAJAAQAIAAAFgEQAGgFADgIIAPACQgEANgJAGQgJAIgPAAQgRAAgLgMgAgPgZQgGAHgBALIAtAAQgBgKgEgGQgHgIgKAAQgJAAgHAGg");
	this.shape_2.setTransform(24.8,1.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgGAqIAAhHIgbAAIAAgMIBDAAIAAAMIgbAAIAABHg");
	this.shape_3.setTransform(16.9,1.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAUAqIAAg+IgmA+IgPAAIAAhTIAOAAIAAA/IAmg/IAPAAIAABTg");
	this.shape_4.setTransform(8.7,1.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgVA1QgIgHgFgKQgEgLAAgZQAAghALgLQALgMAWAAIARAAQAAAAABgBQAAAAAAAAQABAAAAgBQAAAAAAgBIANABQgBAIgDADQgDAEgFABIgRAAQgRAAgGAEQgGADgDAIQgDAHAAAMQAFgIAHgEQAHgEAIAAQARAAAKALQALALAAASQAAAPgFAJQgGAJgHAGQgHAFgNAAQgOAAgIgHgAgQgEQgGAIAAAPQAAAOAHAIQAHAHAJAAQAKAAAHgJQAGgIAAgPQAAgNgGgHQgGgJgLAAQgLAAgGAJg");
	this.shape_5.setTransform(-0.3,-0.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgbAgQgKgLAAgVQAAgTAKgMQALgMAQAAQARAAALAMQAKALAAAUIAAADIg9AAQABAOAHAIQAHAHAJAAQAIAAAFgEQAGgFADgIIAPACQgEANgJAGQgJAIgPAAQgRAAgLgMgAgPgZQgGAHgBALIAtAAQgBgKgEgGQgHgIgKAAQgJAAgHAGg");
	this.shape_6.setTransform(-9.2,1.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgjA6IAAhyIANAAIAAAMQAEgHAGgDQAGgDAHgBQALABAHAFQAJAGAEAKQAEAJAAANQAAAMgEAKQgFAJgJAGQgIAFgKABQgGAAgFgDQgHgDgDgFIAAAogAgQgmQgGAJAAAPQAAAQAGAHQAHAIAJAAQAIAAAHgIQAHgIAAgPQAAgQgHgJQgGgHgJgBQgJAAgHAJg");
	this.shape_7.setTransform(-17.8,2.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgGAqIAAhHIgbAAIAAgMIBDAAIAAAMIgbAAIAABHg");
	this.shape_8.setTransform(-26.2,1.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgbAgQgLgLAAgVQAAgWANgLQALgKAOAAQARAAALAMQALALAAAUQAAAPgFAJQgFAJgJAFQgJAGgLAAQgQAAgLgMgAgRgXQgGAIAAAPQAAAQAGAIQAHAIAKAAQAKAAAHgIQAHgIAAgQQAAgPgHgIQgHgHgKAAQgKgBgHAIg");
	this.shape_9.setTransform(-34,1.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AATAqIAAhHIglAAIAABHIgOAAIAAhTIBBAAIAABTg");
	this.shape_10.setTransform(-42.7,1.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// квадрат
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(2,1,1).p("Aolj5IRLAAIAAHzIxLAAg");

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AolD6IAAnzIRLAAIAAHzg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.потребителибелый, new cjs.Rectangle(-56,-26,112,52), null);


(lib.кранбелыйморгает = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(2,1,1).p("ACWBlIAAjIIiWBkgAAAhkIAADIAiVBlIAAjIICVBkg");
	this.shape.setTransform(0,0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,0,0,0.498)").s().p("AAAAAICWhjIAADHgAiVhjICVBjIiVBkg");
	this.shape_1.setTransform(0,0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(2,1,1).p("ACWBlIAAjIIiWBkgAAAhkIAADIAiVBlIAAjIICVBkg");
	this.shape_2.setTransform(0,0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAAAAICWhjIAADHgAiVhjICVBjIiVBkg");
	this.shape_3.setTransform(0,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},10).wait(10));

	// Слой 2
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(2,1,1).p("ACWBlIAAjIIiWBkgAAAhkIAADIAiVBlIAAjIICVBkg");
	this.shape_4.setTransform(0,0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAAAAICWhjIAADHgAiVhjICVBjIiVBkg");
	this.shape_5.setTransform(0,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16,-11,32,22.1);


(lib.кранбелый = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{white:0,red:1,green:2});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("ACWBlIAAjIIiWBkgAAAhkIAADIAiVBlIAAjIICVBkg");
	this.shape.setTransform(0,0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAAAAICWhjIAADHgAiVhjICVBjIiVBkg");
	this.shape_1.setTransform(0,0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AAAAAICWhjIAADHgAiVhjICVBjIiVBkg");
	this.shape_2.setTransform(0,0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00BE00").s().p("AAAAAICWhjIAADHgAiVhjICVBjIiVBkg");
	this.shape_3.setTransform(0,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).to({state:[{t:this.shape_3},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16,-11,32,22.1);


(lib.ШРПжелтый = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// текст
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAiBAIAAhwIhDAAIAABwIgRAAIAAh/IBlAAIAAB/g");
	this.shape.setTransform(14.2,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgwBAIAAh/IAwAAIATABQAKABAGAFQAGAEAEAIQAEAIAAAKQAAAQgKALQgLALgbAAIggAAIAAA0gAgfgCIAgAAQARAAAHgGQAHgGAAgMQAAgIgFgFQgEgGgGgCIgQgBIggAAg");
	this.shape_1.setTransform(2.1,-0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhEBAIAAh/IASAAIAABwIArAAIAAhwIAQAAIAABwIAqAAIAAhwIARAAIAAB/g");
	this.shape_2.setTransform(-12.5,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// квадрат
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(2,1,1).p("Akrj5IJXAAIAAHzIpXAAg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFD400").s().p("AkrD6IAAnzIJXAAIAAHzg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ШРПжелтый, new cjs.Rectangle(-31,-26,62,52), null);


(lib.ПРГкрасный = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// текст
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgpBAIAAh/IBTAAIAAAPIhCAAIAABwg");
	this.shape.setTransform(13.2,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgwBAIAAh/IAwAAIATABQAKABAGAFQAGAEAFAIQADAIAAAKQAAAQgKALQgKALgcAAIggAAIAAA0gAgfgCIAgAAQARAAAGgGQAIgGgBgMQAAgIgDgFQgFgGgGgCIgQgBIggAAg");
	this.shape_1.setTransform(1.9,-0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAiBAIAAhwIhDAAIAABwIgRAAIAAh/IBlAAIAAB/g");
	this.shape_2.setTransform(-10.9,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// квадрат
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(2,1,1).p("Akrj5IJXAAIAAHzIpXAAg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AkrD6IAAnzIJXAAIAAHzg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ПРГкрасный, new cjs.Rectangle(-31,-26,62,52), null);


(lib.ПРГжелтыйморгает = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// текст
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgpBAIAAh/IBTAAIAAAPIhCAAIAABwg");
	this.shape.setTransform(13.2,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgwBAIAAh/IAwAAIATABQAKABAGAFQAGAEAFAIQADAIAAAKQAAAQgKALQgKALgcAAIggAAIAAA0gAgfgCIAgAAQARAAAGgGQAIgGgBgMQAAgIgDgFQgFgGgGgCIgQgBIggAAg");
	this.shape_1.setTransform(1.9,-0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAiBAIAAhwIhDAAIAABwIgRAAIAAh/IBlAAIAAB/g");
	this.shape_2.setTransform(-10.9,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},10).wait(10));

	// квадрат
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FF0000").ss(2,1,1).p("Akrj5IJXAAIAAHzIpXAAg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,0,0,0.498)").s().p("AkrD6IAAnzIJXAAIAAHzg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(2,1,1).p("AEsj5IAAHzIpXAAIAAnzg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFD400").s().p("AkrD6IAAnzIJXAAIAAHzg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).to({state:[{t:this.shape_6},{t:this.shape_5}]},10).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31,-26,62,52);


(lib.ПРГжелтый = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// текст
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgpBAIAAh/IBTAAIAAAPIhCAAIAABwg");
	this.shape.setTransform(13.2,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgwBAIAAh/IAwAAIATABQAKABAGAFQAGAEAFAIQADAIAAAKQAAAQgKALQgKALgcAAIggAAIAAA0gAgfgCIAgAAQARAAAGgGQAIgGgBgMQAAgIgDgFQgFgGgGgCIgQgBIggAAg");
	this.shape_1.setTransform(1.9,-0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAiBAIAAhwIhDAAIAABwIgRAAIAAh/IBlAAIAAB/g");
	this.shape_2.setTransform(-10.9,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// квадрат
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(2,1,1).p("Akrj5IJXAAIAAHzIpXAAg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFD400").s().p("AkrD6IAAnzIJXAAIAAHzg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ПРГжелтый, new cjs.Rectangle(-31,-26,62,52), null);


(lib.ПРГбелый = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// текст
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgpBAIAAh/IBTAAIAAAPIhCAAIAABwg");
	this.shape.setTransform(13.2,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgwBAIAAh/IAwAAIATABQAKABAGAFQAGAEAFAIQADAIAAAKQAAAQgKALQgKALgcAAIggAAIAAA0gAgfgCIAgAAQARAAAGgGQAIgGgBgMQAAgIgDgFQgFgGgGgCIgQgBIggAAg");
	this.shape_1.setTransform(1.9,-0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAiBAIAAhwIhDAAIAABwIgRAAIAAh/IBlAAIAAB/g");
	this.shape_2.setTransform(-10.9,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// квадрат
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(2,1,1).p("Akrj5IJXAAIAAHzIpXAAg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AkrD6IAAnzIJXAAIAAHzg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ПРГбелый, new cjs.Rectangle(-31,-26,62,52), null);


(lib.ГРПГРПБ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// текст
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgwBAIAAh/IBTAAIAAAPIhCAAIAAAnIAfAAQAQAAAKAEQAKADAGAIQAHAJAAAMQAAAKgFAIQgEAJgJAFQgIAFgVAAgAgfAyIAiAAQANAAAHgGQAHgFAAgMQAAgIgEgFQgEgFgHgCQgHgCgQAAIgXAAg");
	this.shape.setTransform(17.8,10.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAiBAIAAhwIhDAAIAABwIgRAAIAAh/IBlAAIAAB/g");
	this.shape_1.setTransform(5,10.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgwBAIAAh/IAwAAIATABQAJABAHAFQAGAEAFAIQADAIAAAKQAAAQgKALQgKALgcAAIggAAIAAA0gAgfgCIAgAAQARAAAGgGQAIgGgBgMQAAgIgDgFQgFgGgGgCIgQgBIggAAg");
	this.shape_2.setTransform(-7.2,10.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgpBAIAAh/IBTAAIAAAPIhCAAIAABwg");
	this.shape_3.setTransform(-17.7,10.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAiBAIAAhwIhDAAIAABwIgRAAIAAh/IBlAAIAAB/g");
	this.shape_4.setTransform(10.9,-11.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgwBAIAAh/IAwAAIATABQAJABAHAFQAHAEADAIQAEAIAAAKQAAAQgKALQgKALgcAAIggAAIAAA0gAgfgCIAgAAQARAAAHgGQAGgGABgMQgBgIgEgFQgDgGgHgCIgQgBIggAAg");
	this.shape_5.setTransform(-1.3,-11.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgpBAIAAh/IBTAAIAAAPIhCAAIAABwg");
	this.shape_6.setTransform(-11.8,-11.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// квадрат
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(2,1,1).p("Akrj5IJXAAIAAHzIpXAAg");

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFD400").s().p("AkrD6IAAnzIJXAAIAAHzg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ГРПГРПБ, new cjs.Rectangle(-31,-26,62,52), null);


(lib.стрелка6x10copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// стрелка
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#213852").s().p("AgxgnIBjAnIhjAog");
	this.shape.setTransform(-5,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.стрелка6x10copy, new cjs.Rectangle(-10,-4,10,8), null);


(lib.графикдавления = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(3,1,1).p("EghbADqQCfA3CBg2QAPgHAOgHQBQgrBEhYQC6jxD2CJQD1CHCPjJQCOjKCxAXQCxAXBhC5QBhC4B7BOQAVAOAUAJQCgA3CBg2QAOgHAOgHQBRgrBDhYQC6jxD2CJQD1CHCPjJQCOjKCxAXQCxAXBhC5QBhC4B7BOQAVAOAVAJ");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-215.5,-27.7,431.1,55.4);


(lib.круг = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgpAqQgSgRAAgZQAAgYASgRQARgSAYAAQAZAAARASQASARAAAYQAAAZgSARQgRASgZAAQgYAAgRgSg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6,-6,12,12);


(lib.ШРП = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 15
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgGAYIAEgHQABAJABgCQAAAAAAgBQABAAAAgBQAAAAAAgBQABgBAAgBIABgHIgBgGQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAAAAAAAIAAABIAAgLQACgDAAgKIAAgFQgBgBAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQgBACgBAKIgDABQABgUAEgGQABAAAAgBQABAAABAAQAAAAAAABQABAAAAABQACAEAAAJQAAAKgDAJQAEAAAAAMQAAAJgCAHQgCAIgDADIgBACQgEAAgBgOg");
	this.shape.setTransform(14,-95.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgFAlQgCgEAAgJIABgMIACgIIADgIIADgJIAAgHIgBgDIgBABIgBAEIgBAIIgEACQABgMACgGQABgHACgDQABgBAAAAQABgBAAAAQABAAAAAAQABAAAAAAQABACABADIABARIAAAUIAAAOIAAAIIgDAFIgCgHIgCAJIgBAFIgCABQAAAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAgAAAAEIgBAGIgBAHIABAGQAAABAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAIABgEIABgHIAAgLIAAgDIgCAFg");
	this.shape_1.setTransform(11.9,-93.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AgEgcIAJgMIAAAOIgFAIIAAA2IgEAFg");
	this.shape_2.setTransform(9.9,-91.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AgDgEIAHgJIAAASIgHAJg");
	this.shape_3.setTransform(8.1,-89.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AgFAhQgCgHAAgSQAAgKABgJQABgKACgGQACgGABgDQAEgEACAIQACAJAAAPIgBATQgBALgCAGQgCAGgCACIgBACQgCAAgCgFgAAAgVIgCAJIgBAQIABAPQABABAAABQAAAAABABQAAAAAAAAQAAAAAAgBQACgBABgHIABgQIgBgPQAAgBgBAAQAAgBAAAAQAAgBAAAAQgBAAAAAAIgBAAg");
	this.shape_4.setTransform(6.1,-87.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AgGgaIAEgFIAAAaIAFgHIAAgaIAEgEIAABFIgEAEIAAgdIgFAGIAAAeIgEAFg");
	this.shape_5.setTransform(3.7,-84.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AgFAgQgBgJAAgPQAAgRACgLQACgMACgEQABAAAAgBQABAAABAAQAAAAABAAQAAABABABQABADABALIgEAIQAAgLgDADQAAACgBAFIgBAQQAAANABAEQAAABAAABQABABAAAAQAAAAAAAAQAAAAAAgBIACgFIABgLIAEgBQgBAagGAHIgBABQgCAAgCgGg");
	this.shape_6.setTransform(1.4,-82.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AgFAlQgBgEgBgJIABgMIACgIIAEgIIACgJIAAgHIgBgDIgBABIgBAEIgBAIIgEACQABgMABgGQACgHACgDQABgBAAAAQABgBAAAAQABAAAAAAQABAAAAAAQABACABADIABARIAAAUIAAAOIABAIIgFAFIgBgHIgCAJIgBAFIgCABQAAAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAgAAAAEIgBAGIgBAHIABAGQAAABAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAIABgEIABgHIAAgLIAAgDIgCAFg");
	this.shape_7.setTransform(-2.3,-78);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AgGgaIANgQIAABFIgEAFIAAg3IgFAGIAAA3IgEAFg");
	this.shape_8.setTransform(-4.6,-75.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("AgFAhQgCgHAAgSQAAgKABgJQABgKACgGQACgGABgDQAEgEACAIQACAJAAAPIgBATQgBALgCAGQgCAGgCACIgBACQgCAAgCgFgAAAgVIgCAJIgBAQIABAPQABABAAABQAAAAABABQAAAAAAAAQAAAAAAgBQACgBABgHIABgQIgBgPQAAgBgBAAQAAgBAAAAQAAgBAAAAQgBAAAAAAIgBAAg");
	this.shape_9.setTransform(-7,-72.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AgFAiQgBgHAAgSQAAgRABgNQACgLADgDQADgEACAHQACAIAAAUIAAADIgJAKIABAMQAAAAABABQAAABAAAAQAAAAAAAAQAAAAAAAAQACgCABgLIAEgCIgDATQgCAHgCACIgBACQgCAAgCgEgAAAgWQgBACgBAFIAAANIAFgGIgBgMIgCgCIAAAAg");
	this.shape_10.setTransform(-9.3,-70.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("AgGgaIAEgFIAAAZIAFgGIAAgZIAEgFIAABFIgEAFIAAgeIgFAGIAAAeIgEAFg");
	this.shape_11.setTransform(-11.7,-67.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("AgEgcIAJgMIAAAPIgFAGIAAA3IgEAFg");
	this.shape_12.setTransform(-13.7,-65.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0000").s().p("AgHAuQgCgKAAgYIAAgdQACgNACgIQADgIACgDQAFgFADAJQACAKAAAYQAAAYgCARQgDAPgFAFIgCACQgDAAgCgGgAAAggQgCADgBAJQgCAKAAAQQAAARACAGQABAHACgDQADgDABgKQACgKAAgQQAAgRgBgGQgBgBAAgBQgBgBAAAAQAAgBgBAAQAAAAAAAAIgCABg");
	this.shape_13.setTransform(-16.1,-64.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 16
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#333333").ss(1,1,1,3,true).p("AE/q9IAAA9IAABOIgGAHIAAhOIAGgHAE/q9IAAAAIAAAAgACaoIICli1AFtrvIAAAAIgBAAgAE/lwIAABcIAAA8IgVAZIgQATIAAgBIiACZIhZBpIgEAFIAAAAIAACnIglAAIgXAcIAAh8IgBADIgYAcIgXAcAE/lwIgGAIIAABbIAGgHAEqECIgQAAIAAmuAE/jYIAAHaIgVAbIAAgbAEqi/IAAHBACaoIIAAH0AE/oyIAADCAlrkpIgBAAIFblpQAEgDADgDQAQgTASgSIEnAAAgwiJIgKAAIAAhkIAKAAIAHgIIAABkIgHAIIAADMIAHgIIAABkIgHAIIgKAAIAAhkIAKAAAh0jfIAAABIAAAAgACRhCIgMAOIAAhgIAMgOgAgwjtIAAg8Ik7AAAlrDdIAoAAIAAITIgoAAIAAoTIAAoGAABChIAAAAAABChIgBADAAYCFIgXAcAA9BaIglArIAAB8AgwDdIAAgBIABAAAhYDdIAoAAIABgBAgwCnIAAA1AhYDdIjrAAAgwLwIgoAAIAAoTAgYDAIAAIRIgYAfAgwDdIAAITAgwkpIDKjf");
	this.shape_14.setTransform(-15.4,-47.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#C69E00").s().p("AgFgoIALgOIAABfIgLAOg");
	this.shape_15.setTransform(-1.5,-58.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFCF00").s().p("AipEhIAAoTIAoAAIAAITgACSjyIAAgBIAYgbIAAIQIgYAegABqEgIAAoSIAoAAIAAISgACqkgIAAASIgYAbg");
	this.shape_16.setTransform(-34.9,-1.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#D6AE00").s().p("AgKDgIAAnBIAVgZIAAHaIgVAbg");
	this.shape_17.setTransform(15.4,-44.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#AD8E00").s().p("AiTByIAAAAIAXgbIAAB7IgXAdgACFDTIAAmuIAPgTIAAHBgAh8DSIAAh7IAkgsIAAAAIAACngAh8DSg");
	this.shape_18.setTransform(-0.5,-43.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#FFD400","#D5AF00"],[0.004,1],-26.3,10.4,24.2,10.4).s().p("Ai3GXIAHgIIAAhjIgHAHIAAjNIAHgHIAAhjIgHAGIAAg6IDKjfIAAHyIhYBqIgFAGIgkArIgXAcIgDADIgXAcIAAgSIgYAuIAAAAgAgBBcIAABgIALgPIAAhfgAiFGSIAAAAIgDADgAhKFLIAFgGIgFAGgAhFFFgAATkXICli1IAAA9IgHAHIAABOIAHgHIAADCIgHAIIAABbIAHgIIAAA8IgWAZIgPATIAAgBIiACYg");
	this.shape_19.setTransform(-1.9,-71.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#C49C00").s().p("Ai8GUIAAhkIAKAAIAHgIIAABkIgHAIgAi8BjIAAhjIAKAAIAHgIIAABjIgHAIgAC3h7IAGgIIAABcIgGAHgAC3mMIAGgHIAABOIgGAHg");
	this.shape_20.setTransform(-2.4,-71.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#FFD400","#D5AF00"],[0.004,1],91.2,26.1,91.2,-28.6).s().p("AlVDKIAAAAIFaloIAGgGIAkglIEnAAIAAAAIAAAAIAAAAIAAAAIilC1IjKDeg");
	this.shape_21.setTransform(-17.7,-97.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F8CE00").s().p("AB2EDIjrAAIgoAAIAAoFIE7AAIAAA7IgKAAIAABkIAKAAIAADMIgKAAIAABkIAKAAIAAA2IAAAAgABZi4IABAAIAAAAg");
	this.shape_22.setTransform(-36.1,-51.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52.8,-124,74.9,152.4);


(lib.уплот01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(1,1,1,3,true).p("AgVghQAKgGALAAQAEAAAEABQAMACAIAJQAIAIADAKQABAFAAAEQAAAKgEAIAAjAVQgBABgBACQgCACgDACQgLAMgRAAQgQAAgLgMQgMgLAAgRQAAgQAMgLQABgCABgB");
	this.shape.setTransform(-0.8,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#333333").ss(1,1,1,3,true).p("AAVAlQACgCABgBQABgCABgBQALgQAAgMQAAgPgLgMQgMgMgQAAQgPAAgQAQQAAABgBAAAAZAfQgBABgBACAgkgQQABgCABgBQABAAABAA");
	this.shape_1.setTransform(0.3,-0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#666666","#B4B4B4","#666666"],[0,0.518,1],11.2,-18.5,15,-15.4).s().p("AAbAQIgBgKQgDgJgIgIQgIgJgLgCIgIgBQgNAAgJAGIAAAAQAPgQAPAAQAQAAAMAMQALALAAAQQAAALgLARIgBAAQAEgIAAgKg");
	this.shape_2.setTransform(0.5,-0.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#666666","#B4B4B4","#666666"],[0,0.518,1],0,0.1,0,0,0.1,4.1).s().p("AgbAcQgMgLAAgRQAAgQAMgMIACgCIADgCIABgBQAKgGALAAIAIABQAMACAIAIQAIAJADAKIABAJQAAAKgEAIIgBADIgCACIgFAFQgLAMgRAAQgQAAgLgMg");
	this.shape_3.setTransform(-0.8,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.8,-5,10.9,11);


(lib.лампа = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 9
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(1.5,1,1).p("AAAgEIAAAJ");
	this.shape.setTransform(0,-0.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1,3,true).p("AgQgvIABAAQACgDAHgCQAGgCAFAAQAHAAADACQABABAAAAAAQgwIAAABQgDACgGACQgGACgGAAQgHAAgDgCQAAAAgBgBAgrgRQABADADABQADACAFABQAHACAKAAQAQAAAQgFQAIgCAFgDQAHgDADgEQACgCABgCAApgkQACACABACAAfAkQAAAAgBABAgCA2IgBAAQgCABgBgB");
	this.shape_1.setTransform(0,4.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,0,1,3,true).p("AgFAHIAAAAQgTgBgGgIAAfgJQgLAPgWAB");
	this.shape_2.setTransform(0,9.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,0,1,3,true).p("AAsgZQAAABAAABQAAgDgCgDQgHgKgTgGQACACgCACAAfgMIAAAgIAAAWAgQglQgBgBABgCIAAAAAgQgoQgZAOgCAKQgBAEABACAgfAzIAAgfIAAgX");
	this.shape_3.setTransform(0,4.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#CCCCCC","#FFFFFF","#CCCCCC"],[0,0.518,1],-3.5,-6.8,2.5,-6.8).s().p("AgGAUIAAAAQgSgBgHgJIAAgdIA+AAIAAAVIAAABQgLAQgWABIAAAAIgBAAIgDAAg");
	this.shape_4.setTransform(0,8.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#CCCCCC","#FFFFFF","#CCCCCC"],[0,0.518,1],-3.5,-4,2.5,-4).s().p("AgfAQIAAgXQAHABAKAAQAQAAARgEIAMgFIAAAfg");
	this.shape_5.setTransform(0,4.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["#666666","#B4B4B4","#666666"],[0,0.518,1],0,0,0,0,0,1.9).s().p("AgOAEIgCAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAAAIAAgBIABAAQACgCAHgCQAGgBAGAAQAGAAADABIABABQABABAAAAQAAAAAAABQAAAAAAABQAAAAgBAAIAAAAQgCADgHABQgGACgGAAQgGAAgDgCg");

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#666666","#B4B4B4","#666666"],[0,0.518,1],2.1,-22.6,7.8,-21.1).s().p("AgfAUQgEgBgEgCIgEgEQgBgCABgDQACgKAZgOQAAABAAAAQAAAAAAABQAAAAAAAAQAAABAAAAIACABQADACAGAAQAGAAAGgCQAHgCACgDIAAAAQABAAAAgBQAAAAAAgBQAAAAAAgBQAAAAgBAAQAUAGAGAJIACAFIgCAFQgEAEgHADIgMAFQgRAEgQAAIgBAAQgJAAgHgBg");
	this.shape_7.setTransform(0,1.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.5,-7.9,25.1,19.3);


(lib.конус01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// купол
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(1,1,1,3,true).p("AgygeIAZgQIAagQIAaAJIAAAAQAAAAABAAIAXAIAgrA/IAAAA");
	this.shape.setTransform(0,-18.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#666666","#B4B4B4","#666666"],[0,0.518,1],-3,-1,2.3,0.9).s().p("AgXAJQAAgBgBAAQAAgBgBAAQAAgBAAAAQAAAAAAgBIAagPIAZAJIAAAAIgBACIgBABQgDAEgKACQgKADgJAAIAAAAQgKAAgFgCg");
	this.shape_1.setTransform(0,-23.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#666666","#B4B4B4","#666666"],[0,0.518,1],-13.2,-3.9,8.8,3.9).s().p("AgjAnQgoAAgTgMQgKgGAAgHQAAgHAGgHIABAAIADgDIAEgEIABAAIAMgHIAEgDQgLANAOAHQAOAJAegBQAeAAAdgIQAdgIAMgMIAAAAQAKgLgKgIIgCgBIAAgBIARAGIAAABIAGADQASALgPARIAAAAQgHAHgNAHQgOAHgUAGQggAKghABIgLABIgDAAg");
	this.shape_2.setTransform(0,-18.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#666666","#B4B4B4","#666666"],[0,0.518,1],-9.4,-3.2,6.7,2.7).s().p("AhGAVQgOgJALgMIAAAAIAAAAIAXgNQgEAGAIAFQAJAFAUgBQAUAAATgFQAUgFAHgIIAAgBQAGgGgEgFIAAAAIAVAIIAAAAIACABQAKAIgKALIAAAAQgMAMgdAIQgdAJgeAAIgCAAQgdAAgNgIg");
	this.shape_3.setTransform(0,-19.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#666666","#B4B4B4","#666666"],[0,0.518,1],-5,-5.8,5.7,-2).s().p("AguAOQgIgFAEgGIAZgPQAAABAAABQAAAAAAAAQABABAAAAQABABAAAAQAFADAKAAQAJAAAKgDQAKgDADgEIABAAIABgEIACAAIAXAIIAAABQAEAFgGAFIAAAAQgIAIgTAGQgTAGgUAAIAAAAQgUAAgJgGg");
	this.shape_4.setTransform(0,-21.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#666666","#B4B4B4","#666666"],[0,0.518,1],-19,3,8.3,12.5).s().p("Ah1AiQgXgOASgUIABgBIAGgGIAZgPIgEADIgDADIAAABQgHAIAAAGQAAAHAKAGQATALApAAIANAAQAhgCAhgKQATgFAOgHQANgGAHgIIABgBQAOgQgSgMIgGgDIACABQAPADAKAFIADACQAWAOgSAVIAAAAQgTAUgwAOQgxAPgyAAIAAAAIgDAAQgxAAgWgOg");
	this.shape_5.setTransform(0,-16.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// толщина
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#333333").ss(1,1,1,3,true).p("ACcgdQgXAZg7AQQg9ASg9AAQg/ABgcgSQgMgIgEgJ");
	this.shape_6.setTransform(-0.5,-3.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#333333").ss(1,1,1,3,true).p("AigBgIAAhpIAAgBQAAgDAAgCQACgJAJgKQAWgZA8gRQA8gSA9gBQA/AAAcASQANAIACAJQABAEgBAFQAAAAAAAAIABA0QAAACAAACIAAAuQgCAJgJAKACWgiIAAAA");
	this.shape_7.setTransform(0,-13.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#464646").s().p("AiQArIgFgDIAAAAQgJgHgCgIIAAgBIAAgFQACgJAJgKQAWgYA8gRQA8gSA9gBQA/AAAcASQANAIACAJQABAEgBAFIAAAAQgBAIgIAIIgBAAIAAAAQgVAXg1ARIgIADQg8ARg9ABIgCAAQg9AAgcgSg");
	this.shape_8.setTransform(0,-16.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#666666","#B4B4B4","#666666"],[0,0.518,1],-16.2,9.7,6.6,9.7).s().p("AiQBKQgNgIgDgKIAAhpQACAJAJAHIAAAAIAFADQAcASA/gBQA9AAA8gSIAIgCQA1gRAVgXIAAAAIABgBQAIgJABgHIABA1IAAAEIAAAtQgCAJgJAKQgXAZg7ARQg8ASg9AAIgCAAQg9AAgcgRg");
	this.shape_9.setTransform(0,-9.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]}).wait(1));

	// нога
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#3C3C3C").ss(1,1,1,3,true).p("AgaA2QggABgOgJQgGgEgBgFQgBgCABgCIAAhBQAMABANAAQAOAAAOgBQAvgDAvgOQAGgCAGgCIAABBQAAABAAABQAAAFgFAFIAAAAQgLANgeAIQgeAJgeAAIAAAAg");
	this.shape_10.setTransform(0,-2.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FF0000").ss(1,1,1,3,true).p("AAAAAIAAAA");
	this.shape_11.setTransform(-2.7,3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#666666","#B4B4B4","#666666"],[0,0.518,1],-13.4,1.1,8,1.1).s().p("AhIAuQgGgEgBgFIAAgEIAAhBIAZABIAcgBQAvgDAvgOIAMgEIAABBIAAACQAAAFgFAFIAAAAQgLANgeAIQgeAJgeAAIAAAAIAAAAIgCAAQgeAAgOgIg");
	this.shape_12.setTransform(0,-2.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.1,-25.5,34.2,29.6);


(lib.выкл = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.5,1,1).p("AgIAMIARgX");
	this.shape.setTransform(1.5,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#333333").ss(1,1,1,3,true).p("AARglQABgBACABQAFABAAANQAAAMgFAPQgFAQgHAKQgGAHgDACQgBAAgCAAIgMAAQgBAAgCAAQgFgCAAgMQAAgNAFgPQAFgQAHgKQAGgHADgBQABgBACABgAgEAnQgDgCgBgFQgBgDAAgEQAAgNAFgPQAEgQAIgKQAAgBABgBQAEgGAEAA");
	this.shape_1.setTransform(0.8,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#666666","#B4B4B4","#666666"],[0,0.518,1],0,0,0,0,0,1.3).s().p("AgLAnQgDgCgCgFIAAgIQAAgMAFgPQAFgQAGgKIABgCQAFgGADgBIADAAQAFACAAANQAAAMgFAPQgFAQgHAKQgEAHgEACIgCAAIgBAAg");
	this.shape_2.setTransform(1.5,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#666666","#B4B4B4","#666666"],[0,0.518,1],19.2,-3.7,19.2,0.4).s().p("AgPAnQgFgCAAgNQAAgMAFgPQAFgQAIgKQAEgHAEgCIADAAIAMAAQgEABgEAGIgBACQgIAKgEAQQgFAPAAAMIABAIQABAFADACIgMAAIgBAAIgCAAg");
	this.shape_3.setTransform(0.3,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.7,-4.9,7,9.8);


(lib.дверца = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(1,1,1,3,true).p("AAemPIAAMfIg7AAIAAsfg");
	this.shape.setTransform(3,40);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AgdGQIAAsfIA7AAIAAMfg");
	this.shape_1.setTransform(3,40);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,8,82);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D2E2EF").s().p("EgxcA5HMAAAhyNMBi5AAAMAAAByNg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(-316.5,-365.5,633,731), null);


(lib.ГРУ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag4BaIAAgWQAKAHALgBQAIABAHgHQAHgFAHgVIhKiHIAYAAIA8BxIA1hxIAZAAIhHCPQgLAcgJAHQgIAJgQAAQgJAAgOgEg");
	this.shape.setTransform(15.5,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhGBdIAAi5IBGAAQASAAAKACQANACAKAHQAJAGAFALQAGAMAAAOQAAAXgPAQQgPAQgoAAIguAAIAABMgAgtgEIAvAAQAXAAALgJQAKgIgBgQQAAgMgFgIQgGgJgJgCQgHgCgRAAIguAAg");
	this.shape_1.setTransform(-0.5,-0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ag7BdIAAi5IB3AAIAAAWIhfAAIAACjg");
	this.shape_2.setTransform(-15.6,-0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(2,1,1).p("AlRi7IKjAAIAAF3IqjAAg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AlRC7IAAl1IKiAAIAAF1g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ГРУ, new cjs.Rectangle(-34.7,-19.7,69.5,39.5), null);


(lib.стрелкаэталон80 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.стр1210();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1,1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ao0AeIAAg7IRpAAIAAA7g");
	mask.setTransform(68.5,0);

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EhDaAAUIAAgnMCG1AAAIAAAng");
	this.shape.setTransform(443.5,0);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.стрелкаэталон80, new cjs.Rectangle(0,-7.5,125,15), null);


(lib.муравьимногожелтые = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.муравей1желтый("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(487.5,0);

	this.instance_1 = new lib.муравей1желтый("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(462.5,0);

	this.instance_2 = new lib.муравей1желтый("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(437.5,0);

	this.instance_3 = new lib.муравей1желтый("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(412.5,0);

	this.instance_4 = new lib.муравей1желтый("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(387.5,0);

	this.instance_5 = new lib.муравей1желтый("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(362.5,0);

	this.instance_6 = new lib.муравей1желтый("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(337.5,0);

	this.instance_7 = new lib.муравей1желтый("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(312.5,0);

	this.instance_8 = new lib.муравей1желтый("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(287.5,0);

	this.instance_9 = new lib.муравей1желтый("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(262.5,0);

	this.instance_10 = new lib.муравей1желтый("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(237.5,0);

	this.instance_11 = new lib.муравей1желтый("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(212.5,0);

	this.instance_12 = new lib.муравей1желтый("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(187.5,0);

	this.instance_13 = new lib.муравей1желтый("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(162.5,0);

	this.instance_14 = new lib.муравей1желтый("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(137.5,0);

	this.instance_15 = new lib.муравей1желтый("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(112.5,0);

	this.instance_16 = new lib.муравей1желтый("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(87.5,0);

	this.instance_17 = new lib.муравей1желтый("synched",0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(62.5,0);

	this.instance_18 = new lib.муравей1желтый("synched",0);
	this.instance_18.parent = this;
	this.instance_18.setTransform(37.5,0);

	this.instance_19 = new lib.муравей1желтый("synched",0);
	this.instance_19.parent = this;
	this.instance_19.setTransform(12.5,0);

	this.instance_20 = new lib.муравей1желтый("synched",0);
	this.instance_20.parent = this;
	this.instance_20.setTransform(-12.5,0);

	this.instance_21 = new lib.муравей1желтый("synched",0);
	this.instance_21.parent = this;
	this.instance_21.setTransform(-37.5,0);

	this.instance_22 = new lib.муравей1желтый("synched",0);
	this.instance_22.parent = this;
	this.instance_22.setTransform(-62.5,0);

	this.instance_23 = new lib.муравей1желтый("synched",0);
	this.instance_23.parent = this;
	this.instance_23.setTransform(-87.5,0);

	this.instance_24 = new lib.муравей1желтый("synched",0);
	this.instance_24.parent = this;
	this.instance_24.setTransform(-112.5,0);

	this.instance_25 = new lib.муравей1желтый("synched",0);
	this.instance_25.parent = this;
	this.instance_25.setTransform(-137.5,0);

	this.instance_26 = new lib.муравей1желтый("synched",0);
	this.instance_26.parent = this;
	this.instance_26.setTransform(-162.5,0);

	this.instance_27 = new lib.муравей1желтый("synched",0);
	this.instance_27.parent = this;
	this.instance_27.setTransform(-187.5,0);

	this.instance_28 = new lib.муравей1желтый("synched",0);
	this.instance_28.parent = this;
	this.instance_28.setTransform(-212.5,0);

	this.instance_29 = new lib.муравей1желтый("synched",0);
	this.instance_29.parent = this;
	this.instance_29.setTransform(-237.5,0);

	this.instance_30 = new lib.муравей1желтый("synched",0);
	this.instance_30.parent = this;
	this.instance_30.setTransform(-262.5,0);

	this.instance_31 = new lib.муравей1желтый("synched",0);
	this.instance_31.parent = this;
	this.instance_31.setTransform(-287.5,0);

	this.instance_32 = new lib.муравей1желтый("synched",0);
	this.instance_32.parent = this;
	this.instance_32.setTransform(-312.5,0);

	this.instance_33 = new lib.муравей1желтый("synched",0);
	this.instance_33.parent = this;
	this.instance_33.setTransform(-337.5,0);

	this.instance_34 = new lib.муравей1желтый("synched",0);
	this.instance_34.parent = this;
	this.instance_34.setTransform(-362.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-369,-1.5,863,3);


(lib.муравьибегутжелтые = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.муравьимногожелтые("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-23.2},14).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-369,-1.5,863,3);


(lib.size = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.стрелка6x10();
	this.instance.parent = this;
	this.instance.setTransform(-23.8,-16.4,1,1,0,0,180);

	this.instance_1 = new lib.стрелка6x10();
	this.instance_1.parent = this;
	this.instance_1.setTransform(23.7,-16.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAeAqIAAhDIgZBDIgLAAIgYhGIAABGIgNAAIAAhSIAWAAIAVBBIAYhBIAUAAIAABSg");
	this.shape.setTransform(20.5,11);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgZAvQgMgPAAggQAAgUAFgLQAEgNAIgHQAJgGALgBQAJABAHADQAHAEAFAHQAEAHADAKQACAKABAQQgBAUgEAMQgEANgIAGQgIAIgNAAQgPAAgKgMgAgOgmQgIALAAAbQAAAcAHAKQAGAJAJAAQAKAAAGgJQAHgKAAgcQAAgbgHgKQgGgJgKAAQgJAAgFAIg");
	this.shape_1.setTransform(10.5,9.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgZAvQgMgPABggQgBgUAFgLQAEgNAIgHQAIgGAMgBQAJABAHADQAHAEAFAHQAEAHADAKQACAKABAQQgBAUgEAMQgEANgIAGQgJAIgMAAQgPAAgKgMgAgOgmQgIALAAAbQAAAcAHAKQAHAJAIAAQAJAAAIgJQAGgKAAgcQAAgbgGgKQgIgJgJAAQgJAAgFAIg");
	this.shape_2.setTransform(1.6,9.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAHA6IAAhZIgMAKIgPAHIAAgOQAMgFAIgIQAIgIAEgIIAJAAIAABzg");
	this.shape_3.setTransform(-7.9,9.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgVAHIAAgNIArAAIAAANg");
	this.shape_4.setTransform(-14.4,11);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgaAwQgKgIgBgPIAPgBQACALAFAFQAHAGAIAAQAJAAAHgIQAHgHAAgNQAAgMgGgGQgIgHgJAAQgHAAgFADQgGADgDAEIgOgBIALg7IA5AAIAAAOIgtAAIgGAfQAKgIAKAAQAPAAALALQAKAKAAAPQAAAQgJALQgLAOgSABQgPAAgLgKg");
	this.shape_5.setTransform(-21.5,9.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(3,1,1).p("AiVAAIErAA");
	this.shape_6.setTransform(0,-16.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.size, new cjs.Rectangle(-28,-20.4,56.1,41), null);


(lib.давление = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 9
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(3,1,1).p("A5EAAMAyJAAA");
	this.shape.setTransform(-200.3,-25.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(50));

	// Layer 5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A5EHCIAAuDMAyJAAAIAAODg");
	mask.setTransform(-201.9,313.9);

	// Layer 3
	this.instance = new lib.графикдавления("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-39.9,312.3,1.5,1.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-362.5},49).wait(1));

	// сетка
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(33,56,82,0.251)").ss(1,1,1,3,true).p("AhnnRIksAAIAAkNAhnreIAAENIErAAIAAkNAq/nRIksAAIksAAIktAAAq/reIAAENIAAEsIAAErIAAEsIAAEtAvrilIAAErIEsAAAvrGyIAAEtAq/ilIksAAIAAksAq/GyIksAAIAAksIksAAIAAEsIEsAAADECGIAAkrIkrAAIAAErIksAAIAAkrIEsAAIAAksAhnLfIAAktIksAAIAAEtADEGyIAAEtAmTGyIAAksIksAAADECGIkrAAIAAEsIErAAgAq/GyIEsAAADEilIAAksIEsAAIEsAAIEsAAIAAEsIksAAIksAAIAAErIAAEsIksAAAmTnRIAAEsIksAAAq/nRIEsAAAZFnRIjRAAIAAkNARIreIAAENIEsAAIAAEsIAAErIAAEsAHwreIAAENIAAEsIksAAAMcnRIAAkNARICGIAAkrAMcCGIAAkrIAAksAMcCGIksAAIksAAAMcGyIAAEtAHwLfIAAktIEsAAIEsAAIAAEtAMcCGIEsAAIAAEsIEsAAAMcGyIAAksAZFCGIjRAAIksAAAV0ilIDRAAAV0LfIAAktIDRAAAV0ilIksAAA0XilIAAErIktAAA0XilIktAAA0XLfIAAktIktAAA0XnRIAAEsIEsAA");
	this.shape_1.setTransform(-201.9,313.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(33,56,82,0.251)").ss(1,1,1,3,true).p("A0XnRIAAEsIktAAA0XnRIktAAA0XCGIktAAA0XGyIktAAA0XCGIAAEsIEsAAIAAksIEsAAIAAEsIksAAIAAEtA0XilIAAErIEsAAAq/nRIAAEsIksAAIAAksIksAAAq/nRIksAAAvrilIAAErAq/ilIAAErIEsAAIAAkrgADEilIAAksIAAkNAhnilIAAksIksAAIAAEsgAhnGyIksAAIAAksAhnCGIksAAAhnCGIAAEsIErAAIAAksAhnCGIErAAIAAkrIkrAAgAhnnRIErAAIEsAAIAAEsIAAErIEsAAIEsAAIAAEsIEsAAAq/GyIEsAAIAAEtAq/reIAAENIEsAAIAAkNAhnreIAAENARInRIAAEsIksAAIAAksgAMcilIksAAIksAAAHwnRIEsAAIAAkNAHwCGIAAEsIEsAAIAAksIAAkrAMcGyIEsAAIAAEtARICGIAAkrAV0nRIAAEsIDRAAAZFnRIjRAAAV0CGIAAEsIDRAAAZFCGIjRAAAV0ilIAAErIksAAAV0ilIksAAAHwreIAAENARIreIAAENIEsAAIAAkNAHwGyIksAAIAAEtAHwCGIksAAA0XilIEsAAA0XLfIAAktAhnLfIAAktAHwLfIAAktAMcGyIAAEtAq/GyIAAEtAV0LfIAAkt");
	this.shape_2.setTransform(-201.9,-50.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(50));

	// оси
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#213852").s().p("AAhA4IgcgoIgFgIIgEAJIgcAnIgSAAIArg5Igmg2IASAAIAUAdIAIANIAJgMIAWgeIAQAAIgnA1IAqA6g");
	this.shape_3.setTransform(-294.9,250.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#213852").s().p("AAqA4IAAhvIAOAAIAABvgAg3A4IAAhvIAOAAIAAAwIAbAAQAaAAAHAIQAJAKAAAMQAAANgJAKQgJAKgXAAgAgpArIAbAAQAOAAAGgEQAGgFAAgKQAAgHgDgFQgEgFgFgBQgHgCgNAAIgVAAg");
	this.shape_4.setTransform(-306.9,250.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#213852").s().p("AgpA4IAAhvIApAAQAMAAAIAEQAIADAEAHQAFAHAAAIQAAAHgEAGQgEAGgIAEQAKADAGAGQAFAIAAAJQAAAIgDAHQgEAHgFADQgEAEgHACQgIACgKAAgAgaArIAbAAIAKgBQAEgBAEgCQAEgCABgEQADgEAAgGQAAgGgEgEQgDgFgFgCQgGgCgJAAIgaAAgAgagIIAYAAQAJAAAEgBQAGgCADgEQACgEAAgGQAAgFgCgEQgDgFgFgBQgFgCgLAAIgWAAg");
	this.shape_5.setTransform(-318.8,250.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#213852").s().p("AAoBJQgTALgWAAQgXAAgTgMQgTgLgLgUQgKgVAAgYQAAgaAKgUQALgVATgLQATgLAXAAQAXAAATALQATAMAKAUQAKAUAAAaQAAAUgGARQgHARgNAMQAQALAOAFIgHAQQgTgHgSgOgAgrg4QgQARAAAjQAAAgAQASQARASAZAAQAMAAAKgEQgKgHgLgDIAEgRQAUAGANALQAUgTAAgjQAAgVgHgQQgHgPgOgJQgOgJgQAAQgZAAgRASg");
	this.shape_6.setTransform(-333.4,246.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#213852").s().p("AAhA4IgcgoIgFgIIgEAJIgcAnIgSAAIArg5Igmg2IASAAIAUAdIAIANIAJgMIAWgeIAQAAIgnA1IAqA6g");
	this.shape_7.setTransform(-297.6,-113.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#213852").s().p("AAqA4IAAhvIAOAAIAABvgAg3A4IAAhvIAOAAIAAAwIAbAAQAaAAAHAIQAJAKAAAMQAAANgJAKQgJAKgXAAgAgpArIAbAAQAOAAAGgEQAGgFAAgKQAAgHgDgFQgEgFgFgBQgHgCgNAAIgVAAg");
	this.shape_8.setTransform(-309.6,-113.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#213852").s().p("AgpA4IAAhvIApAAQAMAAAIAEQAIADAEAHQAFAHAAAIQAAAHgEAGQgEAGgIAEQAKADAGAGQAFAIAAAJQAAAIgDAHQgDAHgGADQgEAEgHACQgIACgKAAgAgaArIAbAAIAKgBQAEgBAEgCQAEgCABgEQADgEAAgGQAAgGgEgEQgDgFgFgCQgGgCgJAAIgaAAgAgagIIAYAAQAJAAAEgBQAGgCADgEQACgEAAgGQAAgFgCgEQgDgFgFgBQgFgCgLAAIgWAAg");
	this.shape_9.setTransform(-321.5,-113.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#213852").s().p("AhBBWIAAirIBBAAQARAAAIACQANACAJAGQAIAGAFALQAGAKAAANQAAAWgPAOQgNAPgkAAIgrAAIAABGgAgpgDIArAAQAVAAAKgIQAJgJAAgPQAAgKgFgIQgFgIgJgCQgHgCgPABIgqAAg");
	this.shape_10.setTransform(-334.4,-118.6);

	this.instance_1 = new lib.стрелка6x10copy();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-362.3,229.8,1.5,1.5,-90);

	this.instance_2 = new lib.стрелка6x10copy();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-24.8,387.3,1.5,1.5);

	this.instance_3 = new lib.стрелка6x10copy();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-362.3,-134.8,1.5,1.5,-90);

	this.instance_4 = new lib.стрелка6x10copy();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-24.8,22.7,1.5,1.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#213852").ss(2,1,1).p("A41w/IAAguIguAAEgY1An+IAAgtIguAAA41RAIAAWRMAyZAAAA41xtMAyZAAAEgY1gn9IAAWQ");
	this.shape_11.setTransform(-203.4,136);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).wait(50));

	// Layer 1
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(1,1,1).p("A2k8eIrGAAIAAceA2k8eIAAuEMA4PAAAIAAcIMg4PAAAgAFjObIAAubIuPAAAFjObIcIAAIAAcIMg4PAAAIAA8Ig");
	this.shape_12.setTransform(-232.8,130);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#9CC1D3","#D6E3EF","#D6E3EF","#9CC1D3"],[0,0.318,0.722,1],987.5,64.4,987.7,-100.6).s().p("A8HOEIAA8HIcHAAIcIAAIAAcHg");
	this.shape_13.setTransform(-197.3,312.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#9CC1D3","#D6E3EF","#D6E3EF","#9CC1D3"],[0,0.318,0.722,1],-117,82.5,-117,-28.5).s().p("A8HOEIAAuEIAAuDMA4PAAAIAAcHg");
	this.shape_14.setTransform(-197.3,-52.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]}).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-449.3,-143.3,433,546.6);


(lib.выноскаморгает = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 6
	this.instance = new lib.круг("synched",0);
	this.instance.parent = this;
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 0, 0, 0)];
	this.instance.cache(-8,-8,16,16);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({startPosition:0},0).wait(10));

	// Слой 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(1,1,1).p("AAAo7IAAR3");
	this.shape.setTransform(0,-57.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AAAo7IAAR3");
	this.shape_1.setTransform(0,-57.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},10).wait(10));

	// Слой 4
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FF0000").ss(1,1,1).p("AFhjKQATAUADAZIAAE7QgDAZgTAUQgVAVgdABIpcAAQgegBgVgVQgVgWgBgdIAAkuQAAgeAWgWQAVgVAdgBIJdAAQAdAAAVAWg");
	this.shape_2.setTransform(0,-136.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,0,0,0.498)").s().p("AktDhQgegBgVgWQgVgVgBgeIAAktQAAgfAWgVQAVgVAdgBIJcAAQAdAAAWAWQATAUADAZIAAE6QgDAagTATQgWAWgdABg");
	this.shape_3.setTransform(0,-136.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("AFhjKQATAUADAZIAAE7QgDAZgTAUQgVAVgdABIpcAAQgegBgVgVQgVgWgBgdIAAkuQAAgeAWgWQAVgVAdgBIJdAAQAdAAAVAWg");
	this.shape_4.setTransform(0,-136.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFE1").s().p("AktDhQgegBgVgWQgVgVgBgeIAAktQAAgfAWgVQAVgVAdgBIJcAAQAdAAAWAWQATAUADAZIAAE6QgDAagTATQgWAWgdABg");
	this.shape_5.setTransform(0,-136.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).to({state:[{t:this.shape_5},{t:this.shape_4}]},10).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.5,-160.3,77,166.3);


(lib.выноска = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.instance = new lib.круг("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AAAo7IAAR3");
	this.shape.setTransform(0,-57.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AFhjKQATAUADAZIAAE7QgDAZgTAUQgVAVgdABIpcAAQgegBgVgVQgVgWgBgdIAAkuQAAgeAWgWQAVgVAdgBIJdAAQAdAAAVAWg");
	this.shape_1.setTransform(0,-136.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFE1").s().p("AktDhQgegBgVgWQgVgVgBgeIAAktQAAgfAWgVQAVgVAdgBIJcAAQAdAAAWAWQATAUADAZIAAE6QgDAagTATQgWAWgdABg");
	this.shape_2.setTransform(0,-136.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.выноска, new cjs.Rectangle(-38.5,-160.3,77,166.3), null);


(lib.входморгает = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAhA4IgcgoIgFgIIgEAJIgcAnIgSAAIArg5Igmg2IASAAIAUAdIAIANIAJgMIAWgeIAQAAIgnA1IAqA6g");
	this.shape.setTransform(12.8,-132.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgpA4IAAhvIApAAQANAAAHAEQAIADAFAHQAEAHAAAIQAAAHgEAGQgEAGgIAEQAKADAGAGQAFAIAAAJQAAAIgDAHQgDAHgFADQgFAEgIACQgHACgLAAgAgbArIAbAAIAKgBQAGgBADgCQAEgCACgEQACgEAAgGQAAgGgDgEQgDgFgGgCQgGgCgKAAIgaAAgAgbgIIAZAAQAJAAAEgBQAFgCADgEQAEgEAAgGQAAgFgEgEQgCgFgFgBQgFgCgLAAIgXAAg");
	this.shape_1.setTransform(3.3,-132.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhBBWIAAirIBBAAQAQAAAJACQANACAIAGQAJAGAFAKQAFALABANQAAAWgPAOQgNAPglAAIgqAAIAABGgAgpgDIAqAAQAXAAAJgJQAJgHAAgPQAAgLgFgIQgGgHgIgDQgHgCgPAAIgqAAg");
	this.shape_2.setTransform(-9.6,-137);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.instance = new lib.выноскаморгает();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.входморгает, new cjs.Rectangle(-38,-159.8,76,165.8), null);


(lib.вход = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAhA4IgcgoIgFgIIgEAJIgcAnIgSAAIArg5Igmg2IASAAIAUAdIAIANIAJgMIAWgeIAQAAIgnA1IAqA6g");
	this.shape.setTransform(12.8,-132.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgpA4IAAhvIApAAQANAAAHAEQAIADAFAHQAEAHAAAIQAAAHgEAGQgEAGgIAEQAKADAGAGQAFAIAAAJQAAAIgDAHQgDAHgFADQgFAEgIACQgHACgLAAgAgbArIAbAAIAKgBQAGgBADgCQAEgCACgEQACgEAAgGQAAgGgDgEQgDgFgGgCQgGgCgKAAIgaAAgAgbgIIAZAAQAJAAAEgBQAFgCADgEQAEgEAAgGQAAgFgEgEQgCgFgFgBQgFgCgLAAIgXAAg");
	this.shape_1.setTransform(3.3,-132.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhBBWIAAirIBBAAQAQAAAJACQANACAIAGQAJAGAFAKQAFALABANQAAAWgPAOQgNAPglAAIgqAAIAABGgAgpgDIAqAAQAXAAAJgJQAJgHAAgPQAAgLgFgIQgGgHgIgDQgHgCgPAAIgqAAg");
	this.shape_2.setTransform(-9.6,-137);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.instance = new lib.выноска();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.вход, new cjs.Rectangle(-38,-159.8,76,165.8), null);


(lib.ГРПкирпич = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// лампа
	this.instance = new lib.лампа("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(232.9,-139.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// уплот 1
	this.instance_1 = new lib.уплот01("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(108.2,-117);

	this.instance_2 = new lib.уплот01("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(149.1,-117);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// выключатель
	this.instance_3 = new lib.выкл("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(240.7,-121);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// свечки
	this.instance_4 = new lib.свеча();
	this.instance_4.parent = this;
	this.instance_4.setTransform(187.5,-97.5);

	this.instance_5 = new lib.свеча();
	this.instance_5.parent = this;
	this.instance_5.setTransform(177.5,-97.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4}]}).wait(1));

	// электро
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(1.5,1,1).p("AQJgpIAAAAIBdAAIAABGAyyEBIfOAAIDtkqASzDYIAAnYIiqDX");
	this.shape.setTransform(120.3,-142.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0000FF").ss(1,1,1,3,true).p("AAAAAIAAAA");
	this.shape_1.setTransform(205.4,-124);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#0000FF").ss(1,1,1,3,true).p("AAAAAIAAAAIAAAA");
	this.shape_2.setTransform(205.4,-124);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// поле
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AgYARIAOgDQADAKAHAAQAEAAADgCQADgDAAgEQAAgEgDgDQgDgCgEAAIgCAAIAAgKQAKAAAAgKQAAgEgCgDQgCgCgEAAQgGAAgDAJIgNgDQAFgSARgBQAKAAAGAGQAGAGAAAJQAAAJgKAGQANAEAAAMQAAAKgHAFQgHAGgLgBQgTAAgFgTg");
	this.shape_3.setTransform(143.8,-100.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AgVAfQgFgGAAgJQAAgGACgFQADgEAEgCQADgCAJgCIAOgFIgBgIIgDgDIgFAAQgEAAgDABQgCACgCAGIgNgDQACgLAGgFQAGgFAKAAQAJAAAFADQAFADACAEQACAFAAAMIAAAVIABANIADAKIgPAAIgCgIQgEAFgEACQgEACgFAAQgIABgGgGgAAAAEQgHACgBACQgDACAAAEQAAAEADADQACACADAAQADAAADgBIAFgGIABgLIAAgDIgJACg");
	this.shape_4.setTransform(137.5,-100.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AgSAjIAAhFIAlAAIAAAOIgWAAIAAA3g");
	this.shape_5.setTransform(131.7,-100.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AgOAJIAAgRIAdAAIAAARg");
	this.shape_6.setTransform(126.6,-100.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AgUAbQgIgKAAgRQAAgLADgIQAFgIAGgEQAHgFAHAAQAOAAAIALQAIALgBAOQAAAKgDAJQgEAJgHAEQgHAFgIgBQgLABgJgKgAgJgPQgEAGAAAJQAAAKAEAGQAFAFAEABQAGgBAEgFQAEgGAAgKQAAgJgEgGQgEgFgGgBQgFABgEAFg");
	this.shape_7.setTransform(120.7,-100.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AALAjIAAgeIgVAAIAAAeIgPAAIAAhFIAPAAIAAAZIAVAAIAAgZIAPAAIAABFg");
	this.shape_8.setTransform(113.3,-100.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("AgTAaQgHgLAAgPQAAgRAIgJQAHgKAMAAQAKABAGAFQAHAFACAMIgPADQgBgLgJAAQgFAAgDAEQgEAFAAALQAAANAEAEQADAGAFAAQAEAAADgEQADgDABgHIAPAEQgFAZgWgBQgNABgGgLg");
	this.shape_9.setTransform(106.3,-100.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AgVAfQgFgGAAgJQAAgGACgFQACgEAEgCQAEgCAJgCIANgFIAAgIIgDgDIgGAAQgEAAgCABQgCACgCAGIgNgDQACgLAGgFQAGgFAKAAQAJAAAFADQAFADADAEQABAFAAAMIAAAVIABANIADAKIgPAAIgCgIQgEAFgEACQgEACgFAAQgJABgFgGgAAAAEQgHACgCACQgCACAAAEQAAAEACADQADACAEAAQACAAADgBIAEgGIABgLIAAgDIgIACg");
	this.shape_10.setTransform(99.4,-100.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("AAKAjIAAg3IgTAAIAAA3IgQAAIAAhFIAzAAIAABFg");
	this.shape_11.setTransform(92.2,-100.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("AgUAbQgJgKABgRQAAgLADgIQAEgIAHgEQAHgFAHAAQAOAAAIALQAHALAAAOQAAAKgDAJQgFAJgGAEQgHAFgIgBQgLABgJgKgAgJgPQgEAGAAAJQAAAKAEAGQAFAFAEABQAGgBAEgFQAEgGAAgKQAAgJgEgGQgEgFgGgBQgFABgEAFg");
	this.shape_12.setTransform(84.9,-100.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0000").s().p("AgSAcQgIgJAAgTQAAgQAJgLQAHgIAKgBQAMABAHAIQAIALAAATIAAACIglAAQAAAJAEAEQADAFAEAAQAIAAACgKIAPADQgDAKgGAGQgHAEgJAAQgMABgHgJgAgHgRQgDAEAAAIIAWAAQAAgIgEgFQgDgDgEAAQgEAAgEAEg");
	this.shape_13.setTransform(77.7,-100.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF0000").s().p("AALAjIAAgeIgVAAIAAAeIgPAAIAAhFIAPAAIAAAZIAVAAIAAgZIAPAAIAABFg");
	this.shape_14.setTransform(70.7,-100.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF0000").s().p("AgSAjIAAhFIAlAAIAAAOIgWAAIAAA3g");
	this.shape_15.setTransform(64.7,-100.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF0000").s().p("AgaAmQgLgNAAgYQAAgQAFgMQAFgLAIgGQAIgFALAAQARAAALANQAKANAAAXQAAAZgLANQgKAMgRAAQgQAAgKgMgAgPgYQgGAIAAAQQAAARAGAIQAHAIAIAAQAKAAAGgIQAGgIAAgRQAAgQgGgIQgGgIgKAAQgJAAgGAIg");
	this.shape_16.setTransform(57.1,-102.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#DCDCDC").s().p("AoyBxIAAjgIRkAAIAADgg");
	this.shape_17.setTransform(100.1,-102.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).wait(1));

	// окно
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#DFB800").ss(1,0,1).p("AAYgnIAWAnIgWAoIguAAIgXgoIAXgng");
	this.shape_18.setTransform(93.7,-72.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#DFB800").ss(1,0,1).p("AAYgnIAWAnIgWAoIguAAIgXgoIAXgng");
	this.shape_19.setTransform(93.7,-64.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#DFB800").ss(1,0,1).p("AAYgnIAWAnIgWAoIguAAIgXgoIAXgng");
	this.shape_20.setTransform(121.2,-48.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#DFB800").ss(1,0,1).p("AAYgnIAWAnIgWAoIguAAIgXgoIAXgng");
	this.shape_21.setTransform(135.2,-72.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#DFB800").ss(1,0,1).p("AAYgnIAWAnIgWAoIguAAIgXgoIAXgng");
	this.shape_22.setTransform(128.2,-44.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#DFB800").ss(1,0,1).p("AAYgnIAWAnIgWAoIguAAIgXgoIAXgng");
	this.shape_23.setTransform(135.2,-48.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#DFB800").ss(1,0,1).p("AAYgnIAWAnIgWAoIguAAIgXgoIAXgng");
	this.shape_24.setTransform(135.2,-56.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#DFB800").ss(1,0,1).p("AAYgnIAWAnIgWAoIguAAIgXgoIAXgng");
	this.shape_25.setTransform(114.4,-44.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#DFB800").ss(1,0,1).p("AAYgnIAWAnIgWAoIguAAIgXgoIAXgng");
	this.shape_26.setTransform(135.2,-64.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#DFB800").ss(1,0,1).p("AAYgnIAWAnIgWAoIguAAIgXgoIAXgng");
	this.shape_27.setTransform(121.4,-56.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#DFB800").ss(1,0,1).p("AAYgnIAWAnIgWAoIguAAIgXgoIAXgng");
	this.shape_28.setTransform(128.3,-60.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#DFB800").ss(1,0,1).p("AAYgnIAWAnIgWAoIguAAIgXgoIAXgng");
	this.shape_29.setTransform(128.3,-68.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#DFB800").ss(1,0,1).p("AAYgnIAWAnIgWAoIguAAIgXgoIAXgng");
	this.shape_30.setTransform(121.4,-72.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#DFB800").ss(1,0,1).p("AAYgnIAWAnIgWAoIguAAIgXgoIAXgng");
	this.shape_31.setTransform(107.4,-72.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#DFB800").ss(1,0,1).p("AAYgnIAWAnIgWAoIguAAIgXgoIAXgng");
	this.shape_32.setTransform(114.4,-68.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#DFB800").ss(1,0,1).p("AgtAAIAXgnIAuAAIAWAnIgWAoIguAAg");
	this.shape_33.setTransform(100.6,-68.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#DFB800").ss(1,0,1).p("AAYgnIAWAnIgWAoIguAAIgXgoIAXgng");
	this.shape_34.setTransform(114.4,-60.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#DFB800").ss(1,0,1).p("AAYgnIAWAnIgWAoIguAAIgXgoIAXgng");
	this.shape_35.setTransform(107.5,-56.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#DFB800").ss(1,0,1).p("AAYgnIAWAnIgWAoIguAAIgXgoIAXgng");
	this.shape_36.setTransform(107.5,-48.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#DFB800").ss(1,0,1).p("AAYgnIAWAnIgWAoIguAAIgXgoIAXgng");
	this.shape_37.setTransform(100.6,-44.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#DFB800").ss(1,0,1).p("AAYgnIAWAnIgWAoIguAAIgXgoIAXgng");
	this.shape_38.setTransform(100.6,-60.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#DFB800").ss(1,0,1).p("AAYAoIguAAIgXgoIAXgnIAuAAIAWAng");
	this.shape_39.setTransform(93.6,-48.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#DFB800").ss(1,0,1).p("AAYgnIAWAnIgWAoIguAAIgXgoIAXgng");
	this.shape_40.setTransform(93.7,-56.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#666666").s().p("Aj7CwIAAlfIH4AAIAAFfg");
	this.shape_41.setTransform(114.5,-58.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#3E3E3E").ss(1,0,1,3,true).p("AExjUIphAAIAAGpIJhAAg");
	this.shape_42.setTransform(114.5,-58.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#505050").s().p("AkwDVIAAmpIJhAAIAAGpg");
	this.shape_43.setTransform(114.5,-58.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]}).wait(1));

	// вентиляция
	this.instance_6 = new lib.конус01("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(189.9,-192.7);

	this.instance_7 = new lib.конус01("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(159,-158.5,1.1,1.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6}]}).wait(1));

	// крыша 1
	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#505050").s().p("A0dGEINesHIAAAAIbdAAIAAABIpsMGg");
	this.shape_44.setTransform(131,-168.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_44).wait(1));

	// дверь
	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFD400").s().p("AgCAMIgBgDIABgDIAAgDIACgCIAAgBIACgEIAAgBIAAgCIgCAAIAAADIgBAEIgBAAIAAgDIACgDIAAgDIACgCIABAAIAAACIAAADIAAAEIAAAFIAAACIAAACIgBgDIgBAFIgBACIgBABIgBAAgAAAABIAAACIgBACIAAACIABACIAAgBIABgDIABgDIAAgCIAAgBIgCACg");
	this.shape_45.setTransform(229.3,-112.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFD400").s().p("AAAgMIABgBIAAAZIgBACg");
	this.shape_46.setTransform(228.6,-112.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFD400").s().p("AgBABIADgFIAAAEIgDAEg");
	this.shape_47.setTransform(228.1,-111.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFD400").s().p("AgDgJIADgFIACgCIABABIAAADIAAAEIgBAEQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAABIABADIAAADIgBADIgBADIgCADIgDAFgAAAAAIgBACIAAAKIABgDIABgCIABgCIAAgCIAAgCIAAgCIgBAAIgBABgAABgMIgBACIgBACIAAAIIABgDIABgBIABgDIAAgDIAAgBIgBgBIAAAAg");
	this.shape_48.setTransform(227.3,-110.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFD400").s().p("AgCAMIgBgDIABgDIAAgDIABgCIABgBIACgEIAAgBIAAgCIgCAAIgBADIAAAEIgBAAIAAgDIABgDIABgDIACgCIABAAIAAACIAAADIAAAEIABAFIAAACIgBACIgBgDIgBAFIgBACIgBABIgBAAgAAAABIgBACIAAACIAAACIAAACIABgBIABgDIABgDIAAgCIAAgBIgCACg");
	this.shape_49.setTransform(225.9,-108.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFD400").s().p("AgCALQgBgCAAgFIABgFIABgFIABgDIACgBQAAAAAAAAQABABAAAAQAAAAAAABQAAAAAAABIgBACIgBgCIgBAAIgBAEIAAAGIAAAEQABABAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAIACgDIAAgEIABAAIgBAFQAAABAAABQgBAAAAABQAAABAAAAQgBABAAAAIgBABIgBAAg");
	this.shape_50.setTransform(225.1,-107.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFD400").s().p("AgCALQgBgCAAgFIABgFIACgFIAAgDIACgBQAAAAAAAAQABABAAAAQAAAAAAABQAAAAAAABIgBACIgBgCIgBAAIAAAEIgBAGIABAEQAAABAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAIACgDIAAgEIABAAIgBAFQAAABAAABQgBAAAAABQAAABAAAAQgBABAAAAIgBABIgBAAg");
	this.shape_51.setTransform(224.3,-106.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFD400").s().p("AgCAMIAAgDIAAgDIAAgDIABgCIABgBIACgEIAAgBIgBgCIgBAAIgBADIAAAEIgBAAIAAgDIABgDIABgDIACgCIABAAIAAACIAAADIAAAEIABAFIAAACIgBACIgBgDIgCAFIAAACIgBABIgBAAgAAAABIgBACIAAACIAAACIAAACIABgBIABgDIAAgDIABgCIAAgBIgCACg");
	this.shape_52.setTransform(223.5,-105.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFD400").s().p("AgDAMIABgBIABgBIAAgBIAAgDIAAgMIAFgIIAAATIgBABIAAgPIgDAEIAAAJIAAAFIAAACIgCACIgBACg");
	this.shape_53.setTransform(222.5,-104);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFD400").s().p("AgCgGIACgBIAAAHIAAAAIAAgFIABgDIAAgCIABgCIABAAIAAADIgBAAIAAABIgBADIAAAEIgBABQAAAAAAAAQAAAAABAAQAAAAAAABQAAAAAAAAIACAFIgCACIgBgFIAAgBIAAAAIAAAJIgCACg");
	this.shape_54.setTransform(221.8,-103.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFD400").s().p("AgCAMIAAgDIAAgDIABgDIABgCIAAgBIACgEIAAgBIgBgCIgBAAIAAADIgBAEIgBAAIABgDIABgDIAAgDIACgCIAAAAIABACIAAADIAAAEIAAAFIAAACIgBACIAAgDIgBAFIgBACIgCABIAAAAgAAAABIAAACIgBACIAAACIABACIAAgBIABgDIAAgDIABgCIAAgBIgCACg");
	this.shape_55.setTransform(220.5,-101.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFD400").s().p("AgCgFIABgBIAAAHIADgEIAAgIIABgCIAAATIgBACIAAgIIgDAEIAAAIIgBACg");
	this.shape_56.setTransform(219.6,-100.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFD400").s().p("AgCALIgBgGIABgJIACgFQAAgBABAAQAAAAAAAAQABAAAAAAQAAAAABAAQABABAAAFIAAAFIgCAFIgCAEIgBABIgBAAgAAAgHIgBAFIAAAFIAAAFIABgBIACgEIABgFQAAgBgBgBQAAgBAAAAQAAgBAAAAQAAgBAAAAIgBAAIgBAAg");
	this.shape_57.setTransform(218.7,-99.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFD400").s().p("AgCAIIABgCIABACIAAgBIABgCIAAgDIAAgCQAAAAgBAAIAAABIAAABIAAgCIAAgCIABgBIAAgCIAAgCIgBAAIAAAFIgCABQAAgFACgDQAAAAABgBQAAAAAAAAQAAAAABAAQAAAAAAAAIAAADIgBAFIABABIABABIgBAGIgCAEIgBABQAAAAAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBg");
	this.shape_58.setTransform(218,-98.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFD400").s().p("AAAgOIAAgCIAFAUIgBACIgCgGIgEAFIAAAKIgCACgAAAgGIgBAIIACgDIgBgGIAAgFIAAAGg");
	this.shape_59.setTransform(227.5,-115.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFD400").s().p("AgBAIIABgGIgBABIgBgDIABgEQAAgBAAAAQABgBAAgBQAAAAAAgBQAAAAAAgBIADgEIAAATIgBABIAAgHIAAAAIgBACIgBAFIgBAFIgCACgAABgGIgBADIgBADIABAAIABAAIABgCIAAgHg");
	this.shape_60.setTransform(226,-113.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFD400").s().p("AgCgFIABgBIAAAOIADgTIABgCIAAATIgBABIAAgNIgDASIgBACg");
	this.shape_61.setTransform(225.2,-112.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFD400").s().p("AgCgKIABgBIAAACIABgDIAAgCIACgBIABACIAAAEIAAAGIgBAEIgCAEIAAABIgBgBIAAAKIgBABgAAAgLIAAAEIgBAGIABAEIAAgBIABgCIABgHQAAgBAAgBQAAgBAAAAQAAgBAAAAQAAAAgBgBIAAAAIgBABg");
	this.shape_62.setTransform(224.3,-110.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFD400").s().p("AgCALIAAgGIAAgJIACgFQAAgBABAAQAAAAAAAAQABAAAAAAQAAAAABAAQABABAAAFIAAAFIgCAFIgCAEIgBABIgBAAgAAAgHIgBAFIAAAFIAAAFIABgBIABgEIACgFQAAgBgBgBQAAgBAAAAQAAgBAAAAQAAgBgBAAIAAAAIgBAAg");
	this.shape_63.setTransform(223.5,-110);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFD400").s().p("AgBgGIADgGIAAAEIgCADIAAAQIgBABg");
	this.shape_64.setTransform(222.8,-109.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFD400").s().p("AgBALIgBgGIABgIIABgGQAAgBABAAQAAAAAAAAQABAAAAAAQAAAAAAAAQACABAAAFIAAABIgFAGIAAAEQABABAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAIABgCIABgEIACgBIgCAFIgCAFIgBABIAAAAgAAAgHIgBAEIAAAEIADgFIAAgDIgBAAIgBAAg");
	this.shape_65.setTransform(222,-108.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFD400").s().p("AAAgDIgCADIAAgDIAFgIIAAADIgCADIAAAPIgBACg");
	this.shape_66.setTransform(221.3,-107.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFD400").s().p("AgCAMIAAgDIAAgDIABgDIABgCIAAgBIACgEIAAgBIgBgCIgBAAIAAADIgBAEIgBAAIABgDIABgDIAAgDIACgCIAAAAIABACIAAADIAAAEIAAAFIAAACIgBACIAAgDIgBAFIgBACIgCABIAAAAgAAAABIAAACIgBACIAAACIABACIAAgBIABgDIAAgDIABgCIAAgBIgCACg");
	this.shape_67.setTransform(220.5,-106.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFD400").s().p("AgCgGIACgBIAAAIIAAgBIAAgFIABgDIAAgCIABgCIABAAIAAADIgBAAIAAACIgBACIAAAEIgBABQAAAAAAAAQAAAAABAAQAAAAAAABQAAAAAAABIACAEIgCACIgBgFIAAgBIAAAAIAAAJIgCACg");
	this.shape_68.setTransform(219.7,-105.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.lf(["#666666","#5F5F5F"],[0,1],-7.7,0,7.8,0).s().p("AhMlCICZjOIAAM4IiZDpg");
	this.shape_69.setTransform(223.7,-76.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#3C3C3C").s().p("Ahek7ICyjuIAAAAIAMgQIAANUIgRAYIAAs4IiZDPIAANSIgUAeg");
	this.shape_70.setTransform(223.5,-77.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45}]}).wait(1));

	// стена 1
	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#666666").ss(1,1,1,3,true).p("ACWAjIkrAAIksAAIksAAIj6AAIAAhFIfPAAIAABFIj6AAIksAAg");
	this.shape_71.setTransform(100,-126.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#999999").ss(1,1,1,3,true).p("AvnJnIAAiCIAAiCIAAiCIAAiCIAAiBIAAiCIAAiCIAAiCIAAiCIAAg8APopmIAAA8IAACCIAACCIAACCIAACCIAACBIAACCIAACCIAACCIAACC");
	this.shape_72.setTransform(100,-61.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#999999").ss(1,0,1,3,true).p("AiVmrICVAAICWAAICWAAICWAAICWAAIAAiCIiWAAIAAg8AAAotIAACCACWotIAAg8AAAotICWAAAiVotICVAAAiVppIAAA8IiWAAIiWAAIAAg8AEsotICWAAAEsmrIAAiCIiWAAAvnmrIBkAAIAAiCIhkAAApXmrIAAiCICWAAArtmrICWAAICWAAIAACCICWAAIAACCIiWAAIAACCICWAAIAACCIiWAAIiWAAIAAiCIiWAAIAAiCICWAAIAAiCIiWAAIiWAAIhkAAArtppIAAA8ICWAAArtotIiWAAAuDmrICWAAIAACCAkrmrIiWAAAkrotIAACCICWAAAuDinIhkAAAuDkpIAACCICWAAAuDBdIhkAAAuDglIAACCICWAAICWAAAvnglIBkAAICWAAArtDfICWAAIAACCIiWAAIAACCICWAAICWAAICWAAICWAAICVAAICWAAIAAiCIiWAAIiVAAIiWAAIAAiCICWAAICVAAIAACCAvnDfIBkAAIAACCIhkAAAvnHjIBkAAICWAAArtDfIiWAAArtFhIiWAAAnBHjIAAiCICWAAAnBDfICWAAApXglICWAAAnBinIiWAAApXkpICWAAApXFhICWAAApXDfICWAAArtBdIAACCAnBBdIAACCAHCinICWAAIAAiCIiWAAIiWAAIAACCgAEsglIAACCICWAAICWAAIAAiCIiWAAIAAiCAHCglIiWAAIiWAAAiVinICVAAIAAiCIiVAAIAAiCAiVBdICVAAIAAiCIiVAAIAAiCACWinIAACCIiWAAAAABdICWAAICWAAAAAinICWAAICWAAACWkpIiWAAAiVHjIAAiCAAADfICWAAICWAAIAACCICWAAIAACCICWAAICWAAIAAiCICWAAIAAiCIBkAAAJYFhIiWAAAJYDfIAACCAHCDfICWAAAHCDfIiWAAAEsHjICWAAAEsFhIiWAAACWHjICWAAIAACCAHCBdIAACCACWDfIAAiCAEskpIiWAAAiVDfIAAiCAHCmrIAACCACWmrIAACCAkrinICWAAAiVglIiWAAAkrBdICWAAAkrkpICWAAALuppIAAA8ICWAAIBkAAAOEotIAACCIBkAAALumrICWAAAPokpIhkAAIAACCIBkAAAPoglIhkAAIAACCIBkAAAOEBdIiWAAIAACCIiWAAAOEkpIiWAAIAAiCALuglICWAAALuinIAACCAOEinIiWAAIiWAAAPoFhIhkAAAOEHjIBkAAAOEDfIiWAAALuHjICWAAIAACCIksAAIksAAIksAAIkrAAIksAAIksAAIhkAAAJYotICWAAAJYglICWAAALuBdIiWAAALukpIiWAAAJYmrICWAAALuFhIiWAAAPoJlIhkAAAJYHjIAACCAkrHjIAACCAAAHjIAACCAuDHjIAACCApXHjIAACC");
	this.shape_73.setTransform(100,-61.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#999999").s().p("ALuAjIksAAIksAAIkrAAIksAAIksAAIj6AAIAAhFIfPAAIAABFg");
	this.shape_74.setTransform(100,-126.5);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#DCDCDC").s().p("AOEJnIAAiCIBkAAIAACCgAOEJnIksAAIAAiCICWAAIiWAAIAACCIksAAIAAiCIAACCIksAAIAAiCIAACCIkrAAIAAiCIAACCIksAAIAAiCIAACCIksAAIAAiCIAACCIhkAAIAAiCIAAiCIAAiCIAAiCIAAiBIAAiCIBkAAICWAAIAACCIiWAAIhkAAIBkAAIAACBIhkAAIBkAAICWAAIAACCIiWAAICWAAICWAAIAACCIiWAAIiWAAIAAiCIhkAAIBkAAIAACCIhkAAIBkAAICWAAIAACCICWAAICWAAICWAAICWAAICVAAICWAAIAAiCIiWAAIAAiCICWAAICWAAIAACCIiWAAICWAAICWAAIAACCIiWAAICWAAICWAAIiWAAIAAiCIiWAAIAAiCIiWAAIAAiCICWAAICWAAIAACCIiWAAICWAAICWAAIAACCIiWAAICWAAICWAAIiWAAIAAiCIiWAAIAAiCICWAAIAAiBIiWAAIAAiCICWAAIAAiCIiWAAIAAiCIAACCIiWAAIiWAAICWAAIAACCIiWAAIiWAAICWAAIAACCIiWAAICWAAIAAiCICWAAICWAAIAACCIiWAAIiWAAICWAAIAACBIiWAAIiWAAICWAAIAACCIiWAAIiVAAIAAiCIAACCIiWAAIiWAAIAAiCICWAAICWAAICVAAIAAiBIiVAAIAAiCICVAAIAAiCIiVAAIiWAAICWAAICVAAIAACCIiVAAIiWAAIAAiCIiWAAIAAiCICWAAICWAAIAACCIAAiCICVAAICWAAIiWAAIAAiCICWAAICWAAIAACCICWAAICWAAIAAiCIiWAAIAAg8IEsAAID6AAIAAA8IhkAAIiWAAICWAAIAACCIBkAAIAACCIhkAAIiWAAIiWAAICWAAICWAAIAACCIBkAAIAACCIhkAAIiWAAIAAiCICWAAIiWAAIiWAAICWAAIAACCIiWAAICWAAICWAAIAACBIBkAAIAACCIhkAAIiWAAICWAAIAACCIiWAAIAACCIAAiCICWAAIBkAAIAACCIhkAAIiWAAICWAAIAACCgAEsHlIiWAAgAuDHlICWAAIiWAAIhkAAgALuDhIAAiCICWAAIiWAAIiWAAICWAAIAACCIiWAAgALukmIAAiCICWAAIiWAAIiWAAICWAAgACWkmIAAiCICWAAIiWAAIAACCIiWAAgALuoqIiWAAgALuoqIAAg8gAAAHlIiVAAIAAiCICVAAICWAAIAACCgAiVHlIiWAAIiWAAIAAiCICWAAICWAAIAACCgAnBHlIiWAAIiWAAIAAiCICWAAICWAAIAACCgAOEFjIAAiCIBkAAIAACCgAAAFjgAiVFjIiWAAIAAiCICWAAICVAAIAACCgAiVFjgAkrFjIiWAAIiWAAIAAiCIiWAAIAAiCICWAAICWAAIAACCICWAAIAACCgAnBDhIiWAAgApXFjgAuDFjgAJYDhgAOEBfIAAiBIBkAAIAACBgAHCBfIiWAAIAAiBICWAAICWAAIAACBgACWBfgAiVBfIiWAAIAAiBIiWAAIAAiCICWAAICWAAIAACCIiWAAICWAAICVAAIAACBgAnBBfIiWAAIAAiBIiWAAIAAiCICWAAICWAAIAACCIiWAAICWAAICWAAIAACBgApXBfIiWAAIiWAAIAAiBICWAAICWAAIAACBgAOEgigAEsgigAOEikIAAiCIBkAAIAACCgALuikgAHCikIiWAAIAAiCICWAAICWAAIAACCgACWikgAkrikgAnBikIiWAAIAAiCICWAAICWAAIAACCgAnBikgApXikgArtikIiWAAIAAiCICWAAICWAAIAACCgAvnikIAAiCIBkAAIAACCgAvnikgAOEkmgAEskmgApXkmIiWAAIAAiCICWAAICWAAIAACCgArtkmIiWAAIhkAAIAAiCIAAiCIAAg8ID6AAIAAA8ICWAAIAACCIiWAAIiWAAICWAAIAACCgAuDmoIAAiCIhkAAIBkAAIAACCIhkAAIBkAAgArtoqIiWAAgAvnkmgAOEmoIAAiCIBkAAIAACCgAHCmoIiWAAIAAiCIiWAAIAAg8IEsAAIAAA8IiWAAICWAAICWAAIAACCgAAAmogAAAmoIiVAAIiWAAIAAiCICWAAIiWAAIiWAAICWAAIAACCIiWAAIiWAAIAAiCICWAAIAAg8IEsAAIErAAIAAA8IiWAAIiVAAIAAg8IAAA8ICVAAIAACCgAkrmogArtmogAOEoqgAiVoqgApXoqIiWAAIAAg8IEsAAIAAA8gACWpmgArtpmg");
	this.shape_75.setTransform(100,-61.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71}]}).wait(1));

	// вент решетка
	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#3C3C3C").s().p("AhBgYICDi8IAADoIiDDBgAgvB/IAAAdIBiiTIAAgcgAgvAyIAAAlIBiiSIAAglgAgvgRIAAAbIBiiLIAAgdg");
	this.shape_76.setTransform(250.3,-98.9);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#666666").s().p("AgwCAIBiiRIAAAbIhiCTgAgwA0IBiiSIAAAlIhiCRgAgwgQIBiiMIAAAdIhiCLg");
	this.shape_77.setTransform(250.5,-99.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_77},{t:this.shape_76}]}).wait(1));

	// тень стены 2
	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.lf(["rgba(153,153,153,0)","rgba(102,102,102,0.502)"],[0.396,1],-31,0,31.1,0).s().p("Ak2kFIJssIIAAR1IpsOmg");
	this.shape_78.setTransform(231.1,-103.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_78).wait(1));

	// стена 2
	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#666666").ss(1,1,1,3,true).p("AECllIA0hBIAAABIAAA8IgxA/Ak1GnIAAhGICGioABFg4IBih8ABHh6IC7jq");
	this.shape_79.setTransform(231,-165.3);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#666666").ss(1,1,1,3,true).p("Ah4CXIB7iaIAFgHIBxiM");
	this.shape_80.setTransform(225.5,-161.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#999999").ss(1,0,1,3,true).p("ACZi7IAAgBAgmA0IAAgBAiXDAIAAAA");
	this.shape_81.setTransform(241.5,-182.2);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#999999").ss(1,1,1,3,true).p("AE2wNIAAB5IAABjIAAB3IAAB0IAABzIAABzIABByIAAByIAABzIAABxAk2QOIAAiCIAAiCIAAiCIAAiCIAAiCIAAiCIAAiCIAAiCIAAiCIAAg8");
	this.shape_82.setTransform(231.1,-103.7);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#999999").ss(1,0,1,3,true).p("AE2wMIAAAAAECvLIAJAAAECtRIA0hCAECuNIAAA8ACnsbIAAA9IA4hGIAjgtADfskIAABnIAjgvIA0hFADfpFIAjgwIAAh3AB/qrIAABsIAog1IAAB5IA4hKACnn7IgoA2IAAB4IAog3IAAB3IgoA4IAAB3IAog5IAAB2IA4hPIAjgzAECn/IgjAwIAAh2AECn/IA0hHAE2q6Ig0BFACnreIgoAzADfq9Ig4BJADflaIAjgxADfjlIAjgyIA0hJACnkNIA4hNADfjlIAAh1ACnghIgoA5IAAB3IAog7IAAB2IA4hSIAjg0IAAhzIA1hMADfADIAjgyADfADIAAhzAE3juIg1BLIAAh0ACniXIA4hOAE2nTIg0BIIAAh0ACnmEIA4hLABCrbIAFgGABCpfIAAg8AgtoNIAAA8IBBhTIAug7IA9hMAAUmzIhBBXIAAB9IBBhYIAug+IAAh7gAiqkzIAAg8AhkmLIhGBYIg8BMIAAB9IA8hOIBGhcIAAh3IA3hGAiqg4IAAiAAhkiWIhGBeIg8BOIAACAIA8hQIBGhegAAUi8IhBBZIAAB7IBBhaIAuhAIAAh5IguA/IAAh7AhkkUIA3hIAgtjfIg3BJAhkgYIA3hLAk1iDIBPhkAk1gBIBPhpAAUokIAABxAAUA3IhBBcIAAB8IBBheIAuhDIA9hWAiqDEIAAh+AhkBkIhGBgIg8BSIAACAIA8hTIBGhiIAAh9IA3hMAhkFdIhGBkIAAh+AhkHaIAAh9IA3hOAjmIWIA8hVAAUGkIAAB6Ih4C2IAAh9IhGBnIg8BYIAACAIhPB4AgtIGIBBhiIAuhFIAAh4IguBDIhBBggAAUCxIAAB5AhkDhIA3hOAgtGKIg3BQAiqJAIAAB+AjmKWIA8hWIBGhmAhkLUIiCDCAk1GEIBPhuAhkJXIA3hRAjmCWIhPBsAk1MKIBPh0Ak1IGIBPhwAk1OMIBPh2AjmIWIAACAAk1KIIBPhyAE3BoIhYCEIhgCRIhrChADfB4IAAB0ACnDKIgoA8IAAB3Ak1CAIBPhqAB/EGIg9BZABCl1IA9hQABCiCIA9hTAB/lNIg9BSABCDnIA9hYAE3gJIg1BNAAUhCIAAB5AB/heIg9BVIguBAAB/o/Ig9BPABCBuIAAh3ACnBUIA4hR");
	this.shape_83.setTransform(231,-103.8);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#999999").s().p("Ak1FhICGioIB8ibIAGgHIBsiHIAGgHIACgDIC7jqIAJAAIgJAAIAAgBIA0hBIAAABIAAA8IgxA/IgDADIhbBzIhhB8IgEAEIhvCNIh9CeIiLCwg");
	this.shape_84.setTransform(231,-165.3);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#DCDCDC").s().p("Ak2OMIAAiDIAAiBIAAiDIAAiBIAAiDIAAiBIAAiCIAAiCIAAg8ICMivIB9ieIBviOIADgEIBih8IAAA8IAAg8IBbhzIADgDIAxg/IAAg8IAAgBIAAB6Ig0BBIAAg8IAAA8IgkAtIg3BGIA3hGIAABnIAAhnIAkgtIA0hBIAABiIg0BFIgkAuIg3BJIgoA2IAAhsIAog0IgoA0Ig9BMIAAg8IAAA8IguA7IhBBTIAAg8IAAA8IBBhTIAug7IA9hMIAABsIAog2IAAB5IA3hKIAAB2IAAh2IAkgvIA0hGIAAB1Ig0BHIgkAvIg3BMIgoA3Ig9BSIguA/IAAh7IAug+IAAh7IguA9IAAhxIAABxIhBBXIAAB9IBBhYIAAB7IhBBZIg4BKIAAh9IA4hJIg4BJIhFBdIAAh/IBFhcIA4hIIg4BIIAAh3IA4hGIg4BGIhFBYIAAg8IAAA8Ig8BLIhQBkIBQhkIAAB+IhQBoIBQhoIA8hOIAAB/Ig8BOIA8hOIBFhdIAAB9IA4hKIAAB7IBBhaIAuhAIAAh5IAAB5IguBAIhBBaIAAh7IBBhZIAug/IA9hSIAog3IAAB3IgoA3Ig9BUIA9hUIAAB3IAog4IAAB2IA3hQIAAB0IAkgzIA0hMIAABzIg0BMIAAhzIAABzIA0hMIAABxIhYCEIAAh0IAAB0IhfCQIAAh2Ig9BZIA9hZIAAB2IhrChIAAh5IAuhFIAAh5IguBEIAAh6IAAB6IhBBgIg4BQIA4hQIAAB7IBBhhIAAB5Ih5C2IAAh9IhFBoIAAh+IBFhmIhFBmIg8BWIAAiAIhQByIBQhyIAACAIhQBzIBQhzIA8hWIAAB+Ig8BYIhQB2IBQh2IAACAIAAiAIA8hYIBFhoIAAB9IiBDDIhQB4gAhlJWIA4hRgAiqHBIg8BVIA8hVIBFhkIAAB9IAAh9IA4hOIg4BOIhFBkIAAh+IAAB+gAk2IFIBQhvgAjmGWIA8hTIBFhjIA4hNIAAB8IBBhfIAuhCIguBCIhBBfIAAh8IBBhcIAuhBIguBBIAAh5IAAB5IhBBcIg4BNIAAh8IhFBgIBFhgIAAB8IhFBjIg8BTIAAiAIA8hSIAAh/Ig8BRIAAiBIhQBrIBQhrIAACBIA8hRIAAB/Ig8BSIhQBuIBQhugAB/EGIAog8gAk2EBIBQhrgABCDmIA9hXgACnDKIA3hSIAkg1IgkA1Ig3BSIAAh2IgoA7IAAh4Ig9BXIAAh4IA9hVIg9BVIAAB4IA9hXIAAB4IAog7IAAB2gAhlBkIA4hMgACnBUIA3hRgAiqBFIBFhegAB/AXIAog4gAB/lNIAAh5IAog2IgoA2Ig9BRIA9hRgABCnwIA9hPgAjmKWgAgtGKIBBhgIAuhEIAAB5IguBFIhBBhgAAUGkgAgtGKgAgtEPgADeDsgAECBDgAAUA3gADehxIAkgzIgkAzIg3BQIAAh2IA3hOIAkgyIAABzIA0hKIAAByIg0BMIgkAzgAE2gJgAB/jWIAog3IA3hNIAAB1Ig3BOIgoA4gAgthjgAjmjoIA8hLIBFhYIAAB3IhFBcIg8BOgAE2h8gAECkXIA0hJIg0BJIgkAyIAAh1IAkgxIA0hIIAABzIAAByIg0BKgAiqi4gAAUi8gAgtjfgAgtlcIBBhXIAug9IAAB7IguA+IhBBYgADejlgAjmjogAE2jugACnmEIA3hMIAkgvIAAB0IgkAxIg3BNgAECn/IA0hHIAABzIg0BIgACnp1IA3hJIAkguIA0hFIAAB2Ig0BGIAAh3IAAB3IgkAvIg3BKgAgupPIBwiNIAAAAIAAAAIAFgFIgDACIgCADIgDAFIhtCIIAAAAIAAAAIgFAHgAgupPgAE2q7gAE2uTg");
	this.shape_85.setTransform(231.1,-103.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79}]}).wait(1));

	// асфальт
	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.lf(["#999999","#7D7D7D"],[0,1],-187.9,67.6,-187.9,-73.1).s().p("A61JrIA2g3IAAAAIRzyfMAjCAAAIAAABIrlSeIAAAAIgjA3MgpjAAAg");
	this.shape_86.setTransform(124.4,-43.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_86).wait(1));

}).prototype = getMCSymbolPrototype(lib.ГРПкирпич, new cjs.Rectangle(-47.3,-218.2,343.6,236.4), null);


(lib.ГРПБ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// опасно
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgRAMIAKgCQADAIAEAAQADAAACgCQABgBAAAAQABgBAAAAQAAgBAAAAQAAgBAAgBQAAgCgCgCQgCgCgDAAIgBAAIAAgIQAHAAAAgHQAAgBAAAAQAAgBAAgBQAAAAgBgBQAAAAgBgBQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBgBAAQgEABgCAGIgKgDQAEgNAMAAQAIAAAEAEQAFAFAAAGQAAAIgIADQAJADAAAJQAAAHgEAEQgFAEgJAAQgOAAgDgPg");
	this.shape.setTransform(32.4,-32.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgPAXQgEgEAAgHQAAgFABgDQACgDADgBQADgCAHgCIAKgDIgBgGIgCgCIgEgBQgDABgCABQgCABgBAEIgKgCQACgIAFgEQAEgDAHAAQAHAAADACQAEACACAEQACADgBAJIAAAPIABAKIACAHIgMAAIgBgGQgDAEgDACQgCABgEAAQgGAAgEgEgAAAADIgGADQAAAAgBABQAAABAAAAQgBABAAAAQAAABAAAAQAAAEACACQAAAAABAAQABABAAAAQABAAAAAAQABABAAAAQABAAABgBQAAAAAAAAQAAAAABAAQABgBAAAAQACgCACgCIABgIIAAgDIgHACg");
	this.shape_1.setTransform(27.7,-32.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AgNAaIAAgzIAbAAIAAALIgQAAIAAAog");
	this.shape_2.setTransform(23.5,-32.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AgKAHIAAgNIAVAAIAAANg");
	this.shape_3.setTransform(19.6,-32.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AgPAUQgGgIAAgMQAAgIADgGQADgGAFgDQAFgDAFAAQAKAAAGAIQAGAIAAAKQAAAIgDAHQgDAGgFADQgFADgGAAQgIAAgHgHgAgGgLQgDAEAAAHQAAAIADAEQADAEADAAQAEAAADgEQADgEAAgIQAAgHgDgEQgDgEgEAAQgDAAgDAEg");
	this.shape_4.setTransform(15.3,-32.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AAIAaIAAgWIgPAAIAAAWIgLAAIAAgzIALAAIAAATIAPAAIAAgTIALAAIAAAzg");
	this.shape_5.setTransform(9.8,-32.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AgOATQgFgHAAgMQAAgMAFgHQAGgHAJAAQAHAAAEAEQAFAEADAJIgLACQgCgJgGAAQgDABgDADQgCAEAAAIQAAAJACADQADAEADAAQADAAACgCQACgCABgGIALADQgDASgQAAQgKAAgFgIg");
	this.shape_6.setTransform(4.6,-32.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AgPAXQgEgEAAgHQAAgFACgDQABgDADgBQADgCAGgCIALgDIgBgGIgDgCIgDgBQgDABgCABQgBABgCAEIgKgCQACgIAFgEQADgDAIAAQAGAAAEACQAEACACAEQABADABAJIAAAPIAAAKIACAHIgLAAIgCgGQgCAEgEACQgCABgEAAQgGAAgEgEgAAAADIgGADQAAAAgBABQAAABgBAAQAAABAAAAQAAABAAAAQAAAEACACQABAAAAAAQABABAAAAQABAAAAAAQABABABAAQAAAAABgBQAAAAAAAAQAAAAABAAQABgBAAAAQACgCACgCIABgIIAAgDIgHACg");
	this.shape_7.setTransform(-0.5,-32.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AAIAaIAAgoIgPAAIAAAoIgLAAIAAgzIAlAAIAAAzg");
	this.shape_8.setTransform(-5.8,-32.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("AgPAUQgGgIAAgMQAAgIADgGQADgGAFgDQAFgDAFAAQAKAAAGAIQAGAIAAAKQAAAIgDAHQgDAGgFADQgFADgGAAQgIAAgHgHgAgGgLQgDAEAAAHQAAAIADAEQADAEADAAQAEAAADgEQADgEAAgIQAAgHgDgEQgDgEgEAAQgDAAgDAEg");
	this.shape_9.setTransform(-11.2,-32.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AgNAVQgGgIAAgNQAAgMAGgHQAFgHAIAAQAJAAAFAHQAGAHAAAOIAAACIgbAAQAAAGACADQADAEADAAQAGAAABgIIAMADQgDAHgFAFQgEADgHAAQgIAAgGgGgAgFgNQgCAEAAAFIAQAAQAAgFgDgEQgCgDgDAAQgEAAgCADg");
	this.shape_10.setTransform(-16.5,-32.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("AAIAaIAAgWIgPAAIAAAWIgLAAIAAgzIALAAIAAATIAPAAIAAgTIALAAIAAAzg");
	this.shape_11.setTransform(-21.8,-32.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("AgNAaIAAgzIAbAAIAAALIgQAAIAAAog");
	this.shape_12.setTransform(-26.2,-32.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0000").s().p("AgTAcQgJgKAAgRQABgMAEgIQADgIAGgFQAGgEAIAAQAMAAAJAKQAHAKABAQQAAASgJAKQgHAJgNAAQgMAAgHgJgAgLgRQgEAFAAAMQAAAMAEAHQAFAGAGAAQAHAAAFgGQAEgGAAgNQABgMgFgFQgEgHgIAAQgGAAgFAHg");
	this.shape_13.setTransform(-31.8,-33.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// свечки
	this.instance = new lib.свеча();
	this.instance.parent = this;
	this.instance.setTransform(57.7,-34.9,0.8,0.8);

	this.instance_1 = new lib.свеча();
	this.instance_1.parent = this;
	this.instance_1.setTransform(61.8,-39.8,0.78,0.78);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// дефлектор
	this.instance_2 = new lib.конус01("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(23.5,-72.7,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// крыша
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#333333").ss(1,0,1,3,true).p("ArNEGIN0AAIA5BcIInp0IAAAAIgxhPIskAAgAsHFjIA6hd");
	this.shape_14.setTransform(27.6,-75.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#004080","#0062C4","#004080","#0062C4","#004080","#0062C4","#004080","#0062C4","#004080","#0062C4","#004080","#0062C4","#004080","#0062C4","#004080"],[0,0.071,0.149,0.224,0.298,0.369,0.443,0.518,0.584,0.663,0.729,0.8,0.867,0.933,1],0,31.1,0,-31).s().p("ArRE0IKApnIMjAAIovJng");
	this.shape_15.setTransform(28,-80.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#004080","#0062C4","#004080","#0062C4","#004080","#0062C4","#004080","#0062C4","#004080","#0062C4","#004080","#0062C4","#004080","#0062C4","#004080"],[0,0.071,0.149,0.224,0.298,0.369,0.443,0.518,0.584,0.663,0.729,0.8,0.867,0.933,1],-60.8,-18,6.4,-63).s().p("AkvEGIIupnIAxBPIAAAAIomJ0g");
	this.shape_16.setTransform(74.7,-75.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]}).wait(1));

	// окно
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#DFB800").ss(1,0,1).p("AAQgZIAOAZIgOAaIgeAAIgPgaIAPgZg");
	this.shape_17.setTransform(-13.5,-9.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#DFB800").ss(1,0,1).p("AAQgZIAOAZIgOAaIgeAAIgPgaIAPgZg");
	this.shape_18.setTransform(-13.5,-3.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#DFB800").ss(1,0,1).p("AAQgZIAOAZIgOAaIgeAAIgPgaIAPgZg");
	this.shape_19.setTransform(4.4,6.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#DFB800").ss(1,0,1).p("AAQgZIAOAZIgOAaIgeAAIgPgaIAPgZg");
	this.shape_20.setTransform(13.4,-9.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#DFB800").ss(1,0,1).p("AAQgZIAOAZIgOAaIgeAAIgPgaIAPgZg");
	this.shape_21.setTransform(8.9,9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#DFB800").ss(1,0,1).p("AAQgZIAOAZIgOAaIgeAAIgPgaIAPgZg");
	this.shape_22.setTransform(13.4,6.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#DFB800").ss(1,0,1).p("AAQgZIAOAZIgOAaIgeAAIgPgaIAPgZg");
	this.shape_23.setTransform(13.4,1.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#DFB800").ss(1,0,1).p("AAQgZIAOAZIgOAaIgeAAIgPgaIAPgZg");
	this.shape_24.setTransform(-0.1,9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#DFB800").ss(1,0,1).p("AAQgZIAOAZIgOAaIgeAAIgPgaIAPgZg");
	this.shape_25.setTransform(13.4,-3.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#DFB800").ss(1,0,1).p("AAQgZIAOAZIgOAaIgeAAIgPgaIAPgZg");
	this.shape_26.setTransform(4.5,1.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#DFB800").ss(1,0,1).p("AAQgZIAOAZIgOAaIgeAAIgPgaIAPgZg");
	this.shape_27.setTransform(8.9,-1.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#DFB800").ss(1,0,1).p("AAQgZIAOAZIgOAaIgeAAIgPgaIAPgZg");
	this.shape_28.setTransform(8.9,-6.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#DFB800").ss(1,0,1).p("AAQgZIAOAZIgOAaIgeAAIgPgaIAPgZg");
	this.shape_29.setTransform(4.5,-9.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#DFB800").ss(1,0,1).p("AAQgZIAOAZIgOAaIgeAAIgPgaIAPgZg");
	this.shape_30.setTransform(-4.6,-9.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#DFB800").ss(1,0,1).p("AAQgZIAOAZIgOAaIgeAAIgPgaIAPgZg");
	this.shape_31.setTransform(0,-6.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#DFB800").ss(1,0,1).p("AgdAAIAPgZIAdAAIAPAZIgPAaIgdAAg");
	this.shape_32.setTransform(-9,-6.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#DFB800").ss(1,0,1).p("AAQgZIAOAZIgOAaIgeAAIgPgaIAPgZg");
	this.shape_33.setTransform(0,-1.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#DFB800").ss(1,0,1).p("AAQgZIAOAZIgOAaIgeAAIgPgaIAPgZg");
	this.shape_34.setTransform(-4.5,1.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#DFB800").ss(1,0,1).p("AAQgZIAOAZIgOAaIgeAAIgPgaIAPgZg");
	this.shape_35.setTransform(-4.5,6.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#DFB800").ss(1,0,1).p("AAQgZIAOAZIgOAaIgeAAIgPgaIAPgZg");
	this.shape_36.setTransform(-9,9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#DFB800").ss(1,0,1).p("AAQgZIAOAZIgOAaIgeAAIgPgaIAPgZg");
	this.shape_37.setTransform(-9,-1.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#DFB800").ss(1,0,1).p("AAPAaIgdAAIgPgaIAPgZIAdAAIAPAZg");
	this.shape_38.setTransform(-13.5,6.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#DFB800").ss(1,0,1).p("AAQgZIAOAZIgOAaIgeAAIgPgaIAPgZg");
	this.shape_39.setTransform(-13.5,1.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#666666").s().p("AiiByIAAjjIFFAAIAADjg");

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#3E3E3E").ss(1,0,1,3,true).p("ADGiJImLAAIAAETIGLAAg");

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#505050").s().p("AjECKIAAkTIGJAAIAAETg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17}]}).wait(1));

	// дверь
	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(1,0,1).p("AAAgkIAABJ");
	this.shape_43.setTransform(81.6,-25.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#333333").ss(1,0,1,3,true).p("ABOCQIgFAGQgDADgCAEQhIBdhJBdIAAn0ICbi5gABOCQIAAAA");
	this.shape_44.setTransform(86.7,-32);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.lf(["#DFB800","#D5AF00"],[0,1],-7.7,0,7.8,0).s().p("AhNidICbi5IAAHmIgFAGIgFAHIiRC6gABJCWgABOCQIAAAAIgFAGg");
	this.shape_45.setTransform(86.7,-32);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#565F63").s().p("AhfiUIC/jlIAAH8IgRAWIAAnmIiaC5IAAH0IgUAag");
	this.shape_46.setTransform(86.5,-32.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43}]}).wait(1));

	// кант
	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#333333").ss(1,0,1,3,true).p("AAAAAIAAAA");
	this.shape_47.setTransform(50,32.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#333333").ss(1,0,1,3,true).p("ADhGFIImrDIAAhLAsGE6IAABLIPmAAIABAAADgE6IABBL");
	this.shape_48.setTransform(27.5,1.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#565F63").s().p("AsGE8IPmAAIABBLIgBAAIvmAAgADhGHIgBhLIAAAAIInrDIAABMIomLCg");
	this.shape_49.setTransform(27.5,0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_49},{t:this.shape_48},{t:this.shape_47}]}).wait(1));

	// Layer 14
	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#333333").ss(1,0,1,3,true).p("AAAlqIAALV");
	this.shape_50.setTransform(50,-3.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_50).wait(1));

	// ребра
	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#333333").ss(1,0,1,3,true).p("ALqAHIAeAAIAArRIgeAAAsHhUIAAMfIAeAA");
	this.shape_51.setTransform(27.6,-31.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#DFB800").s().p("ADCLLIAAsfIAfAAIAAgZIAeAAIAAMRIgeAmIAAABgAsHLLIAAsfIAfAAIAAMfgALpAHIAArRIAfAAIAALRg");
	this.shape_52.setTransform(27.6,-31.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_52},{t:this.shape_51}]}).wait(1));

	// Layer 1
	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.lf(["#999999","#7D7D7D"],[0,1],-88.2,18.2,-88.2,-122.5).s().p("AwjHQIE5lLIAADTIPnAAIAAAAIInrCIAAhkIEAAAIq4Oeg");
	this.shape_53.setTransform(24.7,5.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.lf(["#E6E6E6","#CCCCCC","#E6E6E6","#CCCCCC","#E6E6E6","#CCCCCC","#E6E6E6","#CCCCCC","#E6E6E6","#CCCCCC","#E6E6E6","#CCCCCC","#E6E6E6","#CCCCCC","#E6E6E6"],[0,0.071,0.149,0.224,0.298,0.369,0.443,0.518,0.584,0.663,0.729,0.8,0.867,0.933,1],-50,4.6,50,4.6).s().p("AnzG+IAAjTIAApMIAAAAIA6hcIN0AAIA5BcIAAAAIAAMfIAAAAg");
	this.shape_54.setTransform(0,-4.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.lf(["#E6E6E6","#CCCCCC","#E6E6E6","#CCCCCC","#E6E6E6","#CCCCCC","#E6E6E6","#CCCCCC","#E6E6E6","#CCCCCC","#E6E6E6","#CCCCCC","#E6E6E6","#CCCCCC","#E6E6E6"],[0,0.071,0.149,0.224,0.298,0.369,0.443,0.518,0.584,0.663,0.729,0.8,0.867,0.933,1],-27.5,0,27.6,0).s().p("AkShUIAAAAIIlp2IAAJuIAABjIolLEg");
	this.shape_55.setTransform(77.5,-31.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_55},{t:this.shape_54},{t:this.shape_53}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ГРПБ, new cjs.Rectangle(-81.2,-111.9,212,163.8), null);


(lib.выход01план = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAWAlIgTgaIgDgFIgDAFIgSAaIgMAAIAdgmIgagjIAMAAIANATIAGAJIAGgIIAOgUIALAAIgaAjIAcAmg");
	this.shape.setTransform(13.4,38);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAbAlIAAhJIAKAAIAABJgAgkAlIAAhJIAKAAIAAAgIARAAQAQAAAGAFQAFAGAAAJQAAAIgFAHQgGAGgPAAgAgaAdIASAAQAIAAAEgDQAEgDAAgHQAAgFgCgDQgDgDgDgBIgOgBIgMAAg");
	this.shape_1.setTransform(5.4,38);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgbAlIAAhJIAbAAQAIAAAGACQAFACADAFQACAFAAAFQAAAFgCAEQgDAEgFADQAHABADAEQAEAFAAAHQAAAFgCAEQgCAFgEACQgDADgFABIgMABgAgRAcIARAAIAHAAIAGgCIADgEQACgDAAgDQAAgEgCgEQgCgDgEgBQgEgBgGAAIgRAAgAgRgFIAQAAIAIgBQAEgBACgCQACgDAAgEQAAgEgCgCQgCgDgDgBIgKgBIgPAAg");
	this.shape_2.setTransform(-2.6,38);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgrA5IAAhxIArAAIARABQAIABAGAEQAGAEADAHQAEAHAAAJQAAAOgKAKQgJAKgYAAIgdAAIAAAugAgcgCIAdAAQAPAAAGgFQAGgGAAgKQAAgHgEgFQgDgFgGgCIgOgBIgdAAg");
	this.shape_3.setTransform(-11.2,34.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.instance = new lib.кругплан("synched",0);
	this.instance.parent = this;

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("ADriHQANANACASIAADRQgCARgNANQgOAOgTABImSAAQgUgBgPgOQgOgPAAgTIAAjJQAAgUAOgPQAOgOAUAAIGTAAQATAAAOAOg");
	this.shape_4.setTransform(0,35);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFE1").s().p("AjICWQgUgBgPgOQgOgOAAgUIAAjJQAAgUAOgPQAOgOAUAAIGTAAQATAAAOAOQANANACASIAADRQgCARgNANQgOAOgTABg");
	this.shape_5.setTransform(0,35);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(1,1,1).p("AAAhjIAADH");
	this.shape_6.setTransform(0,10);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.выход01план, new cjs.Rectangle(-26,-4,52,55), null);


(lib.план03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// табло
	this.instance = new lib.выход01план();
	this.instance.parent = this;
	this.instance.setTransform(124.3,50);

	this.instance_1 = new lib.стрелкажелтая();
	this.instance_1.parent = this;
	this.instance_1.setTransform(139.3,30);

	this.instance_2 = new lib.стрелкажелтая();
	this.instance_2.parent = this;
	this.instance_2.setTransform(157.6,126.6,1,1,90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// ГРУ
	this.instance_3 = new lib.котел();
	this.instance_3.parent = this;
	this.instance_3.setTransform(130.1,235);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// дверь
	this.instance_4 = new lib.дверца("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-0.1,150,1,1,15);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// контур
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1,3,true).p("AuIUUIAAmQIhkAAIAAH0IfZAAMAAAgrvI/ZAAIAAXbIBkAAIAA13IcRAAMAAAAonI8RAA");
	this.shape.setTransform(100.6,140);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AvsV4IAAn0IBkAAIAAGQIAAAAIcRAAMAAAgonI8RAAIAAV3IhkAAIAA3bIfZAAMAAAArvg");
	this.shape_1.setTransform(100.6,140);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 10
	this.gru_04 = new lib.ГРУ();
	this.gru_04.name = "gru_04";
	this.gru_04.parent = this;
	this.gru_04.setTransform(55.7,50);

	this.timeline.addTween(cjs.Tween.get(this.gru_04).wait(1));

	// трубы
	this.instance_5 = new lib.trube_yellow_direct_10_10("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(137.6,172.5,1,6.481,0,-90,90);

	this.instance_6 = new lib.trube_yellow_angle_20_20("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(170.1,172.5,1,1,0,90,-90);

	this.instance_7 = new lib.trube_yellow_angle_20_20("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(137.6,172.5,1,1,0,-90,90);

	this.instance_8 = new lib.trube_yellow_direct_10_10("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(177.6,57.5,1,21.62,0,0,180);

	this.instance_9 = new lib.trube_yellow_direct_10_10("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(130.1,180,1,6.001,0,0,180);

	this.instance_10 = new lib.trube_yellow_T_20_20("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(177.6,50,1,1,0,-90,90);

	this.instance_11 = new lib.trube_yellow_direct_10_10("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(7.4,50,1,36.857,-90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5}]}).wait(1));

	// пол
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("Au6UUMAAAgonId1AAMAAAAong");
	this.shape_2.setTransform(105.6,140);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.8,-1,223.9,282);


(lib.стрелкаимуравьиэталон80 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.стр1210();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1,1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ao0AeIAAg7IRpAAIAAA7g");
	mask.setTransform(68.5,0);

	// Слой 1
	this.instance_1 = new lib.муравьибегутжелтые();
	this.instance_1.parent = this;
	this.instance_1.setTransform(381,0);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EhDaAAUIAAgnMCG1AAAIAAAng");
	this.shape.setTransform(443.5,0);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.стрелкаимуравьиэталон80, new cjs.Rectangle(0,-7.5,125,15), null);


(lib.sizesморгает = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(1,1,1).p("AUtnQIAAOhAcIk7IAAMMEAlggE7IAAMMEAs7gHQIAAOhA0snQIAAOhA8Hk7IAAMMEglfgE7IAAMMEgs6gHQIAAOh");
	this.shape.setTransform(0,-13.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AUtnQIAAOhAcIk7IAAMMEAlggE7IAAMMEAs7gHQIAAOhA0snQIAAOhA8Hk7IAAMMEglfgE7IAAMMEgs6gHQIAAOh");
	this.shape_1.setTransform(0,-13.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},10).wait(10));

	// Layer 1
	this.instance = new lib.size();
	this.instance.parent = this;
	this.instance.setTransform(263.8,39.5,1,1.001);
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 0, 0, 0)];
	this.instance.cache(-30,-22,60,45);

	this.instance_1 = new lib.size();
	this.instance_1.parent = this;
	this.instance_1.setTransform(156.3,39.5);
	this.instance_1.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 0, 0, 0)];
	this.instance_1.cache(-30,-22,60,45);

	this.instance_2 = new lib.size();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-156.2,39.5,1,1.001);
	this.instance_2.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 0, 0, 0)];
	this.instance_2.cache(-30,-22,60,45);

	this.instance_3 = new lib.size();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-263.7,39.5);
	this.instance_3.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 0, 0, 0)];
	this.instance_3.cache(-30,-22,60,45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},10).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-291.8,-61,583.6,121.1);


(lib.вых = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAhA4IgcgoIgFgIIgEAJIgcAnIgSAAIArg5Igmg2IASAAIAUAdIAIANIAJgMIAWgeIAQAAIgnA1IAqA6g");
	this.shape.setTransform(20.1,-132.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AApA4IAAhvIAPAAIAABvgAg3A4IAAhvIAPAAIAAAwIAaAAQAZAAAJAIQAIAKAAAMQAAANgJAKQgJAKgWAAgAgoArIAbAAQANAAAGgEQAGgFAAgKQAAgHgEgFQgDgFgGgBQgFgCgPAAIgTAAg");
	this.shape_1.setTransform(8,-132.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgpA4IAAhvIApAAQAMAAAJAEQAHADAEAHQAFAHAAAIQAAAHgEAGQgEAGgIAEQALADAFAGQAFAIAAAJQAAAIgDAHQgEAHgFADQgEAEgHACQgIACgKAAgAgaArIAbAAIAKgBQAEgBAEgCQADgCACgEQADgEAAgGQAAgGgEgEQgDgFgFgCQgGgCgKAAIgZAAgAgagIIAYAAQAIAAAFgBQAGgCADgEQACgEAAgGQAAgFgCgEQgDgFgFgBQgFgCgLAAIgWAAg");
	this.shape_2.setTransform(-3.9,-132.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhBBWIAAirIBBAAQAQAAAKACQAMACAJAGQAIAGAFAKQAGALgBANQAAAWgOAOQgNAPgkAAIgsAAIAABGgAgqgDIAsAAQAWAAAJgJQAJgHAAgPQAAgLgFgIQgFgHgKgDQgGgCgPAAIgrAAg");
	this.shape_3.setTransform(-16.9,-137);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.instance = new lib.выноска();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.вых, new cjs.Rectangle(-38,-159.8,76,165.8), null);


(lib.клип = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{st_01:0,st_02:9,st_03:19,st_04:29,st_20_1:39,st_20_2:49,st_05_1:59,st_05_2:69,st_05_3:79,st_05_4:89,st_06_1:99,st_06_2:109,st_07_1:139,st_07_2:149,st_08:180,st_09:189,st_10:199,st_11:209});

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
	this.frame_58 = function() {
		this.stop();
	}
	this.frame_68 = function() {
		this.stop();
	}
	this.frame_78 = function() {
		this.stop();
	}
	this.frame_88 = function() {
		this.stop();
	}
	this.frame_98 = function() {
		this.stop();
	}
	this.frame_108 = function() {
		this.stop();
	}
	this.frame_138 = function() {
		this.stop();
	}
	this.frame_148 = function() {
		this.stop();
	}
	this.frame_179 = function() {
		this.stop();
	}
	this.frame_188 = function() {
		this.stop();
	}
	this.frame_198 = function() {
		this.stop();
	}
	this.frame_208 = function() {
		this.stop();
	}
	this.frame_239 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(8).call(this.frame_8).wait(10).call(this.frame_18).wait(10).call(this.frame_28).wait(10).call(this.frame_38).wait(10).call(this.frame_48).wait(10).call(this.frame_58).wait(10).call(this.frame_68).wait(10).call(this.frame_78).wait(10).call(this.frame_88).wait(10).call(this.frame_98).wait(10).call(this.frame_108).wait(30).call(this.frame_138).wait(10).call(this.frame_148).wait(31).call(this.frame_179).wait(9).call(this.frame_188).wait(10).call(this.frame_198).wait(10).call(this.frame_208).wait(31).call(this.frame_239).wait(1));

	// подписи картинок
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#213852").s().p("AAcA0IAAgpIgKAAQgJAAgEADQgFACgIANIgPAXIgWAAIATgcQAJgNAIgCQgPgCgHgHQgHgJAAgMQAAgNAJgJQAJgIATAAIAvAAIAABngAgQggQgEAFAAAHQgBAJAIAFQAGAEAQAAIATAAIAAgiIgYAAQgQAAgEAEg");
	this.shape.setTransform(462.4,254.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#213852").s().p("AAZA0IAAhOIgwBOIgTAAIAAhnIASAAIAABOIAwhOIATAAIAABng");
	this.shape_1.setTransform(451.9,254.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#213852").s().p("AAYA0IAAguIgvAAIAAAuIgSAAIAAhnIASAAIAAArIAvAAIAAgrIASAAIAABng");
	this.shape_2.setTransform(440.8,254.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#213852").s().p("AgiAoQgNgOAAgZQAAgZAOgPQANgOAVAAQAUAAANAOQAOAOAAAZIAAAEIhNAAQABARAJAKQAJAJAMAAQAJAAAHgFQAHgGAEgLIASADQgEAQgMAIQgLAJgTAAQgVAAgOgOgAgTgfQgIAIgBAOIA5AAQgBgNgGgHQgIgKgNAAQgLAAgJAIg");
	this.shape_3.setTransform(429.7,254.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#213852").s().p("AgxAzIAAgOIAHAAQAFAAADgCQABAAAAAAQAAAAABgBQAAAAAAgBQABAAAAgBQABgCAAgOIAAhDIBRAAIAABmIgSAAIAAhYIgtAAIAAAzQgBASgBAGQgBAFgFAFQgFAEgLAAIgNgBg");
	this.shape_4.setTransform(417.9,254.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#213852").s().p("AgpA0IAAhnIAoAAQAOAAAHADQAIACAFAHQAFAGAAAKQAAAHgEAGQgCAFgHAEQAIABAEAHQAGAHgBAJQAAAOgKAIQgJAHgTAAgAgYAlIAXAAQAOAAAFgDQAGgEAAgIQAAgFgDgEQgDgFgFgBIgQgBIgVAAgAgYgHIATAAIAOgBQAEgCADgDQAEgEAAgFQAAgIgGgDQgFgDgOAAIgTAAg");
	this.shape_5.setTransform(408,254.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#213852").s().p("AglAuQgKgJAAgNQAAgHAEgGQADgHAGgEQAGgCAHgCIAPgDQAVgDAKgDIAAgFQAAgKgFgFQgHgGgNAAQgMAAgGAFQgFAEgDALIgRgCQACgLAFgHQAGgHAKgEQAKgDAMAAQAOAAAIADQAIADAEAFQAEAEACAIIAAAQIAAAWQAAAZACAGQABAHADAGIgSAAQgDgGgBgHQgKAIgJAEQgIADgKAAQgRAAgJgIgAgDAGQgLACgEACQgFACgCAEQgDADAAAFQAAAHAGAFQAFAEAKAAQAJAAAIgEQAIgFAEgHQADgGAAgMIAAgGQgKAEgSACg");
	this.shape_6.setTransform(396.7,254.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#213852").s().p("AApBDIAAgeIhRAAIAAAeIgOAAIAAgsIAJAAQATgYgBhAIBHAAIAABYIALAAIAAAsgAgcAXIA3AAIAAhKIgoAAQgCAzgNAXg");
	this.shape_7.setTransform(385.1,256);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#213852").s().p("AgsBJIAAiOIAQAAIAAANQAGgIAHgEQAHgEAKAAQANAAAJAHQALAHAFAMQAFANAAAPQAAAQgGALQgFANgLAHQgLAHgMAAQgIAAgHgEQgGgEgFgFIAAAygAgTgvQgJAKAAAUQAAATAIAKQAJAJALAAQALAAAIgKQAJgKAAgTQAAgUgJgKQgIgKgLAAQgKAAgJALg");
	this.shape_8.setTransform(368.8,256.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#213852").s().p("AgiAoQgOgOAAgaQAAgcAQgOQAOgLASAAQAVAAAOAOQAOAOAAAYQAAATgGAMQgGALgMAHQgLAGgOAAQgVAAgNgOgAgVgdQgJAKAAATQAAAUAJAKQAJAKAMAAQANAAAJgKQAIgKAAgUQAAgTgIgKQgJgKgNAAQgMAAgJAKg");
	this.shape_9.setTransform(357.4,254.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#213852").s().p("AgIA0IAAhYIghAAIAAgPIBTAAIAAAPIghAAIAABYg");
	this.shape_10.setTransform(347.5,254.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#213852").s().p("AAdA0IAAgpIgLAAQgJAAgEADQgFACgIANIgPAXIgWAAIATgcQAJgNAIgCQgPgCgHgHQgHgJgBgMQABgNAJgJQAJgIATAAIAvAAIAABngAgQggQgEAFgBAHQAAAJAIAFQAGAEAQAAIAUAAIAAgiIgZAAQgQAAgEAEg");
	this.shape_11.setTransform(337,254.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#213852").s().p("AgxAzIAAgOIAHAAQAGAAACgCQAAAAABAAQAAAAABgBQAAAAAAgBQABAAAAgBQABgCAAgOIAAhDIBRAAIAABmIgSAAIAAhYIgtAAIAAAzQgBASgBAGQgBAFgGAFQgEAEgLAAIgNgBg");
	this.shape_12.setTransform(325.7,254.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#213852").s().p("AglBHIgCgRIAKACQAGAAADgCQAEgCACgEQACgCADgLIACgEIgohnIATAAIAXA8IAGAXIAHgXIAWg8IASAAIgoBpIgJAXQgEAJgHAEQgFAEgJAAQgFAAgGgCg");
	this.shape_13.setTransform(315.9,256.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#213852").s().p("AgdA0IAAhnIA7AAIAAAPIgpAAIAABYg");
	this.shape_14.setTransform(307.9,254.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#213852").s().p("AgiAoQgNgOAAgZQAAgZAOgPQANgOAVAAQAUAAANAOQAOAOAAAZIAAAEIhNAAQABARAJAKQAJAJAMAAQAJAAAHgFQAHgGAEgLIASADQgEAQgMAIQgLAJgTAAQgVAAgOgOgAgTgfQgIAIgBAOIA5AAQgBgNgGgHQgIgKgNAAQgLAAgJAIg");
	this.shape_15.setTransform(298,254.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#213852").s().p("AgsBJIAAiOIAQAAIAAANQAGgIAHgEQAHgEAJAAQANAAALAHQAKAHAFAMQAFANAAAPQAAAQgGALQgFANgLAHQgLAHgMAAQgIAAgHgEQgGgEgFgFIAAAygAgTgvQgJAKAAAUQAAATAIAKQAJAJALAAQAKAAAJgKQAIgKAAgTQAAgUgIgKQgIgKgLAAQgLAAgIALg");
	this.shape_16.setTransform(287.2,256.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#213852").s().p("AAbBIIgYgnQgJgQgHgGQgHgGgKAAIAABDIgTAAIAAiOIATAAIAAA+QANAAAFgFQAFgFAIgTQAGgOAEgGQADgGAHgEQAIgEAIAAIAMABIAAAQIgEAAIgEAAQgJAAgEAEQgFAFgGAOQgHASgFAFQgFAFgGADQANACAOAWIAdAwg");
	this.shape_17.setTransform(390,252.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#213852").s().p("AghBAQgOgJgIgSQgHgSAAgTQAAgWAIgRQAJgRAQgIQAPgJASAAQAWAAAOALQAPALAGATIgTAFQgFgQgJgHQgKgHgOAAQgQAAgLAIQgLAIgEAOQgFANAAAOQAAARAGANQAFAOALAHQALAHAMgBQAQAAALgJQALgIAEgTIATAFQgGAXgPANQgQAMgWAAQgWAAgPgKg");
	this.shape_18.setTransform(376.3,252.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#213852").s().p("AAlBHIAAh9IhJAAIAAB9IgTAAIAAiOIBvAAIAACOg");
	this.shape_19.setTransform(361.8,252.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#213852").s().p("Ag0AfIASgFQADALAIAKQAKAKANAAQAPABAJgIQAJgIAAgKQAAgMgJgIQgKgGgOAAIgJAAIAAgQQALAAAIgBQAGgCAGgGQAFgGAAgJQAAgIgHgIQgIgGgMAAQgKgBgHAGQgIAFgDAKQgDAIAAAEIgSgDQAGguArAAQAWAAAMALQAMAMAAAQQAAAUgTALQALADAHAJQAHAIABANQgBATgOANQgOAMgYAAQgnAAgNgrg");
	this.shape_20.setTransform(376.2,252.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#213852").s().p("AgpA0IAAhnIARAAIAAApIAWAAQAVAAAMAIQALAHAAAPQAAANgJAKQgKAJgWAAgAgYAlIATAAQAPAAAHgEQAIgEgBgJQAAgGgFgGQgFgFgRAAIgVAAg");
	this.shape_21.setTransform(385.5,254.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#213852").s().p("AgyAzIAAgOIAIAAQAFAAADgCQABAAAAAAQAAAAABgBQAAAAAAgBQABAAAAgBQABgCAAgOIAAhDIBRAAIAABmIgSAAIAAhYIgtAAIAAAzQAAASgCAGQgBAFgFAFQgGAEgKAAIgOgBg");
	this.shape_22.setTransform(373.6,254.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#213852").s().p("AgIBbIAAgwQgFAFgGADQgHADgHAAQgRAAgMgOQgMgPAAgZQAAgXALgPQALgPATAAQAIAAAGADQAGADAFAGIAAgxIARAAIAAAxQAFgGAHgDQAGgDAIAAQASAAALAPQALAPAAAXQAAAYgMAPQgLAPgSAAQgFAAgGgCQgGgBgIgIIAAAwgAAPgdQgGAKAAATQAAAYAGAIQAHAIAJAAQALAAAIgKQAHgKAAgUQAAgUgHgJQgHgKgLAAQgLAAgGAKgAgxgdQgHAKAAASQAAAVAHAKQAIAKALAAQALAAAGgKQAFgKAAgTQAAgTgGgLQgGgKgMAAQgKAAgHAKg");
	this.shape_23.setTransform(348.9,254.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_16,p:{x:287.2}},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10,p:{x:347.5}},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1,p:{x:451.9}},{t:this.shape}]},59).to({state:[{t:this.shape_19,p:{x:361.8}},{t:this.shape_18},{t:this.shape_17,p:{x:390}}]},10).to({state:[{t:this.shape_19,p:{x:362.9}},{t:this.shape_20},{t:this.shape_17,p:{x:388.8}}]},10).to({state:[{t:this.shape_23},{t:this.shape_1,p:{x:362.7}},{t:this.shape_22},{t:this.shape_21},{t:this.shape_10,p:{x:393.3}},{t:this.shape_16,p:{x:403.7}}]},10).to({state:[]},10).wait(141));

	// картинки
	this.instance = new lib.РДУК();
	this.instance.parent = this;
	this.instance.setTransform(269.9,305);

	this.instance_1 = new lib.ПСК();
	this.instance_1.parent = this;
	this.instance_1.setTransform(273,295);

	this.instance_2 = new lib.ПЗК();
	this.instance_2.parent = this;
	this.instance_2.setTransform(287,295);

	this.instance_3 = new lib.фильтр();
	this.instance_3.parent = this;
	this.instance_3.setTransform(270,325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},59).to({state:[{t:this.instance_1}]},10).to({state:[{t:this.instance_2}]},10).to({state:[{t:this.instance_3}]},10).to({state:[]},10).wait(141));

	// табло
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgrBFIAAgQQAIAEAIAAQAHAAAFgEQAFgFAGgPIg6hpIATAAIAuBXIAphXIATAAIg2BvQgJAUgGAHQgHAHgMgBQgHAAgLgDg");
	this.shape_24.setTransform(570.5,516.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("Ag2BHIAAiOIA2AAIAVABQALADAHAEQAHAGAFAIQADAJAAALQAAASgLALQgMANgeABIgkAAIAAA5gAgjgCIAkAAQATAAAHgIQAIgGAAgMQAAgKgEgGQgFgHgIgCIgRgBIgkAAg");
	this.shape_25.setTransform(558.7,516.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AguBHIAAiOIBdAAIAAARIhKAAIAAB9g");
	this.shape_26.setTransform(547.6,516.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAlBHIAAh9IhJAAIAAB9IgTAAIAAiOIBvAAIAACOg");
	this.shape_27.setTransform(206.4,516.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("Ag2BHIAAiOIA2AAIAVABQALADAHAEQAHAGAEAIQAEAJAAALQABASgMALQgMANgeABIgkAAIAAA5gAgjgCIAlAAQASAAAHgIQAIgGAAgMQAAgKgEgGQgFgHgIgCIgRgBIgkAAg");
	this.shape_28.setTransform(193.4,516.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AhLBHIAAiOIATAAIAAB9IAwAAIAAh9IARAAIAAB9IAwAAIAAh9IATAAIAACOg");
	this.shape_29.setTransform(177.7,516.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgXBeQAdgvAAgvQAAgRgFgSQgCgPgGgOIgQgdIANAAQARAZAJAYQAIAWAAAWQAAAagKAZQgLAYgNATg");
	this.shape_30.setTransform(650.3,110.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("Ag1BIIAAiOIBcAAIAAARIhJAAIAAArIAiAAQASAAALAEQALAEAHAIQAHAKAAAOQAAAKgFAKQgFAJgJAHQgKAFgXABgAgiA4IAlAAQAPgBAIgGQAIgGAAgMQAAgJgFgHQgEgFgIgDQgIgCgSAAIgZAAg");
	this.shape_31.setTransform(641.1,108.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AAlBIIAAh9IhJAAIAAB9IgTAAIAAiOIBvAAIAACOg");
	this.shape_32.setTransform(627.4,108.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("Ag1BIIAAiOIA1AAIAVABQALABAHAGQAHAEAEAJQAFAJAAALQAAASgMAMQgMANgegBIgjAAIAAA7gAgigDIAkAAQARABAJgIQAHgGAAgNQAAgIgFgHQgEgGgHgCIgSgBIgjAAg");
	this.shape_33.setTransform(614.4,108.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgtBIIAAiOIBcAAIAAARIhJAAIAAB9g");
	this.shape_34.setTransform(603.2,108.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AALBeQgOgTgKgYQgKgZAAgaQAAgWAIgWQAJgYARgZIANAAQgMAUgEAJQgGAOgCAOQgFATAAARQAAAvAdAvg");
	this.shape_35.setTransform(594.4,110.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AAlBIIAAh9IhJAAIAAB9IgTAAIAAiOIBvAAIAACOg");
	this.shape_36.setTransform(579.1,108.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("Ag1BIIAAiOIA1AAIAVABQALABAHAGQAHAEAFAJQADAJABALQgBASgLAMQgMANgegBIgjAAIAAA7gAgigDIAjAAQASABAIgIQAIgGAAgNQAAgIgFgHQgEgGgIgCIgRgBIgjAAg");
	this.shape_37.setTransform(566.1,108.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgtBIIAAiOIBbAAIAAARIhJAAIAAB9g");
	this.shape_38.setTransform(554.9,108.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AAZBIIAAhOIgwBOIgTAAIAAhnIASAAIAABOIAwhOIATAAIAABngAgRgzQgIgHgBgMIAMAAQABAGAEAEQAEADAGAAQAIAAAEgDQAEgDABgHIAMAAQgBAMgHAHQgIAGgMAAQgMAAgHgGg");
	this.shape_39.setTransform(538.6,108.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AAoA0IAAhnIASAAIAABngAg5A0IAAhnIARAAIAAApIAXAAQAVAAALAIQAMAHAAAPQAAANgJAKQgLAJgUAAgAgoAlIATAAQARAAAGgEQAHgEAAgJQAAgGgFgGQgFgFgRAAIgWAAg");
	this.shape_40.setTransform(526.3,110.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AAYA0IAAguIgvAAIAAAuIgSAAIAAhnIASAAIAAArIAvAAIAAgrIASAAIAABng");
	this.shape_41.setTransform(514.1,110.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AAZA0IAAgqQgRAFgNAAQgLAAgJgGQgKgGgDgIQgDgIAAgLIAAgbIASAAIAAAUQAAAMABAGQACAGAFAEQAGADAJAAQAJAAAQgEIAAgvIARAAIAABng");
	this.shape_42.setTransform(503.5,110.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgiAoQgOgOAAgaQAAgcAQgOQAOgLASAAQAVAAAOAOQAOAOAAAYQAAATgGAMQgGALgMAHQgLAGgOAAQgVAAgNgOgAgVgdQgJAKAAATQAAAUAJAKQAJAKAMAAQANAAAJgKQAIgKAAgUQAAgTgIgKQgJgKgNAAQgMAAgJAKg");
	this.shape_43.setTransform(494,110.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgyA0IAAgPIAIAAQAGAAACgBQAAgBABAAQAAAAABgBQAAAAAAgBQABAAAAgBQABgCAAgOIAAhDIBQAAIAABnIgRAAIAAhYIguAAIAAAyQABASgCAGQgBAFgGAFQgFAEgJAAIgPAAg");
	this.shape_44.setTransform(482.5,110.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("Ag1BIIAAiOIBcAAIAAARIhJAAIAAArIAiAAQASAAALAEQALAEAHAIQAHAKAAAOQAAAKgFAKQgFAJgJAHQgKAFgXABgAgiA4IAlAAQAPgBAIgGQAIgGAAgMQAAgJgFgHQgEgFgIgDQgIgCgSAAIgZAAg");
	this.shape_45.setTransform(471.8,108.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AAlBIIAAh9IhJAAIAAB9IgTAAIAAiOIBvAAIAACOg");
	this.shape_46.setTransform(202.7,108.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("Ag1BIIAAiOIA1AAIAVABQALABAHAGQAHAEAEAJQAFAJAAALQAAASgMAMQgLANgfgBIgjAAIAAA7gAgigDIAkAAQARABAJgIQAHgGAAgNQAAgIgFgHQgEgGgHgCIgSgBIgjAAg");
	this.shape_47.setTransform(189.7,108.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgtBIIAAiOIBbAAIAAARIhIAAIAAB9g");
	this.shape_48.setTransform(178.5,108.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(1,1,1).p("A4OjkMAwcAAAQAoABAcAcQAaAaADAjIAAEVQgDAjgaAZQgcAdgoABMgwaAAAQgogBgdgdQgcgcgBgoIAAkEQABgoAcgeQAdgcAmgBg");
	this.shape_49.setTransform(190.9,108.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFE1").s().p("A4MDlQgngBgegdQgcgdgBgnIAAkEQABgoAcgeQAdgbAngCMAwbAAAQAoABAcAcQAZAaAEAjIAAEVQgEAjgZAZQgcAdgoABg");
	this.shape_50.setTransform(190.9,108.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#000000").ss(1,1,1).p("A4NjkMAwbAAAQAoABAcAcQAaAaADAjIAAEVQgDAjgaAZQgcAdgoABMgwaAAAQgngBgdgdQgdgcgBgoIAAkEQABgoAdgeQAcgcAngBg");
	this.shape_51.setTransform(558.9,108.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFE1").s().p("A4MDlQgogBgdgdQgcgdgBgnIAAkEQABgoAcgeQAdgbAngCMAwbAAAQAoABAcAcQAaAaADAjIAAEVQgDAjgaAZQgcAdgoABg");
	this.shape_52.setTransform(558.9,108.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#000000").ss(1,1,1).p("A4OjkMAwcAAAQAoABAcAcQAaAaADAjIAAEVQgDAjgaAZQgcAdgoABMgwaAAAQgogBgdgdQgcgcgBgoIAAkEQABgoAcgeQAdgcAmgBg");
	this.shape_53.setTransform(190.9,516.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFE1").s().p("A4MDlQgngBgegdQgcgcgBgoIAAkEQABgoAcgeQAdgcAngBMAwbAAAQAoABAcAcQAZAaAEAjIAAEVQgEAjgZAZQgcAdgoABg");
	this.shape_54.setTransform(190.9,516.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#000000").ss(1,1,1).p("A4NjkMAwbAAAQAoABAcAcQAaAaADAjIAAEVQgDAjgaAZQgcAdgoABMgwaAAAQgngBgdgdQgdgcgBgoIAAkEQABgoAdgeQAcgcAngBg");
	this.shape_55.setTransform(558.9,516.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFE1").s().p("A4MDlQgogBgdgdQgcgcgBgoIAAkEQABgoAcgeQAdgcAngBMAwbAAAQAoABAcAcQAaAaADAjIAAEVQgDAjgaAZQgcAdgoABg");
	this.shape_56.setTransform(558.9,516.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]},209).wait(31));

	// Layer 27 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_209 = new cjs.Graphics().p("A7oX5MAAAgvxMA3RAAAMAAAAvxg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(209).to({graphics:mask_graphics_209,x:190.9,y:-81.6}).wait(31));

	// ГРП
	this.instance_4 = new lib.ГРПкирпич();
	this.instance_4.parent = this;
	this.instance_4.setTransform(52.2,27.8,1.1,1.1,0,0,0,0.1,-0.1);
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(209).to({_off:false},0).wait(31));

	// Layer 37
	this.instance_5 = new lib.ГРПБ();
	this.instance_5.parent = this;
	this.instance_5.setTransform(521.8,-37.3,1.5,1.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(209).to({_off:false},0).wait(31));

	// ГРПБ + шкаф
	this.instance_6 = new lib.ГРПкирпич();
	this.instance_6.parent = this;
	this.instance_6.setTransform(87.6,475);

	this.instance_7 = new lib.ГРПБ();
	this.instance_7.parent = this;
	this.instance_7.setTransform(526.6,416.8,1.4,1.4,0,0,0,0.1,0.1);

	this.instance_8 = new lib.ШРП("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(402.6,461.5,1.8,1.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_7},{t:this.instance_6}]},39).to({state:[{t:this.instance_8,p:{scaleX:1.8,scaleY:1.8,x:402.6,y:461.5}}]},10).to({state:[]},10).to({state:[{t:this.instance_8,p:{scaleX:1.9,scaleY:1.9,x:210.1,y:417.7}}]},150).wait(31));

	// Layer 38
	this.instance_9 = new lib.план03("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(460.8,174.2,1.09,1.09,0,0,0,0.2,0.1);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(209).to({_off:false},0).wait(31));

	// земля
	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.lf(["#89652E","#E3CDAC"],[0,0.851],-913.2,-261.1,-912.2,155).s().p("A7oX4MAAAgvvMA3RAAAMAAAAvvg");
	this.shape_57.setTransform(14,173.8,1,1,0,0,0,-176.9,-152.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.lf(["#89652E","#E3CDAC"],[0,0.851],-913.2,-261.1,-912.2,155).s().p("A7oX5MAAAgvxMA3RAAAMAAAAvxg");
	this.shape_58.setTransform(382,-234.5,1,1,0,0,0,-176.9,-152.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.lf(["#89652E","#E3CDAC"],[0,0.851],-913.2,-261.1,-912.2,155).s().p("A7oX5MAAAgvxMA3RAAAMAAAAvxg");
	this.shape_59.setTransform(14,-234.5,1,1,0,0,0,-176.9,-152.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_59},{t:this.shape_58},{t:this.shape_57}]},209).wait(31));

	// краны
	this.kr_01 = new lib.кранбелыйморгает();
	this.kr_01.name = "kr_01";
	this.kr_01.parent = this;
	this.kr_01.setTransform(72.5,150);

	this.kr_04 = new lib.кранбелый();
	this.kr_04.name = "kr_04";
	this.kr_04.parent = this;
	this.kr_04.setTransform(677.5,150);

	this.kr_03 = new lib.кранбелыйморгает();
	this.kr_03.name = "kr_03";
	this.kr_03.parent = this;
	this.kr_03.setTransform(492.5,150);

	this.kr_02 = new lib.кранбелыйморгает();
	this.kr_02.name = "kr_02";
	this.kr_02.parent = this;
	this.kr_02.setTransform(257.5,150);

	this.kr_01_1 = new lib.кранбелый();
	this.kr_01_1.name = "kr_01_1";
	this.kr_01_1.parent = this;
	this.kr_01_1.setTransform(72.5,150);

	this.kr_03_1 = new lib.кранбелый();
	this.kr_03_1.name = "kr_03_1";
	this.kr_03_1.parent = this;
	this.kr_03_1.setTransform(492.5,150);

	this.kr_02_1 = new lib.кранбелый();
	this.kr_02_1.name = "kr_02_1";
	this.kr_02_1.parent = this;
	this.kr_02_1.setTransform(257.5,150);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.kr_01}]},180).to({state:[{t:this.kr_01_1},{t:this.kr_02},{t:this.kr_03},{t:this.kr_04}]},9).to({state:[{t:this.kr_01_1},{t:this.kr_02_1},{t:this.kr_03_1},{t:this.kr_04}]},10).to({state:[]},10).wait(31));

	// разное
	this.instance_10 = new lib.формула("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(165,245);

	this.davlenie = new lib.давление();
	this.davlenie.name = "davlenie";
	this.davlenie.parent = this;
	this.davlenie.setTransform(396.2,150,1,1,0,0,0,-323.8,130);

	this.instance_11 = new lib.колонка();
	this.instance_11.parent = this;
	this.instance_11.setTransform(296,255);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#213852").ss(1,1,1).p("A1i3bMArKAAAQAtADAiAeQAkAhABAvMAAAArWQgBAugkAgQgkAhgxABMgrEAAAQgygBgjghQgkggAAguMAAAgrWQAAgvAkghQAjghAyAAg");
	this.shape_60.setTransform(374.9,375.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#9CC1D3").s().p("A1iXcQgxgBgkghQgjgggBgvMAAAgrVQABguAjgiQAjggAygBMArKAAAQAtADAiAeQAkAiABAuMAAAArVQgCAvgjAgQgkAhgxABg");
	this.shape_61.setTransform(374.9,375.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#213852").ss(1,1,1).p("AABD8IgBn3");
	this.shape_62.setTransform(375.1,200.2);

	this.instance_12 = new lib.промоборудование();
	this.instance_12.parent = this;
	this.instance_12.setTransform(265,251);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FF0000").s().p("AgmAtQgKgIAAgOQAAgIAFgHQAEgHAHgDQAIgDAOgDQASgEAIgDIAAgDQAAgIgEgDQgEgDgKAAQgHAAgEADQgEACgDAIIgZgFQAEgPALgHQAKgHAUAAQARAAAJAEQAJAEAEAHQAEAHAAASIgBAfQAAANACAHQABAGAEAIIgbAAIgDgIIgBgEQgHAHgIAEQgHADgJAAQgQAAgJgJgAAAAGQgLADgEACQgFAEAAAGQAAAFAEAFQAEAEAHAAQAGAAAHgFQAFgEACgFIABgOIAAgFIgQAEg");
	this.shape_63.setTransform(482.5,-187.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FF0000").s().p("AAcBHIAAh2Ig3AAIAAB2IgdAAIAAiOIBxAAIAACOg");
	this.shape_64.setTransform(470.2,-189.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FF0000").s().p("AAqBHIAAhvIgcBvIgbAAIgchvIAABvIgbAAIAAiOIArAAIAZBhIAahhIArAAIAACOg");
	this.shape_65.setTransform(455.2,-189.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FF0000").s().p("AghA4QgOgQAAgnQAAgnAPgRQAOgRAXAAQAQAAALAJQAKAJADARIgaAEQgBgJgEgEQgFgDgGAAQgIAAgGAHQgGAIgBAYQAKgMAOAAQARAAANANQAMANAAAUQAAAXgNAMQgNAOgUAAQgVAAgOgRgAgLAEQgFAGAAAMQAAANAGAIQAGAHAHAAQAIAAAFgGQAFgGAAgOQAAgNgFgHQgGgFgIAAQgHAAgGAFg");
	this.shape_66.setTransform(439,-189.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FF0000").s().p("AgOASQAIgCAEgFQADgFAAgHIgNAAIAAgcIAbAAIAAAUQAAALgCAHQgCAHgGAFQgFAGgIADg");
	this.shape_67.setTransform(431,-182.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FF0000").s().p("AghA5QgNgQAAgpQABgoAOgSQALgOAUAAQAUAAANAOQANASAAAoQAAApgNARQgNAPgUAAQgUAAgNgQgAgIguQgEADgCAIQgDALAAAYQAAAZADAJQACAKAEADQAEADAEAAQAFAAAEgDQADgDADgJQADgKgBgZQABgZgDgIQgDgKgDgDQgEgDgFAAQgEAAgEADg");
	this.shape_68.setTransform(423.3,-189.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FF0000").s().p("AgwAMIAAgXIBhgqIAAAcIhEAZIBEAbIAAAbg");
	this.shape_69.setTransform(404.6,-189.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FF0000").s().p("AAVAuIgVggIgUAgIgWAAIAggvIgdgsIAWAAIARAdIATgdIAVAAIgdAtIAgAug");
	this.shape_70.setTransform(389.2,-185.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FF0000").s().p("AgmAuIAAhbIAlAAIAQABQAFAAAFADQADADAEAFQACAFABAGQgBAGgDAGQgDAGgGACQAIACAFAFQAEAGAAAIQAAAHgDAGQgDAGgFADQgFAEgHABIgXAAgAgTAfIARAAIAMgBQAEgBADgCQACgDAAgFQAAgEgCgEQgBgCgFgBQgDgCgMAAIgPAAgAgTgIIAMAAIANgBQAEgBAEgCQACgDAAgEQAAgFgCgCQgDgDgEgBIgQAAIgKAAg");
	this.shape_71.setTransform(381.3,-185.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FF0000").s().p("Ag2BHIAAiOIAvAAQAZABAIACQAMADAJAKQAIAMAAAQQAAANgFAKQgFAHgHAFQgHAGgIABQgKACgTAAIgTAAIAAA2gAgZgGIAQAAQAQAAAGgCQAGgDADgEQADgFAAgGQAAgIgEgFQgFgFgHgCQgFgBgPAAIgOAAg");
	this.shape_72.setTransform(370.5,-189.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FF0000").s().p("AgmAtQgKgIAAgOQAAgIAFgHQAEgHAHgDQAIgDAOgDQASgEAIgDIAAgDQAAgIgEgDQgEgDgKAAQgHAAgEADQgEACgDAIIgZgFQAEgPALgHQAKgHAUAAQARAAAJAEQAJAEAEAHQAEAHAAASIgBAfQAAANACAHQABAGAEAIIgbAAIgDgIIgBgEQgHAHgIAEQgHADgJAAQgQAAgJgJgAAAAGQgLADgEACQgFAEAAAGQAAAFAEAFQAEAEAHAAQAGAAAHgFQAFgEACgFIABgOIAAgFIgQAEg");
	this.shape_73.setTransform(476.8,-127.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FF0000").s().p("AAcBHIAAh1Ig3AAIAAB1IgdAAIAAiOIBxAAIAACOg");
	this.shape_74.setTransform(464.6,-129.5);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FF0000").s().p("AAqBHIAAhvIgcBvIgbAAIgchvIAABvIgbAAIAAiOIArAAIAZBhIAahhIArAAIAACOg");
	this.shape_75.setTransform(449.5,-129.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FF0000").s().p("AgvBIQABgPAJgNQAHgNAXgVQASgQAEgGQAGgJgBgIQABgJgFgFQgFgFgJAAQgIAAgEAFQgGAFgBAMIgbgDQADgWANgKQANgKASAAQAVAAAMALQAMAMAAARQAAAKgDAIQgEAJgHAJIgSASIgQAQIgGAHIA2AAIAAAag");
	this.shape_76.setTransform(433.1,-129.6);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FF0000").s().p("AgOASQAIgCAEgFQADgFAAgHIgNAAIAAgcIAbAAIAAAUQAAALgCAHQgCAHgGAFQgFAGgIADg");
	this.shape_77.setTransform(425.3,-122.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FF0000").s().p("AAEBIIAAhnQgOAOgUAHIAAgZQAKgDANgKQAMgKAEgNIAWAAIAACPg");
	this.shape_78.setTransform(416.8,-129.6);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FF0000").s().p("AgwAMIAAgXIBhgqIAAAcIhEAZIBEAbIAAAbg");
	this.shape_79.setTransform(401.1,-129.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FF0000").s().p("AAVAvIgVghIgUAhIgWAAIAggwIgdgtIAWAAIARAfIATgfIAVAAIgdAtIAgAwg");
	this.shape_80.setTransform(385.7,-125.5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FF0000").s().p("AgmAvIAAhdIAlAAIAPABQAGACAFACQAEADACAFQAEAFAAAGQAAAGgEAGQgDAFgHADQAJACAFAFQAEAHAAAIQAAAGgDAGQgDAGgFADQgFAEgHABIgWABgAgTAfIARAAIAMAAQAFgBACgEQACgDAAgEQAAgFgBgCQgDgDgEgCQgDgBgMAAIgPAAgAgTgJIAMAAIANAAQAEAAADgDQADgDAAgFQAAgEgCgDQgCgCgFgBIgPAAIgLAAg");
	this.shape_81.setTransform(377.9,-125.5);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FF0000").s().p("Ag2BHIAAiOIAvAAQAZAAAIACQAMAEAJALQAIALAAAQQAAAOgFAIQgFAJgHAEQgHAGgIACQgKABgTAAIgTAAIAAA2gAgZgGIAQAAQAQAAAGgCQAGgDADgEQADgFAAgGQAAgIgEgFQgFgFgHgBQgFgBgPAAIgOAAg");
	this.shape_82.setTransform(367.1,-129.5);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FF0000").s().p("AgwAMIAAgXIBhgqIAAAcIhDAZIBDAbIAAAbg");
	this.shape_83.setTransform(349.2,-129.5);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FF0000").s().p("AgmAtQgKgIAAgOQAAgIAFgHQAEgHAHgDQAIgDAOgDQASgEAIgDIAAgDQAAgIgEgDQgEgDgKAAQgHAAgEADQgEACgDAIIgZgFQAEgPALgHQAKgHAUAAQARAAAJAEQAJAEAEAHQAEAHAAASIgBAfQAAANACAHQABAGAEAIIgbAAIgDgIIgBgEQgHAHgIAEQgHADgJAAQgQAAgJgJgAAAAGQgLADgEACQgFAEAAAGQAAAFAEAFQAEAEAHAAQAGAAAHgFQAFgEACgFIABgOIAAgFIgQAEg");
	this.shape_84.setTransform(332.6,-127.6);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FF0000").s().p("AAcBHIAAh1Ig3AAIAAB1IgdAAIAAiOIBxAAIAACOg");
	this.shape_85.setTransform(320.3,-129.5);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FF0000").s().p("AAqBHIAAhvIgcBvIgbAAIgchvIAABvIgbAAIAAiOIArAAIAZBhIAahhIArAAIAACOg");
	this.shape_86.setTransform(305.3,-129.5);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FF0000").s().p("AghA4QgOgQAAgnQAAgmAPgSQAOgRAXAAQAQAAALAJQAKAJADARIgaADQgBgIgEgEQgFgDgGAAQgIgBgGAIQgGAIgBAYQAKgLAOAAQARAAANAMQAMAMAAAWQAAAWgNANQgNANgUAAQgVAAgOgRgAgLAEQgFAGAAANQAAANAGAHQAGAHAHAAQAIAAAFgGQAFgGAAgNQAAgOgFgGQgGgGgIAAQgHAAgGAFg");
	this.shape_87.setTransform(289.1,-129.4);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FF0000").s().p("AgOASQAIgCAEgFQADgFAAgHIgNAAIAAgcIAbAAIAAAUQAAALgCAHQgCAHgGAFQgFAGgIADg");
	this.shape_88.setTransform(281.1,-122.2);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FF0000").s().p("AghA5QgMgQAAgpQAAgoANgRQAMgPAUAAQAUAAAMAPQAOARABAoQgBAogOATQgMAOgUAAQgUAAgNgQgAgIguQgEADgCAIQgDAKAAAZQAAAZACAJQADAKAEADQAEADAEAAQAFAAAEgDQADgDADgJQADgKAAgZQAAgYgDgKQgDgJgDgDQgEgDgFAAQgEAAgEADg");
	this.shape_89.setTransform(273.4,-129.4);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#000000").ss(1,1,1).p("AT2jcQAaAaAEAjIAAE/QgEAjgaAZQgbAdgoABMglkAAAQgogBgdgdQgcgcgBgoIAAkuQABgoAcgeQAdgbAmgCMAlmAAAQAoABAbAcg");
	this.shape_90.setTransform(374.9,-189.3);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFE1").s().p("AyxD6QgngBgegdQgcgdgBgnIAAkvQABgoAcgdQAdgcAngBMAllAAAQAoABAcAcQAaAaADAjIAAE/QgDAigaAaQgcAdgoABg");
	this.shape_91.setTransform(374.9,-189.3);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#000000").ss(1,1,1).p("AT2jcQAaAaAEAjIAAE/QgEAjgaAZQgbAdgoABMglkAAAQgogBgdgdQgcgcgBgoIAAkuQABgoAcgeQAdgbAmgCMAlmAAAQAoABAbAcg");
	this.shape_92.setTransform(374.9,-129.3);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFE1").s().p("AyxD6QgngBgegdQgcgcgBgoIAAkvQABgoAcgdQAdgbAngCMAllAAAQAoABAcAcQAaAaADAjIAAE/QgDAjgaAZQgcAdgoABg");
	this.shape_93.setTransform(374.9,-129.3);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#213852").ss(1,1,1).p("Eg0mgXbMBpSAAAQAuADAhAeQAkAhABAvMAAAArWQgBAugkAgQgkAhgxABMhpMAAAQgygBgjghQgjgggBguMAAAgrWQABgvAjghQAjghAyAAg");
	this.shape_94.setTransform(374.9,375.4);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#9CC1D3").s().p("Eg0mAXcQgxgBgkghQgkggAAgvMAAAgrVQAAguAkgiQAjggAygBMBpSAAAQAuADAhAeQAkAiABAuMAAAArVQgCAvgjAgQgkAhgxABg");
	this.shape_95.setTransform(374.9,375.4);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#000000").ss(1,1,1).p("A+dlEIAAD8MAg0AAAIAAD6A+dFFMA87AAA");
	this.shape_96.setTransform(360,207.5);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FF0000").s().p("AghA5QgNgQAAgpQAAgoAPgRQALgPAUAAQAVAAALAPQAPARAAAoQAAAogPATQgLAOgVAAQgUAAgNgQgAgIguQgEADgCAIQgDAKAAAZQAAAZADAJQACAKAEADQAEADAEAAQAFAAAEgDQADgDADgJQACgKAAgZQAAgYgCgKQgDgJgDgDQgEgDgFAAQgEAAgEADg");
	this.shape_97.setTransform(417.6,-129.4);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FF0000").s().p("AggA+QgNgMgCgRIAbgEQABAKAGAGQAFAFAIAAQAIAAAGgGQAFgHABgLQgBgKgFgGQgGgGgHAAQgFAAgHACIADgWQAKABAGgFQAFgGAAgIQAAgHgDgFQgFgDgGAAQgHgBgFAFQgFAFgBAKIgZgFQACgNAFgHQAGgJAJgDQAKgFALAAQAUAAAMAMQAKALAAANQAAAUgUAKQAMADAHAJQAIAIAAANQAAAUgOANQgOANgUAAQgTAAgNgLg");
	this.shape_98.setTransform(289,-129.4);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FF0000").s().p("AggA+QgNgMgBgSIAagCQABAKAGAFQAFAFAIAAQAIAAAGgGQAFgHAAgLQAAgKgFgGQgFgGgIAAQgFAAgHACIADgVQAKAAAGgFQAGgGgBgIQAAgHgEgFQgEgDgGAAQgHAAgFAEQgFAFgBAJIgZgEQACgNAGgIQAFgHAJgEQAKgFAMAAQATAAAMANQAKAKAAANQAAAUgVALQANACAHAIQAIAKgBANQAAASgNANQgOAOgUAAQgTAAgNgLg");
	this.shape_99.setTransform(437.8,-189.4);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FF0000").s().p("AghA5QgMgQAAgpQgBgoAOgSQAMgOAUAAQAUAAANAOQAOASgBAoQABApgOARQgNAPgUAAQgUAAgNgQgAgIguQgEADgCAIQgDALAAAYQAAAZACAJQADAKAEADQAEADAEAAQAFAAAEgDQAEgDACgJQACgKAAgZQAAgZgCgIQgCgKgEgDQgEgDgFAAQgEAAgEADg");
	this.shape_100.setTransform(422.2,-189.4);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FF0000").s().p("AgwAMIAAgXIBhgqIAAAcIhDAZIBDAbIAAAbg");
	this.shape_101.setTransform(405.7,-189.5);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FF0000").s().p("AgmAuIAAhbIAlAAIAQABQAFAAAEADQAEADAEAFQACAFAAAGQABAGgEAGQgEAGgFACQAIACAEAFQAFAGAAAIQAAAHgDAGQgDAGgFADQgFAEgIABIgVAAgAgTAfIARAAIAMgBQAEgBADgCQADgDAAgFQgBgEgCgEQgCgCgDgBQgEgCgMAAIgPAAgAgTgIIAMAAIANgBQAFgBADgCQACgDAAgEQAAgFgCgCQgDgDgFgBIgPAAIgKAAg");
	this.shape_102.setTransform(382.4,-185.5);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FF0000").s().p("AgmAtQgKgIAAgOQAAgIAFgHQAEgHAHgDQAIgDAOgDQASgEAIgDIAAgDQAAgIgEgDQgEgDgKAAQgHAAgEADQgEACgDAIIgZgFQAEgPALgHQAKgHAUAAQARAAAJAEQAJAEAEAHQAEAHAAASIgBAfQAAANACAHQABAGAEAIIgbAAIgDgIIgBgEQgHAHgIAEQgHADgJAAQgQAAgJgJgAAAAGQgLADgEACQgFAEAAAGQAAAFAEAFQAEAEAHAAQAGAAAHgFQAFgEACgFIABgOIAAgFIgQAEg");
	this.shape_103.setTransform(476.8,-67.6);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FF0000").s().p("AAcBIIAAh3Ig3AAIAAB3IgdAAIAAiOIBxAAIAACOg");
	this.shape_104.setTransform(464.6,-69.5);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FF0000").s().p("AAqBIIAAhwIgcBwIgbAAIgchwIAABwIgbAAIAAiOIArAAIAZBgIAahgIArAAIAACOg");
	this.shape_105.setTransform(449.5,-69.5);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FF0000").s().p("AgOASQAIgCAEgFQADgFAAgHIgNAAIAAgcIAbAAIAAAUQAAALgCAHQgCAHgGAFQgFAGgIADg");
	this.shape_106.setTransform(425.3,-62.2);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FF0000").s().p("AAVAuIgVgfIgUAfIgWAAIAggvIgdgtIAWAAIARAeIATgeIAVAAIgdAtIAgAvg");
	this.shape_107.setTransform(385.7,-65.5);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FF0000").s().p("AgmAuIAAhcIAlAAIAPABQAGACAFACQAEADACAFQAEAFAAAGQAAAHgEAFQgDAGgHACQAJACAFAGQAEAGAAAHQAAAHgDAGQgDAGgFAEQgFADgHABIgWAAgAgTAfIARAAIAMAAQAFgCACgDQACgCAAgGQAAgDgBgEQgDgDgEgBQgDgBgMAAIgPAAgAgTgJIAMAAIANAAQAEgBADgCQADgDAAgEQAAgFgCgDQgCgCgFAAIgPgBIgLAAg");
	this.shape_108.setTransform(377.9,-65.5);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FF0000").s().p("Ag2BIIAAiOIAvAAQAZAAAIABQAMAEAJALQAIAKAAASQAAAMgFAJQgFAIgHAGQgHAFgIABQgKADgTAAIgTAAIAAA2gAgZgGIAQAAQAQAAAGgCQAGgCADgFQADgFAAgGQAAgIgEgFQgFgFgHgBQgFgCgPAAIgOAAg");
	this.shape_109.setTransform(367.1,-69.5);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FF0000").s().p("AgwAMIAAgXIBhgqIAAAcIhDAZIBDAbIAAAbg");
	this.shape_110.setTransform(349.2,-69.5);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FF0000").s().p("AgmAtQgKgIAAgOQAAgIAFgHQAEgHAHgDQAIgDAOgDQASgEAIgDIAAgDQAAgIgEgDQgEgDgKAAQgHAAgEADQgEACgDAIIgZgFQAEgPALgHQAKgHAUAAQARAAAJAEQAJAEAEAHQAEAHAAASIgBAfQAAANACAHQABAGAEAIIgbAAIgDgIIgBgEQgHAHgIAEQgHADgJAAQgQAAgJgJgAAAAGQgLADgEACQgFAEAAAGQAAAFAEAFQAEAEAHAAQAGAAAHgFQAFgEACgFIABgOIAAgFIgQAEg");
	this.shape_111.setTransform(332.6,-67.6);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FF0000").s().p("AAcBIIAAh3Ig3AAIAAB3IgdAAIAAiOIBxAAIAACOg");
	this.shape_112.setTransform(320.3,-69.5);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FF0000").s().p("AAqBIIAAhwIgcBwIgbAAIgchwIAABwIgbAAIAAiOIArAAIAZBgIAahgIArAAIAACOg");
	this.shape_113.setTransform(305.3,-69.5);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FF0000").s().p("AghA4QgOgRAAgmQAAgmAPgSQAOgRAXAAQAQAAALAJQAKAJADASIgaACQgBgIgEgDQgFgFgGAAQgIAAgGAIQgGAIgBAZQAKgNAOAAQARAAANAOQAMAMAAAVQAAAVgNANQgNAOgUAAQgVAAgOgRgAgLAEQgFAGAAAMQAAAOAGAHQAGAHAHAAQAIAAAFgGQAFgFAAgOQAAgOgFgHQgGgFgIAAQgHAAgGAFg");
	this.shape_114.setTransform(289.1,-69.4);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FF0000").s().p("AgOASQAIgCAEgFQADgFAAgHIgNAAIAAgcIAbAAIAAAUQAAALgCAHQgCAHgGAFQgFAGgIADg");
	this.shape_115.setTransform(281.1,-62.2);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FF0000").s().p("AghA5QgMgQAAgpQAAgoANgSQAMgOAUAAQAUAAAMAOQAOASABAoQgBAogOASQgMAPgUAAQgUAAgNgQgAgIguQgEADgCAIQgDAKAAAZQAAAZACAKQADAJAEADQAEADAEAAQAFAAAEgDQADgDADgIQADgLAAgZQAAgZgDgJQgDgJgDgDQgEgDgFgBQgEABgEADg");
	this.shape_116.setTransform(273.4,-69.4);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#000000").ss(1,1,1).p("AT2jcQAaAaAEAjIAAE/QgEAigaAaQgbAdgoABMglkAAAQgogBgdgdQgcgcgBgoIAAkvQABgoAcgdQAdgcAmgBMAlmAAAQAoABAbAcg");
	this.shape_117.setTransform(374.9,-69.3);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFFFE1").s().p("AyxD6QgngBgegdQgcgdgBgnIAAkuQABgoAcgeQAdgcAngBMAllAAAQAoABAcAcQAaAaADAjIAAE/QgDAjgaAZQgcAdgoABg");
	this.shape_118.setTransform(374.9,-69.3);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#000000").ss(1,1,1).p("Awaj7IAAD7MAg1AAAIAAD8");
	this.shape_119.setTransform(270.1,200.2);

	this.instance_13 = new lib.ГРПтупик("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(375,245);

	this.instance_14 = new lib.ГРПзакольцован("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(375,245);

	this.instance_15 = new lib.кран_250();
	this.instance_15.parent = this;
	this.instance_15.setTransform(273,255);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#213852").ss(1,1,1).p("AL6RnI3zAAMAAAgjN");
	this.shape_120.setTransform(148.7,262.7);

	this.sizes = new lib.sizesморгает();
	this.sizes.name = "sizes";
	this.sizes.parent = this;
	this.sizes.setTransform(375.1,219.9,1,1,0,0,0,0,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10}]}).to({state:[{t:this.davlenie}]},9).to({state:[{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.instance_11}]},10).to({state:[{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.instance_12}]},10).to({state:[{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88,p:{x:281.1,y:-122.2}},{t:this.shape_87,p:{x:289.1}},{t:this.shape_86,p:{x:305.3,y:-129.5}},{t:this.shape_85},{t:this.shape_84,p:{x:332.6,y:-127.6}},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79,p:{y:-129.5}},{t:this.shape_78,p:{y:-129.6}},{t:this.shape_77,p:{x:425.3}},{t:this.shape_76,p:{y:-129.6}},{t:this.shape_75,p:{x:449.5}},{t:this.shape_74},{t:this.shape_73,p:{x:476.8}},{t:this.shape_72,p:{x:370.5}},{t:this.shape_71},{t:this.shape_70,p:{x:389.2}},{t:this.shape_69,p:{x:404.6,y:-189.5}},{t:this.shape_68},{t:this.shape_67,p:{x:431,y:-182.2}},{t:this.shape_66},{t:this.shape_65,p:{x:455.2,y:-189.5}},{t:this.shape_64,p:{x:470.2}},{t:this.shape_63,p:{x:482.5,y:-187.6}}]},10).to({state:[{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_79,p:{y:-69.5}},{t:this.shape_78,p:{y:-69.6}},{t:this.shape_106},{t:this.shape_76,p:{y:-69.6}},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_72,p:{x:371.6}},{t:this.shape_102},{t:this.shape_70,p:{x:390.3}},{t:this.shape_101},{t:this.shape_100},{t:this.shape_88,p:{x:429.9,y:-182.2}},{t:this.shape_99},{t:this.shape_86,p:{x:454.1,y:-189.5}},{t:this.shape_64,p:{x:469.1}},{t:this.shape_84,p:{x:481.4,y:-187.6}},{t:this.shape_89},{t:this.shape_77,p:{x:281.1}},{t:this.shape_98},{t:this.shape_75,p:{x:305.3}},{t:this.shape_85},{t:this.shape_73,p:{x:332.6}},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_69,p:{x:401.1,y:-129.5}},{t:this.shape_97},{t:this.shape_67,p:{x:425.3,y:-122.2}},{t:this.shape_87,p:{x:433.4}},{t:this.shape_65,p:{x:449.5,y:-129.5}},{t:this.shape_74},{t:this.shape_63,p:{x:476.8,y:-127.6}},{t:this.shape_61},{t:this.shape_60}]},10).to({state:[{t:this.shape_119},{t:this.shape_61},{t:this.shape_60}]},10).to({state:[{t:this.instance_13}]},40).to({state:[{t:this.instance_14}]},40).to({state:[{t:this.shape_120},{t:this.shape_61},{t:this.shape_60},{t:this.instance_15}]},41).to({state:[]},9).to({state:[{t:this.sizes}]},10).to({state:[]},10).wait(31));

	// выход 2
	this.instance_16 = new lib.вых();
	this.instance_16.parent = this;
	this.instance_16.setTransform(530,150);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(139).to({_off:false},0).to({_off:true},41).wait(60));

	// выноски 2
	this.instance_17 = new lib.вход();
	this.instance_17.parent = this;
	this.instance_17.setTransform(640,150);

	this.instance_18 = new lib.вых();
	this.instance_18.parent = this;
	this.instance_18.setTransform(530,150);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_17}]},139).to({state:[]},41).to({state:[{t:this.instance_18},{t:this.instance_17}]},9).to({state:[]},20).wait(31));

	// вход
	this.p_in = new lib.вход();
	this.p_in.name = "p_in";
	this.p_in.parent = this;
	this.p_in.setTransform(110,150);

	this.p_in_1 = new lib.входморгает();
	this.p_in_1.name = "p_in_1";
	this.p_in_1.parent = this;
	this.p_in_1.setTransform(110,150);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.p_in}]}).to({state:[{t:this.p_in_1}]},39).to({state:[{t:this.p_in}]},20).to({state:[]},150).wait(31));

	// выноски 1
	this.instance_19 = new lib.вых();
	this.instance_19.parent = this;
	this.instance_19.setTransform(220,150);

	this.p_in_2 = new lib.вход();
	this.p_in_2.name = "p_in_2";
	this.p_in_2.parent = this;
	this.p_in_2.setTransform(110,150);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_19}]}).to({state:[]},134).to({state:[{t:this.instance_19}]},5).to({state:[]},35).to({state:[{t:this.instance_19},{t:this.p_in_2}]},6).to({state:[]},29).wait(31));

	// потребители
	this.potreb = new lib.потребителижелтый();
	this.potreb.name = "potreb";
	this.potreb.parent = this;
	this.potreb.setTransform(375,150);

	this.potreb_1 = new lib.потребителижелтыйморгает();
	this.potreb_1.name = "potreb_1";
	this.potreb_1.parent = this;
	this.potreb_1.setTransform(375,150);

	this.potreb_2 = new lib.потребителикрасный();
	this.potreb_2.name = "potreb_2";
	this.potreb_2.parent = this;
	this.potreb_2.setTransform(375,150);

	this.potreb_3 = new lib.потребителибелый();
	this.potreb_3.name = "potreb_3";
	this.potreb_3.parent = this;
	this.potreb_3.setTransform(375,150);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.potreb}]}).to({state:[{t:this.potreb_1}]},19).to({state:[{t:this.potreb}]},20).to({state:[{t:this.potreb_2}]},95).to({state:[{t:this.potreb}]},5).to({state:[{t:this.potreb_3}]},41).to({state:[]},29).wait(31));

	// грп 2
	this.grp_2 = new lib.ПРГжелтый();
	this.grp_2.name = "grp_2";
	this.grp_2.parent = this;
	this.grp_2.setTransform(585,150);

	this.grp_2_1 = new lib.ПРГбелый();
	this.grp_2_1.name = "grp_2_1";
	this.grp_2_1.parent = this;
	this.grp_2_1.setTransform(585,150);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.grp_2}]},139).to({state:[]},41).to({state:[{t:this.grp_2_1}]},9).to({state:[]},20).wait(31));

	// грп 1
	this.grp_1 = new lib.ПРГжелтыйморгает();
	this.grp_1.name = "grp_1";
	this.grp_1.parent = this;
	this.grp_1.setTransform(165,150);

	this.grp_1_1 = new lib.ПРГжелтый();
	this.grp_1_1.name = "grp_1_1";
	this.grp_1_1.parent = this;
	this.grp_1_1.setTransform(165,150);
	this.grp_1_1._off = true;

	this.grp_1_2 = new lib.ГРПГРПБ();
	this.grp_1_2.name = "grp_1_2";
	this.grp_1_2.parent = this;
	this.grp_1_2.setTransform(165,150);

	this.grp_1_3 = new lib.ШРПжелтый();
	this.grp_1_3.name = "grp_1_3";
	this.grp_1_3.parent = this;
	this.grp_1_3.setTransform(165,150);

	this.grp_1_4 = new lib.ПРГкрасный();
	this.grp_1_4.name = "grp_1_4";
	this.grp_1_4.parent = this;
	this.grp_1_4.setTransform(165,150);

	this.grp_1_5 = new lib.ПРГбелый();
	this.grp_1_5.name = "grp_1_5";
	this.grp_1_5.parent = this;
	this.grp_1_5.setTransform(165,150);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.grp_1}]}).to({state:[{t:this.grp_1_1}]},9).to({state:[{t:this.grp_1_2}]},30).to({state:[{t:this.grp_1_3}]},10).to({state:[{t:this.grp_1}]},10).to({state:[{t:this.grp_1_1}]},40).to({state:[{t:this.grp_1_1}]},20).to({state:[{t:this.grp_1_1}]},10).to({state:[{t:this.grp_1_4}]},5).to({state:[{t:this.grp_1_1}]},5).to({state:[{t:this.grp_1_1}]},20).to({state:[{t:this.grp_1_1}]},10).to({state:[{t:this.grp_1_4}]},5).to({state:[{t:this.grp_1_5}]},6).to({state:[]},29).wait(31));
	this.timeline.addTween(cjs.Tween.get(this.grp_1_1).wait(9).to({_off:false},0).to({_off:true},30).wait(60).to({_off:false},0).wait(30).to({_off:true},5).wait(5).to({_off:false},0).wait(30).to({_off:true},5).wait(66));

	// линия 2-1
	this.instance_20 = new lib.стрелкаимуравьиэталон80();
	this.instance_20.parent = this;
	this.instance_20.setTransform(615,150);

	this.instance_21 = new lib.стрелкаэталон80();
	this.instance_21.parent = this;
	this.instance_21.setTransform(615,150);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_20}]},139).to({state:[]},41).to({state:[{t:this.instance_21}]},9).to({state:[]},20).wait(31));

	// линия 2-0
	this.instance_22 = new lib.стрелкаимуравьиэталон80();
	this.instance_22.parent = this;
	this.instance_22.setTransform(430,150);

	this.instance_23 = new lib.стрелкаэталон80();
	this.instance_23.parent = this;
	this.instance_23.setTransform(430,150);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_22}]},139).to({state:[]},41).to({state:[{t:this.instance_23}]},9).to({state:[]},20).wait(31));

	// линия 1-1
	this.instance_24 = new lib.стрелкаимуравьиэталон80();
	this.instance_24.parent = this;
	this.instance_24.setTransform(320,150,1,1,0,0,180);

	this.instance_25 = new lib.стрелкаэталон80();
	this.instance_25.parent = this;
	this.instance_25.setTransform(320,150,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_24}]}).to({state:[{t:this.instance_25}]},134).to({state:[{t:this.instance_24}]},5).to({state:[{t:this.instance_25}]},35).to({state:[{t:this.instance_25}]},6).to({state:[]},29).wait(31));

	// линия 1-0
	this.instance_26 = new lib.стрелкаимуравьиэталон80();
	this.instance_26.parent = this;
	this.instance_26.setTransform(135,150,1,1,0,0,180);

	this.instance_27 = new lib.стрелкаэталон80();
	this.instance_27.parent = this;
	this.instance_27.setTransform(135,150,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_26}]}).to({state:[{t:this.instance_27}]},180).to({state:[]},29).wait(31));

	// Слой 3
	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#47829E").s().p("Eg53AEoIAApPMBzvAAAIAAJPg");
	this.shape_121.setTransform(374.9,-278.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_121).wait(240));

	// Слой 2
	this.instance_28 = new lib.Символ1();
	this.instance_28.parent = this;
	this.instance_28.setTransform(0,-312.4,1.185,1.185,0,0,0,-316.3,-365.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(240));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-740,-312.6,1490,866.4);


// stage content:
(lib.vvedenie_Canvas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgxcA5HMAAAhyNMBi5AAAMAAAByNg");
	mask.setTransform(316.5,365.5);

	// график
	this.klip = new lib.клип();
	this.klip.name = "klip";
	this.klip.parent = this;
	this.klip.setTransform(0.4,264.2,0.844,0.844,0,0,0,0.2,0.4);

	var maskedShapeInstanceList = [this.klip];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.klip).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(316.5,365.5,633,731);
// library properties:
lib.properties = {
	id: 'B588D5151ADE0147BF0A2357735F30ED',
	width: 633,
	height: 731,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/vvedenie_Canvas_atlas_.png", id:"vvedenie_Canvas_atlas_"}
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
an.compositions['B588D5151ADE0147BF0A2357735F30ED'] = {
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