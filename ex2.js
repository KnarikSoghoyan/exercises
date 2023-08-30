// Given Array of string ,  write a function that concatenates all strings in an array

const arr = ["Barev", "Sona", "jan"];
const concat = arr.reduce ((accum, elem)=>
    accum + `${elem} `, "");
console.log(concat);