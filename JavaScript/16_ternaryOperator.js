// debugger

//1 eg... simple condition 
let age = prompt("Enter your age: ");
let canVote = age >= 18 ? "Yes" : "No";
console.log(canVote); // Output: "Yes"


//Example 2: Number comparison
// let a = 10;
// // let a = 20;
// let b = 15;
let a = prompt("Enter value of a:");
let b = prompt("Enter value of b:");
let max = a > b ? a : b;
// console.log(max); // Output: 20 (a = 20)
console.log(max); // Output: 15 (a = 10)


//Example 3: String manipulation
let isRaining = true;
let activity = isRaining ? "Stay indoors" : "Go for a walk";
console.log(activity); // Output: "Stay indoors"


//Example 4: Grade evaluation
let score = 65;
let grade = score >= 90 ? "A" :
    score >= 80 ? "B" :
        score >= 70 ? "C" :
            score >= 60 ? "D" : "F";
console.log(grade); // Output: "D"


//Example 6: Toggle boolean values
let isLoggedIn = false;
// let isLoggedIn = true;
let statusMessage = isLoggedIn ? "Welcome back!" : "Please log in";
console.log(statusMessage); // Output: "Please log in"
// console.log(statusMessage); // Output: "welcomem back!"