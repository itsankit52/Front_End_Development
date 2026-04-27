//1st Example
function outer() {
    let count = 0; // outer function veriable

    return function inner() { // inner function return kar raha hai 
        count++;
        return count;

    };
}

const counter = outer();

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());


//2nd Example

function multiplier(x) {
    return function (y) {
        return x * y;
    };

}

const first = multiplier(2);
const second = multiplier(5);

console.log(first(5));
console.log(second(5));



const a = 5;
const b = 10;

function add() {
    console.log(a+b);;
}

// add();

console.dir(add);