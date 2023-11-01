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


person2.name = "Seda";
// person2.surname = "Poghosyan";
person2.age = 20;

console.log(person1);
console.log(person2);
