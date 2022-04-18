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

/////////////////////////////////////////////////////////////
//TODO 20 works with string

const airline2 = 'TAP Air Indonesia';

console.log(airline2.toLowerCase());
console.log(airline2.toUpperCase());

//fix capitalization in name
const passenger = 'fiRYal';
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1).toLowerCase();

console.log(passengerCorrect);

/**
 * So in line 49 we make all of the abjact become lowecase
 * in line 50 we make the firts abjact using [0] to uppercase and the rest of abjact using slice(1) to lowercase
 * and the result is Firyal
 */

//email
const email = 'hello@firyal.io';
const loginEmail = ' hello@Firyal.io \n';

const normalizedEmail = loginEmail.toLowerCase().trim();

console.log(normalizedEmail);
console.log(email === normalizedEmail);

/**
 * trim() = method for Remove spaces
 */

//Replacing
const price = '463,273';
const priceCorrect = price.replace(',', '.');
console.log(priceCorrect);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';

console.log(announcement.replace('door', 'gate'));
console.log(announcement.replace(/door/g, 'gate')); // for replace all of the door

//Booleans
const plane3 = 'Airbus A41neo';
console.log(plane3.includes('A41'));
console.log(plane3.includes('Boew'));
console.log(plane3.includes('Airb'));
console.log(plane3.startsWith('Airb'));

if (plane3.startsWith('Airbus') && plane3.endsWith('neo')) {
  console.log('Part of the New Airbus family');
}

//practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are not allowed on board!!');
  } else {
    console.log('Welcome board');
  }
};

checkBaggage('I have a laptop, some food, and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');

/***
 * we change the item to lower case, so that when we check with the if else statement, no mater the argument that console, it will be affected. if we not using items.toLowerCase, our cl line 106 that Knife is capital will not effect.
 */

console.log('a+very+nice+string'.split('+')); // (4) ['a', 'very', 'nice', 'string']
console.log('Firyal Huwaida'.split(' ')); // (2) ['Firyal', 'Huwaida']

const [firstName, lastName] = 'Firyal Huwaida'.split(' ');

const newName = ['Mrs.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName); // Mrs. Firyal HUWAIDA

const capitalizeName = function (name) {
  const names = name.toLowerCase().split(' ');
  const namesUpper = [];

  for (const n of names) {
    // namesUpper.push(n.toLowerCase(), n[0].toUpperCase())
    namesUpper.push(n[0].toUpperCase() + n.slice(1));
  }

  console.log(namesUpper.join(' '));
};

capitalizeName('mikasA ackerman');
capitalizeName('erEn yeager');

///padding
const message = 'Go to gate 23';
console.log(message.padStart(20, '+').padEnd(30, '+'));
console.log('Firyal'.padStart(20, '+').padEnd(30, '+'));

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(539634780386));
console.log(maskCreditCard('3864237856329756329856329'));

// repeat 
const message2 = 'Bad weather... All departues delayed...'
console.log(message2.repeat(5));

const planesInline = function (n){
  console.log(`There are ${n} planes in line ${'✈️'.repeat(n)}`);
}

planesInline(5);
planesInline(15);
planesInline(50);