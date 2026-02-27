// Printing value using arguments keyword
function printValue() {
    for (let i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
}

// Sum of numbers using arguments
function add() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}