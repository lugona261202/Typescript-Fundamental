function detectType(val:number|string){
    if(typeof val==="string"){
        return val.toLowerCase()
    }
    return val+3
}
// this basically tells to be cautious what all dataype may exist

function provideId(id:string|null){
    if(!id){
        console.log("please provide ID");
        return 
    }
    id.toLowerCase()
}
// this also shows that although we know if not a string it could only be null
// yet we should cautiously pass it as one of the parameter and be mindeful of the edge cases

function printAll(strs:string|string[]|null){
    if(strs){
        if(typeof strs==="object"){
            for(const s of strs){
                console.log(s)
            }
        } else if (typeof strs ==="string"){
            console.log(strs)
        }
    }
}
// this example emphasizes that although we checked for object(array) or for type of strings
// yet we still left a case where the string could be an empty string thus one should be cautious enough


interface User {
    name:string,
    email: string
}

interface Admin{
    name:string,
    email:string,
    isAdmin: boolean
}

function isAdminAccount(account:User|Admin){
    if("isAdmin" in account){
        return account.isAdmin
    }
}
// this is 'in' operator used for narrowing so that we can use feature of interface but only after conirming

function logValue(x:Date|string){
    if(x instanceof Date){
        console.log(x.toUTCString());
    } else {
        console.log(x.toUpperCase());
    }
}

// instance of is almost same as typeof it is just used when diffent classes are created using new keyword

type Fish = {swim: {} => void};
type Bird = {fly: () => void}

//function isFish(pet:Fish|Bird){
//    return (pet as Fish).swim !== undefined
//}

// this function checks if it is of type fish or not
// it uses typecasting convers pet into fish and check if its function can be accessed
//  and if it does not return undefined it is of type fish thus returns true

function getFood(pet:Fish|Bird){
    if(isFish(pet)){
        pet
        return "fish food"
    }else {
        pet 
        return "bird food"
    }
}
// now by line 73 using function it should be sure whether pet is fish or not
// but in reality function is still confused as our isFish function return true or false value and not the type of fish
// thus we update code as following
function isFish(pet:Fish|Bird):pet is Fish{
    return (pet as Fish).swim !== undefined
}

interface Circle {
    kind: "circle",
    radius: number
}
 
interface Square {
    kind: "square",
    side: number
}

interface Rectangle{
    kind: "rectangle",
    length:number,
    width:number
}
// by mentioning kind we can directly check which interface it is in later code
type Shape = Circle| Square | Rectangle

function getTrueShape(shape:Shape){
    if(shape.kind==="circle"){
        return Math.PI*shape.radius**2
    }
   // return shape.side*shape.side
    // if rectangle is added there is one more case so this line fails
}
// this is what discriminated union is and is very helpful

function getArea(shape:Shape){
    switch(shape.kind){
        case "circle":
            return Math.PI*shape.radius**2

        case "square":
            return  shape.side*shape.side  
        
        case "rectangle":
            return shape.length*shape.width

        default:
            const _defaultforshape: never = shape
            return _defaultforshape

    }
}

// thus never is often used in default cases for a function

