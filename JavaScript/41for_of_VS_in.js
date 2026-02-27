// // debugger
// // 'use strict'
// const animals = ['cat', 'rat', 'dog', 'cow', 'elephant'];

// //Normal for loop
// for (let i = 0; i < animals.length; i++) {
//     console.log(animals[i]);

// }

// console.log("Using for...of loop");
// //for....of loop
// for (let animal of animals) {
//     console.log(animal);
// }
// console.log("using for...in loop");
// for (let ani in animals) {
//     console.log(ani);
// }

// console.log("Printing Name characters");

// const Name = "Piyush Thakur";

// for (let cha of Name) {
//     console.log(cha);
// }


//In objects 

const information = {
    Name: "Piyush",
    LastName: "Thakur",
    Age: 20,
    City: "Purnea",
}

// Get keys, values, and entries
const personKeys = Object.keys(information);
const personValues = Object.values(information);
const personEntries = Object.entries(information);

// Print all keys
console.log("Keys:");
for (let key of personKeys) {
    console.log(key);
}

// Print all values
console.log("\nValues:");
for (let value of personValues) {
    console.log(value);
}

// Print all entries (key-value pairs)
console.log("\nEntries:");
for (let [key, value] of personEntries) {
    console.log(key, ":", value);
}


// for (let key in information) {
//     console.log(key, ":", information[key]);
// }