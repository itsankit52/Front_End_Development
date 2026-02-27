// debugger
// console.log("Program Started!!!");
// let count = 1;
// while (count <= 5) {
//     console.log("count : " + count);
//     count++; // increment!
// }    // Output: Count: 1, Count: 2, Count: 3, Count: 4, Count: 5


// let x = 1;
// while (x <= 5) {
//     console.log(x);
//     x++;
// }

const arr = ['Apple', 'Mango', 'Banana', 'Grapes', 'Coconut'];
let i = 0; // initilization
while (i < arr.length) { // condition
    console.log(`${i+1}. ${arr[i]}`); //print 
    arr[i]+= ' lo'; //update 
    i++; //increment

}
console.log("Program End!!!");