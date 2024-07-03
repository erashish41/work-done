//  check the conditions of all Data types

// 1. string
let string = "Ashish Bhardwaj   ";

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

// c. clone the array
let array_to_String = array.toString()
if(array_to_String){
    console.log("array to string: ", array_to_String);
}