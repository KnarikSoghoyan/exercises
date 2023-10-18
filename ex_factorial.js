function factorial(num) {
    if (num !== parseInt(num)) {
      return "Number must be integer"
    };

    if (num < 0) {
      return "Number must be positive"
    };

    if (num === 0 || num === 1) return 1


    return num *factorial(num-1);
  };

  console.log(factorial (55555555555555))

// _________________________________________________________________________



function factorial(num) {
  let result = 1;
  while (num >= 1) {
    result *= num
    num--
  }
  return result
};

console.log(factorial(5))
