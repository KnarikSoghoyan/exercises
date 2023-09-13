// GIven Array of numbers. Write a function that calculates the sum of all numbers in an array

const arr = [1,2,3,4,5,6,7,8,9,10];
const sum = arr.reduce ((accum, elem)=> accum += elem);
console.log (sum)