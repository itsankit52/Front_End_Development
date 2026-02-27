import multiply, { add, division, sub } from "./79imp_exp.js";

window.run = function () {
    console.log("Add:", add(10, 5)); // 15
    console.log("Sub:", sub(10, 5)); // 5
    console.log("Division:", division(10, 5)); // 2
    console.log("Multiply:", multiply(10, 5)); // 50
};
