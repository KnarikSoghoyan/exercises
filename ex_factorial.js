function factorial(num) {
    if (num !== parseInt(num)) {
      return "Number must be integer"
    };
  
    if (num < 0) {
      return "Number must be positive"
    };
  
    if (num === 0 || num === 1) {
        return 1
    };
  
    return num *factorial(num-1);
  };
  
  console.log(factorial (55555555555555))
  
  // _________________________________________________________________________
  
  
  
  function factorial(num) {                           // Why it doesn't work
    while (num > 1) {
      return num * factorial(num-1)
    }
  };
  
  console.log(factorial (5))
  
  // _________________________________________________________________________________
  
  
  //  I COULDN'T DO IT USING PROMISE   :(
  
  // VERSION 1
  
  let promise = new Promise ((resolve, reject)=>{
    setTimeout (
      function factorial(num) { 
        if (num !== parseInt(num)) {
          reject ("Number must be integer")
        };
      
        if (num < 0) {
          reject ("Number must be positive")
        };
      
        if (num === 0 || num === 1) {
          resolve (1)
        };
      
        resolve (num *factorial(num-1));                              //Where declare "num"?
      }, 0)
  });
  
  // function giveNumber(n) {
  //   let myResult = factorial(n);
  //   return myResult
  // }
  
  
  promise
  .then (res => console.log(res(5)))
  .catch (err => console.log(err))
   
  
  // ________________________________________________________________________
  
  
  
  // VERSION 2
  
  let promise = new Promise ((resolve, reject)=>{
    
  function factorial(num) { 
    if (num !== parseInt(num)) {
      return ("Number must be integer")
    };
  
    if (num < 0) {
      return ("Number must be positive")
    };
  
    if (num === 0 || num === 1) {
      return (1)
    };
  
    return (
      setTimeout ((() => {
      return (num *factorial(num-1))
    }),0)
    )
  }
  let myNumber = 5
  resolve (factorial(myNumber))
  
  }) 
  
  
  promise
  .then (res => console.log(res))
  .catch (err => console.log(err))
  
  // ______________________________________________________________________