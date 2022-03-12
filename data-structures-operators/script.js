'use strict';

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Rumah Makan Nasi Padang',
  location: 'Jalan Soemawinata no 12, Merkurius',
  categories: ['Lauk', 'Sayur', 'Nasi', 'Minuman'],
  starterMenu: [
    'Rendang',
    'Ayam Pop',
    'Ayam Bakar',
    'Ikan Bakar',
    'Telur Dadar',
  ],
  mainMenu: ['Sepaket Rendang', 'Sepaket Ayam Pop', 'Sepaket Telur Dadar'],

};

// TODO 1 
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

// desctructuring array
const [x, y, z] = arr;
console.log(x, y, z); // 2 3 4
console.log(arr); // (3) [2, 3, 4]

// take element from categories
const[first, second] = restaurant.categories
console.log(first, second); //Lauk Sayur

// take element from categories the 1st and 3rd, just , and empty
let [main, ,secondary] = restaurant.categories
console.log(main, secondary); //Lauk Nasi

//without destructuring
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// use destructuring to change the position elements category
[main, secondary] = [secondary, main];
console.log(main, secondary);
