// Loose equality (==) - performs type coercion
console.log(5 == "5");    // true
console.log(true == 1);   // true
console.log(null == undefined); // true

// Strict equality (===) - no type coercion
console.log(5 === "5");   // false
console.log(true === 1);  // false
console.log(null === undefined); // false

// not equalto
console.log(5 != 5)  // false
console.log(10 != 5)  // false

//strict not equalto
console.log(4!=="4") // true
console.log(4!==4) // false

// greater and lesser
console.log(6<5) // false 
console.log(6>5) // true 

//greater or equal and lesser or equal
console.log(5<=5)//true
console.log(5>=5)//true
console.log(10>=5)//true
console.log(10>=15)//true
