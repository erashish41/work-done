// const { log } = require("async");

// asynchronos function  : setTimeout(function,delay)
setTimeout( () => {
    console.log("hello");
},1000);


// callback function
function sum(a,b){
    console.log(a + b);
}

function calculator(a,b, sumCallback){
    sumCallback(a,b);
}
calculator(1,2, sum);


//      A P I

// fetch API with async and await
async function getApiData (){           // if await is there then async will automaticaly comes
    let apiFetch = await fetch('https://dummyjson.com/products/1')  // await means we have wait till the result comes
    console.log(await apiFetch.json());        // json() is used to display data in better way
}
getApiData();

// fetch API with then and catch
fetch('https://dummyjson.com/products/1')
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    })