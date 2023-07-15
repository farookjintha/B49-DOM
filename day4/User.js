// class User{
//     construtor(){
//         console.log('Hello');
//     }
//     name = 'Harish';

//     greetUser(){
//         console.log('Hello, How are you?')
//     }
// };

// class Car{
//     construtor(){
//         console.log('Hello');
//     }
// };

// class XMLHTTPRequest{
//     constructor(){
//         //logic
//     }
    
//     open(){
//         //logic
//     }

//     send(){
//         //logic
//     }
// }
// Function can be called using ()
// Class can be called by creating an object or instance.
// Obj can be created using 'new' keyword;

// const obj = new User();
// obj.greetUser();
// console.log(obj.name);

// const carObj = new Car();


class User{
    xyz = 'Sachin';
    constructor(username){
        this.xyz = username;
    }

    // constructor(){

    // }


    greetUser(){
        // console.log(`Hello, ${this.xyz}! Happy Weekend.`);
        console.log("Hello, " + this.xyz + "! Happy Weekend");
        this.getSomeGoodNews();
    }

    getSomeGoodNews(){
        console.log("You have got an offer at Microsoft (Bangalore)")
    }
}

const userObj = new User('Roger Federer'); // it creates an obj and calls constructor of the class
const lebronObj = new User('LeBron James'); // it creates an obj and calls constructor of the class

userObj.greetUser();

lebronObj.greetUser();

// this keyword refers to the immediate/ current refernce


// const myObj = new User();

// myObj.greetUser();
// console.log(myObj.xyz);

// Prototype -> metadata(info) of the object

// Everthing in JS is an object

// console.log('My Obj Details:')
// console.log(myObj.__proto__);
// console.log(User.prototype);

// console.log('My Obj Details:')
// console.log(userObj.__proto__);
// console.log(User.prototype);