fetch('https://jsonplaceholder.typicode.com/posts/4')
.then(res=> res.json())
.then(data=>console.log(data))
.catch(err=>{
    console.log("error occured", err)
});


// ______________________________________________________________________________




// exercise


function fetchDataFromAPI(url) {
    return fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      });
  }
  
  function fetchMultipleAPIs(apiUrls) {
    const promises = apiUrls.map(url => fetchDataFromAPI(url));
    return Promise.all(promises);
  }
  
  // Example usage:
  const apiUrls = [
    'https://jsonplaceholder.typicode.com/posts/4',
    'https://jsonplaceholder.typicode.com/posts/5',
    'https://jsonplaceholder.typicode.com/posts/6'
  ];
  
//   fetchMultipleAPIs(apiUrls)
//     .then(results => {
//       console.log('Combined Results:', results);
//     })
//     .catch(error => {
//       console.log('Error:', error.message);
//     });
  
  
  
  
    // Using async/await
  
  
  
    (async ()=>{
      try {
        const res = await fetchMultipleAPIs(apiUrls);
        console.log(res)
      }
      catch (err){
        console.log('Error:', err.message)
      }
    })();
  
  
