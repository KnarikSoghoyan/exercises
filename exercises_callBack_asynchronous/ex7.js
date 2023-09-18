// Дан файл с числом. Запишите в этот файл квадрат этого числа. 

const fs = require('fs');

fs.readFile('n.json', 'utf8', (err, data1) => {

    if (!err) {
        let data2 = data1 ** 2
        fs.writeFile('n.json', JSON.stringify(data2), (err) => {
            if (err) {
                console.log("error of writing file", err)
            }
        });

    } else {
        console.log("error of reading file", err)
    }
});