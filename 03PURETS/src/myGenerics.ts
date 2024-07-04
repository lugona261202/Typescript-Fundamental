const score : Array<number> =[]
const names : Array<string> = []

function identityOne(val:boolean|number):boolean|number{
return val
}

function identityTwo(val:any):any{
    return val
}

function identityThree<Type>(val:Type):Type{
    return val
}

function identityFour<T>(val:T):T{
    return val
}

interface Bottle{
    brand:string,
    type:number
}

//identityFour<Bottle>({})
function getSearchProducts<T>(products:T[]):T{
    // do some complex database operations
    const myIndex=3
    return products[myIndex]
}
// generics with array type

const getMoreSearchProducts =<T>(products:T[]):T=>{//<T,> this is also a common practise to show user that this is not a jsx tag
    // do some database operations
    const myIndex = 4
    return products[myIndex]
}
// arrow function with generic array type

interface Database{
    connection: string,
    username: string,
    password:string
}

function anotherFunction <T,U extends Database >(valOne:T,valTwo:U):object{
    return {
        valOne,
        valTwo
    }
}
 // extending interfaces to genertic 
//anotherFunction(3,{})

interface Quiz{
    name:string,
    type:string
}

interface Course{
    name:string,
    author:string,
    subject:string
}

class Sellable<T>{
    public cart:T[]=[]
    addToCart(product:T){
        this.cart.push(product)
    }
}

// using generic  in classes





