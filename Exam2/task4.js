// Create a function that takes a number as an argument and returns the highest digit in that number.

function highestDigit(num) {
  const tempArr = String(num).split('');
  return Math.max(...tempArr)
}

console.log(highestDigit(379))          //  9
console.log(highestDigit(2))            //  2
console.log(highestDigit(377401))       //  7