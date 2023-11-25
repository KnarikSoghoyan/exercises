// Create a function that returns true if the first array can be nested inside the second and false otherwise.
// arr1 can be nested inside arr2 if:
//     1. arr1's min is greater than arr2's min.
//     2. arr1's max is less than arr2's max.


function canNest(arr1, arr2) {
  if ((Math.min(...arr1) > Math.min(...arr2)) && (Math.max(...arr1) < Math.max(...arr2))) {
    return true
  }
  return false
}


console.log(canNest([1, 2, 3, 4], [0, 6]))      //  true
console.log(canNest([3, 1], [4, 0]))            //  true
console.log(canNest([9, 9, 8], [8, 9]))         //  false
console.log(canNest([1, 2, 3, 4], [2, 3]))      //  false
