// Coding Challenge #2

/* 
Let's continue with our football betting app!
1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉
BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }
GOOD LUCK 😀
*/

const game = {
  team1: 'paradis',
  team2: 'eldian',
  players: [
    [
      'eren',
      'mikasa',
      'armin',
      'jean',
      'connie',
      'sasha',
      'levi',
      'hange',
      'erwin',
      'marco',
      'thomas',
    ],
    [
      'reiner',
      'bertold',
      'annie',
      'gabi',
      'falco',
      'zeke',
      'porco',
      'pieck',
      'hammer',
      'yelena',
      'willy',
    ],
  ],
  score: '5:0',
  scored: ['eren', 'hange', 'eren', 'mikasa', 'levi'],
  date: 'June 19th, 2043',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//semuanya
const x = Object.entries(game.odds);
console.log(x);
//(3) [Array(2), Array(2), Array(2)]

// const y = game.odds.entries();
// console.log(y);
//error

//values
const v = Object.values(game.odds);
console.log(v);
//(3) [1.33, 3.25, 6.5]

// const j = game.odds.values();
// console.log(j);
//error

//key
const k = Object.keys(game.odds);
console.log(k);
//(3) ['team1', 'x', 'team2']

//QUESTION 1
// const scored = {...game.scored};
// console.log(scored);

// const entries = Object.entries(game.scored);
// console.log(scored2);
// for (const item of game.scored.entries()){
//   console.log(item)
// }

for (const [goal, person] of Object.entries(game.scored)) {
  console.log(`Goal ${goal + 1} : ${person}`);
}

//QUESTION 2

// let str = `str ${odds.length}`
// for (const odd of odds){
//   str += `${odd}`;
// }
// console.log(str);

// length++
// console.log(odd);
// console.log(total);

// const average = total / length
// console.log(average);
// total += odd /3

const odds = Object.values(game.odds);
console.log(odds);

let average = 0;
let length = 0;
for (let odd of odds) average += odd;
average /= odds.length;
console.log(average);

// for (let odd of odds) {
//   average += odd;
//   average = average + odd / odds.length;
//   console.log(average);
// }

//QUESTION 3
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
}

//we use game[key] because the name of key odds and the name of property object same team1 and team2
for (const [key, value] of Object.entries(game.odds)) {
  // console.log(key); //team1 x team2
  // console.log(game[key]); //paradis undefined eldian
  // console.log(game[key] ? 'victory' : 'draw'); //victory draw victory
  console.log( `Odd of ${game[key] ? 'victory' : 'draw'} ${game[key] ?? ''}: ${value}`
  );//
}

/**
 * Odd of victory paradis: 1.33
 * Odd of draw : 3.25
 * Odd of victory eldian: 6.5
 */

//BONUS
const scorers = {};
for (let x of game.scored) {
  scorers[x]++ || (scorers[x] = 1);
}
console.log(scorers);

/**
 * Here we need to check if the player is already added to the object "scorers" or not.
If not so add the player to the object and set its value to 1. If the player exist increment its value by 1.
So for the case of 'Lewandowski' at the first loop, it will be added to the object with a value of 1 (as 'scorers[player] = false')  then when it comes again in the loop, it will NOT be added again (as 'scorers[player] = true') but it value will be incremented by 1.
 */

