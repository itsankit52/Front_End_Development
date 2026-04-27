function makeHttpRequest(method, url, callback) {
    const xhr = new XMLHttpRequest()
    xhr.responseType = 'json'
    xhr.addEventListener('load', () => {
        callback(xhr.response)
    });

    xhr.open(method, url)
    xhr.send()
}

makeHttpRequest('GET', 'https://dummyjson.com/users', (usersData) => {
    makeHttpRequest('GET', `https://dummyjson.com/posts/user/${usersData.users[0].id}`, (postsData) => {
        makeHttpRequest('GET', `https://dummyjson.com/comments/post/${postsData.posts[0].id}`, (commentsData) => {
            makeHttpRequest('GET', `https://dummyjson.com/users/${commentsData.comments[0].user.id}`, (userData) => {
                console.log(userData);
            });
        });
    });
});
/*
OUTPUT:

{id: 74, firstName: 'Penelope', lastName: 'Harper', maidenName: '', age: 29, …}
*/

console.log("Line No. 1:");
setTimeout(() => {
    console.log("Line No. 2:");
},1000);
console.log("Line No. 3:");

/*
OUTPUT:

    Line No. 1:
    Line No. 3:
    Line No. 2:
*/

/*
There are 3 best ways to solve CallBack Hell
    1. Use Promises.
    2. Use Async / Await.
    3. Break into small function.
*/