// debugger
const name = "Piyush"; // Global variable
const age = 20; // Global variable

function add() {
    const a = 10; // Local variable
    const b = 20; // Local variable
    console.log(`a = ${a}`);
    console.log(`b = ${b}`);
    console.log(`a + b = ${a + b}`);

    console.log(`Age from Global variable = ${age}`);
    console.log(`Name from Global variable = ${name}`);
}

add();

let global = "global";

function outer() {
    let outerVar = "outer";

    function inner() {
        let innerVar = "inner";
        console.log(global);    // Accessible
        console.log(outerVar);  // Accessible  
        console.log(innerVar);  // Accessible
    }

    inner();
    console.log(innerVar);      // Not accessible (gives error)
}

outer();