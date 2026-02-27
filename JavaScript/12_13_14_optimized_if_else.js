const userName = prompt("Enter your Name:");
const userAge = +prompt("Enter your age:");

console.log(`Name: ${userName}`);
console.log(`Age: ${userAge}`);

// debugger
if (userAge > 0 && userAge < 18) {
    console.log("User is a kid.");
}

else if (userAge >= 18 && userAge <= 25) {
    console.log("User is applicable for vote.");
}
else if (userAge >= 26 && userAge <= 60) {
    console.log("User is working professional.");
}
else { console.log("User is an old man."); }


console.log("Program Ended!!!")