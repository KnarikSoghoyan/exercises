// we have  array of objects , group them by age

// Expected output:
// {
//     25: [{ name: ‘Alice’, age: 25 }, { name: ‘Charlie’, age: 25 }],
//     30: [{ name: ‘Bob’, age: 30 }, { name: ‘David’, age: 30 }]
// } (edited) 

const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 25 },
    { name: "David", age: 30 },
];

function grouping(array) {
  
    let group = array.reduce ((accum, value) => {
        let key = value["age"]
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