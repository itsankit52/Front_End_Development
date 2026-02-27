// SIMPLE EXAMPLE
try {
    let A = B + 20;
}
catch (err) {
    console.log("Error Occured :", err.message);
}
/*
OUTPUT:
    Error Occured : B is not defined
*/

//EXAMPLE 2 
try {
    console.log("Start");
    let result = 100 / 200;
    console.log(result);
}
catch (err) {
    console.log("Error");
}
finally {
    console.log("Cleanup done");
}

/*
OUTPUT:
    Start
    0.5
    Cleanup done
*/


// Throwing Custom Errors
function vote(age) {
    if (age < 18) {
        throw new Error("Not eligible for vote");
    }
    return "Eligible";
}

try {
    console.log(vote(15));
}
catch (err) {
    console.log(err.message);
}
