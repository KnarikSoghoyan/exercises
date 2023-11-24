// Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.


function minMax(arr) {
  const temp = []
  let min = arr[0];
  let max = arr[0];
  arr.forEach(e => {
    (e <= min) ? min = e : max = e
  });
  temp.push(min, max)
  return temp
}

console.log(minMax([1, 2, 3, 4, 5]));   //  [ 1, 5 ]
console.log(minMax([2334454, 5]));      //  [ 5, 2334454 ]
console.log(minMax([1]));               //  [ 1, 1 ]
