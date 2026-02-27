//Basic example 

//Normal function
function add(a, b) {
    return a + b;
}
// console.log(add(5, 6));


//Arrow function 
const addArrow = (a, b) => a + b;
// console.log(addArrow(10, 20));


//Single parameter
const sArrow = x => (x * x);
// console.log(sArrow(4));


//Triple parameter 
const xArrow = (x, y, z) => (x + y * z);
// console.log(xArrow(2, 3, 5));


// NO parameters
const hello = () => "Hello World!";
// console.log(hello());


//Multi line Arrow
const multiply = (x, y) => {
    const result = x * y;
    return result;
}
console.log(`Multiply is = ${multiply(5, 5)}`);

//Arrow function using setTimeout
setTimeout(() => {
    // debugger
    console.log(`Multiply is = ${multiply(10,2)}`);
},2000)

const rrandom = () => Math.random();

//Arrow function 

const division = (num1, num2) => num1 / num2;
console.log(`division is = ${division(10,2)}`);


setTimeout(() => {
    console.log(`division is = ${division(10,3)}`);
},3000)


function square(x) {
  setTimeout(() => {
    console.log(`Square is = ${x ** 2}`);
  }, 4000);
}
square(5);