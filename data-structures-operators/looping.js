'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
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
};

// TODO 12
// Looping arrays : The for loop
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

//use for of to loop the all item of the menu
for (const item of menu) console.log(item);

// entries() = each of the item is an array with the index in the array element itself.
for (const item of menu.entries()) {
  console.log(item);
}
/**
 * (2) [0, 'Focaccia']
 * (2) [1, 'Bruschetta']
 * (2) [2, 'Garlic Bread']
 * (2) [3, 'Caprese Salad']
 * (2) [4, 'Pizza']
 * (2) [5, 'Pasta']
 * (2) [6, 'Risotto']
 */

//an array whin in each position contains a new array, which contains the elemenet, entitiy index number of that element in the original array
console.log([...menu.entries()]);

//we can use destructure to decide what we loop, here we do looping of
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
  // console.log(i, el);
}
/**
 * 1: Focaccia
 * 2: Bruschetta
 * 3: Garlic Bread
 * 4: Caprese Salad
 * 5: Pizza
 * 6: Pasta
 * 7: Risotto
 */