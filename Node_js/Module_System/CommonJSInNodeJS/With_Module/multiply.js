function multiply(...nums) {
    return nums.reduce((curr, acc) => curr * acc);
}

module.exports = multiply;

// module.exports -> export Data/function