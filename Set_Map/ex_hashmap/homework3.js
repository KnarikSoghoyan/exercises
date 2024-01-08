// Պետք է վերադարձնել այն Դոմեյնները որոնք երեք ժամ անընդմեջ ունեն >=1000 pubimps:
// Վերադարձվող տվյալներում պետք է Ժամը լինի YYYY-dd-mm ֆորմատով
// If you need to check date go to  https://www.epochconverter.com/ and add there Datestamp +  00.

const lodash = require('lodash');
const fs = require('fs');
const domains = require('./data.json');
const { convertDateStamp } = require('./convertDate.js')

const domainsList = lodash.orderBy(domains, 'DateStamp');

function pubImpsLess1000(arr) {
    let count = 0
    const result = []

    arr.forEach((elem) => {
        if (elem.PubImps < 1000) {
            count++
        } else {
            count = 0
        }

        if (count >= 3) {
            result.push(elem)
        }
    })
    return result
}
const less1000 = pubImpsLess1000(domainsList)        //.forEach(e => e.DateStamp = convertDateStamp(e.DateStamp))

const grouped = lodash.groupBy(less1000, 'Domain');

// fs.writeFileSync("lessThen1000.json",JSON.stringify(less1000,null,2))
fs.writeFileSync("grouped.json", JSON.stringify(grouped, null, 2))
