// Сделайте промис, который выполнится с успехом через некоторое время. 
// Выведите его в консоль и изучите его начальное состояние и завершенное.


let promise = new Promise(function(resolve, reject) {
	setTimeout(function() {
		const array = [1,2,3,4,5];
		
		if (array.includes(8)) {
			resolve('success');
		} else {
			reject('error');
		}
	}, 3000);
});

setInterval(function() {
	console.log(promise); 
}, 1000);
