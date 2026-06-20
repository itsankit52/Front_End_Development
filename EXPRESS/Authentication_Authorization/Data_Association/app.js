const express = require('express');
const userModel = require('./models/user');
const postModel = require('./models/post');
const app = express();

app.get('/', (req, res) => {
    res.send('Server Start ')
})

app.get('/create', async (req, res) => {
    let user = await userModel.create({
        username: "Ankit",
        age: 20,
        email: "piyush@gmail.com"
    })

    res.send(user);

})


app.get('/post/create', async (req, res) => {

    let post = await postModel.create({
        postData: "Hello i'm iyush ",
        user: "6a36e3585d2ec72c9740d92a"
    })

    let user = await userModel.findOne({ _id: "6a36e3585d2ec72c9740d92a" })
    user.post.push(post._id);
    await user.save();

    res.send({ user, post })
})

app.listen(3000, () => {
    console.log('Server running on port 3000');
})

