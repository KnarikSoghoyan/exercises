// Даны пять файлов с числами. Выведите в консоль сумму этих чисел. 


const fs = require('fs');

let i = 0;
let sum = 0;

while (i < 5) {
    i++;
    fs.readFile(`num${i}.json`, 'utf8', (err, number) => {
        if (!err) {
            sum += parseInt(number);
        }
    });
};

setTimeout (()=> {
    console.log(sum);
}, 2000)                                  // ete while cikly 2 varkyanic avel ashxati, kod@ chi ashxati

