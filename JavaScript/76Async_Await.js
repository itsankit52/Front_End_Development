/*
Async / Await is a cleaner way to work with Promises and asynchronous code.

1. Async ? When write a function with async keyword, JavaScript automatically converts the return value into a Promise

2. Await ? await pauses the execution of the async function until the Promise resolves, await only works inside an async function.
 */


async function xyz() {
    console.log("Start point:");
    const res = await fetch("https://dummyjson.com/users");
    console.log("End point:");
}
xyz();


function getData() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Hello"), 3000);
    });
}

async function showData() {
    console.log("Loading...");
    // const result = await getData();
    // console.log(result);
    console.log(await getData());
    console.log("Program Done");
}
showData();

/*
    OUTPUT:
            Loading...
            (after 3sec) 
            Hello
            Program Done
*/