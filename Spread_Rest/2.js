// Use object destructuring to extract values from an object.

const person = {
  name: 'John',
  age: 25,
  city: 'New York',
};

const { name, age, city } = person

console.log(name, age, city);
console.log(`${name}, ${age}, ${city}`);            // Output should be John, 25, New York
