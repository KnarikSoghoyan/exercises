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
const less1000 = pubImpsLess1000(domainsList)

const domainPublisher = {}

less1000.forEach(e => {
    e.DateStamp = convertDateStamp(e.DateStamp)
    const key = `${e.Domain} - ${e.Publisher}`;
    domainPublisher[key] ? domainPublisher[key].push(e) : domainPublisher[key] = [e]
})

fs.writeFileSync("domainPublisher.json", JSON.stringify(domainPublisher, null, 2))

