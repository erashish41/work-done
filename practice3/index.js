// Task to be done -- min, max, map, map, filter, reduce

const num = [9,4,5,3,8,6,3,3,3,1,0,6,7,8,4,]
console.log(">>>> give num list is :", num)

// 1. Min
 
let current_min = num[0]

for(let i=1; i < num.length; i++){
     
     if(num[i] < current_min){
        current_min = num[i]
     }
}
console.log("minimum number is :", current_min);

// 2. Max

let current_max = num[0]


for(let i=1; i < num.length; i++){
     
    if(num[i] > current_max){
        current_max = num[i]
    }
}
console.log("Max number is :", current_min);


// 3 geting map of numbers and its occrence

let data_map = {}

for(let i=0; i < num.length; i++){
    current_value = num[i]

    if (data_map.hasOwnProperty(current_value)) {
        data_map[current_value] += 1
    } else {
        data_map[current_value] = 1
    }
}

console.log("<<<< here is map of number occurence")
console.log(data_map)

for (const [key, value] of Object.entries(data_map)){
    console.log('>>>> key', key, " >>>> value ", value)
    // homework
}

//3.2. Map for finding square of the given list
const numMap = num.map((i) => {
    i =i**2
    return i
})
console.log("this is map :",numMap);

//4. Filter
const EvenNumFilter = num.filter(number => number % 2 == 0)
console.log("even number :", EvenNumFilter);

const OddNumFilter = num.filter(number => number % 2 !== 0)
console.log("odd number :", OddNumFilter);


// 5.reduce
const numReduce = num.reduce((acc, cru) => {
    acc = acc + cru;
    return acc
}, 0)
console.log("this is reduce :", numReduce);
console.log(">>>>>>");


// bad programmer write code which machine understand only
// good programmer write human redable code with documentation
// 6. function to find element occuerance in the give array

function find_element_repetition(given_array, element) {
    let count = 0;
    for(let i=0; i < given_array.length; i++){
        if (given_array[i] == element) {
            count += 1
        }
    }
    console.log(">>>>> element ", element, " occured  ",count,  " times")
    return count
}

find_element_repetition(num, 3)

find_element_repetition(num, 4)

find_element_repetition(num, 6)

find_element_repetition(num, 7)



// reverse a string method 1 using reverse for loop

function reverse_a_string(given_string) {
    
    var newString = "";

    for (var i = given_string.length - 1; i >= 0; i--) {
        newString += given_string[i];
    }

    return newString;
}


let reversed_string = reverse_a_string("hello")
console.log(">>>>> reversed stirng ", reversed_string)


// reverse a string method 2 using reverse for loop
function reverse_a_string_using_list(given_string) {
    let string_list = []
    for(let i=0; i < given_string.length; i++){
        string_list.splice(0, 0, given_string[i])
    }
    // console.log('>>>> string_list', string_list)
    return string_list.join("");
}
console.log(reverse_a_string_using_list("rajat"))


// is palandromium  its a word that represnt same from left to right


function is_palandromium (string_name) {
    reversed_string = reverse_a_string_using_list(string_name)
    console.log(">>>> given string :", string_name)
    console.log(">>>> reversed string :", reversed_string)
    return reversed_string == string_name
}
let plandromium_result  = is_palandromium("madam")
console.log('>>>> is palandroium :', plandromium_result)