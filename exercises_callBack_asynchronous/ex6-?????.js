// Даны пять файлов с числами. Выведите в консоль сумму этих чисел. 


const fs = require('fs');


let i = 0;
let sum = 0;


while (i < 5) {

    i++;

    fs.readFile(`num${i}.json`, 'utf8', (err, number) => {
        if (!err) {
            console.log( sum += parseInt(number) );
        }
    });

}


