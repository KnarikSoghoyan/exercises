/*  Write a function called greet that takes a name as an argument and logs a 
greeting message with the name. Use call and apply to invoke the greet function.  */


function greet(name, nickname) {
    return `Hi, my dear ${name}, you were born in ${2023 - this.age} and fill 
    my life with happiness. :)  Love you, my ${nickname}!`
};

const eldestDaughter = {
    surname: "Torosyan",
    age: "13"
};
const youngestDaughter = {
    surname: "Torosyan",
    age: "9"
};

// console.log(greet.call(eldestDaughter , "Bella", "Sunny"))
// console.log(greet.call(youngestDaughter, "Victoria", "Cuty"))

// console.log(greet.apply(eldestDaughter , ["Bella", "Sunny"] ))
// console.log(greet.apply(youngestDaughter, ["Victoria", "Cuty"] ))

console.log(greet.bind(eldestDaughter)("Bella", "Sunny"))
console.log(greet.bind(youngestDaughter)("Victoria", "Cuty"))