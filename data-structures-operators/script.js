'use strict';

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  //todo 4
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  // TODO 2
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

// TODO 4
// Destructuring Object
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// make the variable name different
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);
/*
Classico Italiano 
{thu: {…}, fri: {…}, sat: {…}} 
(4) ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']
*/

//Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);
/*
[] (4) ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']
*/

//Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 16 };
({ a, b } = obj);
console.log(a, b); // 23 7


//Nested object
const {fri} = openingHours;
console.log(fri); // {open: 11, close: 23}

const {sat: {open: o, close: c}} = openingHours;
console.log(o, c); // 0, 24

// // TODO 1
// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// // desctructuring array
// const [x, y, z] = arr;
// console.log(x, y, z); // 2 3 4
// console.log(arr); // (3) [2, 3, 4]

// // take element from categories
// const [first, second] = restaurant.categories;
// console.log(first, second); // Italian Pizzeria

// // take element from categories the 1st and 3rd, just , and empty
// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary); // Italian Vegetarian

// //Switching variable without destructuring
// // const temp = main;
// // main = secondary;
// // secondary = temp;
// // console.log(main, secondary);

// // use destructuring to switching variable (change the position elements category)
// [main, secondary] = [secondary, main];
// console.log(main, secondary); // Vegetarian Italian

// // TODO2
// // Desctructuring from function
// // Receive 2 return values from a function
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse); // Garlic Bread Pizza

// //Nested Destructuring
// //Destructuring inside the destructuring
// const nested = [2, 4, [5, 6]];
// //dont use destructuring
// // const [i, , j] = nested; // 2 (2) [5, 6]
// //using destructuring
// const [i, , [j, k]] = nested; // 2 5 6
// console.log(i, j, k);

// // TODO3
// // Default Values
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);
// //instead get undefined, we get 8 9 1. the r is 1 because we set the deafult values, it is will usefull later for example when we get data API.
