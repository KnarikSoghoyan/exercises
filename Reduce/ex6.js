// Given an array of words, group them by their length and count how many words have each length.

const words = ["apple", "banana", "cat", "dog", "elephant", "fox"];

function sortingByLength(array) {

    let result = array.reduce((accum, value) => {
        let key = value.length
        const arr = array.filter(e => e.length === key);
        let quantity = arr.length;
        accum[key] = quantity
        return accum
    }, {})

    return result
}

const sorted = sortingByLength(words);
console.log(sorted);


// Expected output:
// { ‘3’: 3, ‘5’: 1, ‘6’: 1, ‘8’: 1 }
