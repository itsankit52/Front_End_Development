//GET 
// fetch('https://dummyjson.com/products')
//     .then((res) => res.json())
//     .then ((data) => {
//         console.log(data);
//     })


//POST
fetch('https://dummyjson.com/products/add', {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        title: "Vivo",
        price: 20000
    })
})
.then(res => res.json())
.then(data => {
    console.log(data);
})
.catch(error => console.log("Error:", error));

