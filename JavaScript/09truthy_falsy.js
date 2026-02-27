//Falsy value using if 
if (false) { /* Won't run */ }
if (null) { /* Won't run */ }
if (undefined) { /* Won't run */ }
if (0) { /* Won't run */ }
if (-0) { /* Won't run */ }
if (0n) { /* Won't run */ }
if (NaN) { /* Won't run */ }
if ("") { /* Won't run */ }

//Truthy value using if 
if ("false") { /* Runs because the string is not empty */ }
if ("0") { /* Runs because the string is not empty */ }
if ([]) { /* Runs because it's an object (array) */ }
if ({}) { /* Runs because it's an object */ }
if (new Date()) { /* Runs */ }

//Practical Use Cases and How to Check
let name = ""; // falsy
if (name) {
    console.log("Hello, " + name);
} else {
    console.log("Enter your name"); // This will run
}

let count = 10; // truthy
if (count) {
    console.log("We have items!"); // This will run
}