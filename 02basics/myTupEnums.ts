const user : (string|boolean)[]=[1,"hc"]
//this lets me use string and boolean but data can be inserted in any order
// to maintain specific order and multiple data types we use tuples
let tUser:[string,number,boolean]
tUser=["hc",131,true]
//any order other than this will throw error

let rgb : [number, number,number]=[255,123,112]

type User=[number,string]

const newUser: User=[112,"example@google.com"]
// declaring datatype of tuples
newUser[1]="hc.com"
// using index we can also update or insert in tuple
newUser.push(true)
// only problem with tuple is some function like push unshift etc allow other datatype to be inserted other than mentioned ones




















export{}