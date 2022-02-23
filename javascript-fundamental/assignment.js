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