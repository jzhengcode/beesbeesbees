var RetiredForagerBee = function() {
  /*
 I - nothing
 O - an object with various properties and methods inhereited from the Bee, Grub, and Forager subclasses, as well as their own properties and methods.
 E - none
 */

 /*  Explanation: Have to write a function that doesn't take in any inputs but will create on object that:
  has it's own uniq age
  an unique job property
  an unique
  inherits the color property from Bee
  inherits the food property grub
  a unique job property
  a honey pot property
*/

  // create an instance of the ForegerBee subclass
  // alter the value in the age property to 40
  // alter job property to "gamble"
  // alter the color property to "grey"
  // alter canFy property to false
  // falt
  // set treasureChest property to an empty array

  ForagerBee.call(this);
  this.age = 40;
  this.job = "gamble";
  this.color = "grey";
  this.canFly = false;
  this.treasureChest = [];
};

//create a prototypal method will direct failed look ups to Grub prototype
// add a prototypal constructor property will report ForagerBee

RetiredForagerBee.prototype = Object.create(Grub.prototype);
RetiredForagerBee.prototype.constructor = RetiredForagerBee;

// alter the forage method
  // I - none
  // O - will output "I am too old, let me play cards instead"
  // C - none
  // E - none

  // Explanation: tje function will return a string "I am too old, let me play cards instead"
RetiredForagerBee.prototype.forage = function(){
  return "I am too old, let me play cards instead"
}

// add a gamble method
  // I - treasure
  // O - none. side effect treasureChest is altered
  // C - none
  // E - none

  //Explanation: Will add the input value treasure to the array property treasureChest

  RetiredForagerBee.prototype.gamble = function(treasure){
    this.treasureChest.push(treasure);
  }



