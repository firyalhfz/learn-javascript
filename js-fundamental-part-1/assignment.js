/*
let country = "Indonesia"
let continent = "between the continents of Asia and Oceania"
let population = 278207416

console.log(country)
console.log(continent)
console.log(population)
*/ 

/*coding challenges 1

Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.
TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.
*/


//data 1
const weightMark = 78
const weightJohn = 92
const heightMark = 1.69
const heightJohn = 1.95

//data 2
// const weightMark = 95
// const weightJohn = 85
// const heightMark = 1.88
// const heightJohn = 1.76

const BMIMark = weightMark / heightMark ** 2
const BMIJohn = weightJohn / heightJohn ** 2
const markHigherBMI = BMIMark > BMIJohn

// console.log(BMIMark)
// console.log(BMIJohn)
// console.log(markHigherBMI)


//Coding Challenge #2

/* 
Use the BMI example from challenge #1, and the code you already wrote, and imporve it
1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs/ Example: "Mark's BMI (28.3) is higher than John's (23.9)"

HINT : Use an if/else statement
GOOD LUCK
*/

let message;

if(BMIJohn > BMIMark){
    message = `Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})`;
}else{
    message = `John's BMI (${BMIJohn}) is higher than mark's (${BMIMark})`;
}

console.log(message);

//coding challenge 3

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!
1. Calculare the average score for each team, using the test data below
2. Compare the team's average scores for each team, using the test data below adn print it to the console. Dont forget that there can be a draw, so test for that as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minumum score of 100. with this rule, a team only wins if it has a higher score than the other team, adn the same time a score of at least 100 points. HINT: Use a logical operator to test for minumum score, as well as multiple else if blocks
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. otherwise, no team wins the trophy

TEST DATA: Dolphins score 96, 108, 89. Koalas score 88, 91, and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
*/

const dolphinScore = (97 + 112 + 101) /3
const koalaScore = (109 + 95 + 106) /3
console.log(dolphinScore, koalaScore)

if(dolphinScore > koalaScore ){
    console.log(`Dolpin's Score average is higher than Koala's Score average`)
} else if (dolphinScore < koalaScore){
    console.log(`Koala's Score average is higher than Dolpin's Score average`);
} else{
    console.log(`draw`)
}

if(koalaScore < dolphinScore && dolphinScore >= 100){
    console.log('Dolphins win the trophy')
}else if (koalaScore > dolphinScore && koalaScore >= 100){
    console.log('Koala win the trophy')
} else if (koalaScore === dolphinScore && dolphinScore >= 100 && koalaScore >= 100){
    console.log(`both win the trophy`)
} else {
    console.log(`No one wins the trophy`)
}



//Coding challenge #4


/*
Salwa wants to buils a very simple tip calculator for whenever she goes eating in a restaurant. In her country, its usual to tip 15% if the bill value is between 50 to 300. If the value is different, the tip is 20%.

1. Your task is to calculate the tip, depending on the bill value. create a variable called 'tip' for this. Its not allowed to use an if/else statement (if its easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25 and the total value 316.25'
TEST DATA: Test for bill values 275, 40, 430
HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT: value X is between 50 and 300, if its >= 50 && <= 300

*/

const eat = 40; 
const tip = eat >= 50 && eat <= 300 ? console.log(`the tip is ${eat * 0.15}`) : console.log(`the tip was ${eat * 0.2}`) 

const str = `the tip was ${tip}, the bill was ${eat}, the total was ${eat + tip}`

//if else with ternary operator
// const tip = condition A ? result A : condition B ? result B : result C

