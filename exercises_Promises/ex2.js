// Сделайте асинхронный код, который будет генерировать случайные числа от 0 до 5. 
// Оберните все это в промис. Пусть промис своим возвращает результат деления 
// единицы на сгенерированное число. Пусть промис выполнится с ошибкой, если 
// произошло деление на ноль, и с успехом во всех остальных случаях.


let promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let number = parseInt(Math.random() * (5 + 1) + 0)
        if (number===0) {
            reject ("the number is not divisible by zero")
            // reject (new Error ("the number is not divisible by zero"))
            // throw new Error ("the number is not divisible by zero")
        } else {
            resolve (number)
        };
    }, 10)
});

promise.then(function (result) {
       console.log(1/result)
    }, function (error) {
        console.log(error)
    });




// let promise = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         let number = parseInt(Math.random() * (5 + 1) + 0)
//         if (number===0) {
//             throw new Error ("the number is not divisible by zero")    //doesn't work, why?
//         } else {
//             resolve (number)
//         };
//     }, 10)
// });

// promise.then(function (result) {
//        console.log(1/result)
//     }, function (error) {
//         console.log(error)
//     });