class User {
    email: string
    private name: string // to mention private in javascript we have # keyword
    readonly city: string="jaipur"
    // the type of email and name has to be mentioned prior to constructor in typescript
    constructor(email:string,name:string){
        this.email = email;
        this.name = name
    }
}
// as city is not mentioned in constructor thus it has to be initialised in some way
const hitesh= new User("h@h.com","hitesh")
// can also be done another way
//const hitesh= new User(email:"h@h.com",name:"hitesh")

//hitesh.city="delhi"
class user{
    protected _courseCount = 1
    readonly city:string="jaipur"
    constructor(
        public email:string,
        public name:string ,
        private userId: string
    ){
    }
    private deleteToken(){
        console.log("token deleted")
    }
    // even method can be made private
   get  getAppleEmail():string{
        return `apple${this.email}`
    }

    get courseCount(): number{
        return this._courseCount
    }
    // generally getter are designed to access private members 
    set courseCount(courseNum){
        if (courseNum<=1){
            throw new Error("course count should be more than 1")
        }
        this._courseCount=courseNum
    }
    // setter should never have any return type simply blank , nothing else
}
// this is a better way of declaring class and this is how its done at proffesional level

class SubUser extends user {
    isFamily: boolean = true
    changeCourseCount(){
        this._courseCount=4
    }
}
// protected also allows to inherit as well as keept it private












