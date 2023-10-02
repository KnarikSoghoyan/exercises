// №1  Make a function that returns a promise with a random delay between 
// 1 and 10 seconds inside it. Let the result of the promise return this delay. 
// With a loop and your function, fill the array with 10 promises.

// №2  Using the array of promises from the previous task, make sure that the 
// result of the first triggered promise is displayed in the console.

// №3  Using the array of promises from the previous task, print the sum of the 
// results of all promises to the console.


function DELAY() {
    return new Promise(resolve => {
        let delay = parseInt(Math.random()*10000 + 1)
        setTimeout(() => resolve(delay), delay);
    })
};

num = 0;
const promises = [];
while (num < 10) {
    num ++;
    promises.push(DELAY(num)) 
};

Promise.all(promises).then(res=> console.log(res));
Promise.race(promises).then(res=>console.log(res));
Promise.all(promises).then(res=> console.log(res.reduce ((accum, sum)=>(accum+=sum),0)));

// ___________________________________________________________________________________________________

