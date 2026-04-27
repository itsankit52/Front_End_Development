function greet(name = "Arguments are not given in function call. or default parameters used!!!") {
    return `Hello, ${name}!`;
}
console.log(greet("World"));
console.log(greet("Piyush"));
console.log(greet());

//functon expression 
function multiply(a, b) {
    return a * b;
};
console.log(multiply(15, 3)); // 15


//Parameters vs Arguments
// Parameters: a and b (what the function expects)
function sum(a, b) {
    return a + b;
}
// Arguments: 5 and 3 (actual values passed)
console.log(sum(5, 3)); // 8
console.log("*************************");

//Simple calc
function calculate(operation, a, b) {
    switch (operation) {
        case 'add': return a + b;
        case 'subtract': return a - b;
        case 'multiply': return a * b;
        case 'divide': return a / b;
        default: return 'Invalid operation';
    }
}

console.log(calculate('multiply', 10, 5)); // 50
console.log("*************************");
console.log(calculate('add', 10, 5)); // 15


function intro(Name, Profession , Age){
    console.log("Hi,");
    console.log(`My name is ${Name}.`);
    console.log(`I'm a ${Profession}.`);
    console.log(`I'm ${Age} years old.`);
}

intro('ankit', 'developer', 25);
intro('Piyush Thakur', 'Marketer', 20);