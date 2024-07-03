//  check the conditions of all Data types

// 1. string
let string = "Ashish";

// a. typeof
let typeof_string = (typeof string === "string")
if(typeof_string){
    console.log("this is string :",typeof_string);
}

// b. length
let str_lenght =  (string.length == 6)
console.log("length of string is eight", string, string.length, ": ", str_lenght);

//c. convert to toUpperCase
let str1 = "ashish"
let strrrr = (string.toUpperCase === str1)
if(strrrr){
    console.log(strrrr, "dhfdsfhdsjfh");
}
console.log("////////////");


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
console.log("dsssssss");

let is_string = function(input){
    if (Object.prototype.toString.call(input) === '[object string]'){
        return true;
    }else{
        return false;
    }
}
console.log(is_string('ashi'));
console.log(is_string([1,2,3,4]));
console.log("dsssssss");
