// Common JS flow:
// Run code -> encounter require() -> load module -> continue

console.log("App started (CJS)");

// require is NOT hoisted
const timer = require('./timer.js'); // extension optional

console.log(timer.message);

timer.startTimer();

console.log("App finished (CJS)");