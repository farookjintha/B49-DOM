// ARRAY FUNCTIONS

// MAP... REDUCE... FILTER... FOREACH ->  built-in methods/functions for array
let arr = [1, 2 ,3 ,4 ,5];
// Map -> iterates each element in an array and returns a new array
// ForEach -> iterates each element in an array, but it doesnt return anything.
// Filter -> iterates each element in an array, but returns an array with matching elements
// Reduce -> iterates each elements in an array, but returns only a single value


var result1 = arr.map((value) => {
    console.log('Value inside Map: ', value * 5);
    return value * 5
})

console.log('Result 1: ', result1);

arr.forEach((value) => {
    console.log('Value inside ForEach: ', value)
});

// console.log('Result 2: ', result2);

var result3 = arr.filter((value) => {
    if(value % 2 !== 0){
        return value;
    }
})
console.log('Result 3 (Filter): ', result3)

//Removing the duplices using Filter
var sampleArr = [10, 12, 10, 13, 11, 13, 17]

var result4 = sampleArr.filter((value, currentIndex) => {
    if(sampleArr.indexOf(value) === currentIndex){
        return value;
    }
})

var repeatingNumber = sampleArr.filter((value, currentIndex) => {
    if(sampleArr.indexOf(value) !== currentIndex){
        return value;
    }
})


console.log('Unique Values: ', result4)
console.log('Repeating Values: ', repeatingNumber)

// indexOf -> first occurence index will be given, incase of multiple values

// value -10, index - 0
// indexOf(10) - 0 //true

// value- 12 index- 1
// indexOf(12) - 1 //true

// value - 10 index - 2
// indexOf(10) - 0 // false

// value (13) index- 3
// indexOf(13) - 3 // true

// value- 11 index - 4
// indexOf(11) - 4 //true

// value 13 index- 5
// indexOf(13) - 3 //false

// value 17 index- 6
// indexOf(17) - 6 // true



let values = [2, 4, 5, 6 ,7 ,8];

const result5 = values.reduce((sum, currentValue) => {
    return sum + currentValue
});

console.log('Sum: ', result5);

// acc - 2 current - 4
// acc + currentValue = 6 -> acc

// acc - 6 current - 5
// acc + currentValue = 11 -> acc

// acc - 11 current - 6
// acc + currentValue = 17 -> acc

// acc - 17 current - 7
// acc + currentValue = 24 -> acc

// acc - 24 current - 8
// acc + currentValue = 32 -> acc



// arr.reduce((acc, current) => {
//     //logic
// }, intialAccumulator)


//Sum with initial accumulator 
const result6 = values.reduce((product, currentValue) => {
    return product * currentValue
}, 100);

console.log('Product: ', result6);

let newArr = [10, 11, 20, 7, 20, 21];
// Max Value using Reduce
var maxValue = newArr.reduce((max, currentValue) => {
    if(max > currentValue){
        return max;
    }else{
        return currentValue;
    }
})
//Min Value using Reduce
var minValue = newArr.reduce((min, currentValue) => {
    if(min < currentValue){
        return min;
    }else{
        return currentValue;
    }
})

console.log('Maximum: ', maxValue);
console.log('Minimum: ', minValue);


// max - 10, current - 11  -> MAX - 11
// max - 11 current - 20 -> MAX - 20
// max - 20 current 7 -> MAX - 20
// max- 20 current - 21 -> MAX - 21

// MAX - 21