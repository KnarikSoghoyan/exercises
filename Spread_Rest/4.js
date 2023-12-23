// Create a function that uses the rest parameter to accept any number of arguments and returns their sum.

function sumOfArgs(...args) {
  let sum = 0;
  args.forEach(e => {
    sum += e
  })
  return sum
}
console.log(sumOfArgs(2,4,6,8));