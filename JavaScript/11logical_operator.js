// AND (&&)
console.log(true && true);    // true
console.log(true && false);   // false
console.log(false && true);   // false
console.log(false && false);  // false

// With non-boolean values
console.log(5 && 10);         // 10 (both truthy, returns last)
console.log(0 && 10);         // 0 (first falsy)
console.log('' && 'hello');   // '' (first falsy)

//OR(||)
console.log(true || true);    // true
console.log(true || false);   // true
console.log(false || true);   // true
console.log(false || false);  // false

// With non-boolean values
console.log(5 || 10);         // 5 (first truthy)
console.log(0 || 10);         // 10 (first falsy, second truthy)
console.log('' || 'hello');   // 'hello' (first falsy, second truthy)

//NOT(!)
console.log(!!0);             // false
console.log(!!'');            // false
console.log(!!null);          // false
console.log(!!undefined);     // false
console.log(!!5);             // true
console.log(!!'hello');       // true