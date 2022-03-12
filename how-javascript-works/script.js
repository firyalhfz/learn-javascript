// // Scoping in Practice
'use strict';
// function calcAge(birthYear) {
//   const age = 2037 - birthYear;
//   function printAge() {
//     let output = `${firstName}, you are ${age}, born in ${birthYear}`;
//     console.log(output);
//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;
//       // Creating NEW variable with same name as outer scope's variable
//       const firstName = 'Ilyas';
//       // Reasssigning outer scope's variable
//       output = 'NEW OUTPUT!';
//       const str = `Oh, and you're a millenial, ${firstName}`;
//       console.log(str);
//       function add(a, b) {
//         return a + b;
//       }
//     }
//     console.log(str);
//     console.log(millenial);
//     console.log(add(2, 3));
//     console.log(output);
//   }
//   printAge();
//   return age;
// }
// const firstName = 'Ilyas';
// calcAge(2019);
// console.log(age);
// printAge();

// // Hoisting and TDZ in Practice
// // Variables
// console.log(me);
// console.log(job);
// console.log(year);
// var me = 'Ilyas';
// let job = 'no job';
// const year = 2019;
// // Functions
// console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow);
// console.log(addArrow(2, 3));
// function addDecl(a, b) {
//   return a + b;
// }
// const addExpr = function (a, b) {
//   return a + b;
// };
// var addArrow = (a, b) => a + b;
// // Example
// console.log(undefined);
// if (!numProducts) deleteShoppingCart();
// var numProducts = 10;
// function deleteShoppingCart() {
//   console.log('All products deleted!');
// }
// var x = 1;
// let y = 2;
// const z = 3;
// console.log(x === window.x);
// console.log(y === window.y);
// console.log(z === window.z);

//this keyword
// //If the this keyword is outside of any function
// console.log(this); //window `

// const calcAge = function (birthYear){
//   console.log(2022 - birthYear); //20
//   console.log(this); //undefined
// };
// calcAge(2002);

// //If the lexical scope (parent scope) of arrow function is global scope
// const calcAgeArrow = birthYear => {
//   console.log(2022 - birthYear); //20
//   console.log(this); //window
// }
// calcAgeArrow(2002);

// //In case of regular function if you are not using strict mode​
// const age = function (birthYear) {
//   console.log(birthYear);
//   console.log(this);
// };

// age(2022);

// const firyal = {
//   year: 2002,
//   calcAge: function () {
//     console.log(this);
//     console.log(2022 - this.year);
//   },
// };
// firyal.calcAge(2002);

// //Arrow function inside the object
// const firyal = {
//   year: 2002,
//   calcAge: function () {
//     console.log(this);
//     console.log(2022 - this.year);
//   },

//   //the example
//   greet: () => console.log(`Halo ${this.firstName}`),
// };
// firyal.greet();

// //Regular function inside the method
// const salwa = {
//   year: 2004,
//   calcAge: function () {
//     console.log(this);
//     console.log(2022 - this.year);

//     //the example
//     const isGenZ = function () {
//       console.log(this);
//       console.log(this.year >= 1990 && this.year <= 2010);
//     };
//     isGenZ();
//   },
// };
// salwa.calcAge();

//Solution 
const mikasa = {
  year: 2000,
  calcAge: function () {
    console.log(this);
    console.log(2022 - this.year);

    //the solution use self
    const self = this;
    const isGenZ = function () {
      console.log(self); //calcAge: ƒ () year: 2004;
      console.log(self.year >= 1990 && self.year <= 2010); // true
    };
    isGenZ();

    //the solution use arrow function that parent to mikasa
    const isMillenials = () => {
      console.log(this); //calcAge: ƒ () year: 2004;
      console.log(this.year >= 1980 && this.year <= 1990); // false
    };
    isMillenials();
  },
};
mikasa.calcAge();
