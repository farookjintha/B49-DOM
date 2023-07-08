// DATATYPES
// Number
// String
// // boolean

// // var let const
// var name = 'John'
// var age = 10;
// var isEligibleToVote = false;

// // ARRAY

// var fruits = ['banana', 'apple', 'mango', 'lemon'];
// console.log(fruits[2])
// var marks = [200, 100];


// //OBJECT - JSON (Javascript Object Notation) -> key/value pair
// var employeeDetails = {
//     employeeID: 1,
//     name: 'John',
//     designation: 'Software Engineer',
//     address: 'Chennai, India'
// }

// // console.log(employeeDetails.employeeID);
// // console.log(employeeDetails['employeeID']);

// // console.log(document) //document = Object
// // console.log(window) //window = Object
// console.log('Fruits') // For in -> Index
// for(var xyz in fruits){
//     console.log(fruits[xyz])
// }

// console.log('Employee Details') // For in -> Key
// for(var abc in employeeDetails){
//     console.log(abc , employeeDetails[abc]) //employeeDetails['name'] = 'farook'
// }

// for(var xyz of fruits){
//     console.log('Fruits: ', xyz);
// }

// // for(var abc of employeeDetails){
// //     console.log(abc)
// // }


// //Copy by Value


// var myName = 'John';


// var employeeName = myName;

// console.log(employeeName);


// //Copy by reference

// var userDetails = {
//     name: 'john',
//     age: 30,
//     city: 'Chennai'
// }

// var employeeInfo = userDetails;

// console.log(employeeInfo.city);


var users = [{
    name: 'john',
    age: 30,
    city: 'Chennai'
},{
    name: 'karthik',
    age: 20,
    city: 'Coimbatore'
},{
    name: 'ram',
    age: 35,
    city: 'Bangalore'
}]

var newUsers = users;

console.log(newUsers[0]);