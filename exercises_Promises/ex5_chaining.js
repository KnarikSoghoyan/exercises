// Code.mu

// let promise = new Promise(resolve => {
//     setTimeout(function () {
//         resolve("Knarik");
//     }, 1000)
// });

// promise.then(result => {
//     return result + " Soghoyan";
// })

//     .then(result => {
//         return new Promise(resolve => {
//             resolve(result + " Arthur")
//         });
//     })

//     .then(result => {
//         return result + " 87"
//     })

//     .then(result => {
//         console.log(result);
//     });



// // Sona Lesson

// const fs = require('fs');

// function read() {
//     return new Promise((resolve, reject) => {
//         fs.readFile('number.json', 'utf-8', (err, result) => {
//             if (err) {
//                 return reject(err)
//             }
//             resolve(result)
//         })
//     })
// };

// read()
//     .then(res1 => JSON.parse(res1))
//     .then(res2 => console.log(typeof (res2)))                   //   Ktpi number.json fayli mijini type-@
//     .catch(error => console.log('error is', error))             //   Ete number.json fayl chgtni, ktpi error



    	
// new Promise(function(resolve, reject) {

//     setTimeout(() => resolve(1), 1000); // (*)
  
//   }).then(function(result) { // (**)
  
//     console.log(result); // 1
//     return result * 2;
  
//   }).then(function(result) { // (***)
  
//     console.log(result); // 2
//     return result * 2;
  
//   }).then(function(result) {
  
//     console.log(result); // 4  
//   });


  	
new Promise(function(resolve, reject) {

    setTimeout(() => resolve(1), 1000);
  
  }).then(function(result) {
  
    console.log(result); // 1
  
    return new Promise((resolve, reject) => { // (*)
      setTimeout(() => resolve(result * 2), 1000);
    });
  
  }).then(function(result) { // (**)
  
    console.log(result); // 2
  
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(result * 2), 1000);
    });
  
  }).then(function(result) {
  
    console.log(result); // 4
  
  });