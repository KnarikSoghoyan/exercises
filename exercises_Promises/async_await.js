function getSmth(num) {
	return new Promise((resolve, reject) => {
		setTimeout(() => resolve(num * num), 1000)
	});
}

// function func() {                     it doesn't work, because getSmth is async
// 	let res = getSmth(2);
// 	console.log(res); // выведет 4
// }


async function func() {
	let res = await getSmth(2);
	console.log(res); // выведет 4
}

func();

// ___________________________________________________________________________________



// Давайте вызовем getSmth несколько раз:


function getSmth(num) {
	return new Promise((resolve, reject) => {
		setTimeout(() => resolve(num * num), 1000)
	});
}


async function func() {
	let res1 = await getSmth(2);
	let res2 = await getSmth(3);
	
	console.log(res1 + res2); // выведет 13
}

func();


// _______________________________________________________________________________________



// // А теперь будем вызывать getSmth в цикле:


function getSmth(num) {
	return new Promise((resolve, reject) => {
		setTimeout(() => resolve(num * num), 1000)
	});
};


async function func() {
	let arr = [1, 2, 3, 4, 5];
	let sum = 0;
	
	for (let elem of arr) {
		sum += await getSmth(elem);
	}
	
	console.log(sum);
};

func();

// _________________________________________________________________________



// Исключения в синхронном стиле в JavaScript

function getSmth(num) {
	return new Promise((resolve, reject) => {
		setTimeout(() => resolve(num * num), 1000)
	});
};


async function func() {
	try {
		let res = await getSmth(2);
		console.log(res);
	} catch (err) {
		console.log(err);
	}
}

func();


// ________________________________________________________________________________