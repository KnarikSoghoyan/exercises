// Дан файл с числом. Прочитайте этот файл и выведите в консоль квадрат этого числа. 

const fs = require ('fs');

const pi = fs.readFile ('number.txt', 'utf8', function (err, number){

    console.log(parseInt(number)**2);

});