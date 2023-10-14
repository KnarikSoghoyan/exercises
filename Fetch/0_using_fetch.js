// source - https://deadsimplechat.com/blog/nodejs-fetch-api/


fetch('https://jsonplaceholder.typicode.com/posts/4')
.then(res=> res.json())
.then(data=>console.log(data))
.catch(err=>{
    console.log("error occured", err)
});


// asynchronous


(async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/4');
  if(res.ok){
      const data = await res.json();
      console.log(data);
  }
})();

