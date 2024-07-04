"use strict";
class User {
    // the type of email and name has to be mentioned prior to constructor in typescript
    constructor(email, name) {
        this.city = "jaipur";
        this.email = email;
        this.name = name;
    }
}
// as city is not mentioned in constructor thus it has to be initialised in some way
const hitesh = new User("h@h.com", "hitesh");
// can also be done another way
//const hitesh= new User(email:"h@h.com",name:"hitesh")
//hitesh.city="delhi"
class user {
    constructor(email, name, userId) {
        this.email = email;
        this.name = name;
        this.userId = userId;
        this._courseCount = 1;
        this.city = "jaipur";
    }
    deleteToken() {
        console.log("token deleted");
    }
    // even method can be made private
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    // generally getter are designed to access private members 
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("course count should be more than 1");
        }
        this._courseCount = courseNum;
    }
}
// this is a better way of declaring class and this is how its done at proffesional level
class SubUser extends user {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
// protected also allows to inherit as well as keept it private
