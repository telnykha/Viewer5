(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:
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


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(1,1,1).p("AArAKIhQAeAgqgnIBQAeIhQAd");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-5.2,-5,10.5,10), null);


(lib.стрелочка = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgdgxIA7AAIgeBjg");
	this.shape.setTransform(0,-5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.стрелочка, new cjs.Rectangle(-3,-10,6,10), null);


(lib.рука = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("ABGnpQg+kFhFAeQhGAfA4D0QA3D1h2EdQgmiAg/hxQg+hxg+AaQg+AaAmBeQBTD5AZC4QAZC3CYCRQCXCSCphmQCohlANkVQANkVgtiLQgsiLgcAhQgbiDhhgnQgnhSg+gTQAiCeALEjAEnjaQAZBqADBiACrmEQAyBpAKEC");
	this.shape.setTransform(4.8,67.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DDA38E").s().p("AhmJ+QiYiRgZi3QgZi4hTj5QgmheA+gaQA+gaA+BxQA/BxAmCAQB2kdg3j1Qg4j0BGgfQBFgeA+EFQA+ATAnBSQAyBpAKECQgKkCgyhpQBhAnAbCDQAcghAsCLQAtCLgNEVQgNEVioBlQhFAqhDAAQheAAhahWgAFDgOQgDhigZhqQAZBqADBigABzgoQgLkjgiieQAiCeALEjg");
	this.shape_1.setTransform(4.8,67.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(2,1,1).p("ABDnQQg7j5hCAdQhCAdA1DpQA0DohwEOQgkh5g8hrQg7hrg7AYQg6AZAkBZQBODtAYCuQAYCuCQCKQCQCKCghgQCghgAMkHQANkIgriDQgqiEgbAfQgZh8hdgmQglhNg6gSQAgCWAKEUACilxQAwBkAJD1AEYjPQAYBkADBe");
	this.shape_2.setTransform(4.7,65.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DDA38E").s().p("AhhJeQiQiKgYiuQgYiuhOjsQgkhaA6gZQA7gYA7BrQA8BrAkB6QBwkPg0joQg1jpBCgdQBCgdA7D5QAgCWAKEUQgKkUggiWQA6ASAlBNQBdAmAZB8QAbgfAqCEQArCDgNEIQgMEHigBgQhCAog/AAQhZAAhWhSgAEzgNQgDhegYhkQAYBkADBegADbgYQgJj1gwhkQAwBkAJD1g");
	this.shape_3.setTransform(4.7,65.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.4,-5.8,82.5,146.8);


(lib.гусек = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1,3,true).p("Ag7AAIB3AA");
	this.shape.setTransform(0,-136.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("Ag7qqIAAgeIB3AAIAAAeIAAAdIAABHIgYAAIAAUPIhHAAIAA0PIgYAAIAAhHIAAgdIB3AAAgjpGIBHAA");
	this.shape_1.setTransform(0,-71.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9C9C9C").s().p("AgiLJIAA0PIgZAAIAAhHIAAgdIB3AAIAAAdIh3AAIB3AAIAABHIgZAAIhFAAIBFAAIAAUPgAAjpGgAA8qqgAg7qqIAAgeIB3AAIAAAeg");
	this.shape_2.setTransform(0,-71.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.гусек, new cjs.Rectangle(-7,-143.6,14,144.7), null);


(lib.поверх = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ALEhrIjXDXAIuhrIjXDXAGYhrIjXDXAEChrIjXDXANahrIjXDXAPwhrIjXDXASGhrIjXDXAUchrIjXDXAWyhrIjXDXAzahrIjXDXAxEhrIjXDXAjAhrIjXDXAlWhrIjXDXAuuhrIjXDXAsYhrIjXDXAqChrIjXDXAnshrIjXDXAgqhrIjXDXABshrIjXDX");
	this.shape.setTransform(5.8,-10.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(2,1,1).p("A0TAAMAonAAA");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.поверх, new cjs.Rectangle(-141,-22.5,293.5,23.5), null);


(lib.моргалкакругмалый = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(5,1,1).p("ADVjUQBXBaAAB6QAAB+hXBXQhXBXh+AAQh6AAhahXQhXhXAAh+QAAh6BXhaQBahXB6AAQB+AABXBXg");

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},10).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.5,-32.5,65,65);


(lib.моргалкакруг = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(5,1,1).p("AFjliQCRCWAADMQAADSiRCRQiRCRjSAAQjMAAiWiRQiRiRAAjSQAAjMCRiWQCWiRDMAAQDSAACRCRg");

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},10).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52.5,-52.5,105,105);


(lib.моргстена = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AAPAjIgGgkIAAghIAbAAIAAAhIgGAkgAgcAjIgHgkIAAghIAcAAIAAAhIgHAkg");
	this.shape.setTransform(-4.3,-27);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("Ag0A/QgNgLAAgSQAAgKAFgJQAFgJAIgGQAHgEAKgDIAVgDQAdgDAOgFIAAgHQAAgPgHgFQgJgJgSAAQgRAAgIAHQgIAFgEAPIgYgCQAEgQAHgJQAHgJAOgGQAOgEASAAQASAAAMADQALAFAFAGQAGAHACAKQABAGAAARIAAAeQAAAiACAJQABAJAFAIIgZAAQgEgHgBgKQgOALgMAFQgMAFgOgBQgXAAgNgLgAgFAJQgPACgGADQgGADgEAEQgDAGAAAGQAAAKAHAHQAIAFAOAAQANAAALgFQALgHAFgKQAEgIAAgRIAAgIQgNAFgaAEg");
	this.shape_1.setTransform(-16.9,-17.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AAhBHIAAg/IhCAAIAAA/IgYAAIAAiOIAYAAIAAA8IBCAAIAAg8IAZAAIAACOg");
	this.shape_2.setTransform(-32.1,-17.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AguA3QgTgTAAgjQAAgjATgUQASgTAdAAQAdAAARATQATATAAAjIAAAGIhqAAQACAYAMANQAMAMAQAAQANAAAKgHQAJgHAGgPIAZACQgGAXgQALQgQAMgZAAQgeABgSgUgAgagrQgLALgCAUIBPAAQgCgTgHgJQgLgOgTAAQgQAAgLALg");
	this.shape_3.setTransform(-47.4,-17.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AgLBHIAAh6IguAAIAAgUIBzAAIAAAUIguAAIAAB6g");
	this.shape_4.setTransform(-61,-17.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AgtBZQgUgNgLgZQgKgZAAgaQAAgfAMgXQAMgYAVgLQAWgMAZAAQAeAAAUAPQAUAPAIAbIgaAHQgGgWgOgKQgNgKgTAAQgWAAgPALQgQALgGATQgGASAAATQAAAZAHASQAIATAPAJQAQAKARAAQAWAAAPgNQAPgNAFgZIAaAHQgIAggVARQgVARgfAAQgfAAgUgNg");
	this.shape_5.setTransform(-77.1,-20.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AAPAjIgGgkIAAghIAbAAIAAAhIgGAkgAgcAjIgHgkIAAghIAcAAIAAAhIgHAkg");
	this.shape_6.setTransform(-92.1,-27);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FF0000").ss(2,1,1).p("A0TAAMAonAAA");

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAPAjIgGgkIAAghIAbAAIAAAhIgGAkgAgcAjIgHgkIAAghIAcAAIAAAhIgHAkg");
	this.shape_8.setTransform(-4.3,-27);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("Ag0A/QgNgLAAgSQAAgKAFgJQAFgJAIgGQAHgEAKgDIAVgDQAdgDAOgFIAAgHQAAgPgHgFQgJgJgSAAQgRAAgIAHQgIAFgEAPIgYgCQAEgQAHgJQAHgJAOgGQAOgEASAAQASAAAMADQALAFAFAGQAGAHACAKQABAGAAARIAAAeQAAAiACAJQABAJAFAIIgZAAQgEgHgBgKQgOALgMAFQgMAFgOgBQgXAAgNgLgAgFAJQgPACgGADQgGADgEAEQgDAGAAAGQAAAKAHAHQAIAFAOAAQANAAALgFQALgHAFgKQAEgIAAgRIAAgIQgNAFgaAEg");
	this.shape_9.setTransform(-16.9,-17.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAhBHIAAg/IhCAAIAAA/IgYAAIAAiOIAYAAIAAA8IBCAAIAAg8IAZAAIAACOg");
	this.shape_10.setTransform(-32.1,-17.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AguA3QgTgTAAgjQAAgjATgUQASgTAdAAQAdAAARATQATATAAAjIAAAGIhqAAQACAYAMANQAMAMAQAAQANAAAKgHQAJgHAGgPIAZACQgGAXgQALQgQAMgZAAQgeABgSgUgAgagrQgLALgCAUIBPAAQgCgTgHgJQgLgOgTAAQgQAAgLALg");
	this.shape_11.setTransform(-47.4,-17.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgLBHIAAh6IguAAIAAgUIBzAAIAAAUIguAAIAAB6g");
	this.shape_12.setTransform(-61,-17.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgtBZQgUgNgLgZQgKgZAAgaQAAgfAMgXQAMgYAVgLQAWgMAZAAQAeAAAUAPQAUAPAIAbIgaAHQgGgWgOgKQgNgKgTAAQgWAAgPALQgQALgGATQgGASAAATQAAAZAHASQAIATAPAJQAQAKARAAQAWAAAPgNQAPgNAFgZIAaAHQgIAggVARQgVARgfAAQgfAAgUgNg");
	this.shape_13.setTransform(-77.1,-20.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAPAjIgGgkIAAghIAbAAIAAAhIgGAkgAgcAjIgHgkIAAghIAcAAIAAAhIgHAkg");
	this.shape_14.setTransform(-92.1,-27);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(2,1,1).p("A0TAAMAonAAA");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},10).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-131,-40.1,262,41.1);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D2E2EF").s().p("ArCLDQklkkAAmfQAAmdElklQElklGdAAQGeAAElElQElElAAGdQAAGfklEkQklElmeAAQmdAAklklg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(-100,-100,200,200), null);


(lib.лампочканакнопкахморгает = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AAZgYQAKAKAAAOQAAAPgKAKQgKAKgPAAQgOAAgKgKQgKgKAAgPQAAgOAKgKQAKgKAOAAQAPAAAKAKg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgYAZQgKgKAAgPQAAgOAKgKQAKgKAOAAQAPAAAKAKQAKAKAAAOQAAAPgKAKQgKAKgPAAQgOAAgKgKg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#630000").s().p("AgYAZQgKgKAAgPQAAgOAKgKQAKgKAOAAQAPAAAKAKQAKAKAAAOQAAAPgKAKQgKAKgPAAQgOAAgKgKg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},5).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.5,-4.5,9,9);


(lib.лампочканакнопкахгорит = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AAZgYQAKAKAAAOQAAAPgKAKQgKAKgPAAQgOAAgKgKQgKgKAAgPQAAgOAKgKQAKgKAOAAQAPAAAKAKg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgYAZQgKgKAAgPQAAgOAKgKQAKgKAOAAQAPAAAKAKQAKAKAAAOQAAAPgKAKQgKAKgPAAQgOAAgKgKg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.лампочканакнопкахгорит, new cjs.Rectangle(-4.5,-4.5,9,9), null);


(lib.лампочканакнопках = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AAZgYQAKAKAAAOQAAAPgKAKQgKAKgPAAQgOAAgKgKQgKgKAAgPQAAgOAKgKQAKgKAOAAQAPAAAKAKg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#630000").s().p("AgYAZQgKgKAAgPQAAgOAKgKQAKgKAOAAQAPAAAKAKQAKAKAAAOQAAAPgKAKQgKAKgPAAQgOAAgKgKg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.лампочканакнопках, new cjs.Rectangle(-4.5,-4.5,9,9), null);


(lib.лампакоторыхмногогорит = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AAcgcQAMAMAAAQQAAARgMALQgLAMgRAAQgQAAgMgMQgLgLAAgRQAAgQALgMQAMgLAQAAQARAAALALg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AAAAoQgQAAgMgMQgLgLAAgRQAAgQALgMQAMgLAQAAQARAAALALQAMAMAAAQQAAARgMALQgLAMgRAAIAAAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.лампакоторыхмногогорит, new cjs.Rectangle(-4.9,-5,10,10), null);


(lib.лампакоторыхмного = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{off:0});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AAcgcQAMAMAAAQQAAARgMALQgLAMgRAAQgQAAgMgMQgLgLAAgRQAAgQALgMQAMgLAQAAQARAAALALg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#640000").s().p("AAAAoQgQAAgMgMQgLgLAAgRQAAgQALgMQAMgLAQAAQARAAALALQAMAMAAAQQAAARgMALQgLAMgRAAIAAAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.лампакоторыхмного, new cjs.Rectangle(-4.9,-5,10,10), null);


(lib.лампастопгорит = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#EA0000","#FF6A76","#EA0000","#A80000"],[0.082,0.376,0.757,0.988],-0.2,-0.2,0,-0.2,-0.2,11.7).s().p("ABFBaIiIAAQgWAAAAgVIAAiIQAAgWAWAAICIAAQAVAAAAAWIAACIQAAAVgVAAIAAAAg");
	this.shape.setTransform(9,9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.лампастопгорит, new cjs.Rectangle(0,0,18,18), null);


(lib.лампастопНЕгорит = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#590D0D","#723838","#590D0D","#333333"],[0.082,0.376,0.757,0.988],-0.2,-0.2,0,-0.2,-0.2,11.7).s().p("ABFBaIiIAAQgWAAAAgVIAAiIQAAgWAWAAICIAAQAVAAAAAWIAACIQAAAVgVAAIAAAAg");
	this.shape.setTransform(9,9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.лампастопНЕгорит, new cjs.Rectangle(0,0,18,18), null);


(lib.лампанормагорит = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#00FF00","#13CE13","#00FF00","#00D700"],[0.267,0.431,0.584,1],-0.2,-0.2,0,-0.2,-0.2,12.7).s().p("ABFBaIiIAAQgWAAAAgVIAAiIQAAgWAWAAICIAAQAVAAAAAWIAACIQAAAVgVAAIAAAAg");
	this.shape.setTransform(9,9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.лампанормагорит, new cjs.Rectangle(0,0,18,18), null);


(lib.лампа90 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#574A20","#645500","#645500","#574A20","#333333"],[0.22,0.337,0.627,0.682,1],-0.2,-0.2,0,-0.2,-0.2,12.7).s().p("ABFBaIiIAAQgWAAAAgVIAAiIQAAgWAWAAICIAAQAVAAAAAWIAACIQAAAVgVAAIAAAAg");
	this.shape.setTransform(9,9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.лампа90, new cjs.Rectangle(0,0,18,18), null);


(lib.кнопка12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AADAIIgBgIIAAgHIAGAAIAAAHIgCAIgAgGAIIgBgIIAAgHIAGAAIAAAHIgBAIg");
	this.shape.setTransform(16.3,14.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AALAVIAAglIgVAAIAAAlIgGAAIAAgqIAhAAIAAAqg");
	this.shape_1.setTransform(13.1,15.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AADAIIgBgIIAAgHIAGAAIAAAHIgCAIgAgGAIIgBgIIAAgHIAGAAIAAAHIgBAIg");
	this.shape_2.setTransform(9.9,14.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgQAWIAAgqIAQAAIAHAAIAEACQADACABACIACAGQgBAFgDADQgDAEgKAAIgJAAIAAASgAgJAAIAJAAQAGAAACgCQADgCgBgEQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQgBAAAAgBQgBAAAAAAIgGgBIgJAAg");
	this.shape_3.setTransform(22.1,6.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgKATQgEgCgDgGQgDgFABgGQAAgJAFgGQAGgGAIAAQAGAAAEACQAFAEADAFQACAEAAAGQAAAHgCAFQgDAFgFACQgFADgFAAQgFAAgFgDgAgKgMQgDAEAAAIQAAAJADAEQAEAEAGAAQAGAAAEgEQAFgFAAgIQgBgEgBgEQgCgEgEgCQgDgCgEgBQgFABgFAEg");
	this.shape_4.setTransform(17.7,6.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgPAWIAAgqIAbAAIAAAEIgWAAIAAAOIAKAAIAJABQADABACACQACADAAAEQAAADgBADQgCADgDABQgDACgHABgAgKARIALAAQAEgBADgBQACgCAAgEIgBgEIgEgDIgHAAIgIAAg");
	this.shape_5.setTransform(13.6,6.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAQAWIAAgqIAGAAIAAAqgAgUAWIAAgqIAFAAIAAASIALAAQAIAAADACQAEAFAAAEQAAAFgEAEQgDAEgIAAgAgPARIALAAQAEgBADgBQACgCAAgEQAAgBgBAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQgBAAAAgBIgIAAIgHAAg");
	this.shape_6.setTransform(8.8,6.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgPAWIAAgqIAPAAQAFgBADACQADABABADQACADAAACIgBAGQgCACgDABQAEABACACQACADAAAEQAAADgBADQgBAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAIgFADIgHABgAgKARIAKAAIAEgBIADgBIACgCIABgEQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAAAgBgBQAAAAAAAAQgBAAAAgBIgGgBIgKAAgAgKgCIAKAAIAEgBIADgCIABgEIgBgDIgDgDIgFgBIgJAAg");
	this.shape_7.setTransform(4.2,6.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(2,1,1).p("ABohyIjPAAQgVAAAAATIAAC/QAAATAVAAIDPAAQAVAAAAgTIAAi/QAAgTgVAAg");
	this.shape_8.setTransform(13.1,11.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#634239").s().p("AhnBzQgVAAAAgTIAAi/QAAgTAVAAIDPAAQAVAAAAATIAAC/QAAATgVAAg");
	this.shape_9.setTransform(13.1,11.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.кнопка12, new cjs.Rectangle(-0.4,-1,27,25), null);


(lib.кнопка11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AhjApIAAhSIA7g6IBRAAIA7A7IgBBRIg6A7IhSAAg");
	this.shape.setTransform(17.5,17.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(2,1,1).p("ACbiuIk1AAQgUAAAAAUIAAE1QAAAUAUAAIE1AAQAUAAAAgUIAAk1QAAgUgUAAg");
	this.shape_1.setTransform(17.5,17.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#634239").s().p("ACbCvIk1AAQgUAAAAgUIAAk1QAAgUAUAAIE1AAQAUAAAAAUIAAE1QAAAUgUAAIAAAAg");
	this.shape_2.setTransform(17.5,17.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.кнопка11, new cjs.Rectangle(-1,-1,37,37), null);


(lib.кнопка10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AAWh6IgnAAIAnBrIArAAgABPABIA9CEIhDAAIg9iEgAhXhuQgSAAgNgNQgLgKgCgOIBXAAQgCAOgKAKQgNANgSAAgAhwgMQACAFAEAEQAHAHALAAQAKAAAHgHQAIgHAAgKQAAgKgIgIQgGgGgJgBIgBhBAhjBEIgoAAIAAglIBtAAIAAAlIgrAAgAhoCUIASgWIgNAAIAAg6AhJBEIAAA6IgNAAIATAW");
	this.shape.setTransform(19.2,17.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(2,1,1).p("ACbiuIk1AAQgUAAAAAUIAAE1QAAAUAUAAIE1AAQAUAAAAgUIAAk1QAAgUgUAAg");
	this.shape_1.setTransform(17.5,17.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#634239").s().p("ACbCvIk1AAQgUAAAAgUIAAk1QAAgUAUAAIE1AAQAUAAAAAUIAAE1QAAAUgUAAIAAAAg");
	this.shape_2.setTransform(17.5,17.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.кнопка10, new cjs.Rectangle(-1,-1,37,37), null);


(lib.кнопка9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AAeiJIAAB0QADACACADQAPAOAAAUIgxAtIgygtQAAgUAOgOIAAgBQADgCADgCQAJgHALgCAgJiJIAABrQAFgBAEAAQABAAABAAQAQABAMAJAgdiJIAAB0AABA/IAAAAIABAZQAJAAAHAHQAHAHAAALQAAAKgHAHQgIAIgKAAQgJAAgIgIQgEgEgCgG");
	this.shape.setTransform(17.5,17.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(2,1,1).p("AiaiuQgUAAAAAUIAAE1QAAAUAUAAIE1AAQAUAAAAgUIAAk1QAAgUgUAAg");
	this.shape_1.setTransform(17.5,17.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#634239").s().p("ACbCvIk1AAQgUAAAAgUIAAk1QAAgUAUAAIE1AAQAUAAAAAUIAAE1QAAAUgUAAIAAAAg");
	this.shape_2.setTransform(17.5,17.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.кнопка9, new cjs.Rectangle(-1,-1,37,37), null);


(lib.кнопка8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AANAZQgGADgHAAQgIAAgGgEQgGgEgDgGQgEgHAAgHQAAgJAEgHQADgHAGgDQAHgEAHAAQAIAAAFAEQAHADADAHQADAHABAJQgBAFgCAGQgCAGgEAEIAKAFIgDAGQgFgDgHgEgAgOgSQgFAGAAAMQAAAJAFAHQAGAFAIAAQAEAAADgBQgDgCgEgBIACgGQAGACAEAEQAHgHAAgKQAAgIgDgFQgCgFgEgDQgFgDgFAAQgIAAgGAGg");
	this.shape.setTransform(75.3,33.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAPAdIAAgbIgdAAIAAAbIgHAAIAAg5IAHAAIAAAYIAdAAIAAgYIAIAAIAAA5g");
	this.shape_1.setTransform(69.2,33.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgRAdIAAg5IAIAAIAAAyIAbAAIAAAHg");
	this.shape_2.setTransform(64.2,33.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AALASIgJgNIgCgCIAAADIgJAMIgGAAIANgSIgMgRIAGAAIAGAJIADAFIACgFIAIgJIAEAAIgMARIAOASg");
	this.shape_3.setTransform(83,14.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AALASIgEgLIgOAAIgEALIgFAAIAOgjIAEAAIAPAjgAgCgGIgDAKIALAAIgEgJIgCgIIgCAHg");
	this.shape_4.setTransform(79.7,14.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AANASIAAgdIgLAdIgDAAIgKgdIAAAdIgFAAIAAgjIAHAAIAJAYIAAAGIACgGIAJgYIAGAAIAAAjg");
	this.shape_5.setTransform(75.9,14.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAOAYQgHAEgHAAQgIAAgGgEQgGgEgEgGQgDgHAAgIQAAgIADgHQAEgHAGgEQAHgDAHAAQAIAAAGADQAGAFAEAGQACAHAAAIQAAAHgBAFQgCAFgFAFIAKAFIgDAGQgFgDgGgFgAgNgSQgGAGAAALQAAALAGAFQAFAGAIABQADAAAEgCQgEgCgDgCIABgFQAHACAEADQAHgFAAgMQAAgGgDgGQgCgFgFgDQgEgDgFAAQgIAAgFAGg");
	this.shape_6.setTransform(70.8,13.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAPAdIgHgMIgGgIIgCgEIgEgBIgEgBIgJAAIAAAaIgHAAIAAg5IAYAAQAIAAAEACQAEACACADQACAEAAAFQAAAGgEAEQgEAEgIABIAFADIAGAHIAKAQgAgRgCIAQAAIAIgBQACgBACgDQACgCAAgDQAAgEgDgDQgDgCgHAAIgRAAg");
	this.shape_7.setTransform(65,13.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAUAdIAAgvIgRAvIgFAAIgRgwIAAAwIgHAAIAAg5IALAAIAOAoIABAJIADgKIAOgnIAKAAIAAA5g");
	this.shape_8.setTransform(58.5,13.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(1,1,1).p("ABxCWIjDAAQgeAAAAgiIAAjnQAAgiAeAAIDDAAIAABLIiNAAQgPAAAAARIAABzQAAARAPAAICNAAg");
	this.shape_9.setTransform(111,22.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AhSCWQgeAAAAgiIAAjnQAAgiAeAAIDDAAIAABLIiNAAQgPAAAAARIAABzQAAARAPAAICNAAIAABLg");
	this.shape_10.setTransform(111,22.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(1,1,1).p("ABjApIg6A7IhSgBIg6g6IAAhSIA7g6IBRAAIA7A7g");
	this.shape_11.setTransform(29,22.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(1,1,1).p("AgkgRIFFABIAAilIlFgBIgLAAIiyAAQgWADgIAZIghBsQAAAbAYACQACAAACAAAgkC2IFFABIAAilIlFAAIgXAAIigAAQgbgBgJAcIghBsIAAABQABAaAXACQACAAACAAAkEgRIDfAAAkEC2IDfAA");
	this.shape_12.setTransform(77.7,22.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(2,1,1).p("Ap1jgQgUAAAAAUIAAGZQAAAUAUAAITrAAQAUAAAAgUIAAmZQAAgUgUAAg");
	this.shape_13.setTransform(65,22.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#63ADC6").s().p("AgkBSIgBAAIjfAAIAAAAIgEAAQgYgCAAgbIAhhrQAIgZAWgDICxAAIAMAAIAAAAIgMAAIAMAAIFFABIAACkgAjhhQIAOAAIgOgCg");
	this.shape_14.setTransform(77.7,12.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#CE9C94").s().p("AgkBSIgBAAIjfAAIAAAAIgEAAQgXgCgBgaIAAgBIAhhrQAJgcAbAAICgAAIAXAAIAAABIgXgBIAXABIFFAAIAACkg");
	this.shape_15.setTransform(77.7,32.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]}).wait(1));

	// Layer 2
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#634239").s().p("AJ2DhIzrAAQgUAAAAgUIAAmZQAAgUAUAAITrAAQAUAAAAAUIAAGZQAAAUgUAAIAAAAg");
	this.shape_16.setTransform(65,22.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_16).wait(1));

}).prototype = getMCSymbolPrototype(lib.кнопка8, new cjs.Rectangle(-1,-1,132,47), null);


(lib.кнопка7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgEAvIAAhRIgXAAIAAgMIA3AAIAAAMIgXAAIAABRg");
	this.shape.setTransform(27.3,17.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgQAqQgHgGgEgMQgEgLAAgNQAAgPAFgKQAEgLAIgFQAIgGAIAAQALAAAHAHQAHAHADANIgJADQgDgKgEgFQgFgFgHAAQgHABgGAEQgGAFgCAKQgCAIAAAJQAAALADAJQACAJAGAEQAGAEAFABQAIAAAGgHQAFgFACgMIAKADQgDAPgIAIQgIAIgLAAQgLAAgHgGg");
	this.shape_1.setTransform(21.1,17.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgaAvIAAhdIAzAAIAAAMIgpAAIAAAcIAmAAIAAAKIgmAAIAAAgIArAAIAAALg");
	this.shape_2.setTransform(14.2,17.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgEAvIAAhRIgXAAIAAgMIA3AAIAAAMIgXAAIAABRg");
	this.shape_3.setTransform(7.7,17.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(2,1,1).p("AiaiuQgUAAAAAUIAAE1QAAAUAUAAIE1AAQAUAAAAgUIAAk1QAAgUgUAAg");
	this.shape_4.setTransform(17.5,17.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#634239").s().p("ACbCvIk1AAQgUAAAAgUIAAk1QAAgUAUAAIE1AAQAUAAAAAUIAAE1QAAAUgUAAIAAAAg");
	this.shape_5.setTransform(17.5,17.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.кнопка7, new cjs.Rectangle(-1,-1,37,37), null);


(lib.кнопка6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AiVAAIAkAAAiBBLIAfgRAiBhKIAfASAB0AAIAiAAAA6hjIARgdAhKiBIARAeAAAhiIAABjIBQABAA6BkIARAeAhKCCIASgeAAABzIAAAjABkA6IAeARABlg5IAdgRAAAiVIAAAj");
	this.shape.setTransform(17.5,17.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(2,1,1).p("ACbiuIk1AAQgUAAAAAUIAAE1QAAAUAUAAIE1AAQAUAAAAgUIAAk1QAAgUgUAAg");
	this.shape_1.setTransform(17.5,17.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#634239").s().p("ACbCvIk1AAQgUAAAAgUIAAk1QAAgUAUAAIE1AAQAUAAAAAUIAAE1QAAAUgUAAIAAAAg");
	this.shape_2.setTransform(17.5,17.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.кнопка6, new cjs.Rectangle(-1,-1,37,37), null);


(lib.кнопка5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ABHhGIAjgjAAAiVIAAAyAA8AAQAAAZgSARQgSASgYAAQgYAAgSgSQgRgRAAgZQAAgYARgSQASgRAYAAQAYAAASARQASASAAAYgABkAAIAyAAAAABkIAAAyABGBGIAkAkAhphpIAjAjAiVAAIAyAAAhpBqIAkgj");
	this.shape.setTransform(17.5,17.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(2,1,1).p("AiuiaIAAE1QAAAUAUAAIE1AAQAUAAAAgUIAAk1QAAgUgUAAIk1AAQgUAAAAAUg");
	this.shape_1.setTransform(17.5,17.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#634239").s().p("ACbCvIk1AAQgUAAAAgUIAAk1QAAgUAUAAIE1AAQAUAAAAAUIAAE1QAAAUgUAAIAAAAg");
	this.shape_2.setTransform(17.5,17.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.кнопка5, new cjs.Rectangle(-1,-1,37,37), null);


(lib.кнопка4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AAPhSIBSAAIA7A7IgBBRIg6A7IhTgBIg5g6IAAhSgAiVAVQACACACABIgGAAIACgDQgagUgiAAQgiAAgaAVIgQgaAiGgEIgPAZAhlAYIgsAAAi1BMIAPgZIAPgbAkNAWIA8BnIANgXIAPgaAiDBMIgyAAAjEBmIAyAAAimAzIAygBAEeh8IAAAfQgSAAgRAAQgFAAgFAA");
	this.shape.setTransform(34.4,15.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgTAAIAngNIAAANIgKAAIAKAAIAAAOg");
	this.shape_1.setTransform(57.5,6.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(2,1,1).p("AFFg9IAAhdQAAgUgUAAIhbAAIoGAAQgUAAAAAUIAAE1QAAAUAUAAIJhAAQAUAAAAgUgADWiuIAABdQAAAUAUAAIBbAA");
	this.shape_2.setTransform(32.5,17.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#634239").s().p("AExCvIphAAQgUAAAAgUIAAk1QAAgUAUAAIJhAAQAUAAAAAUIAAE1QAAAUgUAAIAAAAg");
	this.shape_3.setTransform(32.5,17.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.кнопка4, new cjs.Rectangle(-1,-1,67,37), null);


(lib.кнопка3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ADkgsIgBBRIg6A7IhTAAIg6g7IAAhSIA6g6IBTAAgAgrgZIgQAaIg7BnIgOgXIgPgaIgPgZIgPgaIgBgEQAZgTAiAAQAiAAAaAUAjBgZIAPAZQgCACgCACIgtgBAixAEIgFAAAjFA3IAyAAAjUAdIAyABAiEBRIgyAA");
	this.shape.setTransform(27.2,17.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(2,1,1).p("ADRiuIoBAAQgUAAAAAUIAAE1QAAAUAUAAIJhAAQAUAAAAgUIAAk1QAAgUgUAAgAFAg9IhbAAQgUAAAAgUIAAhd");
	this.shape_1.setTransform(32.5,17.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#634239").s().p("AExCvIphAAQgUAAAAgUIAAk1QAAgUAUAAIJhAAQAUAAAAAUIAAE1QAAAUgUAAIAAAAg");
	this.shape_2.setTransform(32.5,17.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.кнопка3, new cjs.Rectangle(-1,-1,67,37), null);


(lib.кнопка2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAUAkIgKgPIgHgKIgEgFIgEgCIgFAAIgLAAIAAAgIgKAAIAAhHIAfAAQAKAAAEACQAGACACAFQADAFAAAGQAAAHgEAGQgFAEgLABIAGAEQAFAEADAFIAMAUgAgVgDIAUAAQAFAAAFgCQADgBACgDQACgDAAgDQAAgFgEgEQgEgDgHAAIgWAAg");
	this.shape.setTransform(19.5,27);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("ADkgxIgBBRIg5A7IhUAAIg6g7IAAhSIA7g6IBTAAgAi4gGIgrgZAi4AHIAAgNIAAgiAi4AIIAAAPIAAAeIAAAeIAAAaAjjgBIArAYAiHAIIA4AAAi4BTIgrgZAi4A1IgrgZ");
	this.shape_1.setTransform(27.2,19.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(2,1,1).p("AFFg9IAAhdQAAgUgUAAIhbAAIoGAAQgUAAAAAUIAAE1QAAAUAUAAIJhAAQAUAAAAgUgADWiuIAABdQAAAUAUAAIBbAA");
	this.shape_2.setTransform(32.5,17.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgYAAIAAAAIAAAAIAAAAIAxgYIAAAYIAAAZg");
	this.shape_3.setTransform(11.1,20.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 2
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("AgYAAIAxAA");
	this.shape_4.setTransform(59.5,5.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#634239").s().p("AExCvIphAAQgUAAAAgUIAAk1QAAgUAUAAIJhAAQAUAAAAAUIAAE1QAAAUgUAAIAAAAgAEnh1IgyAAg");
	this.shape_5.setTransform(32.5,17.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.кнопка2, new cjs.Rectangle(-1,-1,67,37), null);


(lib.кнопка1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// элементы
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AATAkIAAgiIglAAIAAAiIgJAAIAAhHIAJAAIAAAeIAlAAIAAgeIAJAAIAABHg");
	this.shape.setTransform(6.8,27.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("ADmhyIAAAZADmhyIAAgZADNhyIAZAAACHAsIg6A7IhSAAIg6g7IAAhSIA7g6IBRAAIA7A7gAD/hyIgZAAAhxgHIgZAqIAiAAAi2AjIAOAAIAeAAAjGAjIAPAAAjGAjIAZgqAjkAjIAeAAAjkAjIAZgqAj+AjIAaAAAi2BVIAAA3AioAjIAZgq");
	this.shape_1.setTransform(36.4,17.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(2,1,1).p("AFFg9IAAhdQAAgUgUAAIhbAAIoGAAQgUAAAAAUIAAE1QAAAUAUAAIJhAAQAUAAAAgUgADWiuIAABdQAAAUAUAAIBbAA");
	this.shape_2.setTransform(32.5,17.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAAAZIgYAAIAYgxIAAAAIAAAAIAZAxg");
	this.shape_3.setTransform(18,23.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// фон
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#634239").s().p("AExCvIphAAQgUAAAAgUIAAk1QAAgUAUAAIJhAAQAUAAAAAUIAAE1QAAAUgUAAIAAAAg");
	this.shape_4.setTransform(32.5,17.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.кнопка1, new cjs.Rectangle(-1,-1,67,37), null);


(lib.волнызвуковыемного = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{one:0,loop:17});

	// timeline functions:
	this.frame_21 = function() {
		/* gotoAndPlay("loop");
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(21).call(this.frame_21).wait(1));

	// Layer 5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AAGAzIAAAAIAGgLIgGALIgLAAIgGgLIAGALIAAAAIl3KIQhPgwhGhGQjcjcAAk2IAAgLILiAAIlwp9QCphlDSAAQDTAACpBlIlwJ9ILiAAIAAALQAAE2jcDcQhGBGhQAwg");
	mask.setTransform(0,-5.1);

	// Layer 10
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(4,1,1).p("ACOiNQA6A7AABSQAABTg6A6Qg7A7hTAAQhSAAg6g7Qg7g6AAhTQAAhSA7g7QA6g6BSAAQBTAAA7A6g");
	this.shape.setTransform(0,0,1.125,1.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(4,1,1).p("Aj9AAQAAhpBKhKQBKhKBpAAQBpAABKBKQBLBKAABpQAABphLBKQhKBLhpAAQhpAAhKhLQhKhKAAhpg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(4,1,1).p("AkaAAQAAh1BThSQBThTB0AAQB2AABSBTQBTBSAAB1QAAB1hTBTQhSBTh2AAQh0AAhThTQhThTAAh1g");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(4,1,1).p("Ak2AAQAAiBBbhbQBbhbCAABQCBgBBbBbQBbBbAACBQAACAhbBcQhbBbiBAAQiAAAhbhbQhbhcAAiAg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(4,1,1).p("ADxjwQBjBkAACMQAACNhjBkQhkBjiNAAQiMAAhkhjQhjhkAAiNQAAiMBjhkQBkhjCMAAQCNAABkBjg");

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},17).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).wait(1));

	// Layer 9
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(4,1,1).p("ACfieQBCBCAABcQAABdhCBCQhCBChdAAQhcAAhChCQhChCAAhdQAAhcBChCQBChCBcAAQBdAABCBCg");
	this.shape_5.setTransform(0,-0.1,3.556,3.556);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(4,1,1).p("ACOiNQA6A7AABSQAABTg6A6Qg7A7hTAAQhSAAg6g7Qg7g6AAhTQAAhSA7g7QA6g6BSAAQBTAAA7A6g");
	this.shape_6.setTransform(0,0,1.125,1.125);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(4,1,1).p("Aj9AAQAAhoBKhLQBKhKBpAAQBpAABKBKQBLBLAABoQAABphLBLQhKBKhpAAQhpAAhKhKQhKhLAAhpg");

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(4,1,1).p("AkaAAQAAh1BThSQBThTB0AAQB2AABSBTQBTBSAAB1QAAB1hTBTQhSBTh2AAQh0AAhThTQhThTAAh1g");

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").ss(4,1,1).p("Ak2AAQAAiABbhbQBbhbCAAAQCBAABbBbQBbBbAACAQAACBhbBbQhbBciBgBQiAABhbhcQhbhbAAiBg");

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(4,1,1).p("AlTAAQAAiMBjhkQBkhjCMAAQCNAABkBjQBjBkAACMQAACNhjBkQhkBjiNAAQiMAAhkhjQhjhkAAiNg");

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFFFFF").ss(4,1,1).p("AlwAAQAAiYBshsQBshsCYAAQCZAABsBsQBsBsAACYQAACZhsBsQhsBsiZAAQiYAAhshsQhshsAAiZg");

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").ss(4,1,1).p("AmNAAQAAikB1h0QB0h1CkAAQClAAB1B1QB0B0AACkQAAClh0B0Qh1B1ilgBQikABh0h1Qh1h0AAilg");

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FFFFFF").ss(4,1,1).p("AmpAAQAAiwB8h9QB9h8CwAAQCwAAB+B8QB8B9AACwQAACwh8B9Qh+B+iwgBQiwABh9h+Qh8h9AAiwg");

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").ss(4,1,1).p("AFDlBQCECFAAC8QAAC8iECGQiGCFi9AAQi8AAiFiFQiFiGAAi8QAAi8CFiFQCFiFC8AAQC9AACGCFg");

	var maskedShapeInstanceList = [this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5}]}).to({state:[{t:this.shape_6}]},13).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).wait(1));

	// Layer 8
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFFFFF").ss(4,1,1).p("ACfieQBCBCAABcQAABdhCBCQhCBChdAAQhcAAhChCQhChCAAhdQAAhcBChCQBChCBcAAQBdAABCBCg");
	this.shape_15.setTransform(0,-0.1,3.556,3.556);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFFFFF").ss(4,1,1).p("ACOiNQA6A7AABSQAABTg6A6Qg7A7hTAAQhSAAg6g7Qg7g6AAhTQAAhSA7g7QA6g6BSAAQBTAAA7A6g");
	this.shape_16.setTransform(0,0,1.125,1.125);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FFFFFF").ss(4,1,1).p("Aj9AAQAAhoBKhLQBKhKBpAAQBqAABKBKQBKBLAABoQAABphKBLQhKBKhqAAQhpAAhKhKQhKhLAAhpg");

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFFFFF").ss(4,1,1).p("AkaAAQAAh1BThTQBShSB1AAQB2AABSBSQBTBTAAB1QAAB1hTBTQhSBTh2AAQh1AAhShTQhThTAAh1g");

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FFFFFF").ss(4,1,1).p("Ak2AAQgBiABchbQBbhbCAAAQCBAABbBbQBbBbAACAQAACBhbBbQhbBbiBAAQiAAAhbhbQhchbABiBg");

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FFFFFF").ss(4,1,1).p("AlTAAQAAiMBjhkQBkhjCMAAQCNAABkBjQBjBkAACMQAACNhjBkQhkBjiNAAQiMAAhkhjQhjhkAAiNg");

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FFFFFF").ss(4,1,1).p("AlwAAQAAiYBshsQBshsCYAAQCZAABsBsQBsBsAACYQAACZhsBsQhsBsiZAAQiYAAhshsQhshsAAiZg");

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FFFFFF").ss(4,1,1).p("AmNAAQAAikB1h0QB0h1CkABQClgBB0B1QB1B0gBCkQABClh1B0Qh0B1ilAAQikAAh0h1Qh1h0AAilg");

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#FFFFFF").ss(4,1,1).p("AmpAAQgBiwB9h9QB9h9CwABQCxgBB9B9QB9B9gBCwQABCxh9B9Qh9B8ixAAQiwAAh9h8Qh9h9ABixg");

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FFFFFF").ss(4,1,1).p("AnGAAQgBi8CGiFQCFiFC8AAQC9AACFCFQCFCFAAC8QAAC9iFCFQiFCFi9AAQi8AAiFiFQiGiFABi9g");

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#FFFFFF").ss(4,1,1).p("AnjAAQAAjICOiOQCNiNDIAAQDJAACNCNQCOCOAADIQAADJiOCNQiNCOjJAAQjIAAiNiOQiOiNAAjJg");

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FFFFFF").ss(4,1,1).p("AoAAAQAAjTCWiWQCWiXDUABQDVgBCWCXQCWCWAADTQAADViWCWQiWCWjVAAQjUAAiWiWQiWiWAAjVg");
	this.shape_26.setTransform(0,-0.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#FFFFFF").ss(4,1,1).p("AodAAQAAjgCfieQCeifDgABQDhgBCeCfQCfCeAADgQAADgifCfQieCejhAAQjgAAieieQififAAjgg");

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FFFFFF").ss(4,1,1).p("AGTmSQCnCnAADrQAADtinCnQinCmjsAAQjsAAimimQioinABjtQgBjrCoinQCminDsAAQDsAACnCng");
	this.shape_28.setTransform(0,-0.1);

	var maskedShapeInstanceList = [this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15}]}).to({state:[{t:this.shape_16}]},9).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).wait(1));

	// Layer 7
	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#FFFFFF").ss(4,1,1).p("ACfieQBCBCAABcQAABdhCBCQhCBChdAAQhcAAhChCQhChCAAhdQAAhcBChCQBChCBcAAQBdAABCBCg");
	this.shape_29.setTransform(0,-0.1,3.556,3.556);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FFFFFF").ss(4,1,1).p("ACOiNQA6A7AABSQAABTg6A6Qg7A7hTAAQhSAAg6g7Qg7g6AAhTQAAhSA7g7QA6g6BSAAQBTAAA7A6g");
	this.shape_30.setTransform(0,0,1.125,1.125);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#FFFFFF").ss(4,1,1).p("Aj9AAQAAhoBKhLQBKhKBpAAQBpAABKBKQBLBLAABoQAABphLBLQhKBKhpAAQhpAAhKhKQhKhLAAhpg");

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#FFFFFF").ss(4,1,1).p("AkaAAQAAh1BThSQBShTB1AAQB2AABSBTQBTBSAAB1QAAB1hTBTQhSBTh2AAQh1AAhShTQhThTAAh1g");

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#FFFFFF").ss(4,1,1).p("Ak2AAQgBiABchbQBbhbCAAAQCBAABbBbQBbBbAACAQAACBhbBbQhbBbiBAAQiAAAhbhbQhchbABiBg");

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#FFFFFF").ss(4,1,1).p("AlTAAQAAiMBjhkQBkhjCMAAQCNAABkBjQBjBkAACMQAACNhjBkQhkBjiNAAQiMAAhkhjQhjhkAAiNg");

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#FFFFFF").ss(4,1,1).p("AlwAAQAAiYBshsQBshsCYAAQCZAABsBsQBsBsAACYQAACZhsBsQhsBsiZAAQiYAAhshsQhshsAAiZg");

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#FFFFFF").ss(4,1,1).p("AmNAAQAAikB1h0QB0h1CkAAQClAAB1B1QB0B0AACkQAAClh0B0Qh1B1ilgBQikABh0h1Qh1h0AAilg");

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#FFFFFF").ss(4,1,1).p("AmpAAQgBiwB9h9QB9h8CwAAQCxAAB8B8QB9B9AACwQAACxh9B8Qh8B9ixAAQiwAAh9h9Qh9h8ABixg");

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#FFFFFF").ss(4,1,1).p("AnGAAQAAi8CFiFQCFiFC8AAQC9AACFCFQCFCFAAC8QAAC9iFCFQiFCFi9AAQi8AAiFiFQiFiFAAi9g");

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#FFFFFF").ss(4,1,1).p("AnjAAQAAjHCOiOQCNiODIAAQDIAACOCOQCOCOAADHQAADJiOCOQiOCNjIAAQjIAAiNiNQiOiOAAjJg");
	this.shape_39.setTransform(0,-0.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#FFFFFF").ss(4,1,1).p("AoAAAQAAjUCWiWQCWiWDUAAQDUAACXCWQCWCWgBDUQABDUiWCXQiXCWjUAAQjUAAiWiWQiWiXAAjUg");

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#FFFFFF").ss(4,1,1).p("AocAAQgBjfCfifQCeieDgAAQDgAACfCeQCeCfAADfQAADhieCeQifCfjggBQjgABieifQifieABjhg");
	this.shape_41.setTransform(0,-0.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#FFFFFF").ss(4,1,1).p("Ao5AAQgBjrCoioQCmimDsAAQDsAACnCmQCnCoAADrQAADtinCmQinCnjsAAQjsAAiminQioimABjtg");

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#FFFFFF").ss(4,1,1).p("ApWAAQAAj3CviwQCvivD4AAQD4AACwCvQCvCwAAD3QAAD5ivCvQiwCvj4AAQj4AAivivQivivAAj5g");
	this.shape_43.setTransform(0,-0.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#FFFFFF").ss(4,1,1).p("ApzAAQAAkDC4i4QC4i4EDAAQEEAAC4C4QC4C4gBEDQABEEi4C4Qi4C4kEgBQkDABi4i4Qi4i4AAkEg");
	this.shape_44.setTransform(0,-0.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#FFFFFF").ss(4,1,1).p("AqPAAQgBkPDBjAQDAjAEPAAQEQAADADAQDADAAAEPQAAEQjADAQjADBkQgBQkPABjAjBQjBjAABkQg");
	this.shape_45.setTransform(0,-0.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#FFFFFF").ss(4,1,1).p("AKtAAQAAEcjIDJQjJDIkcAAQkbAAjJjIQjJjJABkcQgBkbDJjJQDJjIEbAAQEcAADJDIQDIDJAAEbg");
	this.shape_46.setTransform(0,-0.1);

	var maskedShapeInstanceList = [this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33,this.shape_34,this.shape_35,this.shape_36,this.shape_37,this.shape_38,this.shape_39,this.shape_40,this.shape_41,this.shape_42,this.shape_43,this.shape_44,this.shape_45,this.shape_46];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29}]}).to({state:[{t:this.shape_30}]},5).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).wait(1));

	// Layer 6
	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#FFFFFF").ss(4,1,1).p("ACOiNQA6A7AABSQAABTg6A6Qg7A7hTAAQhSAAg6g7Qg7g6AAhTQAAhSA7g7QA6g6BSAAQBTAAA7A6g");
	this.shape_47.setTransform(0,0,1.125,1.125);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#FFFFFF").ss(4,1,1).p("Aj9AAQAAhpBKhKQBKhKBpAAQBqAABKBKQBKBKAABpQAABphKBLQhKBKhqAAQhpAAhKhKQhKhLAAhpg");

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#FFFFFF").ss(4,1,1).p("AkaAAQAAh1BThTQBShSB1AAQB2AABSBSQBTBTAAB1QAAB1hTBTQhSBTh2AAQh1AAhShTQhThTAAh1g");

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#FFFFFF").ss(4,1,1).p("Ak2AAQAAiABbhbQBahbCBAAQCCAABaBbQBbBbAACAQAACBhbBbQhaBbiCAAQiBAAhahbQhbhbAAiBg");

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#FFFFFF").ss(4,1,1).p("AlTAAQAAiMBjhkQBjhjCNAAQCOAABjBjQBjBkAACMQAACNhjBkQhjBjiOAAQiNAAhjhjQhjhkAAiNg");

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#FFFFFF").ss(4,1,1).p("AlwAAQAAiYBshtQBshrCYAAQCZAABsBrQBsBtAACYQAACYhsBsQhsBtiZAAQiYAAhshtQhshsAAiYg");

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#FFFFFF").ss(4,1,1).p("AmNAAQAAikB1h1QB0h0CkABQClgBB1B0QB0B1AACkQAAClh0B0Qh1B1ilAAQikAAh0h1Qh1h0AAilg");

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#FFFFFF").ss(4,1,1).p("AmqAAQAAiwB9h9QB9h9CwABQCxgBB9B9QB9B9AACwQAACwh9B+Qh9B9ixAAQiwAAh9h9Qh9h+AAiwg");

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#FFFFFF").ss(4,1,1).p("AnGAAQAAi8CFiFQCFiGC8ABQC9gBCFCGQCFCFAAC8QAAC8iFCGQiFCFi9AAQi8AAiFiFQiFiGAAi8g");

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#FFFFFF").ss(4,1,1).p("AnjAAQAAjICOiOQCNiNDIABQDJgBCOCNQCNCOAADIQAADIiNCOQiOCOjJAAQjIAAiNiOQiOiOAAjIg");

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#FFFFFF").ss(4,1,1).p("AoAAAQAAjUCXiWQCViWDUABQDVgBCWCWQCWCWAADUQAADUiWCXQiWCWjVAAQjUAAiViWQiXiXAAjUg");

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#FFFFFF").ss(4,1,1).p("AodAAQAAjgCfieQCeifDgABQDhgBCfCfQCeCeAADgQAADgieCfQifCfjhAAQjgAAieifQififAAjgg");

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#FFFFFF").ss(4,1,1).p("Ao5AAQAAjsCninQCminDsABQDtgBCnCnQCmCnAADsQAADsimCnQinCnjtAAQjsAAiminQininAAjsg");

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#FFFFFF").ss(4,1,1).p("ApWAAQAAj4CwivQCuiwD4ACQD5gCCvCwQCvCvAAD4QAAD4ivCvQivCwj5AAQj4AAiuiwQiwivAAj4g");

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#FFFFFF").ss(4,1,1).p("ApzAAQAAkEC4i3QC3i5EEACQEFgCC4C5QC3C3AAEEQAAEDi3C5Qi4C4kFAAQkEAAi3i4Qi4i5AAkDg");

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#FFFFFF").ss(4,1,1).p("AqPAAQAAkQDAjAQC/jBEQACQERgCDADBQC/DAAAEQQAAEPi/DBQjADAkRAAQkQAAi/jAQjAjBAAkPg");

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#FFFFFF").ss(4,1,1).p("AqsAAQAAkbDJjJQDHjJEcABQEdgBDJDJQDHDJAAEbQAAEbjHDJQjJDJkdAAQkcAAjHjJQjJjJAAkbg");

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#FFFFFF").ss(4,1,1).p("ArJAAQAAknDRjSQDQjREoABQEpgBDRDRQDQDSAAEnQAAEnjQDSQjRDRkpAAQkoAAjQjRQjRjSAAkng");

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#FFFFFF").ss(4,1,1).p("ArmAAQAAkzDajaQDYjaE0ACQE1gCDZDaQDZDaAAEzQAAEzjZDaQjZDak1AAQk0AAjYjaQjajaAAkzg");

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#FFFFFF").ss(4,1,1).p("AsCAAQAAk/DijiQDgjjFAACQFBgCDiDjQDgDiAAE/QAAE/jgDiQjiDilBAAQlAAAjgjiQjijiAAk/g");

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#FFFFFF").ss(4,1,1).p("ADhAAQAABdhCBCQhCBChdAAQhcAAhChCQhChCAAhdQAAhcBChCQBChCBcAAQBdAABCBCQBCBCAABcg");
	this.shape_67.setTransform(0,-0.1,3.556,3.556);

	var maskedShapeInstanceList = [this.shape_47,this.shape_48,this.shape_49,this.shape_50,this.shape_51,this.shape_52,this.shape_53,this.shape_54,this.shape_55,this.shape_56,this.shape_57,this.shape_58,this.shape_59,this.shape_60,this.shape_61,this.shape_62,this.shape_63,this.shape_64,this.shape_65,this.shape_66,this.shape_67];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-77.5,-75,155.1,141.1);


(lib.точка = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgQARIAAghIAiAAIAAAhg");
	this.shape.setTransform(27.6,32);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.точка, new cjs.Rectangle(20.5,0,13.9,43.1), null);


(lib.рамкаиндикатора = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("AoRj5QgUAAAAATIAAHNQAAATAUAAIQkAAQATgBAAgSIAAnNQAAgTgTAAg");
	this.shape.setTransform(55,25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.рамкаиндикатора, new cjs.Rectangle(-1.5,-1.5,113,53), null);


(lib.zoom_hook = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 8
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AAIAUIgDgVIAAgSIAPAAIAAASIgEAVgAgQAUIgDgVIAAgSIAQAAIAAASIgEAVg");
	this.shape.setTransform(-20.9,-24.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgcAjQgIgHAAgJQABgGACgFQADgFAEgCQAEgDAGgBIALgCQAQgCAHgDIAAgEQAAgIgDgDQgFgEgKgBQgJABgFADQgEADgCAJIgNgCQACgIAEgGQAEgFAHgDQAIgDAJAAQAKABAHACQAGACADAEQADAEACAFIAAAMIAAARQAAATABAFQABAFACAEIgNAAQgDgEAAgFQgIAGgGADQgGACgJAAQgNAAgGgGgAgCAFIgMACQgDACgCADQgCADAAADQAAAGAEADQAEAEAIAAQAGAAAHgDQAFgEAEgGQABgEAAgKIAAgEQgGACgOADg");
	this.shape_1.setTransform(-27.8,-19.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AATAnIAAgjIglAAIAAAjIgNAAIAAhOIANAAIAAAiIAlAAIAAgiIANAAIAABOg");
	this.shape_2.setTransform(-36.3,-19.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AgZAeQgLgKAAgTQAAgUALgLQAKgLAPAAQARAAAJALQAKALAAATIAAADIg5AAQAAAOAHAGQAHAIAIgBQAIAAAFgDQAFgFAEgIIANABQgDANgJAGQgJAIgOgBQgQABgKgMgAgOgXQgGAGgBALIAsAAQgBgLgFgFQgGgHgLgBQgHAAgHAHg");
	this.shape_3.setTransform(-44.7,-19.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AgFAnIAAhDIgaAAIAAgLIA/AAIAAALIgaAAIAABDg");
	this.shape_4.setTransform(-52.3,-19.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AgYAxQgMgHgFgOQgHgOAAgOQABgRAGgNQAHgNAMgGQAMgHANABQARAAALAIQALAIAFAPIgPAEQgEgMgHgGQgHgFgLgBQgLAAgJAHQgJAGgDAKQgEAKABALQAAANADALQAFAJAIAGQAJAFAJAAQAMAAAIgHQAJgHADgOIAPAEQgGARgLAKQgMAJgRAAQgRAAgKgHg");
	this.shape_5.setTransform(-61.2,-20.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AAIAUIgDgVIAAgSIAPAAIAAASIgEAVgAgQAUIgDgVIAAgSIAQAAIAAASIgEAVg");
	this.shape_6.setTransform(-69.5,-24.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 4
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(-67.5,13.3,1,1,0,0,180);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AAbAkIAAg5IgWA5IgKAAIgVg8IAAA8IgLAAIAAhHIATAAIASA5IAVg5IARAAIAABHg");
	this.shape_7.setTransform(-29.7,14.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AgXArQgIgIgBgMIAMgCQACAKAFAFQAFAEAIAAQAIAAAGgGQAGgHAAgLQAAgLgGgFQgGgGgIAAQgGAAgFADQgFADgDADIgLgCIAJgyIAxAAIAAAMIgnAAIgFAbQAJgHAJAAQANAAAJAJQAJAIAAAPQAAANgIAKQgKAMgPAAQgOAAgJgHg");
	this.shape_8.setTransform(-39.8,13.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("AgHALQAFgBABgDIABgJIgGAAIAAgOIANAAIAAAOQAAAHgCAFQgDAEgFADg");
	this.shape_9.setTransform(-45.7,18.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AgWApQgKgNABgcQAAgQADgMQAEgKAHgGQAHgGAKAAQAIAAAGADQAGAEAEAFQAEAGADAKQACAIAAAOQgBARgDAMQgEAKgHAHQgHAFgLAAQgNAAgJgKgAgMghQgHAJAAAYQAAAZAGAIQAGAIAHAAQAIAAAHgIQAFgJAAgYQAAgYgFgIQgHgIgIAAQgIAAgEAHg");
	this.shape_10.setTransform(-51.6,13.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.instance}]}).wait(1));

	// Layer 7 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ao0I1QjsjpABlMQgBlLDsjpQDpjrFLAAQFLAADqDrQDrDpAAFLQAAFMjrDpQjqDrlLAAQlLAAjpjrg");

	// Слой 4
	this.instance_1 = new lib.стрелочка();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-10.6,-9.3,1.5,1.5,0,180,0);

	this.instance_2 = new lib.стрелочка();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-10.5,-54.9,1.5,1.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FF0000").ss(1,1,1).p("AAAkVIAAIr");
	this.shape_11.setTransform(-10.6,-32.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FF0000").ss(3,1,1).p("AAAoAIAACqAAAEHIAAD6");
	this.shape_12.setTransform(-10.6,-28.1);

	var maskedShapeInstanceList = [this.instance_1,this.instance_2,this.shape_11,this.shape_12];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// Layer 6
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0000").s().p("AszAKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIZnAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAg");
	this.shape_13.setTransform(-0.1,-9.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0000FF").s().p("AI/AKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIAyAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAgAHbAKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIAyAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAgAF3AKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIAyAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAgAETAKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIAyAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAgACvAKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIAyAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAgABLAKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIAyAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAgAgYAKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIAxAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAgAh8AKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIAyAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAgAjgAKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIAyAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAgAlEAKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIAyAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAgAmoAKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIAyAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAgAoMAKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIAyAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAgApwAKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIAyAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAg");
	this.shape_14.setTransform(-5.1,-54.9);

	var maskedShapeInstanceList = [this.shape_13,this.shape_14];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13}]}).wait(1));

	// Слой 3
	this.instance_3 = new lib.гусек();
	this.instance_3.parent = this;
	this.instance_3.setTransform(224.9,-497.7,5.412,5.412,23);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Слой 2
	this.instance_4 = new lib.гусек();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-134.6,497.1,3.996,3.996,18);

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Layer 1
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#D2E2EF").s().p("AAANSQlfAAj5j5Qj5j5AAlgQAAlfD5j5QD5j5FfAAQFgAAD5D5QD5D5AAFfQAAFgj5D5Qj5D5lgAAIAAAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape_15).wait(1));

}).prototype = getMCSymbolPrototype(lib.zoom_hook, new cjs.Rectangle(-85,-85,170,170), null);


(lib.кабинаистрела = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{stop:0,up01:9,stop01:39,up02:49,stop02:64,down01:74,up03:99,stop03:124});

	// timeline functions:
	this.frame_4 = function() {
		this.stop();
	}
	this.frame_34 = function() {
		this.stop();
	}
	this.frame_44 = function() {
		this.stop();
	}
	this.frame_59 = function() {
		this.stop();
	}
	this.frame_69 = function() {
		this.stop();
	}
	this.frame_94 = function() {
		this.stop();
	}
	this.frame_119 = function() {
		this.stop();
	}
	this.frame_129 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(30).call(this.frame_34).wait(10).call(this.frame_44).wait(15).call(this.frame_59).wait(10).call(this.frame_69).wait(25).call(this.frame_94).wait(25).call(this.frame_119).wait(10).call(this.frame_129).wait(6));

	// башня
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AgKm7IAAATQAAAFADADQADADAEAAQAFAAADgDQADgDAAgEIAAiBQAAgFgDgDQgDgDgFAAQgEAAgDADQgDADAAAFIAAATgABWmDIAAjMIgxgxIjtAAIgyAzIAADKIBLAAIA4AAICCAAIAAAtIDwAAIAAB4IAAAtIAADRIAABaIjwAAIAAGjIAABkIgeAAIAAgxIhHAAIAAAxIgdAAIAAhkIAAmjIg4AAIhLAAIAAn9ABWmDIClAAIAAAtAALmDIBLAAAALjeIAAAtIDwAAAALjeIDwAAAALlWIAAB4AD7AgIgfAAQAFABAAAGIAAAnQAAAHgIAAIisAAQgIAAAAgHIAAgnQAAgGAGgBIggAAIAABaADcAgIivAAQgBAAgBAAAALixIAADRAiZoVIAAgTQAAgFgDgDQgDgDgFAAQgFAAgDADQgDADAAAFIAACBQAAAEADADQADADAFAAQAFAAADgDQADgDAAgFIAAgTIAAhaICPAAAivmDIAABBIA4AAIAAhBAivlCIAAG8Ah3lCIAAG8ICCAAAh3IdICCAAAiZm7ICPAA");
	this.shape.setTransform(5.4,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9C9C9C").s().p("AA/JaIAAgwIhGAAIAAAwIAAgwIBGAAIAAAwIhGAAIgdAAIAAhkICCAAIAABkgAgkH2IAAmiIAAm8IAAhBICCAAIAAAtIAAB4IAAAtIAADSIAABZIiCAAICCAAIAAGigABeBUgABKnHQgDgDAAgEIAAgTIAAhaIAAgTQAAgFADgDQAEgDAFAAQAEAAADADQAEADAAAEIAACBQAAAEgEADQgDAEgEAAQgFAAgEgEgAhanHQgDgDAAgEIAAiBQAAgEADgDQAEgDAFAAQAEAAADADQAEADAAAFIAAATIAABaIAAATQAAAEgEADQgDAEgEAAQgFAAgEgEg");
	this.shape_1.setTransform(-2.8,3.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("AjIFIIAAm8IA5AAIg5AAIAAhBIA5AAIAABBIAAG8gAAUEiQgHAAAAgGIAAgnQAAgGAGgBIABAAICvAAQAGABgBAGIAAAnQAAAGgHAAgAixjtIAAhaICPAAIAABag");
	this.shape_2.setTransform(7.9,-20.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#636363").s().p("AALF9IAAhaIAgAAIggAAIAAjRIAAgtIAAh4IDwAAIAAB4IjwAAIDwAAIAAAtIjwAAIDwAAIAADRIgfAAIAfAAIAABagAAlErIAAAmQAAAHAIAAICsAAQAIAAAAgHIAAgmQAAgHgFgBIivAAIgCAAQgGABAAAHgAj6F9IAAn9IBLAAIAABCIAAG7gAD7hTIjwAAIAAgtIiCAAIg4AAIhLAAIAAjKIAygzIDtAAIAxAyIAADLIClAAIAAAtgABWiAIhLAAgAgKi4IAAATQAAAFADADQADAEAEAAQAFAAADgEQADgDAAgEIAAiBQAAgFgDgDQgDgCgFAAQgEAAgDACQgDADAAAFIAAATIiPAAIAAgTQAAgFgDgDQgDgCgFAAQgFAAgDACQgDADAAAFIAACBQAAAEADADQADAEAFAAQAFAAADgEQADgDAAgFIAAgTgAiviAg");
	this.shape_3.setTransform(5.4,-25.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(135));

	// Слой 4
	this.instance = new lib.гусек();
	this.instance.parent = this;
	this.instance.setTransform(0,-11.9,1,1,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({y:11.1},25).wait(15).to({y:16.9},10).wait(15).to({y:-11.9},20).wait(5).to({y:16.9},20).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.7,-65,52.3,196.3);


(lib.морг1метр01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(-12.5,-35,1.5,1.5);
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.instance.cache(-7,-7,15,14);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAnA3IAAhXIggBXIgPAAIgfhcIAABcIgSAAIAAhsIAdAAIAcBWIAfhWIAbAAIAABsg");
	this.shape.setTransform(21.7,-33.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAKBMIAAh1QgIAGgJAGQgLAHgIADIAAgSQAPgHALgLQALgKAFgJIAMAAIAACWg");
	this.shape_1.setTransform(5.7,-35.3);

	this.instance_1 = new lib.стрелочка();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-29.3,-70,1.8,1.8,0,180,0);
	this.instance_1.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.instance_1.cache(-5,-12,10,14);

	this.instance_2 = new lib.стрелочка();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-29.3,0,1.8,1.8);
	this.instance_2.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.instance_2.cache(-5,-12,10,14);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(3,1,1).p("AAAipIAAFT");
	this.shape_2.setTransform(-29.3,-35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.instance_2},{t:this.instance_1},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.морг1метр01, new cjs.Rectangle(-34.7,-70,66.8,70), null);


(lib.морг1метр = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(-12.5,-35,1.5,1.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AAnA3IAAhXIggBXIgPAAIgfhcIAABcIgSAAIAAhsIAdAAIAcBWIAfhWIAbAAIAABsg");
	this.shape.setTransform(21.7,-33.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AAKBMIAAh1QgIAGgJAGQgLAHgIADIAAgSQAPgHALgLQALgKAFgJIAMAAIAACWg");
	this.shape_1.setTransform(5.7,-35.3);

	this.instance_1 = new lib.стрелочка();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-29.3,-70,1.8,1.8,0,180,0);

	this.instance_2 = new lib.стрелочка();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-29.3,0,1.8,1.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FF0000").ss(3,1,1).p("AAAipIAAFT");
	this.shape_2.setTransform(-29.3,-35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAnA3IAAhXIggBXIgPAAIgfhcIAABcIgSAAIAAhsIAdAAIAcBWIAfhWIAbAAIAABsg");
	this.shape_3.setTransform(21.7,-33.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAKBMIAAh1QgIAGgJAGQgLAHgIADIAAgSQAPgHALgLQALgKAFgJIAMAAIAACWg");
	this.shape_4.setTransform(5.7,-35.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(3,1,1).p("AAAipIAAFT");
	this.shape_5.setTransform(-29.3,-35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.instance_2},{t:this.instance_1},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).to({state:[{t:this.shape_5},{t:this.instance_2},{t:this.instance_1},{t:this.shape_4},{t:this.shape_3},{t:this.instance}]},10).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.7,-70,66.8,70);


(lib.ЖКИвылет90110 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"stop":0,"to84-90":9,"to90-110":39});

	// timeline functions:
	this.frame_4 = function() {
		this.stop();
	}
	this.frame_35 = function() {
		this.stop();
	}
	this.frame_89 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(31).call(this.frame_35).wait(54).call(this.frame_89).wait(1));

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(204,204,204,0.898)").s().p("An5DhQgTAAAAgSIAAmeQAAgRATAAIP0AAQASAAAAARIAAGeQAAARgRABg");
	this.shape.setTransform(55,25);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},9).wait(81));

	// Слой 7
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag5BkQgZgdAAhBQAAhHAbghQAYgdAmAAQAeAAATAQQATARADAdIgeADQgEgTgIgHQgMgOgTAAQgNAAgLAIQgPALgIAVQgJATAAAmQALgRAQgIQAQgIARAAQAfAAAVAXQAWAVAAAkQAAAYgKAUQgKAUgSALQgSALgXAAQglAAgYgcgAggADQgOAPAAAYQAAAQAHAPQAGAOAMAIQANAHAMAAQATABAOgQQAOgQAAgbQAAgagNgPQgOgOgVAAQgUAAgPAOg");
	this.shape_1.setTransform(88.1,29.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAWB9IAAg8IhsAAIAAgcIByihIAZAAIAAChIAhAAIAAAcIghAAIAAA8gAg3AlIBNAAIAAhwg");
	this.shape_2.setTransform(87.6,29.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ag5BqQgWgTgDgfIAggDQAEAXANAMQANAMATAAQAUAAAQgRQAQgQAAgcQAAgagPgOQgPgQgXAAQgPAAgMAHQgMAHgGAKIgegEIAZiAIB8AAIAAAeIhjAAIgOBDQAXgQAXAAQAhAAAXAXQAWAWAAAjQAAAigUAZQgYAfgoAAQgiAAgWgUg");
	this.shape_3.setTransform(88.3,29.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgtB8QAAgeALgqQAMgqAUglQAUgnAYgbIh6AAIAAgeIChAAIAAAYQgYAagXAqQgYApgMAtQgJAfgDAmg");
	this.shape_4.setTransform(88.3,29.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("Ag7BqQgXgWAAghQAAgZANgQQAMgPAXgHQgTgGgJgNQgJgOAAgRQAAgcATgTQAUgSAgAAQAgAAAUATQAUATAAAcQAAARgJANQgJAMgTAHQAXAIANAQQAMARAAAXQAAAggXAWQgXAWglAAQgkAAgXgWgAgkAPQgOAOAAAWQAAANAGAMQAHANAMAHQAMAGANAAQAWAAAPgOQAOgOAAgWQAAgWgPgPQgOgOgWAAQgVAAgPAOgAgchbQgMAMAAAPQAAATALALQAMALARAAQASAAALgLQAMgMAAgQQAAgQgMgMQgMgMgRAAQgRAAgLALg");
	this.shape_5.setTransform(88.2,29.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("Ag3BvQgSgQgEgdIAdgDQAEAVALAJQALAJAQAAQANAAALgGQALgHAGgLQAIgKAEgTQAFgSgBgTIAAgHQgIAPgRAKQgQAJgRAAQggAAgVgXQgVgVgBglQABgnAWgXQAXgXAhAAQAXAAAVANQAUANALAZQALAYAAAuQAAAvgLAcQgLAdgUAPQgVAPgaAAQgeAAgTgRgAgihVQgQARAAAbQAAAYAOAOQAPAOAVABQAUgBAOgOQAOgPAAgaQAAgagOgQQgOgQgUAAQgUAAgOARg");
	this.shape_6.setTransform(88.2,29.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("Ag4BmQgZggAAhGQAAgrAKgbQAJgbASgQQASgOAaAAQAUAAAPAIQAQAIAJAQQAKAPAGAWQAGAVAAAlQAAAsgJAbQgJAbgSAPQgTAPgbAAQgjAAgVgagAghhUQgQAXAAA9QAAA+AOAUQAPAVAUgBQAVABAPgVQAOgUAAg+QAAg9gOgVQgPgTgVgBQgVABgMARg");
	this.shape_7.setTransform(88.1,29.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAPB+IAAjDQgLAKgRALQgSALgOAFIAAgeQAagMATgRQASgSAIgQIAUAAIAAD7g");
	this.shape_8.setTransform(86.9,29.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AhSB+QAAgLAEgLQAGgRAOgQQAOgQAagWQAoghAPgTQAOgUAAgRQAAgSgNgNQgNgMgVAAQgVAAgOANQgNANAAAYIgggDQADgkAWgSQAVgTAjAAQAkAAAVAUQAVAUAAAeQAAAPgHAOQgGAPgOAPQgOAQghAcQgbAXgIAJQgIAIgFAIIB6AAIAAAeg");
	this.shape_9.setTransform(87.8,29.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("Ag4BtQgWgVgDgfIAfgDQAFAZANAMQAMALATAAQAUAAAQgPQAOgPAAgWQAAgVgNgOQgOgOgWABQgHgBgNAEIADgaIAFAAQATAAAPgKQAQgLAAgUQAAgSgLgLQgMgLgRAAQgSAAgMALQgMAMgDAWIgfgFQAGgfAUgRQAUgRAdAAQAUAAARAJQARAIAKAQQAJAPAAARQAAAQgJAOQgJANgRAIQAWAFANAPQAMAQAAAYQAAAigYAWQgYAXgjAAQghAAgWgTg");
	this.shape_10.setTransform(88.2,29.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.shape_2}]},9).to({state:[{t:this.shape_3}]},4).to({state:[{t:this.shape_1}]},4).to({state:[{t:this.shape_4}]},4).to({state:[{t:this.shape_5}]},4).to({state:[{t:this.shape_6}]},5).to({state:[{t:this.shape_7}]},5).to({state:[{t:this.shape_8}]},6).to({state:[{t:this.shape_9}]},3).to({state:[{t:this.shape_10}]},2).to({state:[{t:this.shape_2}]},3).to({state:[{t:this.shape_3}]},2).to({state:[{t:this.shape_1}]},3).to({state:[{t:this.shape_4}]},2).to({state:[{t:this.shape_5}]},3).to({state:[{t:this.shape_6}]},2).to({state:[{t:this.shape_7}]},3).to({state:[{t:this.shape_8}]},2).to({state:[{t:this.shape_9}]},3).to({state:[{t:this.shape_10}]},2).to({state:[{t:this.shape_2}]},3).to({state:[{t:this.shape_3}]},2).to({state:[{t:this.shape_1}]},3).to({state:[{t:this.shape_4}]},2).to({state:[{t:this.shape_5}]},3).to({state:[{t:this.shape_6}]},2).to({state:[{t:this.shape_7}]},3).wait(1));

	// Слой 8
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AhSB+QAAgLAEgLQAGgRAOgQQAOgQAagWQAoghAPgTQAOgUAAgRQAAgSgNgNQgNgMgVAAQgVAAgOANQgNANAAAYIgggDQADgkAWgSQAVgTAjAAQAkAAAVAUQAVAUAAAeQAAAPgHAOQgGAPgOAPQgOAQghAcQgbAXgIAJQgIAIgFAIIB6AAIAAAeg");
	this.shape_11.setTransform(65.3,29.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("Ag7BqQgXgWAAghQAAgZANgQQAMgPAXgHQgTgGgJgNQgJgOAAgRQAAgcATgTQAUgSAgAAQAgAAAUATQAUATAAAcQAAARgJANQgJAMgTAHQAXAIANAQQAMARAAAXQAAAggXAWQgXAWglAAQgkAAgXgWgAgkAPQgOAOAAAWQAAANAGAMQAHANAMAHQAMAGANAAQAWAAAPgOQAOgOAAgWQAAgWgPgPQgOgOgWAAQgVAAgPAOgAgchbQgMAMAAAPQAAATALALQAMALARAAQASAAALgLQAMgMAAgQQAAgQgMgMQgMgMgRAAQgRAAgLALg");
	this.shape_12.setTransform(65.7,29.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("Ag3BvQgSgQgEgdIAdgDQAEAVALAJQALAJAQAAQANAAALgGQALgHAGgLQAIgKAEgTQAFgSgBgTIAAgHQgIAPgRAKQgQAJgRAAQggAAgVgXQgVgVgBglQABgnAWgXQAXgXAhAAQAXAAAVANQAUANALAZQALAYAAAuQAAAvgLAcQgLAdgUAPQgVAPgaAAQgeAAgTgRgAgihVQgQARAAAbQAAAYAOAOQAPAOAVABQAUgBAOgOQAOgPAAgaQAAgagOgQQgOgQgUAAQgUAAgOARg");
	this.shape_13.setTransform(65.7,29.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("Ag4BmQgZggAAhGQAAgrAKgbQAJgbASgQQASgOAaAAQAUAAAPAIQAQAIAJAQQAKAPAGAWQAGAVAAAlQAAAsgJAbQgJAbgSAPQgTAPgbAAQgjAAgVgagAghhUQgQAXAAA9QAAA+AOAUQAPAVAUgBQAVABAPgVQAOgUAAg+QAAg9gOgVQgPgTgVgBQgVABgMARg");
	this.shape_14.setTransform(65.6,29.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAPB+IAAjDQgLAKgRALQgSALgOAFIAAgeQAagMATgRQASgSAIgQIAUAAIAAD7g");
	this.shape_15.setTransform(64.4,29.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11}]}).to({state:[{t:this.shape_12}]},9).to({state:[{t:this.shape_13}]},26).to({state:[{t:this.shape_14}]},29).to({state:[{t:this.shape_15}]},25).wait(1));

	// Слой 10
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAPB+IAAjDQgLAKgRALQgSALgOAFIAAgeQAagMATgRQASgSAIgQIAUAAIAAD7g");
	this.shape_16.setTransform(42.1,29.3);
	this.shape_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_16).wait(64).to({_off:false},0).wait(26));

	// Layer 1
	this.frame = new lib.рамкаиндикатора();
	this.frame.name = "frame";
	this.frame.parent = this;
	this.frame.setTransform(55,25,1,1,0,0,0,55,25);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#CCCCCC").s().p("AoND6QgTgBAAgSIAAnMQAAgUATAAIQbAAQATAAAAAUIAAHMQAAASgSABg");
	this.shape_17.setTransform(55.5,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.frame}]}).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,113,53);


(lib.ЖКИ0390110 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"stop":0,"to84-90":9,"to90-110":39});

	// timeline functions:
	this.frame_4 = function() {
		this.stop();
	}
	this.frame_35 = function() {
		this.stop();
	}
	this.frame_89 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(31).call(this.frame_35).wait(54).call(this.frame_89).wait(1));

	// Слой 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(204,204,204,0.898)").s().p("An5DhQgTAAAAgSIAAmeQAAgRATAAIP0AAQASAAAAARIAAGeQAAARgRABg");
	this.shape.setTransform(55,25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(90));

	// Слой 7
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag5BqQgWgTgDgfIAggDQAEAXANAMQANAMATAAQAUAAAQgRQAQgQAAgcQAAgagPgOQgPgQgXAAQgPAAgMAHQgMAHgGAKIgegEIAZiAIB8AAIAAAeIhjAAIgOBDQAXgQAXAAQAhAAAXAXQAWAWAAAjQAAAigUAZQgYAfgoAAQgiAAgWgUg");
	this.shape_1.setTransform(88.3,29.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ag4BmQgZggAAhGQAAgrAKgbQAJgbASgQQASgOAaAAQAUAAAPAIQAQAIAJAQQAKAPAGAWQAGAVAAAlQAAAsgJAbQgJAbgSAPQgTAPgbAAQgjAAgVgagAghhUQgQAXAAA9QAAA+AOAUQAPAVAUgBQAVABAPgVQAOgUAAg+QAAg9gOgVQgPgTgVgBQgVABgMARg");
	this.shape_2.setTransform(88.1,29.4);
	this.shape_2._off = true;

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhSB+QAAgLAEgLQAGgRAOgQQAOgQAagWQAoghAPgTQAOgUAAgRQAAgSgNgNQgNgMgVAAQgVAAgOANQgNANAAAYIgggDQADgkAWgSQAVgTAjAAQAkAAAVAUQAVAUAAAeQAAAPgHAOQgGAPgOAPQgOAQghAcQgbAXgIAJQgIAIgFAIIB6AAIAAAeg");
	this.shape_3.setTransform(87.8,29.1);
	this.shape_3._off = true;

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAWB9IAAg8IhsAAIAAgcIByihIAZAAIAAChIAhAAIAAAcIghAAIAAA8gAg3AlIBNAAIAAhwg");
	this.shape_4.setTransform(87.6,29.2);
	this.shape_4._off = true;

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("Ag7BqQgXgWAAghQAAgZANgQQAMgPAXgHQgTgGgJgNQgJgOAAgRQAAgcATgTQAUgSAgAAQAgAAAUATQAUATAAAcQAAARgJANQgJAMgTAHQAXAIANAQQAMARAAAXQAAAggXAWQgXAWglAAQgkAAgXgWgAgkAPQgOAOAAAWQAAANAGAMQAHANAMAHQAMAGANAAQAWAAAPgOQAOgOAAgWQAAgWgPgPQgOgOgWAAQgVAAgPAOgAgchbQgMAMAAAPQAAATALALQAMALARAAQASAAALgLQAMgMAAgQQAAgQgMgMQgMgMgRAAQgRAAgLALg");
	this.shape_5.setTransform(88.2,29.4);
	this.shape_5._off = true;

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("Ag4BtQgWgVgDgfIAfgDQAFAZANAMQAMALATAAQAUAAAQgPQAOgPAAgWQAAgVgNgOQgOgOgWABQgHgBgNAEIADgaIAFAAQATAAAPgKQAQgLAAgUQAAgSgLgLQgMgLgRAAQgSAAgMALQgMAMgDAWIgfgFQAGgfAUgRQAUgRAdAAQAUAAARAJQARAIAKAQQAJAPAAARQAAAQgJAOQgJANgRAIQAWAFANAPQAMAQAAAYQAAAigYAWQgYAXgjAAQghAAgWgTg");
	this.shape_6.setTransform(88.2,29.4);
	this.shape_6._off = true;

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgtB8QAAgeALgqQAMgqAUglQAUgnAYgbIh6AAIAAgeIChAAIAAAYQgYAagXAqQgYApgMAtQgJAfgDAmg");
	this.shape_7.setTransform(88.3,29.3);
	this.shape_7._off = true;

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("Ag3BvQgSgQgEgdIAdgDQAEAVALAJQALAJAQAAQANAAALgGQALgHAGgLQAIgKAEgTQAFgSgBgTIAAgHQgIAPgRAKQgQAJgRAAQggAAgVgXQgVgVgBglQABgnAWgXQAXgXAhAAQAXAAAVANQAUANALAZQALAYAAAuQAAAvgLAcQgLAdgUAPQgVAPgaAAQgeAAgTgRgAgihVQgQARAAAbQAAAYAOAOQAPAOAVABQAUgBAOgOQAOgPAAgaQAAgagOgQQgOgQgUAAQgUAAgOARg");
	this.shape_8.setTransform(88.2,29.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("Ag5BkQgZgdAAhBQAAhHAbghQAYgdAmAAQAeAAATAQQATARADAdIgeADQgEgTgIgHQgMgOgTAAQgNAAgLAIQgPALgIAVQgJATAAAmQALgRAQgIQAQgIARAAQAfAAAVAXQAWAVAAAkQAAAYgKAUQgKAUgSALQgSALgXAAQglAAgYgcgAggADQgOAPAAAYQAAAQAHAPQAGAOAMAIQANAHAMAAQATABAOgQQAOgQAAgbQAAgagNgPQgOgOgVAAQgUAAgPAOg");
	this.shape_9.setTransform(88.1,29.4);
	this.shape_9._off = true;

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAPB+IAAjDQgLAKgRALQgSALgOAFIAAgeQAagMATgRQASgSAIgQIAUAAIAAD7g");
	this.shape_10.setTransform(86.9,29.1);
	this.shape_10._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.shape_2}]},9).to({state:[{t:this.shape_3}]},2).to({state:[{t:this.shape_4}]},2).to({state:[{t:this.shape_5}]},2).to({state:[{t:this.shape_2}]},2).to({state:[{t:this.shape_6}]},2).to({state:[{t:this.shape_1}]},2).to({state:[{t:this.shape_7}]},2).to({state:[{t:this.shape_8}]},2).to({state:[{t:this.shape_3}]},2).to({state:[{t:this.shape_4}]},2).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_5}]},2).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_2}]},2).to({state:[{t:this.shape_2}]},5).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_4}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_1).to({_off:true},9).wait(12).to({_off:false},0).to({_off:true},2).wait(19).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(7).to({_off:false},0).to({_off:true},1).wait(4).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(9));
	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(9).to({_off:false},0).to({_off:true},2).wait(6).to({_off:false},0).to({_off:true},2).wait(16).to({_off:false},0).wait(5).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(20));
	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(11).to({_off:false},0).to({_off:true},2).wait(14).to({_off:false},0).to({_off:true},2).wait(14).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(36).to({_off:false},0).to({_off:true},1).wait(5));
	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(13).to({_off:false},0).to({_off:true},2).wait(14).to({_off:false},0).to({_off:true},1).wait(15).to({_off:false},0).to({_off:true},1).wait(31).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(15).to({_off:false},0).to({_off:true},2).wait(15).to({_off:false},0).wait(1).to({_off:true},2).wait(9).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(7).to({_off:false},0).to({_off:true},1).wait(4).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(4));
	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(19).to({_off:false},0).to({_off:true},2).wait(30).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(4).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(7));
	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(23).to({_off:false},0).to({_off:true},2).wait(16).to({_off:false},0).to({_off:true},1).wait(4).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(7).to({_off:false},0).to({_off:true},1).wait(8));
	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(30).to({_off:false},0).to({_off:true},2).wait(20).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(3));
	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(49).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(4).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(2));

	// Слой 8
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAPB+IAAjDQgLAKgRALQgSALgOAFIAAgeQAagMATgRQASgSAIgQIAUAAIAAD7g");
	this.shape_11.setTransform(64.4,29.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("Ag4BmQgZggAAhGQAAgrAKgbQAJgbASgQQASgOAaAAQAUAAAPAIQAQAIAJAQQAKAPAGAWQAGAVAAAlQAAAsgJAbQgJAbgSAPQgTAPgbAAQgjAAgVgagAghhUQgQAXAAA9QAAA+AOAUQAPAVAUgBQAVABAPgVQAOgUAAg+QAAg9gOgVQgPgTgVgBQgVABgMARg");
	this.shape_12.setTransform(65.6,29.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("Ag3BvQgSgQgEgdIAdgDQAEAVALAJQALAJAQAAQANAAALgGQALgHAGgLQAIgKAEgTQAFgSgBgTIAAgHQgIAPgRAKQgQAJgRAAQggAAgVgXQgVgVgBglQABgnAWgXQAXgXAhAAQAXAAAVANQAUANALAZQALAYAAAuQAAAvgLAcQgLAdgUAPQgVAPgaAAQgeAAgTgRgAgihVQgQARAAAbQAAAYAOAOQAPAOAVABQAUgBAOgOQAOgPAAgaQAAgagOgQQgOgQgUAAQgUAAgOARg");
	this.shape_13.setTransform(65.7,29.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("Ag7BqQgXgWAAghQAAgZANgQQAMgPAXgHQgTgGgJgNQgJgOAAgRQAAgcATgTQAUgSAgAAQAgAAAUATQAUATAAAcQAAARgJANQgJAMgTAHQAXAIANAQQAMARAAAXQAAAggXAWQgXAWglAAQgkAAgXgWgAgkAPQgOAOAAAWQAAANAGAMQAHANAMAHQAMAGANAAQAWAAAPgOQAOgOAAgWQAAgWgPgPQgOgOgWAAQgVAAgPAOgAgchbQgMAMAAAPQAAATALALQAMALARAAQASAAALgLQAMgMAAgQQAAgQgMgMQgMgMgRAAQgRAAgLALg");
	this.shape_14.setTransform(65.7,29.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgtB8QAAgeALgqQAMgqAUglQAUgnAYgbIh6AAIAAgeIChAAIAAAYQgYAagXAqQgYApgMAtQgJAfgDAmg");
	this.shape_15.setTransform(65.8,29.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("Ag5BkQgZgdAAhBQAAhHAbghQAYgdAmAAQAeAAATAQQATARADAdIgeADQgEgTgIgHQgMgOgTAAQgNAAgLAIQgPALgIAVQgJATAAAmQALgRAQgIQAQgIARAAQAfAAAVAXQAWAVAAAkQAAAYgKAUQgKAUgSALQgSALgXAAQglAAgYgcgAggADQgOAPAAAYQAAAQAHAPQAGAOAMAIQANAHAMAAQATABAOgQQAOgQAAgbQAAgagNgPQgOgOgVAAQgUAAgPAOg");
	this.shape_16.setTransform(65.6,29.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("Ag5BqQgWgTgDgfIAggDQAEAXANAMQANAMATAAQAUAAAQgRQAQgQAAgcQAAgagPgOQgPgQgXAAQgPAAgMAHQgMAHgGAKIgegEIAZiAIB8AAIAAAeIhjAAIgOBDQAXgQAXAAQAhAAAXAXQAWAWAAAjQAAAigUAZQgYAfgoAAQgiAAgWgUg");
	this.shape_17.setTransform(65.8,29.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAWB9IAAg8IhsAAIAAgcIByihIAZAAIAAChIAhAAIAAAcIghAAIAAA8gAg3AlIBNAAIAAhwg");
	this.shape_18.setTransform(65.1,29.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("Ag4BtQgWgVgDgfIAfgDQAFAZANAMQAMALATAAQAUAAAQgPQAOgPAAgWQAAgVgNgOQgOgOgWABQgHgBgNAEIADgaIAFAAQATAAAPgKQAQgLAAgUQAAgSgLgLQgMgLgRAAQgSAAgMALQgMAMgDAWIgfgFQAGgfAUgRQAUgRAdAAQAUAAARAJQARAIAKAQQAJAPAAARQAAAQgJAOQgJANgRAIQAWAFANAPQAMAQAAAYQAAAigYAWQgYAXgjAAQghAAgWgTg");
	this.shape_19.setTransform(65.7,29.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AhSB+QAAgLAEgLQAGgRAOgQQAOgQAagWQAoghAPgTQAOgUAAgRQAAgSgNgNQgNgMgVAAQgVAAgOANQgNANAAAYIgggDQADgkAWgSQAVgTAjAAQAkAAAVAUQAVAUAAAeQAAAPgHAOQgGAPgOAPQgOAQghAcQgbAXgIAJQgIAIgFAIIB6AAIAAAeg");
	this.shape_20.setTransform(65.3,29.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11}]}).to({state:[{t:this.shape_12}]},9).to({state:[{t:this.shape_13}]},2).to({state:[{t:this.shape_14}]},2).to({state:[{t:this.shape_15}]},2).to({state:[{t:this.shape_16}]},2).to({state:[{t:this.shape_17}]},2).to({state:[{t:this.shape_18}]},2).to({state:[{t:this.shape_19}]},2).to({state:[{t:this.shape_20}]},2).to({state:[{t:this.shape_11}]},2).to({state:[{t:this.shape_12}]},3).to({state:[{t:this.shape_13}]},2).to({state:[{t:this.shape_14}]},3).to({state:[{t:this.shape_15}]},6).to({state:[{t:this.shape_16}]},3).to({state:[{t:this.shape_17}]},2).to({state:[{t:this.shape_18}]},2).to({state:[{t:this.shape_19}]},2).to({state:[{t:this.shape_20}]},2).to({state:[{t:this.shape_11}]},2).to({state:[{t:this.shape_12}]},3).to({state:[{t:this.shape_13}]},3).to({state:[{t:this.shape_14}]},2).to({state:[{t:this.shape_15}]},3).to({state:[{t:this.shape_16}]},2).to({state:[{t:this.shape_17}]},3).to({state:[{t:this.shape_18}]},3).to({state:[{t:this.shape_19}]},3).to({state:[{t:this.shape_20}]},3).to({state:[{t:this.shape_11}]},2).to({state:[{t:this.shape_12}]},2).to({state:[{t:this.shape_13}]},2).to({state:[{t:this.shape_14}]},3).wait(2));

	// Слой 10
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAPB+IAAjDQgLAKgRALQgSALgOAFIAAgeQAagMATgRQASgSAIgQIAUAAIAAD7g");
	this.shape_21.setTransform(42.1,29.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("Ag5BqQgWgTgDgfIAggDQAEAXANAMQANAMASAAQAWAAAPgRQAPgQAAgcQAAgagOgOQgPgQgXAAQgPAAgMAHQgMAHgHAKIgdgEIAZiAIB8AAIAAAeIhjAAIgOBDQAWgQAYAAQAhAAAWAXQAXAWAAAjQAAAigTAZQgZAfgpAAQgiAAgVgUg");
	this.shape_22.setTransform(43.4,29.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAWB9IAAg8IhrAAIAAgcIBxihIAZAAIAAChIAhAAIAAAcIghAAIAAA8gAg4AlIBOAAIAAhwg");
	this.shape_23.setTransform(42.8,29.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("Ag4BsQgWgTgDgfIAfgFQAFAaANAMQAMAMATAAQAUAAAQgPQAOgPAAgXQAAgVgNgOQgOgOgWAAQgHAAgNAEIADgaIAFAAQATAAAPgKQAQgLAAgVQAAgQgLgMQgMgLgRAAQgSAAgMALQgMAMgDAXIgfgGQAGgfAUgRQAUgRAdAAQAUAAARAJQARAIAKAQQAJAPAAARQAAARgJANQgJANgRAIQAWAFANAPQAMAQAAAZQAAAhgYAWQgYAXgjAAQghAAgWgUg");
	this.shape_24.setTransform(43.3,29.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AhSB+QAAgLAEgLQAGgRAOgQQAOgQAagWQAoghAPgTQAOgUAAgRQAAgSgNgNQgNgMgVAAQgVAAgOANQgNANAAAYIgggDQADgkAWgSQAVgTAjAAQAkAAAVAUQAVAUAAAeQAAAPgHAOQgGAPgOAPQgOAQghAcQgbAXgIAJQgIAIgFAIIB6AAIAAAeg");
	this.shape_25.setTransform(43,29.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21}]}).to({state:[{t:this.shape_22}]},9).to({state:[{t:this.shape_23}]},2).to({state:[{t:this.shape_24}]},21).to({state:[{t:this.shape_24}]},3).to({state:[{t:this.shape_25}]},25).to({state:[{t:this.shape_21}]},25).wait(5));

	// точка
	this.point = new lib.точка();
	this.point.name = "point";
	this.point.parent = this;
	this.point.setTransform(32.4,27.8,1,1,0,0,0,5.1,19.8);

	this.timeline.addTween(cjs.Tween.get(this.point).wait(90));

	// Слой 2
	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAPB+IAAjDQgLAKgRALQgSALgOAFIAAgeQAagMATgRQASgSAIgQIAUAAIAAD7g");
	this.shape_26.setTransform(20.3,29.1);
	this.shape_26._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_26).wait(9).to({_off:false},0).wait(81));

	// Layer 1
	this.frame = new lib.рамкаиндикатора();
	this.frame.name = "frame";
	this.frame.parent = this;
	this.frame.setTransform(55,25,1,1,0,0,0,55,25);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#CCCCCC").s().p("AoND6QgTgBAAgSIAAnMQAAgUATAAIQbAAQATAAAAAUIAAHMQAAASgSABg");
	this.shape_27.setTransform(55.5,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.frame}]}).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,113,53);


(lib.ЖКИ0290110 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"stop":0,"to84-90":9,"to90-110":39});

	// timeline functions:
	this.frame_4 = function() {
		this.stop();
	}
	this.frame_35 = function() {
		this.stop();
	}
	this.frame_89 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(31).call(this.frame_35).wait(54).call(this.frame_89).wait(1));

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(204,204,204,0.898)").s().p("An5DhQgTAAAAgSIAAmeQAAgRATAAIP0AAQASAAAAARIAAGeQAAARgRABg");
	this.shape.setTransform(55,25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(90));

	// Слой 7
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag7BqQgXgWAAghQAAgZANgQQAMgPAXgHQgTgGgJgNQgJgOAAgRQAAgcATgTQAUgSAgAAQAgAAAUATQAUATAAAcQAAARgJANQgJAMgTAHQAXAIANAQQAMARAAAXQAAAggXAWQgXAWglAAQgkAAgXgWgAgkAPQgOAOAAAWQAAANAGAMQAHANAMAHQAMAGANAAQAWAAAPgOQAOgOAAgWQAAgWgPgPQgOgOgWAAQgVAAgPAOgAgchbQgMAMAAAPQAAATALALQAMALARAAQASAAALgLQAMgMAAgQQAAgQgMgMQgMgMgRAAQgRAAgLALg");
	this.shape_1.setTransform(88.2,29.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ag4BmQgZggAAhGQAAgrAKgbQAJgbASgQQASgOAaAAQAUAAAPAIQAQAIAJAQQAKAPAGAWQAGAVAAAlQAAAsgJAbQgJAbgSAPQgTAPgbAAQgjAAgVgagAghhUQgQAXAAA9QAAA+AOAUQAPAVAUgBQAVABAPgVQAOgUAAg+QAAg9gOgVQgPgTgVgBQgVABgMARg");
	this.shape_2.setTransform(88.1,29.4);
	this.shape_2._off = true;

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhSB+QAAgLAEgLQAGgRAOgQQAOgQAagWQAoghAPgTQAOgUAAgRQAAgSgNgNQgNgMgVAAQgVAAgOANQgNANAAAYIgggDQADgkAWgSQAVgTAjAAQAkAAAVAUQAVAUAAAeQAAAPgHAOQgGAPgOAPQgOAQghAcQgbAXgIAJQgIAIgFAIIB6AAIAAAeg");
	this.shape_3.setTransform(87.8,29.1);
	this.shape_3._off = true;

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAWB9IAAg8IhsAAIAAgcIByihIAZAAIAAChIAhAAIAAAcIghAAIAAA8gAg3AlIBNAAIAAhwg");
	this.shape_4.setTransform(87.6,29.2);
	this.shape_4._off = true;

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("Ag4BtQgWgVgDgfIAfgDQAFAZANAMQAMALATAAQAUAAAQgPQAOgPAAgWQAAgVgNgOQgOgOgWABQgHgBgNAEIADgaIAFAAQATAAAPgKQAQgLAAgUQAAgSgLgLQgMgLgRAAQgSAAgMALQgMAMgDAWIgfgFQAGgfAUgRQAUgRAdAAQAUAAARAJQARAIAKAQQAJAPAAARQAAAQgJAOQgJANgRAIQAWAFANAPQAMAQAAAYQAAAigYAWQgYAXgjAAQghAAgWgTg");
	this.shape_5.setTransform(88.2,29.4);
	this.shape_5._off = true;

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("Ag5BqQgWgTgDgfIAggDQAEAXANAMQANAMATAAQAUAAAQgRQAQgQAAgcQAAgagPgOQgPgQgXAAQgPAAgMAHQgMAHgGAKIgegEIAZiAIB8AAIAAAeIhjAAIgOBDQAXgQAXAAQAhAAAXAXQAWAWAAAjQAAAigUAZQgYAfgoAAQgiAAgWgUg");
	this.shape_6.setTransform(88.3,29.6);
	this.shape_6._off = true;

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgtB8QAAgeALgqQAMgqAUglQAUgnAYgbIh6AAIAAgeIChAAIAAAYQgYAagXAqQgYApgMAtQgJAfgDAmg");
	this.shape_7.setTransform(88.3,29.3);
	this.shape_7._off = true;

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("Ag3BvQgSgQgEgdIAdgDQAEAVALAJQALAJAQAAQANAAALgGQALgHAGgLQAIgKAEgTQAFgSgBgTIAAgHQgIAPgRAKQgQAJgRAAQggAAgVgXQgVgVgBglQABgnAWgXQAXgXAhAAQAXAAAVANQAUANALAZQALAYAAAuQAAAvgLAcQgLAdgUAPQgVAPgaAAQgeAAgTgRgAgihVQgQARAAAbQAAAYAOAOQAPAOAVABQAUgBAOgOQAOgPAAgaQAAgagOgQQgOgQgUAAQgUAAgOARg");
	this.shape_8.setTransform(88.2,29.4);
	this.shape_8._off = true;

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("Ag5BkQgZgdAAhBQAAhHAbghQAYgdAmAAQAeAAATAQQATARADAdIgeADQgEgTgIgHQgMgOgTAAQgNAAgLAIQgPALgIAVQgJATAAAmQALgRAQgIQAQgIARAAQAfAAAVAXQAWAVAAAkQAAAYgKAUQgKAUgSALQgSALgXAAQglAAgYgcgAggADQgOAPAAAYQAAAQAHAPQAGAOAMAIQANAHAMAAQATABAOgQQAOgQAAgbQAAgagNgPQgOgOgVAAQgUAAgPAOg");
	this.shape_9.setTransform(88.1,29.4);
	this.shape_9._off = true;

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAPB+IAAjDQgLAKgRALQgSALgOAFIAAgeQAagMATgRQASgSAIgQIAUAAIAAD7g");
	this.shape_10.setTransform(86.9,29.1);
	this.shape_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).to({_off:true},9).wait(6).to({_off:false},0).to({_off:true},2).wait(15).to({_off:false},0).wait(1).to({_off:true},2).wait(12).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(2));
	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(9).to({_off:false},0).to({_off:true},2).wait(6).to({_off:false},0).to({_off:true},2).wait(16).to({_off:false},0).to({_off:true},5).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(11).to({_off:false},0).to({_off:true},2).wait(14).to({_off:false},0).to({_off:true},2).wait(12).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(8));
	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(13).to({_off:false},0).to({_off:true},2).wait(14).to({_off:false},0).to({_off:true},1).wait(13).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(6));
	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(19).to({_off:false},0).to({_off:true},2).wait(21).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(7));
	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(21).to({_off:false},0).to({_off:true},2).wait(21).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(5));
	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(23).to({_off:false},0).to({_off:true},2).wait(21).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(3));
	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(25).to({_off:false},0).to({_off:true},2).wait(21).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(30).to({_off:false},0).to({_off:true},2).wait(13).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(4));
	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(40).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9));

	// Слой 8
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAWB9IAAg8IhsAAIAAgcIByihIAZAAIAAChIAhAAIAAAcIghAAIAAA8gAg3AlIBNAAIAAhwg");
	this.shape_11.setTransform(65.1,29.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("Ag5BqQgWgTgDgfIAggDQAEAXANAMQANAMATAAQAUAAAQgRQAQgQAAgcQAAgagPgOQgPgQgXAAQgPAAgMAHQgMAHgGAKIgegEIAZiAIB8AAIAAAeIhjAAIgOBDQAXgQAXAAQAhAAAXAXQAWAWAAAjQAAAigUAZQgYAfgoAAQgiAAgWgUg");
	this.shape_12.setTransform(65.8,29.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("Ag5BkQgZgdAAhBQAAhHAbghQAYgdAmAAQAeAAATAQQATARADAdIgeADQgEgTgIgHQgMgOgTAAQgNAAgLAIQgPALgIAVQgJATAAAmQALgRAQgIQAQgIARAAQAfAAAVAXQAWAVAAAkQAAAYgKAUQgKAUgSALQgSALgXAAQglAAgYgcgAggADQgOAPAAAYQAAAQAHAPQAGAOAMAIQANAHAMAAQATABAOgQQAOgQAAgbQAAgagNgPQgOgOgVAAQgUAAgPAOg");
	this.shape_13.setTransform(65.6,29.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgtB8QAAgeALgqQAMgqAUglQAUgnAYgbIh6AAIAAgeIChAAIAAAYQgYAagXAqQgYApgMAtQgJAfgDAmg");
	this.shape_14.setTransform(65.8,29.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("Ag7BqQgXgWAAghQAAgZANgQQAMgPAXgHQgTgGgJgNQgJgOAAgRQAAgcATgTQAUgSAgAAQAgAAAUATQAUATAAAcQAAARgJANQgJAMgTAHQAXAIANAQQAMARAAAXQAAAggXAWQgXAWglAAQgkAAgXgWgAgkAPQgOAOAAAWQAAANAGAMQAHANAMAHQAMAGANAAQAWAAAPgOQAOgOAAgWQAAgWgPgPQgOgOgWAAQgVAAgPAOgAgchbQgMAMAAAPQAAATALALQAMALARAAQASAAALgLQAMgMAAgQQAAgQgMgMQgMgMgRAAQgRAAgLALg");
	this.shape_15.setTransform(65.7,29.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("Ag3BvQgSgQgEgdIAdgDQAEAVALAJQALAJAQAAQANAAALgGQALgHAGgLQAIgKAEgTQAFgSgBgTIAAgHQgIAPgRAKQgQAJgRAAQggAAgVgXQgVgVgBglQABgnAWgXQAXgXAhAAQAXAAAVANQAUANALAZQALAYAAAuQAAAvgLAcQgLAdgUAPQgVAPgaAAQgeAAgTgRgAgihVQgQARAAAbQAAAYAOAOQAPAOAVABQAUgBAOgOQAOgPAAgaQAAgagOgQQgOgQgUAAQgUAAgOARg");
	this.shape_16.setTransform(65.7,29.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("Ag4BmQgZggAAhGQAAgrAKgbQAJgbASgQQASgOAaAAQAUAAAPAIQAQAIAJAQQAKAPAGAWQAGAVAAAlQAAAsgJAbQgJAbgSAPQgTAPgbAAQgjAAgVgagAghhUQgQAXAAA9QAAA+AOAUQAPAVAUgBQAVABAPgVQAOgUAAg+QAAg9gOgVQgPgTgVgBQgVABgMARg");
	this.shape_17.setTransform(65.6,29.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAPB+IAAjDQgLAKgRALQgSALgOAFIAAgeQAagMATgRQASgSAIgQIAUAAIAAD7g");
	this.shape_18.setTransform(64.4,29.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AhSB+QAAgLAEgLQAGgRAOgQQAOgQAagWQAoghAPgTQAOgUAAgRQAAgSgNgNQgNgMgVAAQgVAAgOANQgNANAAAYIgggDQADgkAWgSQAVgTAjAAQAkAAAVAUQAVAUAAAeQAAAPgHAOQgGAPgOAPQgOAQghAcQgbAXgIAJQgIAIgFAIIB6AAIAAAeg");
	this.shape_19.setTransform(65.3,29.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("Ag4BtQgWgVgDgfIAfgDQAFAZANAMQAMALATAAQAUAAAQgPQAOgPAAgWQAAgVgNgOQgOgOgWABQgHgBgNAEIADgaIAFAAQATAAAPgKQAQgLAAgUQAAgSgLgLQgMgLgRAAQgSAAgMALQgMAMgDAWIgfgFQAGgfAUgRQAUgRAdAAQAUAAARAJQARAIAKAQQAJAPAAARQAAAQgJAOQgJANgRAIQAWAFANAPQAMAQAAAYQAAAigYAWQgYAXgjAAQghAAgWgTg");
	this.shape_20.setTransform(65.7,29.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11}]}).to({state:[{t:this.shape_12}]},9).to({state:[{t:this.shape_13}]},2).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},2).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},2).to({state:[{t:this.shape_18}]},2).to({state:[{t:this.shape_19}]},2).to({state:[{t:this.shape_20}]},2).to({state:[{t:this.shape_11}]},2).to({state:[{t:this.shape_12}]},2).to({state:[{t:this.shape_13}]},2).to({state:[{t:this.shape_14}]},2).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},2).to({state:[{t:this.shape_18}]},14).to({state:[{t:this.shape_19}]},10).to({state:[{t:this.shape_20}]},10).to({state:[{t:this.shape_11}]},10).to({state:[{t:this.shape_12}]},10).wait(1));

	// Слой 10
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAPB+IAAjDQgLAKgRALQgSALgOAFIAAgeQAagMATgRQASgSAIgQIAUAAIAAD7g");
	this.shape_21.setTransform(42.1,29.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AhSB+QAAgLAEgLQAGgRAOgQQAOgQAagWQAoghAPgTQAOgUAAgRQAAgSgNgNQgNgMgVAAQgVAAgOANQgNANAAAYIgggDQADgkAWgSQAVgTAjAAQAkAAAVAUQAVAUAAAeQAAAPgHAOQgGAPgOAPQgOAQghAcQgbAXgIAJQgIAIgFAIIB6AAIAAAeg");
	this.shape_22.setTransform(43,29.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("Ag4BsQgWgTgDgfIAfgFQAFAaANAMQAMAMATAAQAUAAAQgPQAOgPAAgXQAAgVgNgOQgOgOgWAAQgHAAgNAEIADgaIAFAAQATAAAPgKQAQgLAAgVQAAgQgLgMQgMgLgRAAQgSAAgMALQgMAMgDAXIgfgGQAGgfAUgRQAUgRAdAAQAUAAARAJQARAIAKAQQAJAPAAARQAAARgJANQgJANgRAIQAWAFANAPQAMAQAAAZQAAAhgYAWQgYAXgjAAQghAAgWgUg");
	this.shape_23.setTransform(43.3,29.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAWB9IAAg8IhrAAIAAgcIBxihIAZAAIAAChIAhAAIAAAcIghAAIAAA8gAg4AlIBOAAIAAhwg");
	this.shape_24.setTransform(42.8,29.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21}]}).to({state:[{t:this.shape_22}]},9).to({state:[{t:this.shape_23}]},8).to({state:[{t:this.shape_24}]},18).wait(55));

	// точка
	this.point = new lib.точка();
	this.point.name = "point";
	this.point.parent = this;
	this.point.setTransform(54.6,27.8,1,1,0,0,0,5.1,19.8);

	this.timeline.addTween(cjs.Tween.get(this.point).wait(9).to({x:32.4},0).wait(81));

	// Layer 1
	this.frame = new lib.рамкаиндикатора();
	this.frame.name = "frame";
	this.frame.parent = this;
	this.frame.setTransform(55,25,1,1,0,0,0,55,25);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#CCCCCC").s().p("AoND6QgTgBAAgSIAAnMQAAgUATAAIQbAAQATAAAAAUIAAHMQAAASgSABg");
	this.shape_25.setTransform(55.5,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.frame}]}).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,113,53);


(lib.клип = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{common:4,start:14,point:24,input:54,kont01:119,ind01:154,kont02:163,ind02:249,norma:259});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}
	this.frame_4 = function() {
		this.tower.gotoAndStop("stop");
	}
	this.frame_14 = function() {
		this.tower.gotoAndStop("stop");
	}
	this.frame_24 = function() {
		this.tower.gotoAndStop("stop");
	}
	this.frame_25 = function() {
		this.tower.gotoAndPlay("up01");
	}
	this.frame_54 = function() {
		this.tower.gotoAndStop("stop01");
	}
	this.frame_119 = function() {
		this.tower.gotoAndStop("stop01");
	}
	this.frame_139 = function() {
		this.tower.gotoAndPlay("up02");
	}
	this.frame_154 = function() {
		this.tower.gotoAndStop("stop02");
	}
	this.frame_163 = function() {
		this.tower.gotoAndStop("stop02");
	}
	this.frame_164 = function() {
		this.tower.gotoAndPlay("down01");
	}
	this.frame_224 = function() {
		this.tower.gotoAndPlay("up03");
	}
	this.frame_249 = function() {
		this.tower.gotoAndStop("stop03");
	}
	this.frame_259 = function() {
		this.tower.gotoAndStop("stop03");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(10).call(this.frame_14).wait(10).call(this.frame_24).wait(1).call(this.frame_25).wait(29).call(this.frame_54).wait(65).call(this.frame_119).wait(20).call(this.frame_139).wait(15).call(this.frame_154).wait(9).call(this.frame_163).wait(1).call(this.frame_164).wait(60).call(this.frame_224).wait(25).call(this.frame_249).wait(10).call(this.frame_259).wait(31));

	// текст верх
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAOAfIgGgfIAAgeIAkAAIAAAeIgFAfgAglAfIgGgfIAAgeIAkAAIAAAeIgGAfg");
	this.shape.setTransform(467.1,23.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgvA3QgKgLgBgQQAAgKAGgIQAEgJAKgDQAJgFARgDQAWgEAJgEIAAgDQAAgKgFgEQgFgEgMAAQgIAAgFAEQgFADgDAJIgegGQAFgSANgIQALgJAZAAQAVAAAKAFQAMAFAEAJQAEAHAAAWIAAAlQAAARACAIQABAHAEAJIggAAIgEgJIgBgEQgIAIgKAEQgIAEgLAAQgTAAgMgKgAAAAIQgOACgEADQgGAFAAAHQAAAHAEAFQAGAFAIAAQAIAAAIgGQAGgEACgHQABgEAAgMIAAgHIgTAGg");
	this.shape_1.setTransform(454.7,31.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAXA+IAAg0IguAAIAAA0IghAAIAAh7IAhAAIAAAtIAuAAIAAgtIAhAAIAAB7g");
	this.shape_2.setTransform(440.8,31.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgtAsQgMgRAAgaQAAgeAQgRQAQgSAZAAQAbAAAQASQAQATgBAlIhRAAQAAAOAIAIQAHAIALAAQAHAAAGgEQAFgEADgJIAgAFQgGASgOAKQgNAJgVAAQgfAAgQgVgAgQgfQgHAIAAANIAwAAQAAgOgHgHQgHgIgKAAQgKAAgHAIg");
	this.shape_3.setTransform(426.7,31.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgPA+IAAhhIgoAAIAAgaIBvAAIAAAaIgoAAIAABhg");
	this.shape_4.setTransform(414.3,31.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag0BBQgWgXAAgpQAAgqAWgXQAWgYAkAAQAfAAAUATQALALAGAUIgiAJQgDgOgKgIQgJgHgOAAQgSAAgMANQgMAOAAAfQAAAfAMAOQALAOASAAQAOAAAKgJQAKgJAEgSIAiAKQgIAcgSAOQgSAOgcAAQghAAgWgYg");
	this.shape_5.setTransform(399.7,28.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAOAfIgFgfIAAgeIAkAAIAAAeIgGAfgAglAfIgGgfIAAgeIAkAAIAAAeIgGAfg");
	this.shape_6.setTransform(385.4,23.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AguA3QgLgLAAgQQAAgKAEgIQAGgJAJgDQAJgFARgDQAWgEAJgEIAAgDQAAgKgFgEQgEgEgMAAQgKAAgEAEQgFADgDAJIgegGQAFgSANgIQAMgJAYAAQAVAAALAFQAKAFAFAJQAEAHAAAWIAAAlQAAARACAIQABAHAFAJIghAAIgDgJIgCgEQgIAIgKAEQgIAEgLAAQgUAAgKgKgAAAAIQgOACgEADQgGAFgBAHQAAAHAGAFQAFAFAIAAQAHAAAJgGQAFgEADgHQABgEAAgMIAAgHIgTAGg");
	this.shape_7.setTransform(366.4,31.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAWA+IAAhhIgrAAIAABhIghAAIAAh7IBtAAIAAB7g");
	this.shape_8.setTransform(352.3,31.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAaA+IAAhOIgzBOIgfAAIAAh7IAfAAIAABNIAyhNIAgAAIAAB7g");
	this.shape_9.setTransform(337.8,31.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgPA+IAAhhIgoAAIAAgaIBvAAIAAAaIgoAAIAABhg");
	this.shape_10.setTransform(324.5,31.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgtAsQgMgRAAgaQAAgeAQgRQAQgSAZAAQAbAAAQASQAQATgBAlIhRAAQAAAOAIAIQAHAIALAAQAHAAAGgEQAFgEADgJIAgAFQgGASgOAKQgNAJgVAAQgfAAgQgVgAgQgfQgHAIAAANIAwAAQAAgOgHgHQgHgIgKAAQgKAAgHAIg");
	this.shape_11.setTransform(305.2,31.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAaA+IAAhOIgzBOIgfAAIAAh7IAfAAIAABNIAyhNIAgAAIAAB7g");
	this.shape_12.setTransform(291.3,31.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAYA+IAAg0IguAAIAAA0IgiAAIAAh7IAiAAIAAAtIAuAAIAAgtIAhAAIAAB7g");
	this.shape_13.setTransform(276.7,31.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgtAsQgMgRAAgaQAAgeAQgRQAQgSAZAAQAbAAAQASQAQATgBAlIhRAAQAAAOAIAIQAHAIALAAQAHAAAGgEQAFgEADgJIAgAFQgGASgOAKQgNAJgVAAQgfAAgQgVgAgQgfQgHAIAAANIAwAAQAAgOgHgHQgHgIgKAAQgKAAgHAIg");
	this.shape_14.setTransform(262.6,31.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAWA+IAAgxQgTAFgJAAQgPAAgMgHQgMgGgFgJQgEgLAAgQIAAgeIAhAAIAAAeQAAAKACAFQACAFAGADQAFAEAIAAQAJAAALgEIAAg1IAhAAIAAB7g");
	this.shape_15.setTransform(249,31.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAaA+IAAhOIgzBOIgfAAIAAh7IAfAAIAABNIAyhNIAgAAIAAB7g");
	this.shape_16.setTransform(234.7,31.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAYA+IAAg0IgvAAIAAA0IggAAIAAh7IAgAAIAAAtIAvAAIAAgtIAgAAIAAB7g");
	this.shape_17.setTransform(220.1,31.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgvA3QgKgLgBgQQAAgKAGgIQAEgJAKgDQAJgFARgDQAWgEAJgEIAAgDQAAgKgFgEQgFgEgMAAQgIAAgFAEQgFADgDAJIgegGQAFgSAMgIQAMgJAZAAQAVAAAKAFQAMAFAEAJQAEAHAAAWIAAAlQAAARABAIQACAHAEAJIggAAIgEgJIgBgEQgIAIgJAEQgJAEgLAAQgTAAgMgKgAAAAIQgOACgEADQgGAFAAAHQAAAHAEAFQAGAFAIAAQAIAAAIgGQAFgEADgHQABgEAAgMIAAgHIgTAGg");
	this.shape_18.setTransform(206.2,31.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("Ag8BYIAAirIAfAAIAAASQAGgJAKgHQALgFALgBQAWAAAOARQAQARAAAfQAAAegQASQgPARgVAAQgKAAgIgFQgIgDgKgKIAAA/gAgTgzQgIAJAAASQAAAWAIAJQAJAKAKAAQAMAAAHgJQAIgJAAgUQAAgVgIgJQgHgJgMAAQgLAAgIAJg");
	this.shape_19.setTransform(192.6,33.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgpA+IAAh7IBTAAIAAAaIgyAAIAABhg");
	this.shape_20.setTransform(180.7,31.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgfA5QgQgHgIgPQgIgPAAgVQAAgQAIgPQAIgQAPgIQAPgIARAAQAcAAASASQASATAAAbQAAAcgSATQgSASgcAAQgQAAgPgIgAgVgbQgIAKAAARQAAATAIAJQAJAKAMAAQANAAAJgKQAIgJAAgTQAAgRgIgKQgJgKgNAAQgMAAgJAKg");
	this.shape_21.setTransform(167.6,31.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(290));

	// фон текст верх
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#47829E").s().p("Egw0AD6IAAnzMBhpAAAIAAHzg");
	this.shape_22.setTransform(316.5,29);

	this.timeline.addTween(cjs.Tween.get(this.shape_22).wait(290));

	// Слой 18
	this.instance = new lib.zoom_hook();
	this.instance.parent = this;
	this.instance.setTransform(184.5,392.5,1.997,1.997);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(259).to({_off:false},0).wait(31));

	// Слой 17
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgxA4QgSgUAAgkQAAgoAWgTQATgQAaAAQAeAAATAUQATATAAAjQAAAbgJAQQgIAQgQAJQgQAJgTAAQgeAAgTgUgAgegpQgMAOAAAbQAAAcAMAOQANAOARgBQASABAMgOQAMgOAAgcQAAgbgMgOQgMgOgSABQgRAAgNANg");
	this.shape_23.setTransform(281.4,460.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAiBIIAAhAIhDAAIAABAIgZAAIAAiPIAZAAIAAA8IBDAAIAAg8IAZAAIAACPg");
	this.shape_24.setTransform(265.9,460.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgvA4QgTgUAAgjQAAgkATgTQATgVAdAAQAdAAASAUQATATAAAkIAAAGIhsAAQACAYAMANQAMAMARAAQAOABAJgIQAKgGAGgQIAZADQgGAWgQAMQgRANgZAAQgfAAgSgUgAgagsQgMAMgBATIBQAAQgCgSgHgKQgMgOgTABQgQgBgLALg");
	this.shape_25.setTransform(250.3,460.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AA5BdIAAgpIhyAAIAAApIgTAAIAAg9IAMAAQAagigBhaIBkAAIAAB8IAQAAIAAA9gAgoAgIBNAAIAAhoIg3AAQgDBHgTAhg");
	this.shape_26.setTransform(234,462.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgvA4QgTgUAAgjQAAgkATgTQATgVAdAAQAdAAASAUQATATAAAkIAAAGIhsAAQACAYAMANQAMAMARAAQAOABAJgIQAKgGAGgQIAZADQgGAWgQAMQgRANgZAAQgfAAgSgUgAgagsQgMAMgBATIBQAAQgCgSgHgKQgMgOgTABQgQgBgLALg");
	this.shape_27.setTransform(219,460.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("Ag7BIIAAiPIA5AAQAUAAAKADQAKADAIAKQAHAJAAANQAAALgEAHQgFAHgIAGQAKACAHAJQAHAKAAANQgCAVgNAKQgOAKgZgBgAgiA1IAgAAQAUAAAIgGQAIgFAAgMQAAgGgEgGQgFgGgHgCQgHgCgPAAIgeAAgAgigKIAaAAQAPgBAGgBQAGgCAEgFQAFgFAAgHQAAgLgIgFQgIgEgTgBIgbAAg");
	this.shape_28.setTransform(204.5,460.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("Ag7BIIAAiPIA5AAQAUAAAKADQAKADAIAKQAHAJAAANQAAALgEAHQgFAHgIAGQAKACAHAJQAHAKAAANQgCAVgNAKQgOAKgZgBgAgiA1IAgAAQAUAAAIgGQAIgFAAgMQAAgGgEgGQgFgGgHgCQgHgCgPAAIgeAAgAgigKIAaAAQAPgBAGgBQAGgCAEgFQAFgFAAgHQAAgLgIgFQgIgEgTgBIgbAAg");
	this.shape_29.setTransform(189.6,460.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgvA4QgTgUAAgjQAAgkATgTQATgVAdAAQAdAAASAUQATATAAAkIAAAGIhsAAQACAYAMANQAMAMARAAQAOABAJgIQAKgGAGgQIAZADQgGAWgQAMQgRANgZAAQgfAAgSgUgAgagsQgMAMgBATIBQAAQgCgSgHgKQgMgOgTABQgQgBgLALg");
	this.shape_30.setTransform(313.2,427.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AAjBIIAAhsIhDBsIgbAAIAAiQIAZAAIAABuIBDhuIAbAAIAACQg");
	this.shape_31.setTransform(297.6,427.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AAiBIIAAhAIhDAAIAABAIgZAAIAAiQIAZAAIAAA9IBDAAIAAg9IAZAAIAACQg");
	this.shape_32.setTransform(282.1,427.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgvA4QgTgUAAgjQAAgkATgTQATgVAdAAQAdAAASAUQATATAAAkIAAAGIhsAAQACAYAMANQAMAMARAAQAOABAJgIQAKgGAGgQIAZADQgGAWgQAMQgRANgZAAQgfAAgSgUgAgagsQgMAMgBATIBQAAQgCgSgHgKQgMgOgTABQgQgBgLALg");
	this.shape_33.setTransform(266.5,427.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AAiBIIAAg6QgWAHgTAAQgRAAgMgIQgNgJgEgLQgFgMAAgPIAAgmIAYAAIAAAcQAAARACAJQADAHAIAGQAIAGAMgBQANAAAWgGIAAhCIAZAAIAACQg");
	this.shape_34.setTransform(251.1,427.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAjBIIAAhsIhDBsIgbAAIAAiQIAZAAIAABuIBDhuIAbAAIAACQg");
	this.shape_35.setTransform(236.4,427.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AAiBIIAAhAIhDAAIAABAIgZAAIAAiQIAZAAIAAA9IBDAAIAAg9IAZAAIAACQg");
	this.shape_36.setTransform(220.8,427.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("Ag1BAQgNgLAAgTQAAgKAFgJQAFgJAIgGQAIgEAKgDQAGgCAQgBQAcgEAOgEIABgHQAAgPgIgGQgJgJgSABQgRgBgJAHQgHAFgEAQIgZgDQADgQAIgJQAHgJAPgGQAOgFASAAQASAAAMAEQAMAFAFAGQAGAHACAKIABAXIAAAfQAAAjACAJQABAJAFAIIgaAAQgDgHgCgLQgNAMgNAFQgMAFgPAAQgXAAgNgMgAgFAJQgPACgHADQgGADgDAFQgDAFAAAHQgBAJAIAHQAHAHAPgBQANAAALgFQALgHAFgKQAEgJAAgRIAAgIQgNAFgaAEg");
	this.shape_37.setTransform(205.3,427.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("Ag+BmIAAjIIAXAAIAAATQAHgLALgGQAKgFAMAAQATAAAOAKQAOAJAIASQAHARAAAVQAAAWgIARQgIASgPAJQgQAKgQAAQgLAAgKgFQgKgFgGgJIAABHgAgchDQgMAOAAAcQAAAcALANQAMANAQAAQAQABALgOQAMgOAAgcQAAgcgMgOQgLgNgPAAQgPAAgNAOg");
	this.shape_38.setTransform(190.2,430.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgpBIIAAiQIBTAAIAAAUIg6AAIAAB8g");
	this.shape_39.setTransform(177.8,427.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgxBaQgXgOgLgXQgMgYAAgaQAAgxAbgcQAbgdApAAQAcAAAWAOQAXANALAYQAMAXAAAdQAAAfgMAYQgNAYgWAMQgXANgaAAQgbAAgWgOgAgvg8QgUATAAAsQAAAkATAVQAUAVAcAAQAeAAATgVQAUgVAAgnQAAgXgJgSQgIgTgQgKQgQgKgUAAQgbAAgUAUg");
	this.shape_40.setTransform(160.9,424.8);

	this.instance_1 = new lib.моргалкакруг();
	this.instance_1.parent = this;
	this.instance_1.setTransform(141.9,572.9);

	this.instance_2 = new lib.моргалкакруг();
	this.instance_2.parent = this;
	this.instance_2.setTransform(67.9,121.1);

	this.instance_3 = new lib.моргалкакругмалый();
	this.instance_3.parent = this;
	this.instance_3.setTransform(304.6,106.5,1.1,1.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23}]},89).to({state:[]},30).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]},35).to({state:[]},9).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]},86).to({state:[]},10).wait(31));

	// Слой 8
	this.instance_4 = new lib.Символ2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(235.5,441.8);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(89).to({_off:false},0).to({_off:true},30).wait(171));

	// Слой 6 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgUPA0RMAAAhohMAofAAAMAAABohg");
	mask.setTransform(499.4,392.5);

	// Слой 11
	this.tower = new lib.кабинаистрела();
	this.tower.name = "tower";
	this.tower.parent = this;
	this.tower.setTransform(499.4,504.1,2.3,2.3,180);

	var maskedShapeInstanceList = [this.tower];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.tower).wait(119).to({rotation:162},20).wait(45).to({rotation:198},40).wait(66));

	// Слой 4
	this.instance_5 = new lib.морг1метр01();
	this.instance_5.parent = this;
	this.instance_5.setTransform(583.2,114.5,1,1,0,0,0,0,-35);
	this.instance_5._off = true;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(24).to({_off:false},0).wait(266));

	// Слой 23
	this.instance_6 = new lib.морг1метр();
	this.instance_6.parent = this;
	this.instance_6.setTransform(583.2,114.5,1,1,0,0,0,0,-35);
	this.instance_6._off = true;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(14).to({_off:false},0).to({_off:true},10).wait(266));

	// Слой 22
	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AAPAjIgGglIAAggIAbAAIAAAgIgGAlgAgcAjIgHglIAAggIAcAAIAAAgIgHAlg");
	this.shape_41.setTransform(494.7,122.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("Ag0BAQgNgNAAgRQAAgKAFgKQAFgIAIgFQAHgFAKgCIAVgEQAdgEAOgEIAAgGQAAgPgHgHQgJgHgSAAQgRAAgIAFQgIAGgEAQIgYgEQAEgPAHgJQAHgKAOgEQAOgFASgBQASAAAMAFQALAEAFAHQAGAGACAKQABAGAAAQIAAAgQAAAhACAKQABAIAFAJIgZAAQgEgIgBgKQgOAMgMAEQgMAEgOABQgXgBgNgKgAgFAJQgPACgGACQgGAEgEAEQgDAGAAAGQAAAKAHAGQAIAHAOAAQANAAALgHQALgFAFgLQAEgJAAgPIAAgJQgNAFgaAEg");
	this.shape_42.setTransform(482.1,131.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AAhBIIAAhAIhCAAIAABAIgYAAIAAiOIAYAAIAAA7IBCAAIAAg7IAZAAIAACOg");
	this.shape_43.setTransform(466.9,131.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgvA4QgSgUAAgjQAAgjASgUQAUgTAcgBQAcABASATQATATAAAjIAAAGIhqAAQACAYAMAMQAMANAQAAQANAAAKgHQAJgHAGgQIAZAEQgGAVgQANQgQALgZABQgegBgTgSgAgagqQgMALgBASIBPAAQgCgSgHgJQgLgOgTAAQgPAAgMAMg");
	this.shape_44.setTransform(451.6,131.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgLBIIAAh6IguAAIAAgUIBzAAIAAAUIguAAIAAB6g");
	this.shape_45.setTransform(438,131.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgtBZQgUgNgLgZQgKgYAAgcQAAgfAMgXQAMgWAVgMQAWgMAZAAQAeAAAUAPQAUAPAIAcIgaAFQgGgVgOgKQgNgKgTAAQgWAAgPALQgQALgGASQgGATAAATQAAAYAHATQAIATAPAJQAQAKARgBQAWAAAPgMQAPgNAFgYIAaAGQgIAggVARQgVARgfAAQgfAAgUgNg");
	this.shape_46.setTransform(421.9,128.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AAPAjIgGglIAAggIAbAAIAAAgIgGAlgAgcAjIgHglIAAggIAcAAIAAAgIgHAlg");
	this.shape_47.setTransform(406.9,122.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(2,1,1).p("A0TAAMAonAAA");
	this.shape_48.setTransform(499,149.5);

	this.instance_7 = new lib.моргстена();
	this.instance_7.parent = this;
	this.instance_7.setTransform(499,129.9,1,1,0,0,0,0,-19.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FF0000").s().p("AAPAjIgGglIAAggIAbAAIAAAgIgGAlgAgcAjIgHglIAAggIAcAAIAAAgIgHAlg");
	this.shape_49.setTransform(494.7,122.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FF0000").s().p("Ag0BAQgNgNAAgRQAAgKAFgKQAFgIAIgFQAHgFAKgCIAVgEQAdgEAOgEIAAgGQAAgPgHgHQgJgHgSAAQgRAAgIAFQgIAGgEAQIgYgEQAEgPAHgJQAHgKAOgEQAOgFASgBQASAAAMAFQALAEAFAHQAGAGACAKQABAGAAAQIAAAgQAAAhACAKQABAIAFAJIgZAAQgEgIgBgKQgOAMgMAEQgMAEgOABQgXgBgNgKgAgFAJQgPACgGACQgGAEgEAEQgDAGAAAGQAAAKAHAGQAIAHAOAAQANAAALgHQALgFAFgLQAEgJAAgPIAAgJQgNAFgaAEg");
	this.shape_50.setTransform(482.1,131.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FF0000").s().p("AAhBIIAAhAIhCAAIAABAIgYAAIAAiOIAYAAIAAA7IBCAAIAAg7IAZAAIAACOg");
	this.shape_51.setTransform(466.9,131.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FF0000").s().p("AgvA4QgSgUAAgjQAAgjASgUQAUgTAcgBQAcABASATQATATAAAjIAAAGIhqAAQACAYAMAMQAMANAQAAQANAAAKgHQAJgHAGgQIAZAEQgGAVgQANQgQALgZABQgegBgTgSgAgagqQgMALgBASIBPAAQgCgSgHgJQgLgOgTAAQgPAAgMAMg");
	this.shape_52.setTransform(451.6,131.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FF0000").s().p("AgLBIIAAh6IguAAIAAgUIBzAAIAAAUIguAAIAAB6g");
	this.shape_53.setTransform(438,131.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FF0000").s().p("AgtBZQgUgNgLgZQgKgYAAgcQAAgfAMgXQAMgWAVgMQAWgMAZAAQAeAAAUAPQAUAPAIAcIgaAFQgGgVgOgKQgNgKgTAAQgWAAgPALQgQALgGASQgGATAAATQAAAYAHATQAIATAPAJQAQAKARgBQAWAAAPgMQAPgNAFgYIAaAGQgIAggVARQgVARgfAAQgfAAgUgNg");
	this.shape_54.setTransform(421.9,128.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FF0000").s().p("AAPAjIgGglIAAggIAbAAIAAAgIgGAlgAgcAjIgHglIAAggIAcAAIAAAgIgHAlg");
	this.shape_55.setTransform(406.9,122.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#FF0000").ss(2,1,1).p("A0TAAMAonAAA");
	this.shape_56.setTransform(499,149.5);

	var maskedShapeInstanceList = [this.shape_41,this.shape_42,this.shape_43,this.shape_44,this.shape_45,this.shape_46,this.shape_47,this.shape_48,this.instance_7,this.shape_49,this.shape_50,this.shape_51,this.shape_52,this.shape_53,this.shape_54,this.shape_55,this.shape_56];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41}]}).to({state:[{t:this.instance_7}]},5).to({state:[{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41}]},9).to({state:[{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49}]},135).to({state:[{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41}]},14).to({state:[{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49}]},81).to({state:[{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41}]},15).wait(31));

	// Слой 16
	this.instance_8 = new lib.поверх();
	this.instance_8.parent = this;
	this.instance_8.setTransform(499,79.5);
	this.instance_8._off = true;

	var maskedShapeInstanceList = [this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(14).to({_off:false},0).wait(276));

	// Слой 5
	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#000000").ss(1,1,1).p("AaoA7IBiBhID0jzIj0j0Ij0D0IBhBhIA9g8IAXAWQgKgMgHgOQgFgQAAgSQAAgkAYgYQAZgZAkAAQAjAAAaAZQAZAZAAAkQAAAkgZAZQgYAYgkAAQgSAAgQgFQgOgHgNgKIgDgEAbOgYIAXAXIg9A8AUoFZIAxAxIFPlPAUoFZIFPlPASif3Ih0hzQHokyFtolIB0B1IABgBQAYgYgZgYIpupuQgYgZgYAYIg+A+IrbLbIg+A+QgYAYAZAYIJuJuQAYAZAYgYIABgBQHnkxFuokATfIEIA8A8AVZGKIh6B6IrbLbAAT7TQgKgNgHgOQgEgQAAgSQAAgkAXgYQAZgZAkAAQAkAAAZAZQAZAaAAAjQAAAkgZAZQgYAYgkAAQgSAAgQgFQgOgHgNgKgAhA6tIA9g9IAWAXAAW7QIAXAXIg8A9IBhBhID0j0Ij0j0IjzD0IBhBiAmP1eIAxAxIFPlPA1emPIlPFPIg+A+IAUATA7PAaQALALAFAMQAFAQAAASQABAjgaAaQgYAYglABQgjAAgagZQgZgZAAgkQABglAYgYQAagZAjABQASAAAQAEQAMAFALAKIABACIAHAHIAVAUIA+g9IFPlPIgxgxIPPvPIFPlPA58gPIBhBhIj0D0Ij0j0ID0jzIBiBhAGKVZIgxgxIlPFPAJAUbIg8g8Ih6B6AA7aoIBhBiIjzD0Ij0j0ID0j0IBhBhIg9A+IATAUIAIAHIABACAggbJQgKgKgMgFQgQgGgSABQgjgBgaAaQgYAYgBAlQAAAjAZAaQAZAZAkAAQAlgBAYgYQAagagBgjQAAgSgFgQQgGgNgKgKIAVAUIA9g+IFPlPAFZUoI6G6GAle0tIaGaG");
	this.shape_57.setTransform(538.1,542.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#9C9C9C").s().p("AiLL6IpupuQgZgYAYgYIA+g+ILaraIA+g+QAYgYAYAZIJuJuQAZAYgYAYIgBABIh0h1QltIknnEyIB0BzIgBABQgMAMgLAAQgNAAgMgNg");
	this.shape_58.setTransform(665.8,670.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#CCCCCC").s().p("AOqcAQHokyFtolIB0B1QluIknnExgAibZOIAVAUIgFADQgGgNgKgKgAi6Y2IADgFIAUAUQgLgKgMgFgADVSkI6G6GIgxgxIPPvPIAxAxIaGaGIAxAxIh6B6IA8A8IrbLbIg8g8ILbrbIrbLbIh6B6gA9ThpIAVAUIgFADQgFgMgLgLgA9yiBIADgFIAUAUQgLgKgMgFgAZKicQANAKAOAHIgEAGgAYwi2IAGgEQAHAOAKAMgAht9UQANAKAOAHIgEAGgAiH9uIAGgEQAHAOAKANg");
	this.shape_59.setTransform(551.3,555.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#999999").s().p("AiRdKQgagZAAgkQABgkAZgYQAZgaAkABQASgBAPAGQANAFAKAKIAHAHIABABIgBgBIgHgHIgUgUIA9g+IFPlPIAxAxIlPFPIg+A+IgUgVQAKALAGANQAEAPAAASQABAkgZAZQgYAZgkABQgkAAgZgagAUrFbIFPlPIA9g8IAYAXIACADIgCgDQgLgMgGgOQgGgQAAgSQAAgkAYgYQAZgZAlAAQAiAAAaAZQAZAZAAAjQAAAlgZAZQgYAXgkAAQgSAAgQgFQgOgGgNgLIAYAXIg9A9IlPFPgA9JCSQgZgYAAglQAAgkAZgZQAZgYAjAAQATAAAPAFQANAFAKAKIgUgUIA+g9IFPlPIAxAxIlPFPIg+A9IgUgUIgHgIIgCgBIACABIAHAIQAKAKAFANQAFAQABARQAAAkgaAZQgYAZglABIgBAAQgiAAgZgagAmM1cIFPlPIA9g9IAXAYIADACIgDgCQgLgNgGgOQgGgQAAgSQAAgkAYgYQAZgZAlAAQAjAAAZAZQAaAagBAiQABAlgaAZQgYAYgkAAQgSAAgPgGQgPgGgMgLIAWAYIg7A8IlQFQg");
	this.shape_60.setTransform(537.8,542.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#666666").s().p("AlIcNID0j0IBhBhIg9A+IgDAFQgQgGgSABQgjgBgaAaQgYAYgBAlQAAAjAZAaQAZAZAkAAQAlgBAYgYQAZgagBgjQAAgSgEgQIAEgDIA+g+IBhBiIjzD0gEggAABVID0jzIBiBhIg+A9IgDAFQgQgFgSAAQgjAAgaAZQgYAYgBAlQAAAkAZAZQAaAZAjAAQAlgBAYgYQAagagBgjQAAgSgFgQIAFgDIA+g9IBhBhIj0D0gAarA+IA9g9IAEgFQAQAEASAAQAkAAAYgXQAZgZAAgkQAAgkgZgZQgagZgjAAQgkAAgZAZQgYAYAAAkQAAASAFAQIgGAEIg9A8IhhhhID0j0ID0D0Ij0DzgAgM55IA8g9IAEgGQAQAFASAAQAkAAAYgYQAZgZAAgkQAAgjgZgaQgZgZgkAAQgkAAgZAZQgYAYAAAkQAAASAFAQIgFAEIg9A9IhhhiIDzj0ID0D0Ij0D0g");
	this.shape_61.setTransform(537.8,542.4);

	var maskedShapeInstanceList = [this.shape_57,this.shape_58,this.shape_59,this.shape_60,this.shape_61];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57}]}).wait(290));

	// Слой 15 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_54 = new cjs.Graphics().p("EgcLA0BMAAAhoBMA4XAAAMAAABoBg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(54).to({graphics:mask_1_graphics_54,x:184.5,y:392.5}).wait(236));

	// Слой 14
	this.hand = new lib.рука();
	this.hand.name = "hand";
	this.hand.parent = this;
	this.hand.setTransform(204.7,751.4,1.5,1.5);
	this.hand._off = true;

	var maskedShapeInstanceList = [this.hand];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.hand).wait(54).to({_off:false},0).to({x:150.5,y:571.8},20).to({scaleX:1.45,scaleY:1.45},5).wait(10).to({scaleX:1.5,scaleY:1.5},5).to({x:204.7,y:751.4},20).to({_off:true},5).wait(171));

	// Слой 19
	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("rgba(210,226,239,0.698)").s().p("EgcLA0BMAAAhoBMA4XAAAMAAABoBg");
	this.shape_62.setTransform(184.5,392.5);
	this.shape_62._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_62).wait(259).to({_off:false},0).wait(31));

	// Слой 25
	this.wave = new lib.волнызвуковыемного();
	this.wave.name = "wave";
	this.wave.parent = this;
	this.wave.setTransform(67.9,121.1,0.555,0.555);
	this.wave._off = true;

	this.timeline.addTween(cjs.Tween.get(this.wave).wait(149).to({_off:false},0).to({_off:true},15).wait(80).to({_off:false},0).wait(46));

	// Слой 24
	this.la_stena = new lib.лампочканакнопках();
	this.la_stena.name = "la_stena";
	this.la_stena.parent = this;
	this.la_stena.setTransform(113.1,560.7,1.11,1.11);

	this.la_stena_1 = new lib.лампочканакнопкахгорит();
	this.la_stena_1.name = "la_stena_1";
	this.la_stena_1.parent = this;
	this.la_stena_1.setTransform(113.1,560.7,1.11,1.11);

	this.la_stena_2 = new lib.лампочканакнопкахморгает();
	this.la_stena_2.name = "la_stena_2";
	this.la_stena_2.parent = this;
	this.la_stena_2.setTransform(113.1,560.7,1.11,1.11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.la_stena}]}).to({state:[{t:this.la_stena_1}]},88).to({state:[{t:this.la_stena_2}]},61).to({state:[{t:this.la_stena_1}]},15).to({state:[{t:this.la_stena_2}]},80).wait(46));

	// Слой 3
	this.la_stop = new lib.лампастопНЕгорит();
	this.la_stop.name = "la_stop";
	this.la_stop.parent = this;
	this.la_stop.setTransform(304.6,106.5,1.11,1.11,0,0,0,9,9);

	this.la_right = new lib.лампочканакнопках();
	this.la_right.name = "la_right";
	this.la_right.parent = this;
	this.la_right.setTransform(283.2,560.7,1.11,1.11);

	this.la_left = new lib.лампочканакнопках();
	this.la_left.name = "la_left";
	this.la_left.parent = this;
	this.la_left.setTransform(198.1,560.7,1.11,1.11);

	this.la_90 = new lib.лампа90();
	this.la_90.name = "la_90";
	this.la_90.parent = this;
	this.la_90.setTransform(247.4,106.5,1.11,1.11,0,0,0,9,9);

	this.la_norma = new lib.лампанормагорит();
	this.la_norma.name = "la_norma";
	this.la_norma.parent = this;
	this.la_norma.setTransform(190.1,106.5,1.11,1.11,0,0,0,9,9);

	this.kn_vybor = new lib.кнопка12();
	this.kn_vybor.name = "kn_vybor";
	this.kn_vybor.parent = this;
	this.kn_vybor.setTransform(190,162.4,1.11,1.11,0,0,0,13.1,11.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AAZAwIAAhTIgxAAIAABTIgMAAIAAhfIBJAAIAABfg");
	this.shape_63.setTransform(317.6,77.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgXArQgLgHgFgLQgGgLABgNQAAgWAMgOQANgNATAAQANAAALAGQAKAGAGAMQAFALABANQgBAPgFALQgGAMgLAGQgLAFgMAAQgNAAgKgGgAgWgcQgKAJAAAVQAAARAJAKQAKAKANAAQAOAAAJgKQAJgKAAgTQAAgKgDgJQgEgJgIgFQgHgEgKAAQgMAAgKAJg");
	this.shape_64.setTransform(307.6,77.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgFAwIAAhTIggAAIAAgMIBLAAIAAAMIggAAIAABTg");
	this.shape_65.setTransform(298.9,77.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgVArQgKgGgFgMQgFgMAAgNQAAgPAGgLQAFgLALgFQAKgGAMAAQAOAAAKAHQAKAHAEAOIgNACQgDgKgHgFQgGgEgJAAQgKAAgIAFQgHAFgDAJQgDAJAAAJQAAALADAKQAEAJAHAEQAIAFAIAAQAKAAAIgHQAHgGADgMIAMAEQgEAPgKAIQgKAIgPAAQgPAAgJgGg");
	this.shape_66.setTransform(290.5,77.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AAQAsQgFgHAAgNQAAgKAFgHQAFgHAKAAQAJAAAGAGQAFAHAAAMQAAAMgFAHQgGAGgJAAQgJAAgGgGgAAYAMQgDADAAALQAAAJADADQADAEAEAAQAEAAADgEQADgDAAgKQAAgKgDgDQgDgEgEAAQgEAAgDAEgAgeAyIA0hjIAJAAIgzBjgAgsgFQgGgHAAgNQAAgKAFgHQAFgHAKAAQAJAAAGAGQAGAHAAAMQAAAMgGAHQgGAFgJAAQgJAAgFgFgAglglQgDADAAAKQAAAKADADQADAEAEAAQAFAAADgEQADgDAAgKQAAgKgDgDQgDgEgFAAQgEAAgDAEg");
	this.shape_67.setTransform(254.4,77.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgVAmQgJgLAAgbQAAgQADgKQAEgLAHgFQAHgGAJAAQAIAAAFAEQAGACAEAHQAEAFACAIQACAJAAANQAAARgDAKQgDALgIAFQgGAFgLAAQgMABgJgLgAgMgfQgGAIAAAXQAAAYAFAHQAGAIAHAAQAIAAAFgIQAGgIAAgXQAAgXgGgIQgFgHgIAAQgHAAgFAHg");
	this.shape_68.setTransform(244.8,77.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgUAqQgHgGgBgLIALgBQABAIAEAEQAEADAHAAQAEAAAEgCQAEgDADgEQACgEACgHQACgHAAgIIAAgCQgEAGgGADQgGAEgGgBQgMABgIgJQgIgIAAgNQAAgPAIgJQAJgJANAAQAIABAIAFQAHAFAFAIQADAKAAARQAAASgDALQgEAKgIAGQgIAFgKAAQgLABgHgHgAgMggQgGAHAAAKQAAAJAFAGQAGAEAHAAQAIAAAFgEQAFgGAAgKQAAgKgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_69.setTransform(237.4,77.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AAeAwIgLgdIgnAAIgKAdIgOAAIAlhfIANAAIAmBfgAgFgSIgLAbIAfAAIgKgaIgGgUIgEATg");
	this.shape_70.setTransform(209.5,77.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AAhAwIAAhPIgbBPIgLAAIgchQIAABQIgMAAIAAhfIATAAIAXBDIADAOIAGgPIAWhCIARAAIAABfg");
	this.shape_71.setTransform(199.5,77.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgjAwIAAhfIAjAAIAOABQAHABAFAEQAFADACAGQADAGAAAHQAAAMgHAIQgIAIgUAAIgYAAIAAAngAgXgBIAYAAQAMAAAFgFQAFgEAAgJQAAgGgDgEQgDgEgFgBIgLgBIgYAAg");
	this.shape_72.setTransform(189.9,77.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgXArQgKgHgGgLQgFgLgBgNQABgWAMgOQANgNATAAQANAAALAGQALAGAFAMQAFALAAANQAAAPgFALQgGAMgLAGQgLAFgMAAQgMAAgLgGgAgWgcQgKAJAAAVQABARAIAKQAKAKANAAQAOAAAKgKQAIgKABgTQAAgKgFgJQgDgJgIgFQgIgEgJAAQgMAAgKAJg");
	this.shape_73.setTransform(180.1,77.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AAZAwIAAgtIgxAAIAAAtIgMAAIAAhfIAMAAIAAAoIAxAAIAAgoIAMAAIAABfg");
	this.shape_74.setTransform(170.1,77.5);

	this.la_vkl = new lib.лампакоторыхмногогорит();
	this.la_vkl.name = "la_vkl";
	this.la_vkl.parent = this;
	this.la_vkl.setTransform(334.4,144.4,1.11,1.11);

	this.la_ts = new lib.лампакоторыхмного();
	this.la_ts.name = "la_ts";
	this.la_ts.parent = this;
	this.la_ts.setTransform(312.2,144.4,1.11,1.11);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgeAnIACgJIADABQAEAAACgDQACgCAAgLIAAg2IAxAAIAABOIgLAAIAAhFIgcAAIAAAoQABANgCAFQgBAGgDADQgFADgFABIgIgCg");
	this.shape_75.setTransform(341.6,156.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AAOAoIgNgWQgEgJgEgDQgEgDgFAAIAAAlIgLAAIAAhPIALAAIAAAjQAHAAADgDQADgCAEgLIAFgLQACgDAEgDQAEgCAEAAIAHAAIAAAJIgCAAIgCAAQgGAAgBADQgDACgDAIQgEAKgDADQgDADgDABQAHABAHAMIARAbg");
	this.shape_76.setTransform(335.6,156.4);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgdAoIAAhPIAdAAQAJAAAGADQAFACADAFQAEAFgBAGQAAAFgCAEQgDAFgGACQAIACADAFQAEAFAAAHQAAAFgCAFQgDAFgDACQgEADgEABQgGACgIAAgAgTAeIATAAIAHAAIAHgCQACgCABgDQACgCAAgEQAAgFgCgDQgDgDgEgCIgKgBIgTAAgAgTgFIASAAIAJgBQAEgBACgDQACgDAAgEQAAgEgCgDQgCgDgEgBIgKgBIgRAAg");
	this.shape_77.setTransform(328.3,156.4);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgSAkQgIgFgEgKQgEgKAAgLQAAgMAFgJQAEgJAJgFQAJgFAJAAQAMAAAIAGQAIAGAEALIgLADQgCgJgGgEQgFgEgIAAQgIAAgGAEQgGAFgDAHQgCAIAAAHQAAAKADAHQADAIAGADQAGAEAGAAQAJAAAGgFQAGgFACgKIALADQgDANgJAGQgIAHgNAAQgMAAgIgFg");
	this.shape_78.setTransform(314.9,156.4);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgEAoIAAhFIgaAAIAAgKIA+AAIAAAKIgaAAIAABFg");
	this.shape_79.setTransform(307.5,156.4);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#EFEFEF").s().p("AgYAuQgLgOAAggQAAgTAEgMQAEgNAIgGQAIgHALAAQAJAAAHAEQAGADAFAHQAEAHADAKQACAKAAAQQAAAUgEAMQgEAMgIAHQgIAHgMAAQgPAAgJgMgAgOglQgHAKAAAbQAAAcAGAJQAHAJAIAAQAJAAAHgJQAGgJAAgcQAAgbgGgJQgHgJgJAAQgJAAgFAIg");
	this.shape_80.setTransform(96.4,175.1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#EFEFEF").s().p("AAJA5IAAgbIgvAAIAAgOIAyhIIAMAAIAABIIAPAAIAAAOIgPAAIAAAbgAgYAQIAhAAIAAgxg");
	this.shape_81.setTransform(87.6,175.1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#EFEFEF").s().p("AAHA5IAAhYQgFAFgHAFQgIAFgGACIAAgOQALgFAIgIQAIgIADgHIAJAAIAABxg");
	this.shape_82.setTransform(78.6,175);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#EFEFEF").s().p("AgUAHIAAgNIApAAIAAANg");
	this.shape_83.setTransform(72.3,176.6);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#EFEFEF").s().p("AAUA5IgSgfQgHgNgEgEQgGgFgIAAIAAA1IgPAAIAAhwIAPAAIAAAxQAKAAAEgEQAEgEAFgPQAFgLADgFQADgEAGgDQAFgEAHAAIAJABIAAANIgDAAIgDgBQgHAAgEAEQgDADgEAMQgGAOgEAEQgEAEgEACQAKACAKARIAXAmg");
	this.shape_84.setTransform(65.8,175);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#EFEFEF").s().p("AAdA5IAAg2Ig5AAIAAA2IgOAAIAAhxIAOAAIAAAvIA5AAIAAgvIAOAAIAABxg");
	this.shape_85.setTransform(55,175.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#EFEFEF").s().p("AgbAyQgMgHgHgNQgGgNAAgPQAAgcAPgPQAPgQAWgBQAPABANAHQAMAIAHAMQAGAOAAAQQAAARgHAOQgHAOgMAGQgNAIgOgBQgPABgMgJgAgagiQgLALAAAZQAAAUALAMQALAMAPAAQAQAAALgNQALgLAAgWQAAgNgFgKQgEgKgJgGQgJgGgLAAQgPAAgLALg");
	this.shape_86.setTransform(43.4,175.1);

	this.ind_3 = new lib.ЖКИ0390110();
	this.ind_3.name = "ind_3";
	this.ind_3.parent = this;
	this.ind_3.setTransform(123.4,484.1,1.11,1.11,0,0,0,55,25);

	this.ind_2 = new lib.ЖКИ0290110();
	this.ind_2.name = "ind_2";
	this.ind_2.parent = this;
	this.ind_2.setTransform(123.4,367.6,1.11,1.11,0,0,0,55,25);

	this.ind_1 = new lib.ЖКИвылет90110();
	this.ind_1.name = "ind_1";
	this.ind_1.parent = this;
	this.ind_1.setTransform(123.4,251,1.11,1.11,0,0,0,55,25);

	this.la_1 = new lib.лампакоторыхмного();
	this.la_1.name = "la_1";
	this.la_1.parent = this;
	this.la_1.setTransform(242.3,231.6,1.11,1.11);

	this.la_11 = new lib.лампакоторыхмного();
	this.la_11.name = "la_11";
	this.la_11.parent = this;
	this.la_11.setTransform(279.4,479.9,1.11,1.11);

	this.la_10 = new lib.лампакоторыхмного();
	this.la_10.name = "la_10";
	this.la_10.parent = this;
	this.la_10.setTransform(252.8,475.4,1.11,1.11);

	this.la_9 = new lib.лампакоторыхмногогорит();
	this.la_9.name = "la_9";
	this.la_9.parent = this;
	this.la_9.setTransform(233.4,475.4,1.11,1.11);

	this.la_7 = new lib.лампакоторыхмного();
	this.la_7.name = "la_7";
	this.la_7.parent = this;
	this.la_7.setTransform(247.7,376.9,1.11,1.11);

	this.la_13 = new lib.лампакоторыхмногогорит();
	this.la_13.name = "la_13";
	this.la_13.parent = this;
	this.la_13.setTransform(325.5,475.4,1.11,1.11);

	this.la_12 = new lib.лампакоторыхмного();
	this.la_12.name = "la_12";
	this.la_12.parent = this;
	this.la_12.setTransform(306,475.4,1.11,1.11);

	this.la_6 = new lib.лампакоторыхмногогорит();
	this.la_6.name = "la_6";
	this.la_6.parent = this;
	this.la_6.setTransform(247.7,364,1.11,1.11);

	this.la_3 = new lib.лампакоторыхмного();
	this.la_3.name = "la_3";
	this.la_3.parent = this;
	this.la_3.setTransform(252.2,319,1.11,1.11);

	this.la_5 = new lib.лампакоторыхмногогорит();
	this.la_5.name = "la_5";
	this.la_5.parent = this;
	this.la_5.setTransform(247.7,351.1,1.11,1.11);

	this.la_4 = new lib.лампакоторыхмного();
	this.la_4.name = "la_4";
	this.la_4.parent = this;
	this.la_4.setTransform(247.7,338.2,1.11,1.11);

	this.la_8 = new lib.лампакоторыхмного();
	this.la_8.name = "la_8";
	this.la_8.parent = this;
	this.la_8.setTransform(281.4,376.4,1.11,1.11);

	this.la_2 = new lib.лампакоторыхмного();
	this.la_2.name = "la_2";
	this.la_2.parent = this;
	this.la_2.setTransform(250.6,261.1,1.11,1.11);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AgDAaIAAgVIgWAAIAAgIIAWAAIAAgWIAIAAIAAAWIAVAAIAAAIIgVAAIAAAVg");
	this.shape_87.setTransform(231.7,370.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgDAaIAAgVIgWAAIAAgIIAWAAIAAgWIAIAAIAAAWIAVAAIAAAIIgVAAIAAAVg");
	this.shape_88.setTransform(231.7,357.3);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgDAaIAAgVIgWAAIAAgIIAWAAIAAgWIAIAAIAAAWIAVAAIAAAIIgVAAIAAAVg");
	this.shape_89.setTransform(231.7,344.6);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AAFAoIAAg9IgIAGIgLAGIAAgKQAJgDAFgGQAGgGACgFIAHAAIAABPg");
	this.shape_90.setTransform(237.2,376.6);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AgZAoIABgHQACgFAEgFIANgNQAMgKAEgFQAFgHAAgFQAAgGgEgEQgEgDgHAAQgGAAgEADQgEAFgBAHIgKgBQABgLAHgGQAHgGAKAAQAMAAAGAGQAHAHAAAJQAAAFgCAEQgCAFgEAEIgPAPIgLAKIgEAEIAmAAIAAAKg");
	this.shape_91.setTransform(237.5,363.7);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AAHAoIAAgTIghAAIAAgJIAjgzIAIAAIAAAzIALAAIAAAJIgLAAIAAATgAgRAMIAYAAIAAgjg");
	this.shape_92.setTransform(237.5,350.8);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgSAiQgHgHAAgLQAAgHAEgGQAEgEAHgCQgGgCgDgEQgDgEAAgGQAAgJAGgGQAGgGAKAAQAKAAAHAHQAGAGAAAIQAAAGgDAEQgDAEgGACQAHADAEAEQAEAFAAAIQAAAKgHAHQgHAHgMAAQgLAAgHgHgAgLAFQgEAEAAAHQAAAEACAEQACAEAEACQAEADADAAQAHAAAFgFQAEgEAAgHQAAgHgFgFQgEgFgHAAQgGAAgFAFgAgIgcQgEAEAAAFQAAAFAEAEQADADAFAAQAGAAADgDQAEgEAAgFQAAgFgEgEQgEgDgFAAQgFAAgDADg");
	this.shape_93.setTransform(238.2,338.4);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AgFAdIgBgEIABgIIAEgJQgDgVgCgEQgCgEgCAAIgDABIgBAGIgEAAIAAgDQAAgGADgEQACgCADAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQADADACAIIACASIADgLIAGgSIAJAAIgJAQIgCAHIgBADIgFAJIAAAFIABAEIgBAKIgCADQAAAAAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAg");
	this.shape_94.setTransform(279.7,465.9);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AAWAoIgLgRIgHgLIgEgFIgFgCIgGgBIgMAAIAAAkIgLAAIAAhPIAjAAQAKAAAGACQAFADAEAFQADAFAAAHQAAAIgGAGQgFAFgMACIAGAEQAFAEAEAGIAOAWgAgXgEIAXAAQAFAAAFgBQAEgCACgDQACgDAAgEQAAgGgEgDQgFgEgIAAIgYAAg");
	this.shape_95.setTransform(253.6,505.7);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AgYAoIAAhPIALAAIAABFIAmAAIAAAKg");
	this.shape_96.setTransform(299.9,353.9);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AAVAoIAAgmIgpAAIAAAmIgKAAIAAhPIAKAAIAAAhIApAAIAAghIAKAAIAABPg");
	this.shape_97.setTransform(338.5,353.9);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AgDAgIAAg3IgVAAIAAgIIAxAAIAAAIIgVAAIAAA3g");
	this.shape_98.setTransform(42.3,513.7);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AgJAPQAFgCADgEQACgFgBgHIgHAAIAAgSIAQAAIAAASQABAKgEAFQgDAHgHACg");
	this.shape_99.setTransform(37.1,517.3);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AAeA2QgPAIgQAAQgQAAgOgIQgPgJgHgPQgIgPAAgSQAAgTAIgPQAHgQAPgIQANgIASAAQARAAAOAJQAOAIAHAPQAIAPgBATQAAAPgEAMQgFANgJAJQALAIAKAEIgFAMQgOgFgNgLgAgfgpQgNANAAAZQAAAYANANQAMAOATAAQAIAAAIgEQgIgFgIgCIAEgMQAOAEAJAIQAQgOgBgaQAAgPgFgMQgFgLgKgHQgKgGgMAAQgTAAgMANg");
	this.shape_100.setTransform(27.8,510.9);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AgDAgIAAg3IgVAAIAAgIIAxAAIAAAIIgVAAIAAA3g");
	this.shape_101.setTransform(53.6,463.8);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AgEAHQABAAAAAAQABgBAAAAQABAAAAgBQABAAAAgBIAAgFIgDAAIAAgJIAIAAIAAAJQAAAEgCADQgCADgDACg");
	this.shape_102.setTransform(49.7,467.1);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AATAgIgQgXIgDgEIgCAFIgQAWIgKAAIAZggIgWgfIAKAAIAMAQIADAIIAGgHIAMgRIAJAAIgWAeIAYAhg");
	this.shape_103.setTransform(45.5,463.8);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AAUAgIgHgUIgaAAIgHAUIgJAAIAZg/IAIAAIAaA/gAgEgMIgHASIAVAAIgHgRIgDgNIgEAMg");
	this.shape_104.setTransform(39.6,463.8);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AAWAgIAAg0IgSA0IgHAAIgSg1IAAA1IgIAAIAAg/IANAAIAPAsIACAKIADgLIAPgrIALAAIAAA/g");
	this.shape_105.setTransform(32.9,463.8);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AAeA2QgOAIgQAAQgSAAgOgIQgNgJgIgPQgIgPAAgSQAAgTAIgPQAIgQANgIQAOgIASAAQARAAANAJQAPAIAIAPQAGAPAAATQABAPgFAMQgFANgKAJQAMAIAKAEIgFAMQgNgFgOgLgAgfgpQgMANAAAZQAAAYAMANQAMAOATAAQAIAAAIgEQgIgFgIgCIADgMQAPAEAKAIQAPgOAAgaQAAgPgGgMQgFgLgKgHQgLgGgLAAQgSAAgNANg");
	this.shape_106.setTransform(22.4,461);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AAWAgIAAg0IgSA0IgHAAIgSg1IAAA1IgIAAIAAg/IANAAIAPAsIACAKIADgLIAPgrIALAAIAAA/g");
	this.shape_107.setTransform(41.9,397.2);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AgIAPQAFgCACgEQACgFAAgHIgIAAIAAgSIARAAIAAASQAAAKgEAFQgDAHgHACg");
	this.shape_108.setTransform(35.7,400.7);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AAhA/IAAg7IhBAAIAAA7IgRAAIAAh+IARAAIAAA1IBBAAIAAg1IARAAIAAB+g");
	this.shape_109.setTransform(26.8,394);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AAWAgIAAg0IgSA0IgHAAIgSg1IAAA1IgIAAIAAg/IANAAIAPAsIACAKIADgLIAPgrIALAAIAAA/g");
	this.shape_110.setTransform(40.5,347.2);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AgIAPQAFgCACgEQACgFAAgHIgIAAIAAgSIARAAIAAASQAAAKgEAFQgDAHgHACg");
	this.shape_111.setTransform(34.3,350.8);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AAjA/IgRgaIgMgSIgHgIIgIgEIgJAAIgUAAIAAA4IgRAAIAAh+IA4AAQARABAIADQAJADAFAJQAGAJAAAKQgBANgIAKQgJAIgSADIAKAGQAHAHAHAKIAWAigAgmgHIAkAAQALAAAGgCQAHgDADgFQADgFAAgGQAAgJgHgGQgGgGgOABIgnAAg");
	this.shape_112.setTransform(26.1,344.1);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AAWAgIAAg0IgSA0IgHAAIgSg1IAAA1IgIAAIAAg/IANAAIAPAsIACAKIADgLIAPgrIALAAIAAA/g");
	this.shape_113.setTransform(38,280.6);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AgJAPQAFgCADgEQABgFAAgHIgHAAIAAgSIAQAAIAAASQABAKgEAFQgDAHgHACg");
	this.shape_114.setTransform(31.8,284.2);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AgnA/IAAh+IARAAIAABwIA+AAIAAAOg");
	this.shape_115.setTransform(24.7,277.5);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AALAdQgEgFAAgIQAAgHADgEQAEgFAGAAQAGAAAEAEQAEAFAAAHQAAAJgEAEQgEAEgGAAQgFAAgEgEgAAQAHQgCADAAAHQAAAGACACQACADADAAQADAAACgDQABgCAAgHQAAgGgCgDQgBgCgDAAQgDAAgCACgAgTAhIAhhBIAHAAIgiBBgAgdgDQgEgEAAgKQAAgGADgFQAEgFAGABQAGAAAEADQAEAFAAAIQAAAIgEAFQgEADgGAAQgFAAgEgDgAgYgZQgCADAAAHQAAAGACACQACACACABQADgBACgCQACgDAAgGQAAgGgCgDQgCgCgDgBQgCABgCACg");
	this.shape_116.setTransform(53.5,230.8);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AgEAHQABAAAAAAQABgBAAAAQABAAAAgBQAAAAABgBIAAgFIgDAAIAAgJIAIAAIAAAJQAAAEgCADQgCADgDACg");
	this.shape_117.setTransform(48.4,234);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AgXAgIAAg/IAXAAIAJABIAIADQADACACAEQACAEAAAFQAAAIgFAEQgFAGgOAAIgPAAIAAAagAgPgBIAPAAQAJAAADgDQADgDAAgFQAAgEgCgDQgCgDgDgBIgIAAIgPAAg");
	this.shape_118.setTransform(46,230.7);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AAQAgIAAg3IgfAAIAAA3IgJAAIAAg/IAxAAIAAA/g");
	this.shape_119.setTransform(39.7,230.7);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AgPAcQgHgEgEgHQgDgIAAgIQAAgPAIgJQAJgJAMAAQAJAAAHAEQAHAEAEAIQADAIAAAIQAAAKgEAHQgDAIgIAEQgHAEgIAAQgIAAgHgFgAgOgTQgHAHAAANQAAALAGAHQAHAHAIAAQAJAAAHgHQAGgHAAgMQAAgHgDgGQgDgFgFgDQgFgEgGAAQgIAAgGAGg");
	this.shape_120.setTransform(33.1,230.7);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AAtA/IAAhpIglBpIgPAAIgkhrIAABrIgRAAIAAh+IAaAAIAeBZIAFATIAHgUIAehYIAXAAIAAB+g");
	this.shape_121.setTransform(22.2,227.5);

	this.la_potolok = new lib.лампочканакнопках();
	this.la_potolok.name = "la_potolok";
	this.la_potolok.parent = this;
	this.la_potolok.setTransform(27.9,560.7,1.11,1.11);

	this.la_mrq = new lib.лампочканакнопкахгорит();
	this.la_mrq.name = "la_mrq";
	this.la_mrq.parent = this;
	this.la_mrq.setTransform(133.9,670,1.11,1.11);

	this.la_lhq = new lib.лампочканакнопках();
	this.la_lhq.name = "la_lhq";
	this.la_lhq.parent = this;
	this.la_lhq.setTransform(133.9,686.7,1.11,1.11);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AgJAYQgEgEgDgGQgCgHAAgHQAAgIACgGQADgGAFgDQAFgDAEAAQAGAAAFAEQAEAEACAHIgGACQgBgGgCgDQgDgCgFAAQgEAAgDADQgEADgBAFIgBAJQAAAGACAFQABAFADADQAEACADAAQAEAAAEgDQADgEABgGIAGACQgCAIgFAFQgEAEgHAAQgGAAgEgDg");
	this.shape_122.setTransform(326.6,634.9);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AgKAYQgFgEgCgGQgCgGAAgHQgBgMAGgIQAGgHAIAAQAGAAAFADQAEAEADAGQADAGgBAHQABAIgDAGQgDAHgEADQgFADgGAAQgFAAgFgDgAgJgPQgFAFAAALQAAAJAFAGQAEAFAFAAQAHAAAEgFQADgGAAgKQAAgFgBgFQgCgFgDgCQgEgDgEAAQgFAAgEAFg");
	this.shape_123.setTransform(322.1,634.9);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AgPAaIAAgzIAPAAIAHAAQADABABACQADACABADIACAHQAAAHgEADQgEAFgIAAIgKAAIAAAVgAgJAAIAKAAQAFAAACgDQACgCAAgFQAAgDgBgCQAAgBgBAAQAAgBAAAAQgBgBAAAAQgBgBgBAAIgEAAIgKAAg");
	this.shape_124.setTransform(318,634.9);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AgPAaIAAgzIAaAAIAAAGIgUAAIAAAQIAJAAIAJABQADACACADQACADAAAFIgBAHQgCAEgDACQgCACgHAAgAgJAUIAKAAQAEAAADgCQACgCAAgFIgBgFIgEgDIgHgBIgHAAg");
	this.shape_125.setTransform(314.1,634.9);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AgJAYQgEgEgCgGQgDgHAAgHQAAgIADgGQACgGAFgDQAFgDAEAAQAGAAAFAEQAEAEACAHIgGACQgBgGgCgDQgEgCgEAAQgEAAgDADQgEADgBAFIgBAJQAAAGABAFQACAFADADQAEACADAAQAEAAAEgDQADgEABgGIAGACQgCAIgFAFQgEAEgHAAQgGAAgEgDg");
	this.shape_126.setTransform(309.8,634.9);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AgPAaIAAgzIAPAAIAGAAQAEABACACQACACABADIACAHQAAAHgEADQgEAFgIAAIgKAAIAAAVgAgJAAIAKAAQAFAAACgDQACgCABgFQgBgDgBgCQAAgBgBAAQAAgBAAAAQgBgBAAAAQgBgBgBAAIgEAAIgKAAg");
	this.shape_127.setTransform(230.2,640.2);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AgMAaIAAgHQACACADAAQAAAAABAAQAAAAABAAQAAgBAAAAQABAAAAgBQACgBABgGIgRglIAGAAIANAeIAMgeIAGAAIgQAnIgEALQgCACgEAAIgFgBg");
	this.shape_128.setTransform(226.2,640.2);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AgCAaIAAgtIgOAAIAAgGIAhAAIAAAGIgPAAIAAAtg");
	this.shape_129.setTransform(222.5,640.2);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AALAaIAAgYIgVAAIAAAYIgGAAIAAgzIAGAAIAAAVIAVAAIAAgVIAGAAIAAAzg");
	this.shape_130.setTransform(218.4,640.2);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("AgKAYQgFgEgCgGQgCgGgBgHQABgMAFgIQAGgHAIAAQAGAAAEADQAGAEACAGQADAGAAAHQAAAIgDAGQgDAHgFADQgFADgFAAQgFAAgFgDgAgKgPQgDAFAAALQAAAJADAGQAEAFAGAAQAGAAAEgFQAFgGAAgKQgBgFgBgFQgCgFgEgCQgDgDgEAAQgFAAgFAFg");
	this.shape_131.setTransform(214,640.2);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AAIAaIgHgOIgEgIQgCgCgDAAIAAAYIgGAAIAAgzIAGAAIAAAXQAEAAABgCIAEgJIADgHIACgEIAGgBIADAAIAAAGIgCAAIAAAAQgBAAgBAAQAAAAgBAAQAAAAgBABQAAAAgBAAIgDAHIgDAJIgDACQADABAEAIIAJARg");
	this.shape_132.setTransform(210.2,640.2);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("AgCAEIAAgHIAFAAIAAAHg");
	this.shape_133.setTransform(207.4,642.4);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AALAaIAAgtIgVAAIAAAtIgGAAIAAgzIAhAAIAAAzg");
	this.shape_134.setTransform(204.4,640.2);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("AgKAYQgEgEgDgGQgDgGABgHQAAgMAFgIQAGgHAIAAQAGAAAEADQAFAEADAGQACAGAAAHQAAAIgCAGQgDAHgFADQgFADgFAAQgFAAgFgDgAgKgPQgDAFAAALQAAAJADAGQAEAFAGAAQAGAAAEgFQAFgGAAgKQgBgFgBgFQgCgFgEgCQgDgDgEAAQgFAAgFAFg");
	this.shape_135.setTransform(200,640.2);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AANAaIgEgQIgRAAIgFAQIgGAAIAQgzIAGAAIARAzgAgCgKIgEAPIANAAIgEgOIgDgLIgCAKg");
	this.shape_136.setTransform(224.7,629.6);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("AgQAaIABgGIACAAQABAAAAAAQABAAAAAAQABAAAAgBQAAAAABAAQABgCAAgHIAAgkIAZAAIAAA0IgGAAIAAgtIgOAAIAAAaIgBAMIgDAGQgBACgDAAIgFgBg");
	this.shape_137.setTransform(220.5,629.6);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("AgPAaIAAgzIAeAAIAAAGIgYAAIAAAQIAWAAIAAAFIgWAAIAAASIAZAAIAAAGg");
	this.shape_138.setTransform(216.8,629.6);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("AgPAaIAAgzIAPAAIAGAAQADABADACQACACABADIABAHQABAHgEADQgEAFgIAAIgLAAIAAAVgAgKAAIALAAQAFAAACgDQADgCAAgFQAAgDgCgCQAAgBgBAAQAAgBAAAAQgBgBAAAAQgBgBgBAAIgEAAIgLAAg");
	this.shape_139.setTransform(212.9,629.6);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("AgCAaIAAgtIgOAAIAAgGIAhAAIAAAGIgPAAIAAAtg");
	this.shape_140.setTransform(209,629.6);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AgJAYQgFgEgCgGQgCgHAAgHQAAgIACgGQADgGAFgDQAFgDAEAAQAGAAAFAEQAEAEACAHIgGACQgBgGgCgDQgDgCgFAAQgEAAgDADQgEADgBAFIgBAJQAAAGACAFQABAFADADQAEACACAAQAFAAAEgDQADgEABgGIAGACQgCAIgFAFQgEAEgHAAQgGAAgEgDg");
	this.shape_141.setTransform(205.2,629.6);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("AANAaIgEgQIgRAAIgFAQIgGAAIAQgzIAFAAIASAzgAgCgKIgFAPIAOAAIgFgOIgCgLIgCAKg");
	this.shape_142.setTransform(282.5,634.9);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000000").s().p("AAIAaIgHgOIgEgIQgCgCgDAAIAAAYIgGAAIAAgzIAGAAIAAAXQAEAAABgCIADgJIAEgHIACgEIAGgBIADAAIAAAGIgBAAIgBAAQgBAAgBAAQAAAAgBAAQAAAAgBABQAAAAgBAAIgDAHIgDAJIgDACQAEABADAIIAJARg");
	this.shape_143.setTransform(278.9,634.9);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000000").s().p("AgPAaIAAgzIAPAAQAFAAADABQADACABADIACAHQAAAEgCADQgBADgDABQAEABACADQACADAAAFQAAAEgBADIgDAFIgFACIgHABgAgKAUIAKAAIAEAAIADgCIACgDIABgEQAAgDgBgCIgDgDIgGgBIgKAAgAgKgDIAKAAIAEgBIADgCIABgFIgBgFQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAAAgBAAIgFgBIgJAAg");
	this.shape_144.setTransform(275,634.9);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000000").s().p("AgKAYQgEgEgDgGQgDgGAAgHQAAgMAGgIQAGgHAIAAQAGAAAFADQAEAEADAGQACAGAAAHQAAAIgCAGQgDAHgEADQgFADgGAAQgFAAgFgDgAgJgPQgFAFAAALQAAAJAFAGQAEAFAFAAQAHAAAEgFQADgGAAgKQAAgFgBgFQgCgFgDgCQgEgDgEAAQgFAAgEAFg");
	this.shape_145.setTransform(270.7,634.9);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000000").s().p("AgJAYQgFgEgCgGQgCgHAAgHQAAgIACgGQADgGAFgDQAFgDAEAAQAGAAAFAEQAEAEACAHIgGACQgBgGgCgDQgDgCgFAAQgEAAgDADQgEADgBAFIgBAJQAAAGACAFQABAFADADQAEACACAAQAFAAAEgDQADgEABgGIAGACQgCAIgFAFQgEAEgHAAQgGAAgEgDg");
	this.shape_146.setTransform(266.4,634.9);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000000").s().p("AANAaIgEgQIgRAAIgFAQIgGAAIARgzIAEAAIASAzgAgCgKIgFAPIAOAAIgFgOIgCgLIgCAKg");
	this.shape_147.setTransform(262.3,634.9);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000000").s().p("AALAaIAAgtIgVAAIAAAtIgGAAIAAgzIAhAAIAAAzg");
	this.shape_148.setTransform(258.2,634.9);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000000").s().p("AAOAaIgGgQIgRAAIgEAQIgGAAIARgzIAFAAIARAzgAgCgKIgFAPIAOAAIgEgOIgDgLIgCAKg");
	this.shape_149.setTransform(254.1,634.9);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#000000").s().p("AgPALIAFgBQABAEADADQACAEAEAAQAEAAADgDQADgCAAgEQAAgFgDgCQgDgDgEAAIgCAAIAAgFIAFAAIADgDIACgFQAAgEgCgCQgDgDgDAAQgCAAgDACQgCACgBADIgBAFIgFgBQACgRAMAAQAGAAAEAEQAEAEAAAGQAAAIgGAEQADAAACADQADAEAAAEQAAAHgFAFQgEAEgHAAQgLAAgEgQg");
	this.shape_150.setTransform(250.3,634.9);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000000").s().p("AAZAoIgJgYIghAAIgIAYIgLAAIAfhPIAKAAIAgBPgAgEgPIgJAWIAaAAIgIgVIgFgQIgEAPg");
	this.shape_151.setTransform(309.4,614.2);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#000000").s().p("AAcAoIAAhCIgXBCIgIAAIgYhDIAABDIgKAAIAAhPIAQAAIATA4IADALIAEgMIATg3IAOAAIAABPg");
	this.shape_152.setTransform(301.1,614.2);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#000000").s().p("AAWAoIAAg+IgqA+IgKAAIAAhPIAKAAIAAA+IApg+IAKAAIAABPg");
	this.shape_153.setTransform(292.4,614.2);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#000000").s().p("AAmAoIgNgWIgJgMQgEgDgHAAIAAAlIgJAAIAAglQgGAAgEACQgEADgFAJIgBABIgNAWIgNAAIAQgbQAIgMAIgBIgHgEQgDgDgEgKQgDgIgDgCQgCgDgFAAIgEAAIAAgJIAGAAQAFAAAEACIAGAGQACADAEAIQAEALADACQADADAIAAIAAgjIAJAAIAAAjQAIAAADgDQADgDAEgKIAGgLIAGgGQAEgCAFAAIAGAAIAAAJIgCAAIgCAAQgFAAgDADQgCACgDAIQgEAJgCADQgDADgFACQAIABAHAMIARAbg");
	this.shape_154.setTransform(283.3,614.2);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#000000").s().p("AgcAoIAAhPIA3AAIAAAKIgtAAIAAAYIArAAIAAAIIgrAAIAAAbIAvAAIAAAKg");
	this.shape_155.setTransform(274.7,614.2);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#000000").s().p("AgdAoIAAhPIAdAAIAMABQAGABAEADQAEADACAEQACAFAAAGQAAAKgGAGQgGAHgRAAIgUAAIAAAhgAgTgBIAUAAQAKAAAEgEQAFgEAAgGQAAgFgDgEQgCgDgFgCIgJAAIgUAAg");
	this.shape_156.setTransform(267.3,614.2);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#000000").s().p("AgdAoIAAhPIAdAAIAMABQAGABAEADQAEADACAEQACAFAAAGQAAAKgGAGQgGAHgRAAIgUAAIAAAhgAgTgBIAUAAQAKAAAEgEQAFgEAAgGQAAgFgDgEQgCgDgFgCIgJAAIgUAAg");
	this.shape_157.setTransform(256.8,614.2);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#000000").s().p("AgTAkQgJgGgFgJQgEgJAAgLQAAgTALgLQAKgLAQAAQALAAAJAFQAJAFAEAKQAFAJAAALQAAAMgFAKQgFAJgJAFQgJAFgKAAQgKAAgJgFgAgSgXQgJAHABARQAAAPAIAIQAHAIALAAQALAAAJgIQAHgJAAgPQAAgJgDgHQgDgHgHgEQgGgEgIAAQgKAAgIAIg");
	this.shape_158.setTransform(248.6,614.2);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#000000").s().p("AgdAoIAAhPIAzAAIAAAKIgpAAIAAAYIATAAQAKAAAGACQAGACAEAFQAEAFAAAIQAAAGgDAFQgCAFgGADQgFAEgNAAgAgTAfIAUAAQAJAAAFgEQADgDAAgHQAAgFgCgDQgDgEgEgBIgNgBIgPAAg");
	this.shape_159.setTransform(241,614.2);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#000000").s().p("AAeAoIAAhPIAKAAIAABPgAgnAoIAAhPIAKAAIAAAiIATAAQASAAAGAGQAGAHAAAJQAAAJgGAHQgGAHgRAAgAgdAfIAUAAQAJAAAEgDQAEgEAAgHQAAgFgCgEQgDgDgDgBIgOgBIgPAAg");
	this.shape_160.setTransform(232.2,614.2);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#000000").s().p("AgdAoIAAhPIAdAAQAJAAAGADQAFACADAFQADAFAAAGQAAAFgCAEQgEAFgFACQAIACADAFQAEAFAAAHQAAAFgCAFQgDAFgDACQgDADgFABQgGACgIAAgAgSAeIASAAIAIAAIAGgCQACgCABgDQACgCAAgEQAAgFgCgDQgCgDgFgCIgKgBIgSAAgAgSgFIARAAIAJgBQAEgBACgDQACgDAAgEQAAgEgCgDQgCgDgDgBIgLgBIgQAAg");
	this.shape_161.setTransform(223.7,614.2);

	this.kn_mode = new lib.кнопка10();
	this.kn_mode.name = "kn_mode";
	this.kn_mode.parent = this;
	this.kn_mode.setTransform(214.9,678.3,1.11,1.11,0,0,0,17.5,17.5);

	this.kn_zapasovka = new lib.кнопка9();
	this.kn_zapasovka.name = "kn_zapasovka";
	this.kn_zapasovka.parent = this;
	this.kn_zapasovka.setTransform(266.5,678.3,1.11,1.11,0,0,0,17.5,17.5);

	this.kn_test = new lib.кнопка7();
	this.kn_test.name = "kn_test";
	this.kn_test.parent = this;
	this.kn_test.setTransform(156.7,625.6,1.11,1.11,0,0,0,17.5,17.5);

	this.kn_reset = new lib.кнопка11();
	this.kn_reset.name = "kn_reset";
	this.kn_reset.parent = this;
	this.kn_reset.setTransform(318.2,678.3,1.11,1.11,0,0,0,17.5,17.5);

	this.kn_chgp = new lib.кнопка8();
	this.kn_chgp.name = "kn_chgp";
	this.kn_chgp.parent = this;
	this.kn_chgp.setTransform(31.8,653.4,1.11,1.11);

	this.kn_time = new lib.кнопка6();
	this.kn_time.name = "kn_time";
	this.kn_time.parent = this;
	this.kn_time.setTransform(103.9,625.6,1.11,1.11,0,0,0,17.5,17.5);

	this.kn_light = new lib.кнопка5();
	this.kn_light.name = "kn_light";
	this.kn_light.parent = this;
	this.kn_light.setTransform(51.2,625.6,1.11,1.11,0,0,0,17.5,17.5);

	this.kn_right = new lib.кнопка4();
	this.kn_right.name = "kn_right";
	this.kn_right.parent = this;
	this.kn_right.setTransform(312,572.9,1.11,1.11,0,0,0,32.5,17.5);

	this.kn_left = new lib.кнопка3();
	this.kn_left.name = "kn_left";
	this.kn_left.parent = this;
	this.kn_left.setTransform(226.9,572.9,1.11,1.11,0,0,0,32.5,17.5);

	this.kn_stena = new lib.кнопка2();
	this.kn_stena.name = "kn_stena";
	this.kn_stena.parent = this;
	this.kn_stena.setTransform(105.8,553.5,1.11,1.11);

	this.kn_potolok = new lib.кнопка1();
	this.kn_potolok.name = "kn_potolok";
	this.kn_potolok.parent = this;
	this.kn_potolok.setTransform(20.7,553.5,1.11,1.11);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f().s("#EFEFEF").ss(2,1,1).p("AiBgBQAnAAAngBIAng8QA2AAA4gBABygdQg4AAg3AAIglA8QgnAAgnAAACBADQg2AAg3AAIgmA9QgnAAgnAA");
	this.shape_162.setTransform(128.8,173.2);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f().s("#C0C0C0").ss(4,1,1).p("ACki2IlHAAQgUAAABAVIAAFDQgBAVAUAAIFHAAQATAAAAgVIAAlDQAAgVgTAAgALhi2IlIAAQgUAAABAVIAAFDQgBAVAUAAIFIAAQATAAAAgVIAAlDQAAgVgTAAgArzihIAAFDQAAAVATAAIFJAAQATAAAAgVIAAlDQAAgVgTAAIlJAAQgTAAAAAVg");
	this.shape_163.setTransform(247.3,106.5);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f().s("#000000").ss(1,1,1).p("AI+1kIAAAOIAASMAlxzYIAKAGIAGgKAlczLIgLgHIgGAMAlgyLIAQAJIAJgQAlAx4IgQgKIgJARAkqvSIAWANIAMgWAjmseIAOgYAjOsQIgYgOIgOAYAj+ssIAYAOAj/t3IAOgXAkVuEIAWANIgNAXAjotqIgXgNAmW0pICWJUIBjAAIjUpcAkUvFIgNAWAj/u5IgVgMAkophIBlAAIA6hkIjtAAIAABkAmWwqQgCAHgGAHQgIAIgLAAQgMAAgIgIQgIgIAAgMQAAgMAIgHQAIgIAMgDIAAkEAl3ChIi/AAIAAoVIDAAAIBOAAIBgAAIAAIVIhgAAgAjDoyICLGtIBGhFIiNm3gAkophIAADtIAAIVIAABYIA0BCIhcBTIhbhTIA0hCIBPAAAl2l0IAAjtIBOAAAl3D5IAAhYAl2l0IgBIVAFELzIknuUIidCYIDcKuIAZBOIDPAAIBnAAIAABOIhyAAIh9BhIB+AAIAAAMIDeAAIAABDQgeAAgeAAIAACmIghAAIAAAtIAQAAIAnAnIhvAAIAognIAQAAAjE1XIFmSNAA/LzIA2AAAAGLEIA5AAIAAAvAgUHJQgJADgJAEQgbALgZATAlOIVQAPgBALgLQAMgMAAgQQAAgBAAgCAlOIVQgBAAgBAAQgQAAgLgMQgMgMAAgQQAAgQAMgMQALgLAQAAIAAg4Ai5J4QABgIADgHQAJgYANgXAk5KJIAAAsIgsAAIAAgsgAlQIWIACgBAj8JZIAACFIinAAIAAiFIABAAgAlQIWIBUBDAigM1IA9hxIBpAAIAABygAhkOiIhDhgIAHgNAh8PYQAjAPArAEAj6PxIAAAAIAiA1IAygjIAAALIgoAnIgBCQQABAIAFAGQAHAHAJAAQAJAAAHgHQAFgGACgIIAAi3IANAAIAsAAIAAC3QgBAIgFAGQgHAHgJAAQgJAAgHgHQgGgGAAgIIAAi3Ak9PxIBDAAAn/PxQgfAAgfAAIAAhDIDeAAIAAgMID7AAAk9PxIAACmIAiAAIAAAtIAQAAIAnAnIhvAAIAngnIARAAAkbSXIAhAAIAAimAgkQDIAkAAIAAADIgkAAgAiiQOIgEAAAheQ5IAAA9IAAARAimQDICCAAAEZPxQBAAABAAAIAACmIAiAAADWPxIAAAAIAAAAQAhAAAiAAIAACmIgiAAIAAAtIAQAAIAoAnIhvAAIAngnIAQAAADWPxIAAAAAC8OiIh9AAIAAivACEQEIAwAiIAig1IAACmIAhAAACEQEIgBgBIABAAgACEQOIAAgKAB9QOIAHAAIAmAlIAACSQgCAIgFAGQgHAHgJAAQgJAAgHgHQgFgGgBgIgAA4Q5IAAARIiQAAABDQOIAtAAIAAC3QgBAIgGAGQgGAHgJAAQgKAAgGgHQgGgGgBgIgAA4R2IAAgsAA4SHIAAgRABwQOIANAAABSPXQggAPgnAEABcKlQhgAAjPAAAA/OiIijAAAheR2ICWAAAhpQOICsAAAAAQDICDAAAn/PxIBDAAQA/AABAAAAneSXIAiAAIAAimAneTEIAQAAIAoAnIhvAAIAngnIAQAAIAAgtIghAAIAAimAjYVlIDJAAAoUVlIDFAAAmiJZIBShDAHHLtIkBtAAI+TxIAA1EAGZPxIBDAA");
	this.shape_164.setTransform(281.3,367.9);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f().s("#000000").ss(2,1,1).p("EAZogzKMgzJAAAIhvBwIAAQeIBvBvMAzIAAAIBwhvIAAwfgAgl8mIcSgBIAAFNIhOhTIAAimI6XAAIAAA9EgTugvmIDIAAEgTuglMIDIAAEgXGgsIIJ5AAEgXTgrRIKTAAEgWugtAIJIAAEgWpgnzII+AAEgXDgoqIJzAAEgXSgpiIKRAAEgXXgqZIKaAAEgWGgt3IH5AAEgV+gm7IHpAAEgVJguvIF/AAEgU8gmEIFlAAAAD3aQyoAAhfAAQgiAAgFAAQjFAAjFAAQg3AAAAg7IBDjcQAOgxAvgEQAFgBAGAAIYzAAQAEAAAFABAAIx2IAABUQAAA8g2AAI6HAAQg3AAAAg8IBCjZQARg5A4ABIZkAAAAIlMI69AAQg3AAAAg8IBDjcQAQg1A4AAIYzAAQA2AAAAA8IAAERIAACnIAAEQQAAA7g2AAI6HAAQg3AAAAg7IBCjYQARg5A4ABIZpAAA5s8mIZHAAAAINBI69AAQg3AAAAg8IBDjcQAQg2A4AAIYzAAQA2AAAAA8IAAESIAACmIAAD6IaXAAIAAinIBOhTIAAFNMg2iAAAQg3AAAAg7IBCjZQARg5A4AAIZpAAA7QYTIAAZJIBvBvMAzIAAAIBwhvIAA5KIhvhvMgzJAAAgEARTAkOIAADYQAAAOAbAAIGdAAQAaAAAAgOIAAjYQAAgPgaAAImdAAQgbAAAAAPgEAP9Aj/ImJAAQgaAAAAAPIAADYQAAAOAaAAIGJAAQAZAAAAgOIAAjYQAAgPgZAAgEAICAj/ImcAAQgbAAAAAPIAADYQAAAOAbAAIGcAAQAbAAAAgOIAAjYQAAgPgbAAgEAAkAhwIAAOfQAAAVAWABIX8AAQAWgBAAgVIAAufQAAgWgWABI38AAQgWgBAAAWg");
	this.shape_165.setTransform(184.1,392.5);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.rf(["#C6C6C6","#9D9D9D","#808080"],[0,0.722,1],0.8,3.1,0,0.8,3.1,13.1).s().p("AhBBUIgBgEIAAiNQAAgWAbAAIBPAAQAbAAAAAWIAACNIAAAEg");
	this.shape_166.setTransform(276,119.7);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.rf(["#C6C6C6","#9D9D9D","#808080"],[0,0.722,1],0.8,2.3,0,0.8,2.3,13.1).s().p("AhCBIIAAiNQAAgWAbAAIBPAAQAbAAAAAWIAACNIAAAEIhrAAQgGAAgEAFQgFAFAAAGQgLgFAAgPg");
	this.shape_167.setTransform(161.4,120.4);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.rf(["#C6C6C6","#9D9D9D","#808080"],[0,0.722,1],0.8,3.1,0,0.8,3.1,13.1).s().p("AhBBUIgBgEIAAiNQABgWAaAAIBPAAQAaAAABAWIAACNIAAAEg");
	this.shape_168.setTransform(218.7,119.7);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.lf(["#C6C6C6","#9D9D9D","#808080"],[0,0.612,1],-91.5,0,91.6,0).s().p("AuEARQgGAAgEgFQgFgFAAgHIAAAAQAAgGAFgFQAEgFAGAAIBsAAIG4AAICEAAIG3AAICFAAIG6AAIBsAAQAFAAAFAFQAEAFAAAGIAAAAQAAAHgEAFQgFAFgFAAg");
	this.shape_169.setTransform(247.4,129.7);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.rf(["#C6C6C6","#9D9D9D","#808080"],[0,0.722,1],0.8,2.3,0,0.8,2.3,13.1).s().p("AAzBRQgEgFgGAAIhqAAIgBgEIAAiNQAAgWAbAAIBPAAQAbAAAAAWIAACNQAAAPgMAFQAAgGgEgFg");
	this.shape_170.setTransform(333.5,120.4);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#A6A6A6").s().p("AuODuQgWAAABgWIAAmvQgBgXAWAAIccAAQAXAAAAAXIAAGvQAAAWgXAAgAueAoIAACOQAAAPALAEIAAABQAAAIAFAEQAEAGAGgBIcKAAQAFABAFgGQAEgEAAgIIAAgBQALgEAAgPIAAiOQAAgWgbAAIhPAAQgbAAAAAWIAACOIAAAEIm6AAIAAgEIAAiOQAAgWgbAAIhPAAQgbAAAAAWIAACOIAAAEIm3AAIAAgEIAAiOQAAgWgaAAIhQAAQgbAAAAAWIAACOIABAEIm4AAIAAgEIAAiOQAAgWgbAAIhQAAQgbAAAAAWgAGFi/IAAFDQgBAVAUAAIFIAAQATAAAAgVIAAlDQAAgVgTAAIlIAAQgUAAABAVgAi3i/IAAFDQgBAVAUAAIFHAAQATAAAAgVIAAlDQAAgVgTAAIlHAAQgUAAABAVgAr0i/IAAFDQAAAVATAAIFJAAQATAAAAgVIAAlDQAAgVgTAAIlJAAQgTAAAAAVg");
	this.shape_171.setTransform(247.4,109.5);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#EFEFEF").s().p("ADgJeQAUgBAAgUIAAitIAAinIAAisQAAgVgUAAIAJAAQALgBAGAGQAFAFAAALIAAIAQAAALgFAFQgGAGgLgBgAiUl1IgihIIgPghIgQgiIgphZIAAgFIBRAAIBpDhIAAAIg");
	this.shape_172.setTransform(160,218.1);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#000000").s().p("EgFSAgeIA3gWIAAAWIAAAWgAFLaQIgKgSIA7gJIABAAIgBABIgkAugABNZ2IAAgBIA8AJIgMATIgLATgABAVZIgWg3IAaAAIgFAPIAFgPIATAAIgXA3IAAABgADTSJIgHgVIA8ACIAAAAIgtAogADTSJQAIgEAJgDQgJADgIAEgAAkrUIAAAAIABAAIAlAvIgWAHIgVAGgAM4qdIgXAAIAXg3IAWA3gAM4qdIAAgOgAE/7FQgUAAABgVIAAlEQgBgVAUAAIFIAAQATAAAAAVIAAFEQAAAVgTAAgAj97FQgUAAABgVIAAlEQgBgVAUAAIFHAAQATAAAAAVIAAFEQAAAVgTAAgAs67FQgTAAAAgVIAAlEQAAgVATAAIFJAAQATAAAAAVIAAFEQAAAVgTAAg");
	this.shape_173.setTransform(256.3,298.2);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#CE9C94").s().p("A61U0Qg3AAAAg7IBCjZQARg5A4AAIZpAAIAAD5IaXAAIAAimIBOhTIAAFNgA61CnQg3gBAAg7IBCjYQARg5A4ABIZpAAIAAEQQAAA7g2ABgA61vmQg3AAAAg7IBCjZQARg5A4AAIZkAAIAACtQAAAUgUACIAKAAQAKAAAFgGIAABVQAAA7g2AAg");
	this.shape_174.setTransform(184.1,392.5);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#63ADC6").s().p("A61U0Qg3AAAAg8IBDjbQAQg2A4AAIYzAAQA2AAAAA7IAAESgA61CmQg3AAAAg7IBDjbQAQg2A4AAIYzAAQA2AAAAA8IAAEQgAafw5IAAimI6XAAIAAA9QgFgGgKAAIgJAAQATABAAAUIAACtI0HAAIgnAAImKAAQg3AAAAg8IBDjbQAOgxAvgEIZHAAIcSgBIAAFNg");
	this.shape_175.setTransform(184.1,342.6);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#7B8484").s().p("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");
	this.shape_176.setTransform(184.4,392.5);

	this.la_stop_1 = new lib.лампастопгорит();
	this.la_stop_1.name = "la_stop_1";
	this.la_stop_1.parent = this;
	this.la_stop_1.setTransform(304.6,106.5,1.11,1.11,0,0,0,9,9);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f().s("#EFEFEF").ss(2,1,1).p("ABygdQg4AAg3AAIglA8QgnAAgnAAAiBgBQAnAAAngBIAng8QA2AAA4gBACBADQg2AAg3AAIgmA9QgnAAgnAA");
	this.shape_177.setTransform(128.8,173.2);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f().s("#C0C0C0").ss(4,1,1).p("ACki2IlHAAQgUAAABAVIAAFDQgBAVAUAAIFHAAQATAAAAgVIAAlDQAAgVgTAAgAGZi2QgUAAABAVIAAFDQgBAVAUAAIFIAAQATAAAAgVIAAlDQAAgVgTAAgArzihIAAFDQAAAVATAAIFJAAQATAAAAgVIAAlDQAAgVgTAAIlJAAQgTAAAAAVg");
	this.shape_178.setTransform(247.3,106.5);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f().s("#000000").ss(1,1,1).p("AI+1kIAAAOIAASMAlxzYIAKAGIAGgKAlczLIgLgHIgGAMAlgyLIAQAJIAJgQAlAx4IgQgKIgJARAkqvSIAWANIAMgWAjmseIAOgYAjOsQIgYgOIgOAYAj+ssIAYAOAj/t3IgNAXAjotqIgXgNIAOgXAkVuEIAWANAmW0pICWJUIBjAAIjUpcAkUvFIgNAWAj/u5IgVgMAkophIBlAAIA6hkIjtAAIAABkAmWwqQgCAHgGAHQgIAIgLAAQgMAAgIgIQgIgIAAgMQAAgMAIgHQAIgIAMgDIAAkEAl3ChIi/AAIAAoVIDAAAIBOAAIBgAAIAAIVIhgAAgAjDoyICLGtIBGhFIiNm3gAkophIAADtIAAIVIAABYIA0BCIhcBTIhbhTIA0hCIBPAAAl2l0IAAjtIBOAAAl3D5IAAhYAl2l0IgBIVAFELzIknuUIidCYIDcKuIAZBOIDPAAIBnAAIAABOIhyAAIh9BhIB+AAIAAAMIDeAAIAABDQgeAAgeAAIAACmIghAAIAAAtIAQAAIAnAnIhvAAIAognIAQAAAjE1XIFmSNAA/LzIA2AAAAGLEIA5AAIAAAvAhaHuQAZgTAbgLQAJgEAJgDAlOIVQAPgBALgLQAMgMAAgQQAAgBAAgCAlOIVQgBAAgBAAQgQAAgLgMQgMgMAAgQQAAgQAMgMQALgLAQAAIAAg4Ai5J4QABgIADgHQAJgYANgXAk5KJIAAAsIgsAAIAAgsgAlQIWIACgBAj8JZIAACFIinAAIAAiFIABAAgAlQIWIBUBDAigM1IA9hxIBpAAIAABygAhkOiIhDhgIAHgNAh8PYQAjAPArAEAj6PxIAAAAIAiA1IAygjIAAALIgoAnIgBCQQABAIAFAGQAHAHAJAAQAJAAAHgHQAFgGACgIIAAi3IANAAIAsAAIAAC3QgBAIgFAGQgHAHgJAAQgJAAgHgHQgGgGAAgIIAAi3Ak9PxIBDAAAn/PxQgfAAgfAAIAAhDIDeAAIAAgMID7AAAk9PxIAACmIAiAAIAAAtIAQAAIAnAnIhvAAIAngnIARAAAkbSXIAhAAIAAimAgkQDIAkAAIAAADIgkAAgAheQ5IAAA9IAAARAiiQOIgEAAAimQDICCAAAEZPxQBAAABAAAIAACmIAiAAADWPxIAAAAIAAAAQAhAAAiAAIAACmIgiAAIAAAtIAQAAIAoAnIhvAAIAngnIAQAAADWPxIAAAAAC8OiIh9AAIAAivACEQEIAwAiIAig1IAACmIAhAAACEQEIgBgBIABAAgACEQOIAAgKAB9QOIAHAAIAmAlIAACSQgCAIgFAGQgHAHgJAAQgJAAgHgHQgFgGgBgIgAA4Q5IAAARIiQAAAA4R2IAAgsABDQOIAtAAIAAC3QgBAIgGAGQgGAHgJAAQgKAAgGgHQgGgGgBgIgAA4SHIAAgRABwQOIANAAABSPXQggAPgnAEABcKlQhgAAjPAAAA/OiIijAAAhpQOICsAAAheR2ICWAAAAAQDICDAAAn/PxIBDAAQA/AABAAAAneSXIAiAAIAAimAneTEIAQAAIAoAnIhvAAIAngnIAQAAIAAgtIghAAIAAimAjYVlIDJAAAoUVlIDFAAAmiJZIBShDAHHLtIkBtAAI+TxIAA1EAGZPxIBDAA");
	this.shape_179.setTransform(281.3,367.9);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#000000").s().p("EgFSAgeIA3gWIAAAWIAAAWgAFLaQIgKgSIA7gJIABAAIgBABIgkAugABNZ2IAAgBIA8AJIgMATIgLATgABAVZIgWg3IAaAAIgFAPIAFgPIATAAIgXA3IAAABgADTSJQAIgEAJgDQgJADgIAEIgHgVIA8ACIAAAAIgtAogAAkrUIAAAAIABAAIAlAvIgWAHIgVAGgAM4qdIgXAAIAXg3IAWA3gAM4qdIAAgOgAE/7FQgUAAABgVIAAlEQgBgVAUAAIFIAAQATAAAAAVIAAFEQAAAVgTAAgAj97FQgUAAABgVIAAlEQgBgVAUAAIFHAAQATAAAAAVIAAFEQAAAVgTAAgAs67FQgTAAAAgVIAAlEQAAgVATAAIFJAAQATAAAAAVIAAFEQAAAVgTAAg");
	this.shape_180.setTransform(256.3,298.2);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#7B8484").s().p("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");
	this.shape_181.setTransform(184.4,392.5);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f().s("#C0C0C0").ss(4,1,1).p("ACki2IlHAAQgUAAABAVIAAFDQgBAVAUAAIFHAAQATAAAAgVIAAlDQAAgVgTAAgAGGihIAAFDQgBAVAUAAIFIAAQATAAAAgVIAAlDQAAgVgTAAIlIAAQgUAAABAVgArzihIAAFDQAAAVATAAIFJAAQATAAAAgVIAAlDQAAgVgTAAIlJAAQgTAAAAAVg");
	this.shape_182.setTransform(247.3,106.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.kn_potolok},{t:this.kn_stena},{t:this.kn_left},{t:this.kn_right},{t:this.kn_light},{t:this.kn_time},{t:this.kn_chgp},{t:this.kn_reset},{t:this.kn_test},{t:this.kn_zapasovka},{t:this.kn_mode},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.la_lhq},{t:this.la_mrq},{t:this.la_potolok},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.la_2},{t:this.la_8},{t:this.la_4},{t:this.la_5},{t:this.la_3},{t:this.la_6},{t:this.la_12},{t:this.la_13},{t:this.la_7},{t:this.la_9},{t:this.la_10},{t:this.la_11},{t:this.la_1},{t:this.ind_1},{t:this.ind_2},{t:this.ind_3},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.la_ts},{t:this.la_vkl},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.kn_vybor},{t:this.la_norma},{t:this.la_90},{t:this.la_left},{t:this.la_right},{t:this.la_stop}]}).to({state:[{t:this.shape_171},{t:this.shape_181},{t:this.shape_170},{t:this.shape_169},{t:this.shape_175},{t:this.shape_180},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_172},{t:this.shape_174},{t:this.shape_165},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.kn_potolok},{t:this.kn_stena},{t:this.kn_left},{t:this.kn_right},{t:this.kn_light},{t:this.kn_time},{t:this.kn_chgp},{t:this.kn_reset},{t:this.kn_test},{t:this.kn_zapasovka},{t:this.kn_mode},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.la_lhq},{t:this.la_mrq},{t:this.la_potolok},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.la_2},{t:this.la_8},{t:this.la_4},{t:this.la_5},{t:this.la_3},{t:this.la_6},{t:this.la_12},{t:this.la_13},{t:this.la_7},{t:this.la_9},{t:this.la_10},{t:this.la_11},{t:this.la_1},{t:this.ind_1},{t:this.ind_2},{t:this.ind_3},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.la_ts},{t:this.la_vkl},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.kn_vybor},{t:this.la_norma},{t:this.la_90},{t:this.la_left},{t:this.la_right},{t:this.la_stop_1}]},149).to({state:[{t:this.shape_171},{t:this.shape_176},{t:this.shape_170},{t:this.shape_169},{t:this.shape_175},{t:this.shape_173},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_172},{t:this.shape_174},{t:this.shape_165},{t:this.shape_164},{t:this.shape_182},{t:this.shape_162},{t:this.kn_potolok},{t:this.kn_stena},{t:this.kn_left},{t:this.kn_right},{t:this.kn_light},{t:this.kn_time},{t:this.kn_chgp},{t:this.kn_reset},{t:this.kn_test},{t:this.kn_zapasovka},{t:this.kn_mode},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.la_lhq},{t:this.la_mrq},{t:this.la_potolok},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.la_2},{t:this.la_8},{t:this.la_4},{t:this.la_5},{t:this.la_3},{t:this.la_6},{t:this.la_12},{t:this.la_13},{t:this.la_7},{t:this.la_9},{t:this.la_10},{t:this.la_11},{t:this.la_1},{t:this.ind_1},{t:this.ind_2},{t:this.ind_3},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.la_ts},{t:this.la_vkl},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.kn_vybor},{t:this.la_norma},{t:this.la_90},{t:this.la_left},{t:this.la_right},{t:this.la_stop}]},15).to({state:[{t:this.shape_171},{t:this.shape_181},{t:this.shape_170},{t:this.shape_169},{t:this.shape_175},{t:this.shape_180},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_172},{t:this.shape_174},{t:this.shape_165},{t:this.shape_179},{t:this.shape_163},{t:this.shape_177},{t:this.kn_potolok},{t:this.kn_stena},{t:this.kn_left},{t:this.kn_right},{t:this.kn_light},{t:this.kn_time},{t:this.kn_chgp},{t:this.kn_reset},{t:this.kn_test},{t:this.kn_zapasovka},{t:this.kn_mode},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.la_lhq},{t:this.la_mrq},{t:this.la_potolok},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.la_2},{t:this.la_8},{t:this.la_4},{t:this.la_5},{t:this.la_3},{t:this.la_6},{t:this.la_12},{t:this.la_13},{t:this.la_7},{t:this.la_9},{t:this.la_10},{t:this.la_11},{t:this.la_1},{t:this.ind_1},{t:this.ind_2},{t:this.ind_3},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.la_ts},{t:this.la_vkl},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.kn_vybor},{t:this.la_norma},{t:this.la_90},{t:this.la_left},{t:this.la_right},{t:this.la_stop_1}]},80).wait(46));

	// фон
	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#D2E2EF").s().p("EgxcA5HMAAAhyNMBi5AAAMAAAByNg");
	this.shape_183.setTransform(316.5,365.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_183).wait(290));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,633,731);


// stage content:
(lib.prstrxyzstena_Canvas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 6 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgxcA5HMAAAhyNMBi5AAAMAAAByNg");
	mask.setTransform(316.5,365.5);

	// Слой 5
	this.clip = new lib.клип();
	this.clip.name = "clip";
	this.clip.parent = this;

	var maskedShapeInstanceList = [this.clip];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.clip).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(316.5,365.5,633,731);
// library properties:
lib.properties = {
	id: '7384B6B74C96574EABA4D9AA99F178A5',
	width: 633,
	height: 731,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
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
an.compositions['7384B6B74C96574EABA4D9AA99F178A5'] = {
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