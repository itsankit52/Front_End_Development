const express = require('express');
const app = express();
const userModel = require('./userModel'); // we can perform CRUD operations using this model 

app.get('/', (req, res) => {
    res.send("Server Start ")
})

// CREATE 
app.get('/create', async (req, res) => {
    let createdUser = await userModel.create({
        name: "Ankit Thakur",
        username: "ankit5d2",
        email: "ankit23@gmail.com"
    })

    res.send(createdUser)
})

// UPDATE
app.get('/update', async (req, res) => {
    let updatedUser = await userModel.findOneAndUpdate(
        { username: "ankit52" },
        { name: "Piyush Thakur" },
        { returnDocument: 'after' }
    )

    res.send(updatedUser)
})

// READ
// If we use find(), we will get users, and if no user exists, it will return an empty array. But if we use findOne(), and no user exists, it will return null.
// Find() gives an array, but findOne() give a object.
app.get('/read', async (req, res) => {
    let users = await userModel.find();
    res.send(users)
})

// DELETE
// Method 2 : Delete all users 
app.get('/delete-all', async (req, res) => {
    await userModel.deleteMany({});
    res.send("All users deleted");
});

// Method 2 : Delete one user 
app.get('/delete', async (req, res) => {
    let deletedUser = await userModel.findOneAndDelete({
        username: "ankit5d2"
    });

    res.send(deletedUser);
});

app.listen(3000); 