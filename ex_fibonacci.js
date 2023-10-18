let fibonacci = (quantity) => {

  if (quantity <= 1 || quantity !== parseInt(quantity)) {
    return "The quantity must be a positive integer number greater than 1"
  }

  let arr = []
  arr[0] = 1
  arr[1] = 1
  let index = 1
  while (index < quantity - 1) {
    index++
    arr[index] = arr[(index - 2)] + arr[(index - 1)]
    arr.push(arr[index])
  }
  if (quantity > 2) {
    arr.pop(1);
  }

  return arr
}

let result = fibonacci(5)
console.log(result);