// Create a function that uses both the rest parameter and destructuring to process an array of objects.

const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' }
];

function returnNames1(array) {
  return users.map (({id,name}) => name)
}

function returnNames2(array) {
  return users.map (e => e.name)
}

console.log(returnNames1(users));
console.log(returnNames2(users));



// Output should be an array of user names