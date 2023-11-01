// we have  array of objects , group them by age

const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 25 },
    { name: "David", age: 30 },
];

function grouping(array) {
  
    let group = array.reduce ((accum, value) => {
        
        let key = value.age
        if (!accum[key]) {
            accum[key]=[]
        };
        accum[key].push(value) 
        return accum     
    }, {})
    return group  
}

const peoplesByAges = grouping(people);
console.log(peoplesByAges);