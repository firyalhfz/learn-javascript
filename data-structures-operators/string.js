'use strict';

//TODO 19 works with string
//String also have method: slice, length, indexOf, lastIndexOf
const airline = 'TAP Air Indonesia';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[2]);
console.log(plane[3]);
console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('i'));
console.log(airline.indexOf('Indonesia'));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));
console.log(airline.slice(-1));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  const s = seat.slice(-1); // means the last alphabet in seat parameter
  if (s === 'B' || s === 'E') console.log('You got the middle seat');
  else console.log('You got lucky');
};

checkMiddleSeat('11B'); // You got the middle seat
checkMiddleSeat('23C'); // You got lucky
checkMiddleSeat('3E'); // You got the middle seat


console.log(new String('Firyal')); //
console.log(typeof new String('Firyal')); //object
console.log(typeof new String('Firyal').slice(1)); // string
