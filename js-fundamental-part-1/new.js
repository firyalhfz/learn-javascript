// let greeting = "say Hi"
// let times = 4;
// let timesTwo = 4.20;

// if (times > 3) {
//     let hello = "say Hello instead";
//     console.log(hello) // "say Hello instead"
// }
// console.log(hello) // hello is not defined

// let firstName = "Firyal"
// let lastName = 'Fauzi'

// let name = "Firyal"
// name = "Fauzi" // error: Identifier 'name' has already been declared

// const birthYear = 2002;
// birthYear = 1990;
// const job;

// let javascriptIsFun = true;

// let age;
// console.log(age);

// // Data Types
// let javascriptIsFun = true;
// console.log(javascriptIsFun); //true
// console.log(typeof true); //boolean
// console.log(typeof javascriptIsFun); //boolean
// console.log(typeof 23); //number
// console.log(typeof 'Firyal'); //string
// javascriptIsFun = 'YES!';
// console.log(typeof javascriptIsFun); //string
// let year;
// console.log(year); //undefined
// console.log(typeof year); //undefined
// year = 1991;
// console.log(typeof year); //number
// console.log(typeof null); //object

const now = 2021;
const ageFiryal = now - 2002;
const ageIlyas = now - 2019;
console.log(ageFiryal, ageIlyas); // 19 2
console.log(ageFiryal * 2, ageFiryal / 10, 2 ** 3); //38 1.9 8
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = "Firyal";
const lastName = "Huwaida";
console.log(firstName + " " + lastName); // Firyal Huwaida

const x = 4;
const y = 10;
console.log(x + y); // 14
// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--; // x = x - 1
x--;
console.log(x); // 99

console.log("1" + 2); // "12"
console.log(2 + "1"); // "21"

const age = "18";
if (age === 18) console.log(`You just became an adult (strict)`);
if (age == 18) console.log(`You just become an adult(loose)`);

const favourite = Number(prompt(`What's your favourite numbr?`));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
  console.log(`Cool 23 is amazing number`);
} else if (favourite === 7) {
  console.log(`7 is also a cool number`);
} else if (favourite === 9) {
  console.log(`9 is also a cool number`);
} else {
  console.log(`Number is not 23 or 7 or 9`);
}

if (favourite !== 23) console.log(`Why not 23?`);

const hasDriverLicense = true; //A
const hasGoodVision = true; //B

console.log(hasDriverLicense && hasGoodVision); // true
console.log(hasDriverLicense || hasGoodVision); // true
console.log(!hasDriverLicense); // false

if (hasDriverLicense && hasGoodVision) {
  console.log("Firyal is able to drive");
} else {
  console.log("someone else should drive");
}
//result : Firyal is able to drive

const isTired = true;
console.log(hasDriverLicense && hasGoodVision && isTired);

if (hasDriverLicense && hasGoodVision && !isTired) {
  console.log("Firyal is able to drive");
} else {
  console.log("Someone else should drive");
}
//result : Someone else should Drive

console.log(true || true); // true
console.log(false || true); // false
console.log(true || false); // false
console.log(false || false); // false

const now = 2037;
const ageFiryal = now - 2002;
const ageIlyas = now - 2018;
console.log(now - 2002 > now - 2018);
let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);
const averageAge = (ageFiryal + ageIlyas) / 2;
console.log(ageFiryal, ageIlyas, averageAge);




const firstName = "Firyal";
const job = "Software Engineer";
const birthYear = 2002;
const year = 2022;

const firyal =
  "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(firyal);

//instead of write string one by one, just use ``
const firyalNew = `I'm ${firstName}, a ${year - birthYear} years old ${job} !`;
console.log(firyalNew);




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

// type conversion
const inputYear = '2002';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);
console.log(Number('Firyal'));
console.log(typeof NaN);
console.log(String(23), 23);

// type coercion
console.log('I am ' + 20 + ' years old'); // I am 20 years old
console.log('20' - '10' - 3); // 7
console.log('20' / '2'); // 10
console.log('1' + 1); // '11'
n = n - 1;
console.log(n);

//Truthy and falsy Values
//5 falsy values: 0, '', undefined, null, Nan
console.log(Boolean(0)) // false
console.log(Boolean(undefined)) //false
console.log(Boolean('Firyal')) //true
console.log(Boolean({})) // true
console.log(Boolean('')) // false

const money = 100
if(money){
  console.log(`Dont spend it all`)
}else{
  console.log(`You should get a job!`)
}
// result : Dont spend it all

let height = 0
if(height){
  console.log('yay Heigh is defined')
}else{
  console.log('Height is Undefined')
}
//result : Height is Undefined

//The switch Statement
const day = 'thursday';

switch (day) {
  case 'monday':
    console.log('Learn about variable and values');
    console.log('learn about let const and var');
    break;
  case 'tuesday':
    console.log('Learn about data types and operator')
    break;
  case 'wednesday':
    console.log('Learn about Statement if else')
    console.log('Learn about Boolean')
    break;
  case 'thursday':
  case 'friday':
    console.log('learn about Equality Operator and Switch Statement')
    break;
  case 'saturday':
  case 'sunday':
    console.log('Enjoy the wekeend!!')
    break;
  default:
    console.log('Not a valid day!!')
}

if( day === 'monday'){
  console.log("Learn about variable and values")
  console.log("learn about let const and var")
} else if(day === 'tuesday' ){
  console.log("Learn about data types and operator")
}else if(day === 'wednesday'){
  console.log("Learn about Statement if else");
  console.log("Learn about Boolean");
}else if(day === 'thursday' || day === 'friday'){
  console.log("learn about Equality Operator and Switch Statement");
}else if(day === 'saturday' || day === 'sunday'){
  console.log("Enjoy the wekeend!!");
}else{
  console.log("Not a valid day!!");
}



//Statement
3 + 4
1991
true && false && !false

//Expressions
if (23 > 10){
  const str = '23 is bigger';
}

const age = 23;
let drink2;
if (age >= 18) {
  drink2 = "honey";
} else {
  drink2 = "water";
}
console.log(drink2);
console.log(`I like to drink ${age >= 18 ? "honey" : "water"}`);


// honey
// I like to drink honey