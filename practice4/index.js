// check all Data types to check the conditions

// 1. string
let string = "Ashish";
if(typeof string === "string"){
    console.log("'Ashish' : this is string data type");
}

let str =  (string.length == 8)
console.log("this is the length of string is eight", str);

let str1 = string.toUpperCase()
console.log(str1);


test_string_one = "RajaT"  
test_string_two = "rajat"

console.log(test_string_one.toLowerCase() == test_string_two)
console.log("ggggggg");
console.log(string.startsWith("Asf"))
console.log(test_string_two.endsWith("at"))

let str2 = string.toLowerCase()
console.log(str2);

let str3 = string.slice(2,4)
console.log(str3);

let str4 = string.slice(2)
console.log(str4);

let str5 = string.trim()
console.log(str5);

let str6 = string.substring(0,4)
console.log(str6);
console.log("<<<<<<<<<<<<------>>>>>>>>>>>");

// 2. array
let array = [1,2,3,4,5,6,7,8]
if(Array.isArray(array)){
      console.log("this is array type");
}

let arr1 = array.length
console.log(arr1);


