let arr = []
arr [0] = 1
arr [1] = 2
let index = 1
while (index < 10){
  index ++
  arr [index] = arr[(index-2)]+arr[(index-1)]
  arr.push (arr[index])
}
arr.pop(1);
console.log(arr);
