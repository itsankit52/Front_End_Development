// =============================
// Without Getter & Setter
// =============================

// This example shows a normal object method
// to get full name (not using getter/setter)

// console.log("Without Getter & Setter");

// const user1 = {
//     firstName: "Piyush",
//     lastName: "Thakur",

//     // Method to return full name
//     fullName() {
//         return `${this.firstName} ${this.lastName}`;
//     }
// };

// // Calling the method using ()
/*
console.log(user1.fullName());

// Problem:
// If someone overwrites the method accidentally,
// it breaks the functionality

user1.fullName = "Ankit Kumar"; // Now it's no longer a function
console.log(user1.fullName);    // Output: "Ankit Kumar"
*/
// =============================
// With Getter & Setter
// =============================

console.log("With Getter & Setter");

// Object using getter & setter
const user = {
    firstName: "Piyush",
    lastName: "Thakur",

    // GETTER:
    // Allows us to access fullName like a property (no parentheses)
    get fullName() {
        // console.log("Getter Invoked...");
        return `${this.firstName} ${this.lastName}`;
    },

    // SETTER:
    // Allows us to set fullName like a property
    // and internally update values
    set fullName(value) {
        console.log("Setting fullName...");
        console.log("Input value:", value);

        // Split the full name into first and last name
        const parts = value.split(' ');

        // Update object properties
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

// Accessing getter (no parentheses)
console.log(user.fullName); // Output: Piyush Thakur

// Using setter to update values
user.fullName = "Ankit Kumar";

// After setting new value
console.log(user.firstName); // Ankit
console.log(user.lastName);  // Kumar
console.log(user.fullName);  // Ankit Kumar
