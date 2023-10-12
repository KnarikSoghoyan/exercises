// Попробуйте прочитать несуществующий файл. Убедитесь, что при этом произойдет исключительная ситуация.
// Допишите ваш код так, чтобы он обрабатывал эту ситуацию. 

const fs = require('fs');

fs.readFile('havenot.json', 'utf8', function (err, data) {
    if (err) {
        console.log(err);
        return
    };
    console.log(data);
});

