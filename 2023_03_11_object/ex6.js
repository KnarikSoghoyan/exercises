// Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.
// Example:
// For inputArray = [3, 6, -2, -5, 7, 3], the output should be 21


const inputArray = [3, 6, -2, -5, 7, 3];

function largestProduct(arr) {

    const products = []
    for (let i = 0; i < arr.length - 1; i++) {
        products.push(arr[i] * arr[i + 1])
    }
    return Math.max(...products)
};

console.log(largestProduct(inputArray));