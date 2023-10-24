// Write  sort  with for loop (will take array as a parameter and return sorted array)

const numbers1 = [3, 5, 4, 6, 2, 1];               //can't do it

function sort(array) {
    
    let sortedArray = []
    let i = 1;
    let minimum = array[0]

    while (i < array.length) {
        if (array[i] < minimum) {
            minimum = array[i]
            array.slice(i, i + 1)
            sortedArray.push[minimum];
        }
        i++
    }
    return sortedArray
};

console.log(sort(numbers1));

// _________________________________________________________________________________________



// Write reduce function in for loop (foreach)

const numbers2 = [1, 2, 3, 4, 5]

function reduce(arr) {
    let accum = 1
    for (let index = 0; index < arr.length; index++) {
        accum = arr[index] * accum
    }
    return accum

}
console.log(reduce(numbers2))

// ___________________________________________________________________________________



// Write filter function in for loop


const numbers3 = [3, 5, 4, 6, 2, 1];

// function filter(arr) {
//     const filterArray = [];
//     arr.forEach(e => {

//         if (e % 2 === 0) {
//             filterArray.push(e)
//         }
//     });
//     return filterArray
// }


// or


function filter(arr) {
    const filterArray = [];
    let i = 0;
    while (i < arr.length) {
        if (arr[i] % 2 === 0) {
            filterArray.push(arr[i])
        }

        i++
    }
    return filterArray
}

console.log(filter(numbers3));

// _____________________________________________________________________________________


// Write split

const string = 'Never give up';

function split(str, method) {

    const arr = [];
    arr.push(str);

    if (!method) {
        return arr
    };

    if (method === ' ') {
        const newArr = []
        //    return str.length
        for (let index = 0; index < str.length; index++) {
            newArr.push(str[index])
        }
        return newArr
    }
}

console.log(split(string, ' '))

// ________________________________________________________________________________________


// Write splice

const array1 = [10, 20, 30, 40, 50, 60, 70, 80, 90]

function splice(arr, index, quantity, add1, add2) {
    arr.forEach((e, i) => {
        if (i === index) {
            d = 0;
            if (quantity !== 0) {
                while (d < quantity) {
                    delete arr[i + d]
                    d++
                }
            } else {
                while (d < arr.length) {
                    delete arr[i + d]
                    d++
                }
            }
            arr[i] = add1,
                arr[i + 1] = add2
        }
    });
    return arr
}

console.log(splice(array1, 3, 5, 400, 500));

// ___________________________________________________________________________________



// Write toString

const mixedArray = [1, 2, 'a3', '2', 0, 'b'];

function toString(arr) {
    let text = ''
    arr.forEach(e => {
        text = text + String(e) + ','
    })
    return text
}
console.log(toString(mixedArray));

// ______________________________________________________________________________________________


// Write join (edited) 

const array = ['Never', 'give', 'up'];

function join(arr, method) {

    let string = arr[0]

    for (let i = 1; i < array.length; i++) {
        string = string + method + arr[i]
    }

    return string
};

console.log(join(array, '_'));

// _____________________________________________________________________

