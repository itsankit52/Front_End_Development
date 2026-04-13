// Here, the whole export is a function.
// const add = require('./math');
// console.log(add(2, 3)); // 5



// Here, multiple functions are exported as an object.
const math = require('./math');
console.log(math.add(5, 3)); // 8
console.log(math.sub(5, 3)); // 2

console.log(exports === module.exports ); // true (initially)

// Adding properties → works
// exports.a = 10

// Reassigning exports → breaks
// exports = { a: 10 }