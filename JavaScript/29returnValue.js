function add(a, b) {
  return a + b;
}

const result = add(5, 3);
console.log(result); // Output: 8

//Early Return
function checkAge(age) {
  if (age < 0) {
    return "Invalid age"; // Early return
  }
  
  if (age >= 18) {
    return "Adult";
  } else {
    return "Minor";
  }
}

//Returning Functions (Closures)
function createMultiplier(factor) {
  return function(x) {
    return x * factor;
  };
}

const double = createMultiplier(5);
console.log(double(5)); // Output: 25
console.log(double(3)); // Output: 15


//prime number
function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    
    return true;
}

// Test the function
console.log(isPrime(2));   // true
console.log(isPrime(10));  // false
console.log(isPrime(17));  // true
console.log(isPrime(1));   // false