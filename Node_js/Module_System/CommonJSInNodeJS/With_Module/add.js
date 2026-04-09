function add(...nums) {
    return nums.reduce((curr, acc) => curr + acc);
}

module.exports = add;

// module.exports -> export Data/function