setTimeout('console.log("Normal setTimeout")')

const timer = console.log("Start");

setTimeout(() => {
    console.log("Hello after 1seconds");
}, 2000);  // 1000ms = 1s delay

console.log("End");

// setTimeout('console.log("Hello")');

setTimeout('console.log("Hii after 4sec")', 4000);  // Print Hii after 4 sec

// Passing a function 
function userName(name) {
    console.log(`Hi I'm , ${name}!`);
}

setTimeout(userName, 3000, "Piyush"); // After 3s, greet("Piyush") runs


// Multiple Timeout

console.log("Wait for messages...");

setTimeout(() => console.log("1st message after 1s"), 1000);
setTimeout(() => console.log("2nd message after 2s"), 2000);
setTimeout(() => console.log("3rd message after 3s"), 3000);


//Inside a loop (with clouser fix)

for (let i = 1; i <= 3; i++) {
  setTimeout(() => {
    console.log("Message " + i);
  }, i * 1000);
}


setTimeout('console.log("Program Ended!!!")', 6000);

clearTimeout(timer);