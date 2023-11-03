/* Create a function called calculate that takes two numbers and 
performs a mathematical operation specified by a callback function. 
Use the call method to pass the arguments to the callback function. */

function calculate (num1, num2) {                 
    return function callBack () {
        return num1 + num2        
    }
};
let calc = calculate(3,5)()
// let calc = calculate().call(3,5)                  // can't
console.log(calc);

