
// // Creates and returns a new dancer object that can step
// var makeDancer = function(top, left, timeBetweenSteps){

//   var dancer = {};

//   // use jQuery to create an HTML <span> tag
//   dancer.$node = $('<span class="dancer"></span>');

//   dancer.step = function(){
//     // the basic dancer doesn't do anything interesting at all on each step,
//     // it just schedules the next step
//     setTimeout(dancer.step, timeBetweenSteps);
//   };
//   dancer.step();

//   dancer.setPosition = function(top, left){
//      Use css top and left properties to position our <span> tag
//      * where it belongs on the page. See http://api.jquery.com/css/
//     var styleSettings = {
//       top: top,
//       left: left
//     };
//     dancer.$node.css(styleSettings);
//   };

//   // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
//   // this one sets the position to some random default point within the body
//   dancer.setPosition(top, left);

//   return dancer;
// };


 /***** below */
 var Dancer = function(top, left, timeBetweenSteps) {
  this.top = top;
  this.left = left;
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.setPosition(top, left);
  this.render();
  window.dancers.push(this);
 };

 Dancer.align = function () {
    window.dancers.forEach(
      function(dancer) {
        dancer.setPosition(dancer.top, 0);
        dancer.render();
      }
      );
};

 Dancer.stop = function() {
  window.dancers.forEach(
    function(dancer) {
      if (dancer.timer) {
        dancer.stop();
        dancer.timer = null;
      } else {
        dancer.step();
      }
    }
  );
 };

 Dancer.prototype.stop = function() {
  clearTimeout( this.timer );
 };

 Dancer.prototype.step = function() {
  //var that = this;
  //setTimeout( function() { that.step(); }, this.timeBetweenSteps );
  this.timer = setTimeout(this.step.bind(this), this.timeBetweenSteps);  //matseng: review later
 };

Dancer.prototype.setPosition = function(top, left) {
  this.top = top;
  this.left = left;
};

Dancer.prototype.render = function(){
  var styleSettings = {
      top: this.top + "px",
      left: this.left + "px"
    };
    this.$node.css(styleSettings);
 };