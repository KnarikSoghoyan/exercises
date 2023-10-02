// Дан файл с числом. Прочитайте этот файл и выведите в консоль квадрат этого числа. 

const fs = require('fs').promises;

fs.readFile('number.txt', 'utf8')
    .then(number => console.log(parseInt(number) ** 2));

// _____________________________________________________________________________________________




// Проверьте, что код после метода readFile будет выполнен раньше, чем будет прочитан файл. 

const fs = require('fs').promises;

fs.readFile('number.txt', 'utf8')
    .then(pi => console.log(pi));

console.log('check');

// _____________________________________________________________________________________________




// Попробуйте прочитать несуществующий файл. Убедитесь, что при этом произойдет исключительная ситуация.
// Допишите ваш код так, чтобы он обрабатывал эту ситуацию. 

const fs = require('fs').promises

fs.readFile('havenot.json', 'utf8')
.catch(err => console.log("error is", err));


// _____________________________________________________________________________________________




// С помощью цикла создайте 10 файлов, содержащих целые числа от 1 до 10. 

const fs = require('fs').promises

let number = 0;
while (number < 10) {
    number += 1;

    fs.writeFile(`file${number}.json`, JSON.stringify(number))
        .then(number)
        .catch(err => console.log(err))
}

// _____________________________________________________________________________________________




// Даны пять файлов с числами. Выведите в консоль сумму этих чисел. 

const fs = require('fs').promises

const promises = [

fs.readFile(`num1.json`, 'utf8'),
fs.readFile(`num2.json`, 'utf8'),
fs.readFile(`num3.json`, 'utf8'),
fs.readFile(`num4.json`, 'utf8'),
fs.readFile(`num5.json`, 'utf8')

]

Promise.allSettled(promises).then(res => {
    const result = res.reduce((accum, element) => accum + parseInt(element.value), 0);
    console.log(result)
});


// _____________________________________________________________________________________________