/*
 I - nothing
 O - an object with properties and methods drawn from the Grub superclass but has addition property and methods.
 C - none
 E - none
 */

 // Explanation: Have to write a function that doesn't take in any inputs but be instantiated with the Grub superclass. The age and color property is different than that in the superclass and has an additional job property.

var Bee = function() {
  // create an instance of the Grub subclass
  // alter the value in the age property to 5
  // alter the value in the colo property to be yellow
  // create job property that is a string "keep on growing"
  Grub.call(this);
  this.age = 5;
  this.color = 'yellow';
  this.job = 'keep on growing';
}
//create a prototypal method eat is an instantiation of the Grub prototype
// add a prototypal constructor property will report Bee
Bee.prototype = Object.create(Grub.prototype);
Bee.prototype.constructor = Bee;