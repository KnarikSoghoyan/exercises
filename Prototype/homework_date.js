// Write function (with error handling and try-catch) that will return following string (see in date.json file) for 1 year
// With moment npm package
// With native Date

let date1 = '01-01-2023'
let date2 = '01-04-2023'

function allDates(startDate, endDate) {
    let start = new Date(startDate);
    let end = new Date(endDate);

    try {
        if ((start.toString === "Invalid Date") || (end.toString === "Invalid Date")) {
            throw new Error("startDate is invalid")
        }

    } catch (error) {
        console.log(error.message);
        return { message: "Please enter correct date" }
    }

    let year = start.getFullYear();
    let month = start.getMonth() + 1;
    let day = start.getDate();
    let hour = start.getDate();

    while (start < end) {
        console.log(`(year = ${year}, month = ${month}, day = ${day}, hour = ${hour})`);
        hour++;
        start.setHours(hour)
    }

}
console.log(allDates(date1, date2));