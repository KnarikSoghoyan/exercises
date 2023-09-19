// Даны три файла с числами. Запишите в новый файл сумму этих чисел. 


// Syncrone

const fs = require ('fs');

const num1 = parseInt(fs.readFileSync ('num1.json', 'utf8'));
const num2 = parseInt(fs.readFileSync ('num2.json', 'utf8'));
const num3 = parseInt(fs.readFileSync ('num3.json', 'utf8'));

fs.writeFileSync ('num123', JSON.stringify(num1+num2+num3));





// Asyncrone  ??????????????


const fs = require('fs');


fs.readFile('num1.json', 'utf8', (err, data1) => {
    if (!err) {
        fs.readFile('num2.json', 'utf8', (err, data2) => {
            if (!err) {
                fs.readFile('num3.json', 'utf8', (err, data3) => {
                    if (!err) {
                        fs.writeFile('num123.json', JSON.stringify( parseInt(data1) + parseInt(data2) + parseInt(data3) ), (err) => {
                            if (err) {
                                console.log(err);
                            }
                        });
                    } else {
                        console.log(err);
                    }
                });
            } else {
                console.log(err);
            }
        });
    } else {
        console.log(err);
    }
});

