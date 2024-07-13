// a. Variable Declaration
// 1. declare vaiable using var, assign number and log the value
var number = 12345;
console.log(number);

// 2. declare vaiable using let, assign string and log the value
let string = "Ashish";
console.log(string);

// b. Constant Declaration.
// 1. declare vaiable using constant, assign boolean and log the value
const boolean = true;
console.log(true);

// c. Data types
/* 1. create variable of different data types(number, boolean, string, object, array) and log each variable type
    using typeof operator.*/
let number1 = 13.13;
console.log(typeof number1);
console.log(number1.toFixed(1));
console.log(number1.toString());
// console.log(number1.parseInt());
console.log(number1.constructor.name);
console.log("<<<<<<<<<<<<<<<<<<<<<<");

let boolean1 = true;
let boolean2 = new Boolean(true);
console.log(typeof boolean2);
console.log(typeof boolean1);
console.log(boolean1.toString());
console.log(boolean1.valueOf());
console.log(boolean1.constructor.name);
console.log("<<<<<<<<<<<<<<<<<<<<<<");


let string1 = "Ashish Bhardwaj";
console.log(typeof string1);
console.log(string1.constructor.name);
console.log(string1.toLowerCase());  // e is used in this console.log(string1.toLocaleLowerCase());
console.log(string1.toUpperCase());  // same as upper and lower case
console.log(string1.trim());         // string.trimStart() &&  string.trimEnd()
console.log(string1.repeat(2));
console.log("<<<<<<<<<<<<<<<<<<<<<<");


let object1 = {
    naam: "Coder",
    position: "FDE",
    
};
object1.fullName = function() {
        return this.naam + " is " + this.position;
    }
console.log(object1);
console.log(object1.fullName());
console.log(typeof object1);
console.log(object1["naam"]);
object1.company = "Google";
object1.location = "Gurugram";
console.log(object1);
delete object1.location
console.log(object1);
console.log(object1.constructor.name);

// means we can assign the value to empty object by ourself also
let obj = {}
obj.person = "Ashish";
obj.position = "coding";
console.log(obj);
console.log("<<<<<<<<<<<<<<<<<<<<<<");


let cars = ["Saab", "Volvo", "BMW"];
console.log(cars);
console.log(cars.sort(), "sort");
console.log(cars.reverse(), "reverse");
console.log(cars.toSorted(), "sort");
console.log(cars[2]);
console.log(cars);
cars.push("MG");
cars.pop("Saab");
console.log(cars);
console.log(cars.toString());
console.log(Array.isArray(cars));       // to check the array or not
console.log(typeof cars);
console.log(cars.length);
console.log(cars[cars.length -1]);      // to find the last element
console.log(cars instanceof Array);     // will show the true or not
console.log(cars.slice(0,1));
console.log(cars.splice(0,2));

console.log(cars.constructor.name);
console.log("<<<<<<<<<<<<<<<<<<<<<<");


