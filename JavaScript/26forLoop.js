// debugger
console.log("Program started!!!");

let num = 5;
for (let i = 1; i <= num; i++) {
    console.log(`${i}. ${"Piyush"}`);
}

// Loop through array
const fruits = ['apple', 'banana', 'orange'];
for (const fruit of fruits) {
    console.log(fruit);
}// Output: apple, banana, orange


// Loop through string
const message = "Hello";
for (const char of message) {
    console.log(char);
}// Output: H, e, l, l, o


// Even numbers 
let number = 20;
for(let i= 0 ; i<= 20 ;i++){
   if(i%2===0){
    console.log(i);
   }
}
console.log("Program End!!!");