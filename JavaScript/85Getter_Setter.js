// Without Getter & setter
// console.log("Without Getter & Setter");
// const user1= {
//     firstName: "Piyush",
//     lastName: "Thakur",

//     fullName() {
//         return `${this.firstName} ${this.lastName}`
//     }
// }
// console.log(user.fullName());
// NOW
// user.fullName = "Ankit Kumar";
// console.log(fullName);/



// With Getter & Setter
console.log("With Getter & Setter");
const user = {
    firstName: "Piyush",
    lastName: "Thakur",

    get fullName() {
        // console.log("Invoked.......");
        return `${this.firstName} ${this.lastName}`
    },

    set fullName(value) {
        console.log("Setting fullName....");
        console.log(value);
        console.log(value.split(' '));
    }
}

console.log(user.fullName);

user.fullName = "Ankit Kumar";