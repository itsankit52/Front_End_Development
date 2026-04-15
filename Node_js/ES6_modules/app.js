//ES6 Modules (ESM) are the modern JavaScript module system introduced in ECMAScript.
// Must include fle extension in ES6 Module
// No require, module.exports in ESM
// __filname, __dirname are not avaliable directly 
//ES Module do not use the same wrapper as commonJS 
// ES Module 'use strict' by default

import { num1 } from './math.js' // named export 

import num2 from './math.js' // default export 


console.log(num1);
console.log(num2);