let x: number = 8
x = "Piyush" // This is not allowed because we declare "x" as a number type & we cannot assign "x" as a string

console.log(x);

function add1(x: number, y: number) {
    return x + y // Type checking
}