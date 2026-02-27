console.log("Default parameters value is = 10");
function multiply(a, b = 10) { // b = 10 by default
    return a * b;
}

function add(x, y = 1) {
    return x + y;

}
add();

function rollDies() {
    return Math.floor(Math.random() * 6) + 1;
}


rollDies();

