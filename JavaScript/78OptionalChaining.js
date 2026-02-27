
let user = {
    name: "Piyush",
    address: {
        city: "Purnia"
    }
};

console.log(user.name); // Piyush
console.log(user.address.city); // Purnia
// Without Optional Chaining 
// console.log(user.profile.age);  //  TypeError


// With Optional Chaining 
console.log(user.profile?.age);