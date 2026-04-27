// CommonJS module

// this refers to module.exports by default
this.message = "Timer module loaded (CJS)";

function startTimer() {
    console.log("Timer started (CJS)");
}

module.exports = {
    startTimer,
    message: this.message
};