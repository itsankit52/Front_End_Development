const add = require('./add');
const multiply = require('./multiply');

console.log(`Sum is = ${add(1, 2, 3, 4, 5)}`);

console.log(`Multiplication is = ${multiply(1, 2, 3, 4, 5)}`);

// require -> Import code of another file

//'./math -> Local Modules (self created)
//'./math2 -> Local Modules (self created)

// typeof require = function
// The return value of require function is "module.export"