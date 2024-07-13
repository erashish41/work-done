const string = "Ashish Bhardwaj is going to be a Frontend Developer";
const split = string.split(" ")
console.log(split);
console.log("6666666");

// with function
let string1 = function(e){
    return e.trim().split(" ");
}
let newString = string1(string);
console.log(newString);

/////////////
function greet(user){           // here function accept the value
    return "hello";
}
let user = "Ashish";
let str111 = greet(user);      // here we pass the value 
console.log(str111);

const cars = ["Saab", "Saab", "Volvo", "Volvo", "Volvo", "BMW", "BMW", "BMW", "BMW"];
let carsData = { };
for(i=0; i<cars.length; i++){
    const carsInfo = cars[i];   // this mesn

    if(carsData.hasOwnProperty(carsInfo)){
        carsData[carsInfo] += 1;
    }else{
        carsData[carsInfo] = 1;
    }
}
console.log(carsData);