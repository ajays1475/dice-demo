var dice = require('./dice.js');

console.log(dice);

var die = dice.name;

die.size=10;


console.log(die.roll());

console.log(die.roll());

console.log(die.roll());

console.log(die.rollingCount);