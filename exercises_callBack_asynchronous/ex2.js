// Проверьте, что код после метода readFile будет выполнен раньше, чем будет прочитан файл. 

const fs = require ('fs');

fs.readFile('number.txt', 'utf8', function(err, pi) {
	console.log(pi);
});

console.log('check');