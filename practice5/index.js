// 1. detials of product using Object
const product = {
    productName : "Parker Jotter Standard",
    color: "Black ball pen",
    rating: 4,
    price: 285,
    offer: 5
};
console.log(product);
console.log(typeof product);

// 2. detials of profile using Object
const profile = {
    profileName : "Ashish Bhardwaj",
    followers: 569000,
    following: 4,
    post: 195,
    job: "Frontend Developer",
    isFollowing: true
};
console.log(profile);
console.log(profile.profileName);
console.log(typeof profile["isFollowing"]);

// 3. get input by using prompt number is multiple of 5 or not
// let userInput = prompt("Enter the number")
// if(userInput%5 === 0){
//     console.log(userInput," : number relates to 5");
// }else{
//     console.log(userInput, " : number do not relates to 5");
// }

// 4.studend scoreCard with their codes
let scoreNum = 76;
let grade;
if(scoreNum >= 90 && scoreNum <= 100){
     grade = "A";
}if(scoreNum >= 80 && scoreNum <= 89){
     grade = "B";
}if(scoreNum >= 60 && scoreNum <= 79){
     grade = "C";
}if(scoreNum >= 45 && scoreNum <= 59){
     grade = "D";
}if(scoreNum >= 0 && scoreNum <= 44){
     grade = "F";
}
console.log(grade);

// if else , switch ?

// 5. number is even or not
let num = 49;
if(num%2 === 0){
    console.log("even");
}else{
    console.log("odd");
}

// why we did't make there functions ?

if(num > 0){
    console.log("postive number");
}else{
    console.log("negative number");
}

// 6. to calculates the ticket price based on age
// why we did't make functio
let age = 30;
let ticketFare;
if(age < 12){
    ticketFare = 10;
}else if(age >= 12 && age < 20 ){
    ticketFare = 20;
}else if(age >= 20 && age < 30){
    ticketFare = 30;
}else{
    ticketFare = 50;
}
console.log(ticketFare);

// 7. print even numbers from 0 to 100
for(let i = 0; i< 100; i++){
//    console.log("numbers = " ,i);
}

for(let i = 0; i< 100; i++){

    if(i%2==0){
        // console.log("even numbers ", i);
    }
}

// // 8. guess game number
// let gameNumber = 45;
// let userInput = prompt("enter the number : ");
// while(userInput != gameNumber){
//      userInput = prompt("you enter the wrong number: try again")
// }
// console.log("hey! you enter the correct number: ", gameNumber);

// 9. to calculate
function sum (a, b){
    return a + b;
}



console.log('>>>> 7 + 8 :', sum(7,8))
console.log('>>>> 15 + 8 :', sum(15,8))
console.log('>>>> 7 + 18 :', sum(7, 18))
console.log('>>>> 17 + 21 :', sum(17,21))

// function calculator(a,b, sumCallback){
//     sumCallback (a,b)
// }
// calculator(1,2, (a, b) => {
//     console.log(a + b);
// });


// to find the password with for loops
let password = 768;
for (let index_one = 0; index_one < 10; index_one++) {
    for (let index_two = 0; index_two < 10; index_two++) {
        for (let index_three = 0; index_three < 10; index_three++) {
            if  (password == [index_one,index_two,index_three].join("")) {
                console.log(">>>>> password is cracked !! ", password)
            }                   
        }        
    }
}


// to find the password with function condition
function crakPassword(given_password) {
    // complexity o(n3)
    // best case 000  ( first iteration selection )
    // worst case 999 < pass ( 3 loop run kar giya but result nhi milya)
    for (let index_one = 0; index_one < 10; index_one++) {
        for (let index_two = 0; index_two < 10; index_two++) {
            for (let index_three = 0; index_three < 10; index_three++) {
                if  (given_password == [index_one,index_two,index_three].join("")) {
                    console.log(">>>>> password is cracked !! ", given_password)
                    return given_password
                }                   
            }        
        }
        
    }
    console.log("<<<< password not found in range of 000 to 999")
}

// one in "test string one "
// to find the date and time
let startTime = new Date().getTime(); // Get the start time in milliseconds
crakPassword(79352782)
let endTime = new Date().getTime(); // Get the end time in milliseconds
let timeTaken = endTime - startTime; // Calculate the difference
console.log(`Time taken for pass cracking : ${timeTaken} milliseconds`);


// flat list using 2 for loops imperative
let flat_list = []
given_data = [[1,2],[3,4],[5,6,7]]

for (let index = 0; index < given_data.length; index++) {
    
    let element = given_data[index];
    for (let index_two = 0; index_two < element.length; index_two++) {
        let nested_element = element[index_two];
        console.log(">>> nested_element", nested_element)
        flat_list.push(nested_element)
    }
    console.log(element)
}

console.log("flated list :", flat_list)


// using function base

function flat_the_nested_list(given_nested_list) {
    let flat_list = []
    for (let index = 0; index < given_nested_list.length; index++) {
        var element = given_nested_list[index];
        for (let index_two = 0; index_two < element.length; index_two++) {
            var nested_element = element[index_two];
            // console.log(">>> nested_element", nested_element)
            flat_list.push(nested_element)
        }
        // console.log(element)
    }
    console.log(flat_list)
    return flat_list
}

flat_the_nested_list([[1,2,3,[4,5]],[3,4],[5,6,7,10]])

let flat_list_123 = []
// console.log(">>>>> .typeof", typeof flat_list_123)
// console.log(flat_list_123 instanceof [])

// flat a list using recursion 

function flat_the_nested_list_using_recurssion(given_nested_list) {
    let flat_list_final = []
    for (let index = 0; index < given_nested_list.length; index++) {
        var element = given_nested_list[index];
        if ( Array.isArray(element)) { // analyse this part
            flat_list_final = flat_list_final.concat(flat_the_nested_list_using_recurssion(element)); // analyse this part
        } else {
            flat_list_final.push(element)
        }
        // console.log(element)
    }
    return flat_list_final
}
let final_op = flat_the_nested_list_using_recurssion([[1,2,3,[4,5]],[3,4],[5,6,7,10]])

console.log(">>>> i am worked >>>>", final_op)


var test_array = [[1,2,3,[4,5]],[3,4],[5,6,7,10]]

count = 0
test_array.forEach(element => {
    console.log("value at index :",count, "   ", element)
    count += 1
})

// date and time
let currentDate = new Date();
console.log(currentDate);

let year = currentDate.getFullYear();
let month = currentDate.getMonth() + 1;
let date = currentDate.getDate();
let hours = currentDate.getHours();
let mintues = currentDate.getMinutes();
let seconds = currentDate.getSeconds();
let milliseconds = currentDate.getMilliseconds();
console.log(`${year} ${month} ${date} ${hours} ${mintues} ${seconds} ${milliseconds}`);

// now set date and time  by indiviual

// let now = new Date();
currentDate.setFullYear(2029);
currentDate.setMonth(7);
currentDate.setDate(25);
currentDate.setHours(14);
currentDate.setMinutes(300);
currentDate.setSeconds(0);
console.log(currentDate);