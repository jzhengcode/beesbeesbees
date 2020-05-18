/*
 I - nothing
 O - an object with an age property, a color property, a food property, and a eat method
 C - none
 E - none
 */

 // Explanation: Have to write a function that doesn't take in any inputs but will create on object that has an age property, a color property, and a food property. There should also be a eat method that should be prototypal.

var Grub = function() {
  // create age property and assign it to the number 0
  // create color property and assign it to the string pink
  // create color food and assign it to the string jelly
  this.age = 0;
  this.color = 'pink';
  this.food = 'jelly';
};

//create a prototypal method eat that class Grub will delegate it's failed look ups to
Grub.prototype.eat = function(){};

