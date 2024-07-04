let score : number | string =33
// there is no limit to unifying the possible data type but as a practise of typescript try to keep it limited
score = 44
score = "55"


type User = {
    name: "string",
    id: number
}
type Admin = {
    userName: "string",
    id: number
}
 let hitesh : User | Admin = {name: "hitesh", id : 334}
 // union can also be used for self delcared datatype
 hitesh = {username:"hc",id:332}

function getDbId(id:number|string){
    // making some api calls
    console.log(`DB id is : ${id}`)
}
// union for function parameter
 
function getDbId(id: number|string){
    if(typeof id ==="string"){
        id.toLowerCase()
    }
}
// although two possible datatype for the function exist
// still if we directly use string property like tolowercase it throws error
// as function is not 100% sure if it is string or number
// thus we need to check type and only then can we implement those features 
// this is called union narrowing

const data: number[]=[1,2,3]
const data2: string[]=["1","2","3"]
const data3: string[]|number[]=[]
// this can contain either an entire array of number or an entire array of strings
const data4 :(string|number)[]=["1",2,"3"]
// this can now contain mix of data
// we can even add more datatype like boolean and all

let seatAllotment: "aisle"|"middle"|"window"
// when we want user to choose only specifc value or constant value ,union can be used in this way
seatAllotment="aisle"
seatAllotment="crew"
// for crew it will throw error











