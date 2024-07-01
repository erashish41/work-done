// 1. where the product is there or not in given array
const fruits = [ 'apple', 'kiwi', 'orange','apple', 'kiwi', 'orange']
console.log(fruits.includes('apple'));

// 2. same as 1 but with if else
if(fruits.includes('kiwi')){
    console.log("kiwi is there");
}else{
    console.log("kiwi is not there");
}

// 3. make new array which double the value of given array with map 
const num = [2,1,3,5,2,7,9,0,8]

function newNum (i){
    return i*2;
}
let numInfo = num.map(newNum)
console.log(num);
console.log("--dddd---");

const numOutput = console.log(num.map( num1 => num1*2));
console.log(numOutput);
console.log("--ddd---");


// // arrow function
// const numDouble = num.map((e) => {
//     return  e*2
// })
// console.log(numDouble);


// 4. now filter the array with greacter number than 3
const numFilter = num.filter((e) => {
    return e > 4
})
console.log(numFilter);
console.log("-----");

// 5. now reduce the array with add
const numReduce = num.reduce((acc, curr) => {
    return acc+curr

},0)
console.log(numReduce);

// 6. array Fruits convert tp capital letter
const fruitsCapital = fruits.map((str => str.toUpperCase()))
console.log(fruitsCapital);

// Even mmuber from Num
const numEven = num.filter((mon => mon%2 == 0))
console.log(numEven);