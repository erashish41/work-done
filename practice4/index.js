//  check the conditions of all Data types

// 1. string
let string = "Ashish Bhardwaj";

// a. typeof
let typeof_string = (typeof string === "string")
if(typeof_string){
    console.log("this is string :",typeof_string);
}

// b. length
let str_lenght =  (string.length == 6)
console.log("length of string is eight", string, string.length, ": ", str_lenght);

// c. convert to toUpperCase
// let string = "Ashish";
let test_str1 = "ashish"
console.log(string.toLowerCase() === test_str1,"this for upper case");

let str2 = string.toLowerCase()
console.log(str2);

// d. find the start and end of string
let string_starts = string.startsWith("As") 
console.log(string_starts,"this is for start of string");

let string_ends = string.endsWith("sh")
console.log(string_ends,"this is for end of string");

// e. split a string and convert it into an array 
// let string = "Ashish";
let string_to_array = function (e){
    return e.trim().split(" ")
} 
let converted_string = string_to_array(string)
console.log(converted_string," : string to array");

// f. to extract a specified number of characters from a string
let str3 = string.slice(0,4)
console.log(str3);

let str4 = string.slice(2)
console.log(str4);

let str5 = string.trim()
console.log(str5);

let str6 = string.substring(0,4)
console.log(str6);
console.log("<<<<<<<<<<<<------>>>>>>>>>>>");



// 2. array
// a.to find its array or not
let array = [1,2,3,4,5,6,7,8]
if(Array.isArray(array)){
      console.log("this is array type");
}
console.log(Array.isArray(array));

// b. length
let arr_length = (array.length === 8)
if(arr_length){
    console.log("is this length of array", arr_length);
}

// c. array to String
let array_to_String = array.toString()
if(array_to_String){
    console.log("array to string: ", array_to_String);
}

// d. to join()
let array2 = [2,7,3,4,9]
console.log(array.join(" - ")+ array2.join( " - "));

// e. pop()
let pop_means_delet = array.pop()
console.log(array, pop_means_delet);

// e. push()
let push_means_delet = array.push(100)
console.log(array, push_means_delet);


let booleanValue = false;
function someFunction(){
    if(booleanValue === true){
        return "something";
    }else{
        return "nothing"
    }
}
console.log(someFunction());

// 3.number
let number = 50;
if(number%2 == 0){
    console.log("true or even"); 
}if(number%2 !== 0){
    console.log("false or odd"); 
}

let age_number = 25;
if(age_number > 18){
    console.log("you are eligible");
}else{
    console.log("you are not eligible");
}

// ternary operator
let num_info = 45;
const result = (num_info > 27) ? "you are great" : "you are small"
console.log(result);

//4. object 
const obj = { a:1, b:2, c:3}
for(let prop in obj){
    console.log(prop, ":",obj[prop] );
}

const personal_data = {
    first_name: "Ashish",
    last_name: "Bhardwaj",
    location: "Gurugram",
    20: 100,
    address: function(){
        console.log(`${personal_data.first_name} ${personal_data.last_name} lives in ${personal_data.location} ${personal_data[20]}`);
    }
}
personal_data.address()
console.log(personal_data.first_name)




// 7 days for complete beginner ( 1 year)

// ----------- logic build ---------------------
// null , if else kive chalan giya
// bool if (has_value) else {}
// int -> gte lte gt lt  == , !=
// float -> same above, to_decimal 3.333333 -> 3.33
// string -> value hain ode vich, kehre index te hain , ==, !=, startswith, endswith,  lenght
//          -> case conversion, like comparing two diffrent case upper and lower, cammel case, snake_case
// array ->> value hain ode vich, kehre index te hain, lenght, value kine repeat hain, append, pop, kehe index t kive add kr skda haan
// multi-dimention array/ object -> has_key, odi value access krna, value update krna, key delete krna


// functions -- arguments, return , yield( pata nhi js hain ya nhi)
// map reduce filter, arrow funcion, http client, http method t status, payload constution, query param passsing 

// class base code

// libraries -> movement, time, axios, underscore, 


