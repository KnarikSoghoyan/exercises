// Given array of Objects. If each Domain-Publisher has 3 consecutive hours with less than 1000 pub 
// imps per hour. (Given data is  by hour (see dateStamp))
// If you need to check date go to  https://www.epochconverter.com/ and add there Datestamp +  00.
// You need to return all values and instead of Datestmp return Date (you can convert datestmp 
// to regular data in moment (format yyyy-dd-mm)) (edited) 

const data = require('./data.json')
const { convertDateStamp } = require('./convertDate.js')

const domainPublisher = {}
console.log(data[0].date);

data.forEach((e, i) => {
    e.DateStamp = convertDateStamp(e.DateStamp)
    const key = `${e.Domain} - ${e.Publisher}`

    // newDate = new Date (e.date).getHours()
    // if (data[i+2].date - data[i+1].date === 1 && data[i+1].date - data[i].date === 1 ) {

    // }

    if (e.PubImps > 1000) {
        domainPublisher[key] ? domainPublisher[key].push(e) : domainPublisher[key] = [e]
    }
})
console.log(domainPublisher);
// console.log(Object.keys(domainPublisher).length);   


