// ARRAY METHODS

// push() -> add an element to the last
// pop() -> remove an element from the last
// find() -> it returns  first occurence of the matched value. (VALUE)
// findIndex -> it returns first occurence of the matched value (INDEX)
// indexOf() -> it returns the index of first occurence
// lastIndexOf() -> it returns the index of last occurence
// slice() -> removes few elements between (index)/ (index, length)
// splice() ->  add few elements in between the array
// shift() -> remove an element from first
// unshift() -> add an element to the first
// join() -> ARRAY -> STRING 
// split() -> STRING -> ARRAY OF STRINGS 

// PUSH
// var arr = [10, 50, 20, 30,40,30, 50, 60, 70];

// arr.push(100);
// console.log('Push:', arr);

// POP
// arr.pop();
// console.log('Pop: ', arr);

// FIND
// const findResult = arr.find((value, index) => {
//     return value > 30;
// });
// console.log('Find: ', findResult)

// //FINDINDEX
// const findIndexResult = arr.findIndex((value, index) => {
//     return value > 30;
// });
// console.log('Find Index: ', findIndexResult)

// var arr = [10, 50, 20, 30,40,30,30, 50, 60, 70, 30];
//INDEX OF
// const index = arr.indexOf(30); //index of first occurence -> 3
// console.log('IndexOf: ', index);


// //LAST INDEX OF 
// const lastIndex = arr.lastIndexOf(30); //index of last occurence -> 10
// console.log('LastIndexOf: ', lastIndex);


// SHIFT -> remove an element from first 
// arr.shift();
// console.log('SHIFT: ', arr);

// // UNSHIFT -> add element from first

// arr.unshift(5);
// console.log('UNSHIFT: ', arr);

// PUSH, POP, SHIFT, UNSHIFT, SPLICE -> manipulate/update existing array

// var arr = [10, 50, 20, 30,40,30,30, 50, 60, 70, 30];

// JOIN
// ARRAY -> STRING
// const result = arr.join('---');
// console.log('JOIN: ', result)
// console.log(typeof result);


// //SPLIT
// // STRING -> ARRAY
// const newArr = result.split('---');
// console.log('SPLIT: ', newArr);

// const resultInt = newArr.map((value) => {
//     return parseInt(value)
// })
// console.log('Int Output: ', resultInt);


// SLICE


// const result0 = arr.slice();
// console.log('Result 0: ', result0) // returns all elements

// const result1 = arr.slice(2); // if one parameter (INDEX),  from which index we are slicing
// console.log('Result 1: ', result1);

// const result2 = arr.slice(-5) // index from the last , always starts with -1
// console.log('Result 2: ', result2);

// const result4 = arr.slice(3, 7); // first param ->  index,  second-param -> length
// // 7-> length -> 10, 50, 20, 30, 40, 30, 30
// // 2 -> index -> 20, 30, 40, 30, 30
// console.log('Result4: ', result4);

// const result5 = arr.slice(3, -4); // length - 4
// // length - 1 -> 10, 50, 20, 30, 40, 30, 30, 50, 60, 70
// // 3 ->  30, 40, 30, 30, 50, 60, 70
// console.log('Result 5: ', result5)



// const result6 = arr.slice(-7, 10);
// // 10 -> 10, 50, 20, 30, 40, 30, 30, 50, 60, 70
// // -7 -> 40, 30, 30, 50, 60, 70, 30
// console.log(result6)

// const result7 = arr.slice(-2, 2);
// // 2 -> 10, 50
// // -2 ->  70, 30
// // []

// console.log(result7)


//SPLICE
var arr = [10, 50, 20, 30, 40, 30, 80, 50, 60, 70, 25]; 


// arr.splice(index, totalElementsToBeRemoved, value)
// arr.splice(4, 0, 1000);
// console.log(arr);

arr.splice(-5, 4, 'Hello');
//  -5 -> 80 50 60 70 25
//  4 -> 25 -> 'Hello' 25
//  10 50 25 30 40 30 'Hello' 25


// [10, 50, 20, 30, 40, 30, 80, 50, 60, 70, 25]
// [10, 50, 20, 30, 40, 30, 25]
// [10, 50, 20, 30, 40, 30, 'Hello', 25];

console.log(arr);