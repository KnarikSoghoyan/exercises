// 2. Product Inventory: Create a Map to represent a product inventory. 
//    Each product has a unique ID (use time to get unique values) as the key and an object 
//    with productName, price, and quantity as the value. Implement functions to add products, 
//    update quantities, and calculate the total value of the inventory.


const moment = require('moment')
let uniqueMoment = moment().unix();
const map = new Map()

function addProduct(product, ID = uniqueMoment) {
    if (map.has(ID)) {
        return `The ${product.name} exists in stock`
    };
    map.set(ID, product)
    return `The ${product.name} successfully added`
}

function updateQuantities(product) {
    map.forEach((value, key) => {
        if (value.name == product.name) {
            value.price += product.price
        }
    });
    return `The quantity of${product.name} successfully updated`
}

function calculateTotalValue() {
    let total = 0
    map.forEach( ({name, price, quantity}) => {
        total += price*quantity
    });
    return `The total value of inventary is ${total}`
}

const product1 = { name: 'pen', price: 200, quantity: 10 }
const product2 = { name: 'pencil', price: 100, quantity: 30 }
const product3 = { name: 'book', price: 3000, quantity: 3 }
const product4 = { name: 'book', price: 2000, quantity: 2 }

addProduct(product1, 1);
addProduct(product2, 1);
addProduct(product3, 3);
console.log(updateQuantities(product4, 3));
console.log(map);
console.log(calculateTotalValue())


