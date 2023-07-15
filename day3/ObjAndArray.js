const values = [10, 20, 30];

const userDetails = {
    name: 'Priya',
    city: 'Bangalore',
    profession: 'Doctor'
};


// Destructuring:

const value1 = values[0];
const value2 = values[1];
const value3 = values[3];


const name1 = userDetails.name;
const city2 = userDetails.city;
const profession3 = userDetails.profession;



// Obj Destructuring:

const {name, profession, city} = userDetails;
// userDetails.name

console.log('NAme: ', name);
console.log('NAme: ', userDetails.name);


const [y1, y2, y3] = values;

console.log('Value: ', values[0])
console.log('Value: ', y1);

// Property Shorthand: (Obj)

let username = 'Akash';
let age = 20;
let address = 'Coimbatore, TN';
let college = 'PSG';
let degree = 'B.E. - Computer Science and Engineering';

//Property Shorthand
var studentDetails = {
    name: username,
    age, // age: age -> age
    address,
    college,
    degree: degree
}

console.log('Student Details: ', studentDetails)