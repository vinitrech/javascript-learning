//Usage order -> const > let > var

// var is function scoped and let is block scoped
// var should be avoided to prevent silly bugs, since let is more strict
// for example, a var name = "john" would change the window's name property unintentionally

let age = 15; //numbers
let firstName = "name"; //strings
let boolean = false; //booleans
const x = 50;

console.log(age, firstName, boolean, x);