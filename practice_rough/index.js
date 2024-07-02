const cars = ["Saab", "Saab", "Volvo", "Volvo", "Volvo", "BMW", "BMW", "BMW","BMW"]

// find how much time word is shown
const cars_data = { }

for(i=0; i<cars.length; i++){
    let cars_info = cars[i];

    if(cars_data.hasOwnProperty(cars_info)){
        cars_data[cars_info] += 1;
    }else{
        cars_data[cars_info] = 1;
    }
}
console.log(cars_data);
console.log("<<<<<<<,");

// find min number
const number = [2,6,3,2,1,0,51,6,90,5,6,7,88]

let min_num = number[0]
for (let i = 0; i < number.length; i++) {
    if(number[i] < min_num ){
        min_num = number[i]
    }
}
console.log(min_num);

// even odd
const evenNumber = number.filter(num => num%2 == 0);
const oddNumber = number.filter(num => num%2 !== 0);

console.log(evenNumber);
console.log(oddNumber);
console.log("<<<<<<<");

// count the number of cars
function car_Information(data){
    count = 0;

     for (let i = 0; i < cars.length; i++) {
        if(data == cars[i]){
            count = count + i
        }        
     }return count
}

console.log("this is count for volvo car",car_Information("Volvo"));

// with arrow function
const get_car_count = (car_name) => {
    let count = 0;
    for(i=0; i<cars.length; i++){
        if(car_name == cars[i]){
            count += 1;
        }
    }return count
}
console.log("this is count for bmw car", get_car_count("BMW"));



// ,,,,,,,,,,,,,,,>>>>>>>>>>>>,,,,,,,

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

find_element_repetition(number, 3)

find_element_repetition(number, 4)

find_element_repetition(number, 6)

find_element_repetition(number, 7)

function repete_Element(show_array, element1){
    let count = 0;

    for (let i = 0; i < show_array.length; i++) {
        if(show_array[i] == element1){
            count += 1;
        }
        
    }return count;
}
console.log(repete_Element(number, 9));

// reverse string '12345' now show the output

function reverse_str(str){
    let reversed_list = []

    for(let i=0; i < str.length; i++){
        reversed_list.splice(0, 0, str[i])      // first 0 means postion and second 0 means items to delete (insert each character to first position)
        console.log('>>>>> reversed_list', reversed_list)
    }
    return reversed_list.join("");

//     let str_info = "";
//     for (let  i =  str.length -1; i >=0; i--) {
//         str_info += str[i];
//     }
//     return str_info;

}
let new_str = reverse_str("12345");
console.log(new_str);

