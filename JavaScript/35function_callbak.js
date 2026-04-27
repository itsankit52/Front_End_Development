function a(b) {
    console.log(b);
}
a("Piyush"); // Function call with Parameters
a({user:"Ankit", age: 20}); 
 

function username(name) {
  return `Hello, ${name}!`;
}

function higherOrder(fn, userName) {
  return fn(userName); // calling the callback
}

console.log(higherOrder(username, "Piyush"));
// Output: Hello, Piyush!


console.log("Program End!!!!");
