fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: "Hello world",
  headers: {
    'Content-type': 'text/html; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));               //response {id:101}



// using async/await syntax

const getJsonData = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts',{
      method: 'POST',
      body: "Hello World",
      headers: {
        'content-type': 'text/html; charset=UTF-8',
      },
    })
    if(res.ok){
        const data = await res.json();
        console.log(data);
    }
  }
  
  getJsonData();