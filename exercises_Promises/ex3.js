// метод catch:

let promise = new Promise(function(resolve, reject) {
	setTimeout(function() {
		let isError = 1;
		
		if (isError===0) {
			resolve('success');
		} else {
			reject('error');
		}
	}, 3000);
});


promise.catch(
	err => console.log(err)
);

