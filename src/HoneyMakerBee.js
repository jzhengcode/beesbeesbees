/*
 I - nothing
 O - an object with various properties and methods inhereited from the Bee and Grub subclasses, as well as their own properties and methods.
 E - none
 */

 /*  Explanation: Have to write a function that doesn't take in any inputs but will create on object that:
  has it's own uniq age
  a unique job property
  inherits the color property from Bee
  inherits the food property grub
  a unique job property
  a honey pot property
*/


var HoneyMakerBee = function() {
  // create an instance of the Bee subclass
  // alter the value in the age property to 10
  // alter job property to "make honey"
  // create honeyPot property
  Bee.call(this);
  this.age = 10;
  this.job = "make honey";
  this.honeyPot = 0;
};

//create a prototypal method eat is an instance of the Grub prototypal object
// add a prototypal constructor property will report ForagerBee
HoneyMakerBee.prototype = Object.create(Bee.prototype);
HoneyMakerBee.prototype.constructor = HoneyMakerBee;

// add a makeHoney method
  // I - none
  // O - none. side effect honeyPot is altered
  // C - none
  // E - none

  //Explanation: Will add 1 ti the honey pot property

HoneyMakerBee.prototype.makeHoney = function (){
  this.honeyPot += 1;
}
// add give honey method
// I - none
  // O - none. side effect honeyPot is altered
  // C - none
  // E - none

  //Explanation: Will subtract 1 from the honey pot property

HoneyMakerBee.prototype.giveHoney = function(){
  this.honeyPot -= 1;
}
