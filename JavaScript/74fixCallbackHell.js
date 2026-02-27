function makeHttpRequest(method, url, callback) {
    const xhr = new XMLHttpRequest()
    xhr.responseType = 'json'


    const promises = new Promise((resolve, reject) => {
        xhr.addEventListener('load', () => {
            resolve(xhr.response)
        });
    });


    xhr.open(method, url)
    xhr.send()

    return promises;
}

makeHttpRequest('GET', 'https://dummyjson.com/users')
    .then((userData) => {
        console.log(userData);
    });


// makeHttpRequest('GET', 'https://dummyjson.com/users', (usersData) => {
//     makeHttpRequest('GET', `https://dummyjson.com/posts/user/${usersData.users[0].id}`, (postsData) => {
//         makeHttpRequest('GET', `https://dummyjson.com/comments/post/${postsData.posts[0].id}`, (commentsData) => {
//             makeHttpRequest('GET', `https://dummyjson.com/users/${commentsData.comments[0].user.id}`, (userData) => {
//                 console.log(userData);
//             });
//         });
//     });
// });