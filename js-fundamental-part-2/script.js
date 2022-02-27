"use strict";

//activating Strict Mode
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("i can drive :D");
// const interface = "audio";
// const private = 534;

//Function
function logger() {
  console.log("my name is Firyal");
}

//calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(pears, lychees) {
  const juice = `Juice with ${pears} pears and ${lychees} lychees.`;
  return juice;
}
const pearsJuice = fruitProcessor(9, 0);
console.log(pearsJuice);
//result : Juice with 9 pears and 0 lychees.

const orangeJuice = fruitProcessor(0, 6);
console.log(orangeJuice);
//result : Juice with 0 pears and 6 lychees.

//function also
const num = Number("23");

//Function declarations vs Expression

//Function declaration
function calcAge1(birthYear) {
  return 2022 - birthYear;
}
const age1 = calcAge1(2002);

//function expression
const calcAge2 = function (birthYear) {
  return 2022 - birthYear;
};
const age2 = calcAge2(2002);

console.log(age1, age2);
// result : 20 20

//Arrow Functions
const calcAge3 = (birthYear) => 2022 - birthYear;
const age3 = calcAge3(2002);
console.log(age3);
// result : 20

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2022 - birthYear;
  const retirement = 65 - age;
  //return retirement;
  return `${firstName} retires in ${retirement} years`;
};
console.log(yearsUntilRetirement(2002, "Firyal"));
console.log(yearsUntilRetirement(1995, "Elina"));
/*
result :
Firyal retires in 45 years
Elina retires in 38 years
*/

//Functions Calling other Functions
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(pears, lychees) {
  const pearPieces = cutFruitPieces(pears);
  const lycheePieces = cutFruitPieces(lychees);
  const juice = `Juice with ${pearPieces} piece of pear and ${lycheePieces} piece of lychee`;
  return juice;
}
console.log(fruitProcessor(4, 10));
//result : Juice with 16 piece of pear and 40 piece of lychee

// Reviewing Functions
const calcAge = function (birthYear) {
  return 2022 - birthYear;
};
const yearsUntilRetirement2 = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired yey`);
    return -1;
  }
};
//if we call the function run what we return
console.log(yearsUntilRetirement2(2002, "Firyal"));
console.log(yearsUntilRetirement2(1995, "Elina"));

/*
result :
Firyal retires in 45 years
45
Elina retires in 38 years
38
*/

//Array
const friend1 = "eren";
const friend2 = "mikasa";
const friend3 = "armin";
const friends = ["eren", "mikasa", "armin"];
console.log(friends);
//result : (3) ['eren', 'mikasa', 'armin']

//Array function
const y = new Array(2004, 2003, 2002, 2001);

console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);
console.log(friends.length);
console.log(friends[friends.length - 1]);

/*result
eren
mikasa
armin
3
armin
 */

friends[0] = "head";
console.log(friends);
//result : (3) ['head', 'mikasa', 'armin']

const firstName = "Levi";
const levi = [firstName, 'Attack on titan', 2022 - 1998, 'survey corps', friends];
console.log(levi);
console.log(levi.length);

/*
result :
(5) ['Levi', 'Attack on titan', 26, 'survey corps', Array(3)]
5
*/

//Exercise
const calcAgee = function (birthYear){
  return 2022 - birthYear
}

const yearss = [1992, 2001, 2000, 2002];
const ageLevi = calcAgee(yearss[0]);
const ageMikasa = calcAgee(yearss[1]);
const ageEren = calcAgee(yearss[2]);
const ageArmin = calcAgee(yearss[3]);
const agee = calcAgee(yearss[yearss.length - 1]);
console.log(ageLevi, ageEren, ageMikasa, ageArmin, agee);
//result : 30 22 21 20 20

const ages = [calcAgee(yearss[0]), calcAgee(yearss[yearss.length - 1])];
console.log(ages);
//result : 30, 20

//Basic Array Operations (Methods)
const besties = ['sasha', 'mikasa', 'armin', 'jean', 'connie', 'annie', 'bertolt', 'reiner', 'thomas'];

//add element 
//in the end
const newLength = besties.push('historia'); 
console.log(besties);
console.log(newLength);

//in the beginning
besties.unshift('Ymir');
console.log(besties);

//remove elements
//last
besties.pop();
const popped = besties.pop(); // we put the element that removed into variable
console.log(popped);
console.log(besties);

//first
besties.shift();
console.log(besties);

//check what is the index of the element
console.log(besties.indexOf('eren'));
console.log(besties.indexOf('mikasa'));

//check if exist will be true, else false
console.log(besties.includes('eren'));
console.log(besties.includes('mikasa'));

if(besties.includes('eren')){
  console.log('eren still alive');
}

/*
The result will be
(10) ['sasha', 'mikasa', 'armin', 'jean', 'connie', 'annie', 'bertolt', 'reiner', 'thomas', 'historia']
10
(11) ['Ymir', 'sasha', 'mikasa', 'armin', 'jean', 'connie', 'annie', 'bertolt', 'reiner', 'thomas', 'historia']
thomas
['Ymir', 'sasha', 'mikasa', 'armin', 'jean', 'connie', 'annie', 'bertolt', 'reiner']
['sasha', 'mikasa', 'armin', 'jean', 'connie', 'annie', 'bertolt', 'reiner']
-1
1
false
true
*/

//Introduction to objects
//array 
const erenArray = [
  'Eren', 'Yeager', 2019 - 2000, 'titan perintis', ['Mikasa', 
  'Armin', 'Jean', 'Sasha'],
];

//object, can specify the value with the namekey
const eren = {
  firstName: 'Eren',
  lastName: 'Yeager', 
  age: 2019 - 2000,
  job: 'titan perintis', 
  friends: ['Mikasa', 'Armin', 'Jean', 'Sasha'],
};

//Dot vs Bracket Notation
const eren = {
  firstName: 'Eren',
  lastName: 'Yeager', 
  age: 2019 - 2000,
  job: 'titan perintis', 
  friends: ['Mikasa', 'Armin', 'Jean', 'Sasha'],
}

console.log(eren);
console.log(eren.lastName);
console.log(eren['lastName']);
const nameKey = "Name";
console.log(eren["firts" + nameKey]);
console.log(eren["last" + nameKey]);

//error
//console.log(eren.'last' + nameKey);

const interestedIn = prompt(
  "what do you want to know about eren? Choose between firstName, lastName, age, job, friends"
);

if(eren[interestedIn]){
  console.log(eren[interestedIn]);
}else {
  console.log(
    "wrong request! Choose between firstName, lastName, age, job, and friends"
  );
}

eren.location = "Paradis";
eren['activity'] = "Rumbling";
console.log(eren);

//challenge 
//eren has many friends, and his best friend is called Mikasa

console.log(`${eren.firstName} has ${eren.friends.length} friends, and his best friend is called ${eren.friends[0]}`);
