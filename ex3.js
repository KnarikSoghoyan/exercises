// Write a function that flattens a nested array.  
// we have this array const nestedArray = [[1, 2], [3, 4], [5, 6]]. , need result like this [1, 2, 3, 4, 5, 6]

const nestedArray = [[1, 2], [3, 4], [5, 6]];
const flattenedArray = nestedArray.reduce((accum, elem)=>
    accum.concat(elem)
);
console.log(flattenedArray);




const flattenedArray2 = nestedArray.flat()
console.log(flattenedArray2);
