/*
A Promise is an object that represents the future result of an asynchronous operation.

> Get a value later (success), or
> Get an error (failure)

EXAMPLE:
    I promise I will send you the file tomorrow.

A promises always has 3 States
1. Pending - Operation is still running
2. Fulfilled - Operation completed successfully
3. Rejected - Operation faild

***NOTE - Once fulfilled or Rejected it cannot ochange again.
*/

/*
How Promise Works Internally

    Promise created → Pending
        |
    Async task
        |
    Success → resolve() → Fulfilled → .then()
    Failure → reject()  → Rejected  → .catch()

*/

const myPromise1 = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve("Data received successfully");
    } else {
        reject("Something went wrong");
    }
});
console.log(myPromise1); //State(Fulfilled) OUTPUT : Data recived successfully


const myPromise2 = new Promise((resolve, reject) => {
    let success = false;


    if (success) {
        resolve("Data received successfully");
    } else {
        reject("Something went wrong");
    }
});
console.log(myPromise2); //State(rejected) OUTPUT : Somthing went wrong

myPromise2.catch(()=>{
    console.log("REJECTED");
}); // Jaise hi promise reject hoga tab console mai "REJECTED" print hoga.



const myPromise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({Name : "Piyush"});
        console.log("I'm piyush");
    }, 5000);
});
console.log(myPromise3); // State(Pending), Yah "5sec" baad fulfilled hoga

myPromise3.then(()=>{
    console.log("DONE");
}); // Jaise hi promise resolve hoga tab console mai "DONE" print hoga.

