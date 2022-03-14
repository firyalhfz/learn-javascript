// Coding Challenge #1

/* 
We're building a football betting app (soccer for aot 😅)!
Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:
1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.
TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored
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
  // printGoals: function (num1, num2, num3, num4) {
  //   console.log(
  //     `here is the arbitraty number of player names, there are ${num1}, ${num2}, ${num3}, and ${num4}`
  //   );
  // },
};

//QUESTION 1
const player1 = [...game.players[0]];
const player2 = [...game.players[1]];
console.log(player1);

//QUESTION 2
const [gk1, ...fieldPlayers1] = player1;
const [gk2, ...fieldPlayers2] = player2;
console.log(gk1, fieldPlayers1);
console.log(gk2, fieldPlayers2);

//QUESTION 3
const allPlayers = [...player1, ...player2];
console.log(allPlayers);

//QUESTION 4
const players1final = [...player1, 'ymir', 'historia', 'nicollo'];
console.log(players1final);

//QUESTION 5
const { team1: team1, x: draw, team2: team2 } = game.odds;
console.log(team1, draw, team2);

//QUESTION 6
// for (let i = 0; i < player1.length; i++) {
//   game.printGoals(i);
// }

// const playerCopy = {...game.player[0]}
// game.printGoals('jean', 'mikasa', 'historia', 'eren');

// const printGoals = function (player1){
//   for(let i = 0; i> player1.length; i++){
//     console.log(player1[i] - 1)
//   }
// }
// printGoals()

const printGoals = function(...players){
  console.log(`${players.length} goals were scored`);
}
// printGoals('levi', 'armin', 'mikasa');
printGoals(...game.scored)

//QUESTION 7
console.log(
  `${(team1 < team2 && game.team1) || game.team2} is more likely to win`
);
