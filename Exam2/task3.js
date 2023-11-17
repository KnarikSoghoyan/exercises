// Create a function that takes an array of strings and return an array, sorted from shortest to longest.

function sortByLength(arr) {
  return arr.sort((a, b) => { return (a.length - b.length) })
}

console.log(sortByLength(["Google", "Apple", "Microsoft"]))   // ["Apple", "Google", "Microsoft"]
console.log(sortByLength(["Leonardo", "Michelangelo", "Raphael", "Donatello"]))   // ["Raphael", "Leonardo", "Donatello", "Michelangelo"]
console.log(sortByLength(["Turing", "Einstein", "Jung"]))    //["Jung", "Turing", "Einstein"]

