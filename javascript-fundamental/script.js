/*
let js = "amazing";
if (js === "amazing") alert("JavaScript is FUN!");

// 40 + 3 - 19 + 43;
console.log(40 + 3 - 19 + 43);

let firstName = "firyal";
console.log(firstName);
*/

/*
// variable cannot start with number, symbol (except for $ and _), UpperCase
// Variables are containers for storing data (storing data values).

// Variable name conventions
let firyal_huwaida = "FH";
let $function = 27;
let person = "firyal";
let PI = 3.1415;
let myFirstJob = "Teacher";
let myCurrentJob = "Coder";
let job1 = "teacher";
let job2 = "programmer";
console.log(myFirstJob);

*/

/*
// Data Types
let javascriptIsFun = true;
console.log(javascriptIsFun);
// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Firyal');
javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);
let year;
console.log(year);
console.log(typeof year);
year = 1991;
console.log(typeof year);
console.log(typeof null);
*/

/*
// let, const and var

// variable declaration
// let is block scoped. A block is a chunk of code bounded by {}
// let can be updated but not re-declared.
let age = 19;
age = 20;

// const declarations are block scoped
// const cannot be updated or re-declared
const birthYear = 2002;
// birthYear = 1990;
// const job;

// function/locally scoped
// The scope is global when a var variable is declared outside a function. This means that any variable that is declared with var outside a function block is available for use in the whole window.
// var variables can be re-declared and updated
var job = 'programmer';
job = 'teacher'
lastName = 'Huwaida';
console.log(lastName);
*/

/*
// Basic Operators
// Math operators
const now = 2037;
const ageFiryal = now - 2002;
const ageIlyas = now - 2018;
console.log(ageFiryal, ageIlyas);
console.log(ageFiryal * 2, ageFiryal / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Firyal';
const lastName = 'Huwaida';
console.log(firstName + ' ' + lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
x--;
console.log(x);
*/

/*
// Comparison operators
// >, <, >=, <=
console.log(ageFiryal > ageIlyas); //true
console.log(ageIlyas >= 18); //true
const isFullAge = ageIlyas >= 18; //true
console.log(now - 2002 > now - 2018); // true
*/

/*
// Operator Precedence
const now = 2037;
const ageFiryal = now - 2002;
const ageIlyas = now - 2018;
console.log(now - 2002 > now - 2018);
let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);
const averageAge = (ageFiryal + ageIlyas) / 2;
console.log(ageFiryal, ageIlyas, averageAge);
*/

/*
//Strings and Template Literals
const firstName = 'Firyal'
const job = 'Software Engineer'
const birthYear = 2002
const year = 2022

const firyal = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!'
console.log(firyal)

//instead of write string one by one, just use ``
const firyalNew = `I'm ${firstName}, a ${year - birthYear} years old ${job} !`
console.log(firyalNew)

console.log("String with \n\ multiple \n\ lines")

console.log(`String with 
multiple 
lines`) 
*/

//Taking decesions: if else Statement
const age = 15;

if (age >= 18) {
  console.log("Firyal can start driving license");
} else {
  const yearsLeft = 18 - age;
  console.log(`Firyal is too young. Wait another ${yearsLeft} years`);
}

let century;
const birthYear = 2022;

if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);

// var x = 5;
// var y = 6;
// var z = x + y;

// var name = "Firyal"

// function newFunction() {
//     var name = "Fauzi"
// }

// console.log(name) // error : name is not declared

// var name = "Firyal"
// var name = "Fauzi"

// var name = "Firyal"
// name = "Fauzi"
