// Create a function that takes an array of strings and return an array, sorted from shortest to longest.

function findMinLength(arr){
  let minEl = arr[0];
  for (let i = 1; i < arr.length; i++) {
  if (arr[i].length < arr[0].length ) {
    minEl = arr[i]
  } 
}
return minEl
};

function sortByLength(array) {
  const temp = []
  for (let i = 0; i < array.length; i++) {
    temp.push(findMinLength(array)),
    delete array[i]
  }
return temp
};

console.log(sortByLength(["Google", "Apple", "Microsoft"]))   // ["Apple", "Google", "Microsoft"]
console.log(sortByLength(["Leonardo", "Michelangelo", "Raphael", "Donatello"]))   // ["Raphael", "Leonardo", "Donatello", "Michelangelo"]
console.log(sortByLength(["Turing", "Einstein", "Jung"]))    //["Jung", "Turing", "Einstein"]

