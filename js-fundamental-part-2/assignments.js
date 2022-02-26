// Coding Challenge #1

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA1 and DATA2. and Ignore draws this time.
TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
*/

const calcAverage = (score1, score2, score3) => score1 + score2 + score3 / 3;
const averageDolphins = calcAverage(85, 54, 41);
const averageKoalas = calcAverage(23, 34, 27);
console.log(averageDolphins, averageKoalas);

function totalAverage() {
  const total = averageDolphins + averageKoalas;
  console.log(total);
}

function checkWinner(avrDolphins, avrKoalas) {
  if (averageDolphins >= 2 * averageKoalas) {
    console.log(`Dolphins win with average scores ${avrDolphins} vs ${avrKoalas}`);
  } else if (averageKoalas >= 2 * averageDolphins) {
    console.log(`Koalas win with average score ${avrKoalas} vs ${avrDolphins}`);
  } else {
    console.log(`no one win`)
  }
}
checkWinner(averageDolphins, averageKoalas);
