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
  it's own job property
  a canFly property
  a treasureChest property
*/


var ForagerBee = function() {
  // create an instance of the Bee subclass
  // alter the value in the age property to 10
  // alter job property to "find pollen"
  // create canFly property and set to true
  // create treasureChest property and set to empty array

  Bee.call(this);
  this.age = 10;
  this.job = "find pollen";
  this.canFly = true;
  this.treasureChest = [];

}

//create a prototypal method eat is an instance of the Grub prototypal object
// add a prototypal constructor property will report ForagerBee
// add a forage method with input of treausre
  // push treasure onto treasureChest array

ForagerBee.prototype = Object.create(Grub.prototype);
ForagerBee.prototype.constructor = ForagerBee;
ForagerBee.prototype.forage = function(treasure){
  this.treasureChest.push(treasure);
}



