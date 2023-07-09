// HOISTING - scope of the variable goes to the top 

// VAR - it can be re-assigned and redeclared (Supports Hoisting)
// LET - it can be re-assigned but cannot be redeclared (Doesnt support hoisting)
// CONST - it cannot be re-assigned and cannot be redeclared. (Doesnt support hoisting)

console.log('Name: ', name);
// console.log('City: ', city);
// console.log('Email : ', email);

var name = 'Farook';
let city = 'Chennai';
const email = 'farook@gmail.com';

console.log('Name: ', name)
console.log('City: ', city)
console.log('Email: ', email);
let number;
if(city = 'Chennai'){
    number = 100;
    const value = 'xyz';
    var mobile = '1234555666';
}

// console.log(number);
// console.log(mobile);
// console.log(value);
// SCOPES

// 1 Block Scope - let and const
// 2 Functional Scope - let, var, const
// 3 Global Scope - var

function myFunc(){
    let value1 = 'abc';
    var value2 = 'xyz';
    const value3 = 'pqr';
    console.log(value1)
    console.log(value2)
    console.log(value3)
}

myFunc();

// console.log(value1)
// console.log(value2)
// console.log(value3)



// To commit our changes to existing 
// git add .
// git commit -m 'commit msg'
// git push


