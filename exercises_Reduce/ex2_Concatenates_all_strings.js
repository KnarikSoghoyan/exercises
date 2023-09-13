const arr = ["Barev", "Sona", "jan"];
const concat = arr.reduce ((accum, elem)=>
    accum + `${elem} `, "");
console.log(concat);