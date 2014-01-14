var MovingDancer = function( top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);
  this.center = {};
  this.radius = 5;
  this.center.left = this.left;
  this.center.top = this.top + this.radius;
  this.theta = 0;
  this.timeBetweenSteps = 100;
};

MovingDancer.prototype = Object.create( Dancer.prototype );
MovingDancer.prototype.constructor = MovingDancer;

MovingDancer.prototype.step = function() {
  //debugger;
  var oldStep = Dancer.prototype.step;
  var red = Math.floor(Math.random()*255);
  var green = Math.floor(Math.random()*255);
  var blue = Math.floor(Math.random()*255);
  oldStep.call(this);
  //this.$node.css("border-color", 'rgb('+red +',' + green +',' + blue +')');
  this.theta = this.theta + 0.05;
  this.left += (this.radius * Math.cos(this.theta) );
  this.top += (this.radius * Math.sin(this.theta) );
  this.setPosition(this.top, this.left);
  this.render();

};