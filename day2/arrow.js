// Normal Function

function greetUser(username){
    console.log('Hello, ', username);
}

//Arrow Function without any paramter
const helloUser = () => {
    console.log('Hello')
}


// Arrow Function with paramater
const myFunc = (username) => {
    console.log('Hello, ', username);
}

const anotherFunction = (a, b) => {
    return a + b;
}

var result = anotherFunction(5, 7);
console.log('Result: ', result);
myFunc('Arun');

// Arrow Function ;
// Doesnt have function keyword
// has => symbol after the paramter
// assign with a name like a variable
// call it using its name like any function


//Anonymous Arrow Func

(() => {
    console.log('Calling Anonymous Arrow Func')
})();