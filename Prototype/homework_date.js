// Write function (with error handling and try-catch) that will return following string (see in date.json file) for 1 year
// With moment npm package
// With native Date

const fs = require ('fs');

let date1 = '01-01-2023'
let date2 = '12-31-2023'

function allDates(startDate, endDate) {
    let start = new Date(startDate);
    let end = new Date(endDate);

    try {
        if ((start.toString() === "Invalid Date")) {
            throw new Error("startDate is invalid")
        }
        if ((end.toString() === "Invalid Date")) {
            throw new Error("endDate is invalid")
        }
        let str = ''

        while (start < end) {
       
            let year = start.getFullYear();
            let month = start.getMonth()+1;
            let day = start.getDate();
            let hour = start.getHours();
    
            hour ++;
            start.setHours(hour)
    
            str += `(year = ${year}, month = ${month}, day = ${day}, hour = ${hour})\n`
        }
        return str

    } catch (error) {
        console.log(error.message);
        return { message: "Please enter correct date" }
    }
};

const result = allDates(date1, date2);

fs.writeFileSync ('myDates.json', result)
