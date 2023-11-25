// Create a function that takes a number as an argument and returns the highest digit in that number.

function findMax(arr){
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[0] ) {
      max = arr[i]
    } 
  }
  return max
};

function highestDigit(num) {
  const tempArr = String(num).split('');
  return findMax(tempArr)
}

console.log(highestDigit(379))          //  9
console.log(highestDigit(2))            //  2
console.log(highestDigit(377401))       //  7