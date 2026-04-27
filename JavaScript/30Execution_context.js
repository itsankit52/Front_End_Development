console.log("Program Started!!!");

console.log(myVar); // Output: undefined (not a ReferenceError!)
console.log(sayHello()); // Output: "Hello!"
// console.log(newVar); // Output: ReferenceError: newVar is not defined

var myVar = 10;

function sayHello() {
  return "Hello!";
}

let newVar = 20;

// debugger

sayHi()

const username = 'Ankit';
const userAge = 20;

function sayHi() {
    const a = 14;
    const b = 12;
    add(7, 9);
}

function add(x, y) {
    kuchBhi();
    return x + y;
}

function kuchBhi() {
    console.log('Kuch bhi');
}

console.log('Program Ended');