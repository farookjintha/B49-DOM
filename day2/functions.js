//Function - Block of code that does something which is called whenever needed.


//Function Definiton/Implementation
//Normal Function
function greetings(){
    console.log('Hello World')
};

//Paramaterized Function -> Parameter / Attribute
function greetUser(username){
    console.log('Hello, ', username);
}

function creditSalary(employeeId, bankAccountNo, IFSCCode, amount){
    //
}

//Function Call

greetings();

greetUser('John');

greetUser('Karthik');

greetUser('Priya');


creditSalary(12345, '00001111000', 'HDFC0001', '50000.40');


//Parameterized Function
function addNumber(a, b){
    console.log(a + b);
}

//Function that returns a data
function addNumberandReturn(a, b){
    return a + b;
}

addNumber(5, 2);
var result = addNumberandReturn(4, 6);
console.log(result);

//Anonymous function assigned to a variable
// var myAnonymousFunc = function(){
//     return 'My Anonymous func'
// };

// const res = myAnonymousFunc();

// console.log(res)


//Anonymous function - IIFE - > Immediately Invoked Func Expression

// (function(){
//         console.log('Executing the anonymous Func')
//     })();

// (() => {
//         console.log('Executing the anonymous Func usin Arrow Func')
//     })();

// (function(){
//     console.log('Executing the anonymous Func')
// })();

// myAnonymousFunc();

// console.log(myAnonymousFunc)


// Types of Function


// Named -> Function that has a name
// Anonymous and Immediately called -> 
// Arrow
// Normal
// Parameterized Function

// function funcName(){

// }

// const myFunc = () => {
//     //logic
//     let x = 5;
//     let name = 'XYZ';
//     let city = 'Chennai';

//     console.log('Name: ', name);
// };

// const myFunc2 = () => {
//     let x = 10;
//     let name = 'Karthik';
//     let city = 'Trichy';

//     return name
// }

// myFunc();

var empId = 12345;
var salary = 50000;
var empName = 'Arun';
var empDesignation = 'Software Engineer';
var empAddress = 'Chennai, India';


const salaryUpdate = (hikePercentage) => {
    incrementAmount = 50000 * (hikePercentage / 100); // 50000/20 -> 2500
    salary = salary + incrementAmount; // 50000 + 2500 = 52500
}


salaryUpdate(10);

console.log("Salary: ", salary);


const getEmpDetails = () => {
    let employee = {
        id: empId,
        name: empName,
        designation : empDesignation,
        salary: salary,
        address: empAddress
    }

    return employee;
}


const employeeDetails = getEmpDetails(); // {}

console.log('Emplyee Details: ', employeeDetails);



// console.log('Emplyoee Details: ', getEmpDetails());


// const myName = myFunc2();

// console.log('My Name: ', myName);
// console.log('My Name2: ', myFunc2());
