// Given a year, return the century it is in. The first century spans from the year 1 up to and 
// including the year 100, the second - from the year 101 up to and including the year 200, etc.

const { arabToRoman } = require('roman-numbers')

let thisYear = 2201;

function returnCentury1(year) {

    if (year <= 0) {
        return "Were you born `before christ`?"
    };

    let century;
    if (year % 100 === 0) {
        century = year / 100
    } else {
        century = parseInt((year / 100) + 1)
    };

    return `It's ${arabToRoman(century)} century`
}


function returnCentury2(year) {
    if (year <= 0 || Number.isInteger(year) === false) {
        return "This year must be positive and integer number"
    };

    const temp = Object.entries(String(year))

    let str = ""
    for (let i = 0; i < temp.length - 2; i++) {
        str += temp[i][1];
    };

    let century;
    if (temp[(temp.length - 1)][1] == 0 && temp[(temp.length - 2)][1] == 0) {
        century = Number(str)
    } else {
        century = Number(str) + 1
    };

    return `It's ${arabToRoman(century)} century`
}

console.log(returnCentury1(thisYear));
console.log(returnCentury2(thisYear));