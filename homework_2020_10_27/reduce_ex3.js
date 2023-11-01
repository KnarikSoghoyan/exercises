// You are given a two-digit integer n. Return the sum of its digits.

let integer = 58;

 function addDigits(num) {
    let res = String(num).split('')
    let result = res.reduce ((accum, value) => { return accum + parseInt(value) }, 0) 
    return result
 }

 console.log(addDigits(integer));

