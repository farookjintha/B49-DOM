
var userDetails = {
    name: 'Jhon',
    dob: '01/01/2010',
    city: 'Chennai',
    address: 'No.10, First Avenue, Besant Nagar, Chennai - 41',
    mobileNumber: '87654564324',
    bloodGroup: 'O +ve'
}


// For loop

// for (initialization; condition; incrementation/decrementation) -> Arrays
// for...in -> for(var index in arrayName){} (or) for(var key in objName){}
// for...of -> for(var value of arrayName){}

// i++ -> i = i + 1
// i-- -> i = i - 1
var numbers = [10, 20 ,30, 40 ,50 ,60, 70, 80, 90, 100];



for(var i = 0; i < numbers.length; i++){
    // console.log('Index: ' , i);
    // console.log('Value: ', numbers[i])

    // console.log('Index: ' + i + "; Value: " + numbers[i]);

    // console.log(`Index: ${i}; Value: ${numbers[i]}`);

    console.log(`Value: ${numbers[i]}; MulitpleOf5: ${numbers[i] * 5} `)

}


// for..in -> index (Array and Object)
// for..of -> value (Array)


for(var i in numbers){
    console.log(i);
    console.log(numbers[i]); //numbers[0]
}

for(var i in userDetails){
    console.log(i) // keys
    console.log(userDetails[i]) // values -> userDetails['name']
}


console.log('For Of..')
for(var value of numbers){
    console.log(value)
}

// for(var value of userDetails){
//     console.log(value)
// }


// Map... Reduce...Filter...ForEach;

// Spread / Rest Operator

var fruits = ['apple', 'mango', 'orange'];
var newFruits = ['lemon', 'banana', 'grapes']
var totalFruits = [...fruits, ...newFruits];

console.log(totalFruits);

//Rest Operator
function getUserDetails(...params){
    const username = params[0];
    const email = params[1];
    const address = params[2];

    if(username){
        console.log("Username: ", username);
    }
    if(email){
        console.log('Email: ', email)
    }
    if(address){
        console.log('Address: ', address);
    }
    
}

getUserDetails('karthik', 'karthik@gmail.com');
getUserDetails('preethi');
getUserDetails('priya', 'priya@gmail.com', 'Chennai');
