function addTwo(num){
    // num.toUpperCase() although this is a string function yet it is allowed as type of data in functionn is automatically set to any
    return num+2
}
addTwo("5")// even this doesn't throw any errors which is wrong
// to prevent this use 
//function addTwo(num: number){}

function getUper(val:string){
    return  val.toUpperCase()
}
function signUpUser(name:string, email:string,isPaid:boolean){}
signUpUser("lugona","lugona@lco.dev",false)
// thus it is important for function's variable type to be mentioned

let loginUser = (name:string,email:string,isPaid:boolean=false)=>{}
loginUser("h","h@h.com")
// this is how you pass default value if it is not present when using function it will throw error if any parameter missed
let value = addTwo(7);
// now if this function simply returned hello
// still no error would be thrown 
// to prevent this we can also set type to return values

function addThree(num:number):number{
    return num +3;
}
/*function getValue(myVal:number):boolean{
    if(myVal>5){
        return true 
    }
    return "200ok"
}
*/
// now here can be two return type but how do we set return type for function 
// this we will learn later

const getHello = (s:string):string=>{
    return ""
}

const heros = ["thor","spiderman","ironman"]
// const heros=[1,2,3]

heros.map((hero):string=>{
    return `hero is ${hero}`
})
// type of hero is automatically set depending on whether heros contained strings or number
// however we can also specify return type in this case too

function consoleError(errmsg:string):void{
    console.log(errmsg)
}
// at times function does not return anything then we use void 
function handleError(errmsg:string):never{
    throw new Error(errmsg)
}
// for some special function like handleError we have to ensure that function returns nothing not even void
// thus for such cases we use never as return type
export{}