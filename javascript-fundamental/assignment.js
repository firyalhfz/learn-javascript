let country = "Indonesia"
let continent = "between the continents of Asia and Oceania"
let population = 278207416

console.log(country)
console.log(continent)
console.log(population)

/*coding challenges 1

Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.
TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.
*/

//data 1
var weightMark = 78
var weightJohn = 92
var heightMark = 1.69
var heightJohn = 1.95

var BMIMark = weightMark / heightMark ** 2
var BMIJohn = weightJohn / heightJohn ** 2
var markHigherBMI = BMIMark > BMIJohn

console.log(BMIMark)
console.log(BMIJohn)
console.log(markHigherBMI)

//data 2
var weightMark = 95
var weightJohn = 85
var heightMark = 1.88
var heightJohn = 1.76

var BMIMark = weightMark / heightMark ** 2
var BMIJohn = weightJohn / heightJohn ** 2
var markHigherBMI = BMIMark > BMIJohn

console.log(BMIMark)
console.log(BMIJohn)
console.log(markHigherBMI)