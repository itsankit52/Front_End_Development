// /*
// Actual wrapper function looks like this : 
//     (function (exports, require, module, __filename, __dirname) {
//     // code here
// });
// */

// const Name = "Ankit";

// function sayhii() {
//     console.log("Hii " + Name);
// }
// sayhii();

// // node internally converts to it 

// (function (exports, require, module, __filename, __dirname) {
//     const Name = "Ankit";

//     function sayhii() {
//         console.log("Hii " + Name);
//     }
//     sayhii();
// }) // now node execute this function



const a = 50; // this variable is in local scope 
b = 40; // while this variable is in global scope 

console.log(a);
console.log(b);