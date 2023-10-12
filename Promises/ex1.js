// Сделайте промис, внутри которого будет задержка в 5 секунд, после которой 
// промис должен выполнится, своим результатом вернув какой-нибудь текст. 
// Выведите этот текст на экран.

let promise = new Promise (resolve=>{
    setTimeout(()=>{
        resolve ( "Hello world!")
    },5000)
});
promise.then (function(result){
    console.log(result);
});
