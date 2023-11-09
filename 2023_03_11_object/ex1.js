// Write a JavaScript function to check whether an object contains a given property.

function check1(obj, property) {
    return obj.hasOwnProperty(property)
};

function check2(obj, property) {
    return property in obj
};

function check3(obj, property) {
    let keys = Object.keys(obj)
    return keys.includes(property)
};

const object1 = {
    name: "Poghos",
    surname: "Poghosyan"
};
const object2 = {
    name: "Poghos",
    age: 30
};

console.log(check1(object1, "name"))
console.log(check1(object2, "surname"))

console.log(check2(object1, "name"))
console.log(check3(object2, "name"))