// function fetchData() {
//     return fetch('https://dummyjson.com/products')
//       .then(res => res.json())
//       .then(data => {
//         products_data = data.products;
//         // console.log(products_data)
//         return products_data;
//       })
//       .catch(error => {
//         console.error('There was a problem with the fetch operation:', error);
//         return [];
//       });
//   }

// var products_data_final = []
// fetchData().then(products_data => {
//     // console.log('After fetchData:', products_data);
//     console.log(typeof products_data)
//     console.log(products_data.length)
//     products_data_final = products_data;
//   });
// console.log(products_data_final)

async function fetchData() {
    try {
      let response = await fetch('https://dummyjson.com/products');
      let data = await response.json();
      return data.products;
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      return [];
    }
  }
  async function main() {
    // Initialize the final variable
  
    // Wait for the fetchData operation to complete
    products_data_final = await fetchData();
  
    // Now you can safely log or use products_data_final
    console.log('After fetchData:', products_data_final);
    console.log('Type of products_data:', typeof products_data_final);
    console.log('Length of products_data:', products_data_final.length);
    return products_data_final
  }
  
  // Call the main function to run the async code
  let products_data_final = main();
  console.log("final", products_data_final)


function get_products_by_category(category_name, data) {
    let results = []
    for (let index = 0; index < data.length; index++) {
        if (data[index].category == category_name){
            results.push(data[index])
        }
    }
    console.log(results)
    return results
}


function get_product_by_exact_title(title_name, data){
    for (let i = 0; i < data.length; i++) {
        if(data[i].title == title_name){
            return data[i]
        }
    }
    return null
}
function get_product_by_title_contains(title_name, data){
    let filtered_results = [];
    for (let i = 0; i < data.length; i++) {
        if(data[i].title.search(title_name) != -1){
            filtered_results.push(data[i])
        }
    }
    console.log("title contains result:", filtered_results)

    return filtered_results
}   



  products_data_final.then(data => {
    console.log("promise disposed :", data)
    get_apple_data = get_products_by_category("groceries", data)
    name_search_data = get_product_by_exact_title("Essence Mascara Lash Princess", data)
    console.log("searched name data :", name_search_data)
    get_product_by_title_contains("Food", data)
  })

  

  console.log("<<<<<<..>>>>>");

  // Promise
  const promiseOne = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("I am a progfgfgfmise");
    resolve();                   //by the help of this we can connect then & resolve
    }, 2000);
  });

//   then is directly connected with resolve
promiseOne.then(function(){
    console.log("promise consumed");
})


// // Callback Hell 
// // function getData(dataId){
// //     setTimeout(() => {
// //         console.log("data", dataId);

// //     }, 2000);
// // }

// // if we want to take data after 2 sec 
// function getData(dataId, getNextData){
//     setTimeout(() => {
//         console.log("data", dataId);
//         if(getNextData){
//             getNextData()
//         }
//     }, 2000);
// }

// getData(1, () => {
//     getData(2, () =>{
//         getData(3,() => {
//             getData(4);
//         })
//     })
// })






//  <<<<<<<<<<<<<<<...........>>>>>>>>>>>>>>>
// 1.
let value = null;

if (value === null) {
  console.log("The value is null");
} else {
  console.log("The value is not null");
}

// 2.
let condition = true; // This is a boolean condition

if (condition) {
    console.log("The condition is true");
} else {
    console.log("The condition is false");
}

// 3.
let number1 = 10;

if (number1 > 0) {
  console.log("The number is positive.");
} else if (number1 < 0) {
  console.log("The number is negative.");
} else {
  console.log("The number is zero.");
}

// 4.
let text = "Hello, world!";

if (text.includes("world")) {
    console.log("The text contains 'world'.");
} else if (text.startsWith("Hello")) {
    console.log("The text starts with 'Hello'.");
} else if (text.endsWith("!")) {
    console.log("The text ends with '!'.");
} else {
    console.log("The text doesn't match any conditions.");
}

// 5.
let numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        console.log(numbers[i] + " is even");
    } else {
        console.log(numbers[i] + " is odd");
    }
}

//  to fetch the data
fetch("https://dummyjson.com/products")
    .then((res) => res.json() )
    .then((data) => console.log(data))