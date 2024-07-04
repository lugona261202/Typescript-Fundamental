const User = {
    name:"hitesh",
    email: "hitesh@lco.dev",
    isActive:true
}

function createUser({ name, isPaid }: { name: string, isPaid: boolean }) {}
// passing objects as parameter
let newUser = {name:"hitesh",isPaid:false,email:"h@h.com"}
createUser(newUser)
//createUser({name:"hitesh",isPaid:false,email:"h@h.com"})
// odd behaviour of object is that if there are more parameter than specified while directly passing object
// ts throws error , but if it is assigned to a variable it is allowed
function createCourse():{name:string,price:number}{
    return {name:"reactjs",price:299}
}
// function that returns object 
// normal bracket for paramter which may specify type of parameter too
// first curly bracket is to specify the return type , next is for funciton definition

 type User = {
    name: string ;
    email: string;
    isActive: boolean
 }

 function createUser(user:User):User{
    return {name:"",email:"",isActive:true}
 }
// this is like creating data types which we can use directly or more like templates
// this is generally used when many function use almost same parameter 
 createUser({name:"",email:"",isActive:true})

 type User = {
    readonly _id:string,
            name:string,
            email:string,
            isActive:boolean,
            credCardDetails?:number
 }
// readonly ensures that the following parameter cannot be changed
// ? is used to make that field optional
 let my User :User ={
    _id:"12345",
    name:"h",
    email:"h@h.com",
    isActive:false
 }
//myUser._id="asa" this will throw error

type cardNumber = {
    cardnumber: string
}

type cardDate ={
    cardDate: string
}
 type credCardDetails = cardNumber & cardDate & {
    cvv:number
 }
 // this is how we use mixing of type 
 


