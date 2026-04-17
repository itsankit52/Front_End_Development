// ES6 Module flow:
// Parse import -> load all modules -> execute code

import startTimer, { message } from './timer.js'; // extension mandatory

console.log("App started (ESM)");

console.log(message);

startTimer();

// Top-level await allowed
await new Promise(resolve => setTimeout(resolve, 3000));

console.log("App finished (ESM) After 3 sec");