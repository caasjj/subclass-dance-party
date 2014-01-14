var ColorDancer = function( top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);
};

ColorDancer.prototype = Object.create( Dancer.prototype );
ColorDancer.prototype.constructor = ColorDancer;

ColorDancer.prototype.step = function() {
  //debugger;
  var oldStep = Dancer.prototype.step;
  var red = Math.floor(Math.random()*255);
  var green = Math.floor(Math.random()*255);
  var blue = Math.floor(Math.random()*255);
  oldStep.call(this);
  this.$node.css("border-color", 'rgb('+red +',' + green +',' + blue +')');
  //this.render();
};