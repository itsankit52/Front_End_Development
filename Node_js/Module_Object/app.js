// console.log(module);
// console.log(module.id); // unique identifier of the module
// console.log(module.filename);  // Full path of the current file
/* module.loaded -> 
    true - module is loaded 
    false - still reloading
*/

// moule.children -> Array of module required inside this module

const num = require ('./math')
const axios = require('axios')

console.log(typeof axios); // function 

// console.log(module);
// {
//   id: '.',
//   path: '/folder',
//   exports: {},
//   filename: '/folder/app.js',
//   loaded: false,
//   children: [],
// }

exports.num2 = 8999