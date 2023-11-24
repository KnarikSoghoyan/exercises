// Create a function that returns true if the first array can be nested inside the second and false otherwise.
// arr1 can be nested inside arr2 if:
//     1. arr1's min is greater than arr2's min.
//     2. arr1's max is less than arr2's max.

function findMin(arr){
  let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[0] ) {
      min = arr[i]
    } 
  }
  return min
};

function findMax(arr){
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[0] ) {
      max = arr[i]
    } 
  }
  return max
};

function canNest(arr1, arr2) {
  return(findMin(arr1) > findMin(arr2)) && (findMax(arr1) < findMax(arr2))
}

console.log(canNest([1, 2, 3, 4], [0, 6]))      //  true
console.log(canNest([3, 1], [4, 0]))            //  true
console.log(canNest([9, 9, 8], [8, 9]))         //  false
console.log(canNest([1, 2, 3, 4], [2, 3]))      //  false

