const arr1 = [1, 2, 5, 3, 4];
const arr2 = [6, 7, 8, 9, 10];
// const arr3 = ["Piyush"];
// const arr4 = ["Kumar"];

const joindArr = [...arr1, ...arr2];
// console.log(joindArr);

// const student1 = {
//     Name : "Piyush",
//     Age: 20
// }

// const student2 = {
//     Name : "Ankit",
//     Age: 21
// }

// const update = {...student1, city : "Purnea"};
// console.log(update);

function add() {
    console.log(arguments);
    let sum = 0;

    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    console.log(sum);
}

add(2, 3, 4);
// add(...joindArr)


// Adding element between
const x = [1, 2, 3];

const xCopy = [0, ...x, 4];

console.log(xCopy);


//Merge objects
const user = {
    Name: "Piyush",
    Age: 20
}

const details = {
    City: "Purnea",
    PinCode: 854203
}
const merged_Objects = { ...user, ...details };

console.log(merged_Objects);

const extra = {...merged_Objects, LastName : "Thakur"};
console.log(extra);


//Used in function
function multiply() {
    let multi = 1;
    for(let i=0;i<arguments.length;i++){
        multi *= arguments[i];
    }
    return multi;

}

const number = [2,3,4]; // Method 1
//or
const result = (multiply(...[2,3,4])); // Method 2

console.log(`Multiplication is = ${result}`);


function print (){
    for (let i =0; i< arguments.length; i++){
        console.log(arguments[i]);
    }
}

// print();