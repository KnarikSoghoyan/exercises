// 1. Given an array of numbers, use a Set to efficiently remove duplicate elements.

function removeDublicates1(arr) {
    const mySet = new Set(arr); 
    return [...mySet]
}

function removeDublicates2(arr) {  
    const mySet = new Set(arr); 
    const newArr = []
    mySet.forEach((value) => {
        newArr.push (value)
      });
    return newArr
}

const myArray = [1,2,6,4,5,4,1];
console.log(removeDublicates1(myArray));
console.log(removeDublicates2(myArray));