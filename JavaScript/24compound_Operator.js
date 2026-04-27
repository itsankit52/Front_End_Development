// Counter increment
let count = 9;
count += 1;
console.log(count);

// String concatenation
let message = "Welcome";
message += " to JavaScript!";
console.log(message);

// Mathematical operations
let total = 100;
total *= 1.5;
console.log(total);

// Array length manipulation
let numbers = [1, 2, 3];
numbers.length *= 2;
console.log(numbers);

// Toggle boolean values
let isActive = true;
isActive ^= true;
console.log(isActive);

//increment 
let num = 100;
num++;
console.log(num); // output : 101

//Decrement 
let num2 = 100;
num2--;
console.log(num2); // output : 99

//Remainder assignment (%=)
let h = 17;
h %= 5;        // h = 2 (17 ÷ 5 = 3 remainder 2)

let i = 10;
i %= 3;        // i = 1 (10 ÷ 3 = 3 remainder 1)

//Exponentiation Assignment (**=)
let j = 2;
j **= 3;       // j = 8 (2³)
console.log(j);// 8

let k = 3;
k **= 2;       // k = 9 (3²)
console.log(k); // 9

let l = 4;
l **= 0.5;     // l = 2 (square root)

//Bitwise AND Assignment (&=)
let m = 12;    // Binary: 1100
m &= 5;        // Binary: 0101 → 0100 (4)

let n = 15;    // Binary: 1111
n &= 7;        // Binary: 0111 → 0111 (7)

//Bitwise OR Assignment (|=)
let o = 12;    // Binary: 1100
o |= 5;        // Binary: 0101 → 1101 (13)

let p = 9;     // Binary: 1001
p |= 3;        // Binary: 0011 → 1011 (11)

//Bitwise XOR Assignment (^=)
let q = 12;    // Binary: 1100
q ^= 5;        // Binary: 0101 → 1001 (9)

let r = 15;    // Binary: 1111
r ^= 6;        // Binary: 0110 → 1001 (9)

//Left Shift Assignment (<<=)
let s = 5;     // Binary: 0101
s <<= 2;       // Shift left by 2 → 10100 (20)

let t = 3;     // Binary: 0011
t <<= 4;       // Shift left by 4 → 00110000 (48)

// Right Shift Assignment (>>=)
let u = 20;    // Binary: 10100
u >>= 2;       // Shift right by 2 → 00101 (5)

let v = -16;   // Binary: 11111111111111111111111111110000
v >>= 2;       // Shift right by 2 → 11111111111111111111111111111100 (-4)