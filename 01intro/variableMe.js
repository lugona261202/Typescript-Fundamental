var greetings = "hello lugona";
//greetings = 6 it does not let a string type be assigned a number
greetings.toLowerCase();
console.log(greetings);
// also even the methods that are provided are only of string type so that user does not make mistake
// number
//let userId:number = 334455.3
var userId = 334455.3; // now we remove :number as ts is smart enough to know that only a number will be incoming this is called type inference
// but this does not make it same as js although it might but still in practise we can avoid it and wherever it is necessary we will specify
userId.toFixed();
// userId = "hitesh" will throw an error
// boolean
var isLoggedIn = false;
console.log("");
