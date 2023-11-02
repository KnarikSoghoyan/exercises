const person1 = {
    name: "Armen",
    surname: "Karapetyan",
    age: 23
};

const {name, surname, age} = person1                        // Version 1 
const person2 = {name, surname, age}  


// let person2 = {};                                           // Version 2
// for (const key in person1) {
//     person2[key] = person1[key]
// };

// const person2 = {...person1}                                // Version 3  Shallow copy

// const person2 = Object.assign ({}, person1)                 // Version 4  Shallow copy

// const person2 = structuredClone (person1)                   // Version 5  Deep copy

// const person2 = JSON.parse(JSON.stringify(person1))         // Version 6  Deep copy



person2.name = "Seda";
// person2.surname = "Poghosyan";
person2.age = 20;

console.log(person1);
console.log(person2);
