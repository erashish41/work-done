// 1. Write a program that determines whether a given number is positive or negative.
let numberBe = - 99;
if( numberBe > 0){
    console.log(`number is even ${numberBe}`);
}else{
    console.log(`number is negative ${numberBe}`);
    // console.log('number is negative ', numberBe);
}

// with function
function checkNumber(digit){
    if( digit > 0){
        console.log(`number is even ${digit}`);
    }else{
        console.log(`number is negative ${digit}`);
    }
}
checkNumber(675)

// arrow function
const checkNumberwithArrowFunction = (digit)  => {  
    if( digit > 0){
                console.log(`number is even ${digit}`);
            }else{
                console.log(`number is negative ${digit}`);
            }
        }
 checkNumberwithArrowFunction(2231)



// 2. Write a program that checks if a number is even or odd.
let exactNumber = 7763;
if(exactNumber % 2 === 0){
    console.log(`exactNumber is even ${exactNumber}`)
}else{
    console.log(`exactNumber is odd ${exactNumber}`);
}

// with function and prompt
function checkEvenOrNot(numberOne){
    if(numberOne % 2 == 0){
        console.log(`exactNumber is even ${numberOne}`)
    }else{
    console.log(`exactNumber is odd ${numberOne}`);
    }
}
checkEvenOrNot(921)


// function promptUser(){
//     let input = prompt("enter the number");
//     return Number(input)
// }
// checkEvenOrNot(promptUser())

// with arrow function
const numberEvenwithArrow = (givenNumber) => {
    if(givenNumber % 2 == 0){
        console.log(`given number is even ${givenNumber}`);
    }else{
        console.log(`given number is odd ${givenNumber}`);

    }
}
numberEvenwithArrow(4502)

// 3.Write a program to determine the greater of two numbers.
const firstNumber = 80;
const secondNumber = 145;
if(firstNumber > secondNumber){
    console.log(`first number: ${firstNumber} is greater than second number: ${secondNumber}`);
}else{
    console.log(`second number: ${secondNumber} is greater than first number: ${firstNumber}`);

}
// with function
function greaterNumber (num1, num2){
    if(num1 > num2){
        console.log(`num1 number: ${num1} is greater than num2 number: ${num2}`);
    }else{
        console.log(`num2 number: ${num2} is greater than num1 number: ${num1}`);
    }
}
greaterNumber(66, 33)

// arrow function
const numberIsGreater = (digit1, digit2) => {
    if(digit1 > digit2){
        console.log(`digit1 number: ${num1} is greater than num2 number: ${digit2}`);
    }else{
        console.log(`digit2 number: ${digit2} is greater than digit1 number: ${digit1}`);
    }
}
numberIsGreater(10,40)

// 4. Write a program that transforms a numerical grade to a letter grade (e.g grade 10 should display “A”)
var score = 5;
if(score <=  100 && score >= 90){
   grade = "A";
}else if(score <=  89 && score >= 71){
    grade = "B";
}else if(score <= 70 && score >= 51){
    grade = "C"
}else if(score < 50 && score >= 35){
    grade = "D";
}else{
    grade = "F"
}
console.log(`grade of studend is : ${grade}`);

//  with function
function studendGrade (score1){
    if(score1 <=  100 && score1 >= 90){
        grade = "A";
     }else if(score1 <=  89 && score1 >= 71){
         grade = "B";
     }else if(score1 <= 70 && score1 >= 51){
         grade = "C"
     }else if(score1 < 50 && score1 >= 35){
         grade = "D";
     }else{
         grade = "F"
     }
}
studendGrade(35)
console.log(`grade of studend is : ${grade}`);

// 5. Write a program that determines if a year is a leap year.
const year = 2024;
if (year % 4 === 0 && year % 100 === 0 || (year % 400 === 0)){
    console.log(year + " is a leap year.");
} else {
  console.log(year + " is not a leap year.");
}

//  with function 
function leapYear (input1){
    if (input1 % 4 === 0 && input1 % 100 ===0 || (input1 % 400 === 0)){
        console.log(input1 + " is a leap year.");
    } else {
      console.log(input1 + " is not a leap year.");
    }
}
leapYear(8000)

// 6. Write a program that calculates a discount based on the purchase amount.
const calculateDiscount = (price) => {
    let discount = 0;
    if(price > 100 && price < 500){
        discount = 0.10; // 10%
    }else if(price > 500){
        discount = 0.20;
    }

    let discountAmount = price * discount;
    let finalAmount = price - discountAmount;
    // now we have return both discountAmount and finalAmount in object and after that it will calculate the result
    return {
        discountAmount,
        finalAmount
    }
}
let finalResult = calculateDiscount(400)
console.log(finalResult);


// 7. Write a program that greets the user based on the time of day.
const userGreetings = (hours = new Date.getHours()) => {
    let greetings;
    if(hours > 6 && hours < 12){
        greetings = "Good Morning";
    }else if(hours >= 12 && hours < 18){
        greetings = "Good Afternoon";
    }else if(hours >= 18 && hours < 22){
        greetings = "Good Evening";
    }else{
        greetings = "hello"
    }
    console.log(greetings);
}
userGreetings(17);

// 8.  Write a program that calculates the Body Mass Index (BMI) and categorizes it.
// let bmi = weight / (height * height);
// console.log("BMI: " + bmi.toFixed(2)); // .toFixed(2) limits the number of decimals to 2
const bodyMass = (weight1, height1) => {
    const bmi = weight1/ (height1*height1);
    let category;

    if(bmi < 25.5){
        category = "Under weight ";
    }else if(bmi >= 25.5 && bmi < 40){
        category = "better towards normal";
    }else if(bmi >= 40 && bmi < 65){
        category = "Normal weight";
    }else if(bmi >= 65  ){
        category = "Over weight"
    }
    return{
        bmi: bmi.toFixed(2),
        category
    }
    
}
const height1 = 1.75;
const weight1 = 90;

const data = bodyMass(weight1, height1);
console.log(data.bmi, data.category);


// 9.Print the numbers from 0 to 15
for(let num3 = 12; num3 <= 25; num3++){
    console.log(`number is: ${num3}`);
}
//10. Print the odd numbers from 7 to 31
for(let num4 = 0; num4 <= 31; num4++){
    if(num4%2 !== 0){
    console.log(`odd number is: ${num4}`);
    }
}
// 11. Iterate through all numbers from 1 to 45.
for (let num5 = 0; num5 <=45; num5++) {
    if(num5%3 === 0){
        console.log('Fizz');
    }else if(num5%5 === 0){
        console.log("Buzz");
    }else if(num5%3 === 0 && num5%5 === 0)
        console.log("Fizz Buzz");
}

// 12. add the array
const array = [1,24,66,7,3,90,21,2]
const addArray = array.reduce((acc, curr) => {
    acc = acc + curr;
    return acc
})
console.log(addArray);

// Conditional Breakpoints
function calculateSum(a, b) {
    let sum = a + b;
    return sum;
}

for (let i = 0; i < 10; i++) {
    let result = calculateSum(i, 50 );
    console.log(result);
}

// more complex
function multiply(a, b) {
    return a * b;
}

function calculateArea(length, width) {
    let area = multiply(length, width);
    return area;
}

let area = calculateArea(5, 4);
console.log(area);