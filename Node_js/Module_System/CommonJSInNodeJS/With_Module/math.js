function add(...nums) {
    return nums.reduce((curr, acc) => curr + acc);
}


function multiply(...nums) {
    return nums.reduce((curr, acc) => curr * acc);
}

module.exports = {
    add, multiply
};