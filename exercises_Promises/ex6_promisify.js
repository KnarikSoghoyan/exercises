const fs = require("fs");

function read() {
    return new Promise((resolve, reject) => {
        fs.readFile("number.txt", "utf-8", (err, result) => {
            if (err) {
                return reject(err)
            } else {
                resolve(result)
            }
        })
    })
}

console.log(read(), "read");

read()
.then (result => console.log(result));

setTimeout(function () {
    console.log(read(), "read")
},1000)
