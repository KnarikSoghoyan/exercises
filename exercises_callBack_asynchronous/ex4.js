// С помощью цикла создайте 10 файлов, содержащих целые числа от 1 до 10. 

const fs = require ('fs');

let number = 0;
while (number < 10) {
    number += 1;
    fs.writeFile(`file${number}.json`, JSON.stringify(number), function (err) {
        if(!err){
            return number
        };  
});
}
