// Given an object or an array, return if it is empty.
// An empty object contains no key-value pairs.
// An empty array contains no elements.

function checkIfEmpty(obj_arr) {
    if (Array.isArray(obj_arr)) {
        return obj_arr.length === 0 ? true : false  
        // or
        // return obj_arr.length ? false : true
    } else {
        return Object.keys(obj_arr).length === 0 ? true : false  
        // or
        // return Object.keys(obj_arr).length ? false : true  
    }
  };


const array1 = ["Anna", "Sahakyan", 35];
const array2 = [];
const object1 = {
    name: "Anna",
    surname: "Sahakyan",
    age: 35
};
const object2 = {}

console.log(checkIfEmpty(array1));
console.log(checkIfEmpty(array2));
console.log(checkIfEmpty(object1));
console.log(checkIfEmpty(object2));



// function checkIfEmptyOLD(obj) {
//     if (Array.isArray(obj)) {
//         return obj.length === 0 ? true : false
//     };

//     if (typeof (obj) === "object") {
//         return Object.keys(obj).length === 0 ? true : false
//     }
// };
