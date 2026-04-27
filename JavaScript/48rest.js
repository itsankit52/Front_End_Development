// console.log("Hello");

// // "...rest" parameters collects all value and add it's in an array
// const nums1 = [1, 2, 3, 4];
// function add(x, y, z, ...nums) {
//     // console.log(x, y, z);
//     // console.log("Nums : ", nums);
//     // let sum = 0;
//     // for (let i = 0; i < nums.length; i++)
//     //     sum += nums[i];

//     // return sum;

// }

// function addd(...nums){
//     // return nums.reduce((acc, current) => acc + current);
//     // return [...arguments].reduce((acc, current) => acc + current);
//     return Array.from(arguments).reduce((acc, current) => acc + current);

// }
// const result = add(10, 20, 100);


// // Fixed parameters 
// function introduce(firstName, lastName, ...hobbies) {
//     console.log(`Name : ${firstName} ${lastName}`);
//     console.log(`Hobbies : ${hobbies}`);
// }

// introduce("Piyush", "Thakur", "Coding", "Music", "Gaming");






console.log("Hello");

// "...rest" parameters collect all remaining values into an array
const nums1 = [1, 2, 3, 4];

// Function with fixed + rest parameters
function add(x, y, z, ...nums) {
    console.log(`x : ${x} \ny : ${y} \nz : ${z}`);
    console.log("Nums:", nums);// Nums : [40, 50]

    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }

    return sum;
}

// Function using rest parameter and reduce()
function addd(...nums) {
    // 'arguments' is not needed here, use 'nums' directly
    return nums.reduce((acc, current) => acc + current, 0);
}

const result1 = add(10, 20, 30, 40, 50); // x=10, y=20, z=30, nums=[40, 50]
console.log("Sum from add():", result1);

const result2 = addd(10, 20, 30, 40, 50);
console.log("Sum from addd():", result2);

// Fixed parameters + rest parameters
function introduce(firstName, lastName, ...hobbies) {
    console.log(`Name : ${firstName} ${lastName}`);
    console.log(`Hobbies : ${hobbies.join(", ")}`);
}

introduce("Piyush", "Thakur", "Coding", "Music", "Gaming");
