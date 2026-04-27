console.log("Program start.");

// debugger
console.log(a); // hosting
var a = "Piyush";
// console.log(a); // Piyush


sayhii(); // function call (output : undefined)
//Function Decleration or Function definition
function sayhii() {
    console.log("Hii");
}

// hii();  // error
// Function Expression or Function definition
const hii = function () {  // this is an anonymous function because function have no name
    console.log("Hello");
}
hii();  // Hello