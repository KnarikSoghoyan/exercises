// Syncronous

function min3numbers(numbers) {
    const num = numbers.filter (e => e>3)
    console.log(num);
}
min3numbers([1,2,3,4,5]);


// Asyncronous

function min3numbers (numbers,callBack) {
    callBack(numbers)
};

function filterNumbers (number) {
    const num = number.filter(e => e > 3)
    console.log(num);
};

const array = [1,2,3,4,5];
min3numbers (array, filterNumbers);

