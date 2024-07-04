interface User {
    readonly dbId: number,
    email: string,
    userId: number,
    googleId?:string,
    startTrail():string,//can also be declared as startTrail:()=>string
    getCoupon(couponname:string,value:number):number
}
interface User {
    githubToken:string
}
// this is called reopening of interface , without touching existing interface we can add more fields

interface Admin extends User {
    role:"admin"|"ta"|"learner"
}
// inheretence is also possible and multiple interfaces can be inhereted using , 
const hitesh: Admin = {dbId:22, email: "h@h.com",userId:2211,githubToken:"github",role:"admin",
    startTrail:()=>(
        return "trail started"
    ),
    getCoupon:(name:"hitesh",off:10)=>{
        return 10
    }
    // name should not match couponname just string should be given in the end
}
















