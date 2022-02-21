let js = "amazing";
if (js === "amazing") alert("JavaScript is FUN!");

// 40 + 3 - 19 + 43;
console.log(40 + 3 - 19 + 43);

let firstName = "firyal";
console.log(firstName);

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


// Basic Operators
// Math operators
const now = 2037;
const ageFiryal = now - 1991;
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

// Comparison operators
// >, <, >=, <=
console.log(ageFiryal > ageIlyas); //true
console.log(ageIlyas >= 18); //true
const isFullAge = ageIlyas >= 18; //true
console.log(now - 1991 > now - 2018); // true

