let greetings : string = "hello lugona";
//greetings = 6 it does not let a string type be assigned a number
greetings.toLowerCase();
console.log(greetings);
// also even the methods that are provided are only of string type so that user does not make mistake

// number
//let userId:number = 334455.3
let userId = 334455.3 // now we remove :number as ts is smart enough to know that only a number will be incoming this is called type inference
// but this does not make it same as js although it might but still in practise we can avoid it and wherever it is necessary we will specify
userId.toFixed() 
// userId = "hitesh" will throw an error

// boolean
let isLoggedIn: boolean =false

// any 
let hero ;

function getHero(){
    return "thor"
}

hero = getHero()
// now here since initially ts does not know type of hero it will assign it as any
// now whatever data it is assigned later will get accepted
// however it is not a good practise to use any , and is only used to avoid type checking for some variable

export{}// a current warning is avoided real info will be given later

