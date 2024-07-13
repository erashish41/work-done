//      A R R A Y

const cars = ["Saab", "Saab", "Volvo", "Volvo", "Volvo", "BMW", "BMW", "BMW", "BMW"];
const randomIndex = Math.floor(Math.random() * cars.length);
const randomElement = cars[randomIndex];
console.log(randomElement);

// const cars = ["Saab", "Saab", "Volvo", "Volvo", "Volvo", "BMW", "BMW", "BMW", "BMW"];
// const firstCar = cars[2];
// const firstWord = firstCar.split(' ')[7];
// console.log(firstWord);

// to find the data how much time 1 word is written
let car_info = { };
for(let i = 0; i < cars.length; i++){
    let i_data = cars[i];     
    // this means carsInfo is "Saab". "Saab" is not in carsData, so carsData["Saab"] is set to 1.
    if(car_info.hasOwnProperty(i_data)){
        car_info[i_data] += 1;
    }else{
        car_info[i_data] = 1;
    }   
}
console.log("<<<<<<");
console.log(car_info);


// now count the items with function
function carInfo (car_data){
    count = 0;

    for(i=0; i<cars.length; i++){

        if(car_data == cars[i]){
            count += 1;
        }
    }
    return count;
}
let bmwInfo = carInfo("BMW")
console.log("the count of BMW is ", bmwInfo);

let volvoInfo = carInfo("Volvo")
console.log("the count if Volvo is ", volvoInfo);

// find the min number from series
const number = [2,6,3,2,1,0,51,6,90,5,6,7,88]

let minNum = number[0]
for(let i=0; i<number.length; i++){
    if(number[i] < minNum){
        minNum = number[i]
    }
}
console.log(minNum);

// find the max number from series
let maxNum1 = number[0]
for(let i=0; i<number.length; i++){
    if(number[i] > maxNum1){    // If number[i] is greater than max, max is updated to number[i]
        maxNum1 = number[i]
    }
}
console.log(maxNum1);

// even and odd number
const arr = [1,2,4,5,6,0,9,0,51,6,90,5,6,7,88]

const evenNum = arr.filter(num => num % 2 == 0);
const oddNum = arr.filter(num => num % 2 !== 0);

console.log(evenNum);
console.log(oddNum);

// other method 
const number_series = [2,6,3,2,1,0,51,6,90,5,6,7,88]

even_results = [];
odd_results = [];
for( let i = 0; i < number_series.length; i++){
    current_item = number_series[i]

    if(current_item % 2 == 0){
        even_results.push(current_item);
    }
    else{
        odd_results.push(current_item)
    }
}
console.log("all data :", number_series)
console.log(">>> even numbers :", even_results)
console.log(">>> odd numbers :", odd_results)