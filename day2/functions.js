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
var myAnonymousFunc = function(){
    return 'My Anonymous func'
};

const res = myAnonymousFunc();

console.log(res)


//Anonymous function

(function(){
        console.log('Executing the anonymous Func')
    })();

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

