const fruits = ["Apple", "Banana", "Orange", "Guava", "Piyush", 20];

// const fruits2 = fruits[1];
// console.log(fruits2);

// const [fr1, fr2, fr3, fr4, name, age] = fruits;
// here fr1, a, b, c are variables
// console.log(fr2);
// console.log(fr3);
// console.log(fr1);


// Renaming & Default value
const user = {
    id: 101,
    username: "Piyush7",
    age: 20,
    address: {
        city: "Purnea",
        lastname: "Thakur"
    }
};

// const {
//     id: userId,
//     username: userName,
//     address: { city, country = "India" } // default + nested
// } = user;

// console.log(userId);  // 101
// console.log(userName);// piyush123
// console.log(city);    // Purnea
// console.log(country); // India (default)
// console.log(userId, userName, city, country);

const { id, username: name, address: { city } } = user;


function intro({ id }) {

    console.log(id);
}

intro(user);


function printFruits([, , fr3, fr4]) {
    console.log(fr3, fr4);
    console.log([, , fr3, fr4]);

}

printFruits(fruits);