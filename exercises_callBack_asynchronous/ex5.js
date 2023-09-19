// Даны три файла с числами. Выведите в консоль сумму этих чисел. 


const fs = require('fs');

fs.readFile('num1.json', 'utf8', (err, num1) => {
    if (!err) {

        fs.readFile('num2.json', 'utf8', (err, num2) => {
            if (!err) {

                fs.readFile('num3.json', 'utf8', (err, num3) => {
                    if (!err) {
                        console.log( (+num1) + (+num2) + (+num3) );
                    }
                });
            }
        });
    }
});