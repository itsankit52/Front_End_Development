//Function
function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet("Piyush")); // Output: Hello, Piyush!


//Methods 
const person = {
    name: "Piyush",
    greet: function () {
        return `Hello, my name is ${this.name}`;
    }
};

console.log(person.greet()); // Output: Hello, my name is Piyush


const maths = {
    value: 12345,

    add: function (num1, num2) {
        return `Sum is a + b = ${num1 + num2}`;
    },

    square: function (x) {
        return `Square is = ${x * x}`;
    },

    substract(a, b) {
        return `Substraction is = ${a - b}`;
    }

};

console.log(maths.add(10, 5));

console.log(maths.square(10));

console.log(maths.substract(10, 5));