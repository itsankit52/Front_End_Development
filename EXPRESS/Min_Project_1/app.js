require('dotenv').config();
const express = require('express');
const app = express();
const userModel = require('./models/user');
const postModel = require('./models/post');
const cookieParser = require('cookie-parser');

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser())

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
// const path = require('path');

app.get('/', (req, res) => {
    res.render('index')
});

app.get('/profile', isLoggedIn, async (req, res) => {
    let user = await userModel.findById(req.user._id).populate("posts");
    res.render('profile', { user });
});

// Creating Account 
app.post('/register', async (req, res) => {
    let { username, name, email, password, age } = req.body;
    let user = await userModel.findOne({ email });

    if (user) {
        return res.status(400).send("User already exists");
    }

    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, async (err, hash) => {
            let createdUser = await userModel.create({
                username,
                name,
                email,
                password: hash,
                age
            });

            let token = jwt.sign({ email: email, userid: createdUser._id }, process.env.JWT_SECRET);

            res.cookie("token", token);
            res.redirect('./profile');

        });
    });
});

//Login 
app.get('/login', (req, res) => {
    res.render('login')
});

app.post('/login', async (req, res) => {
    let { email, password } = req.body;
    let user = await userModel.findOne({ email });
    if (!user) {
        return res.status(400).send("User not found");
    }
    bcrypt.compare(password, user.password, (err, result) => {
        if (result) {
            let token = jwt.sign({ email: user.email, userid: user._id }, process.env.JWT_SECRET);
            res.cookie("token", token);
            res.redirect('/profile')
        }
        else res.status(400).send("Check Your Password and Try Again.");
    });
});


// Logout 
app.get('/logout', (req, res) => {
    res.clearCookie('token');

    res.redirect('/');
})

//
app.post('/post/create', isLoggedIn, async (req, res) => {

    let user = await userModel.findById(req.user._id);

    let post = await postModel.create({
        title: req.body.title,
        description: req.body.description,
        user: user._id
    });

    user.posts.push(post._id);
    await user.save();
    res.redirect('/profile');
});

// Delete post route 
app.get('/post/delete/:id', isLoggedIn, async (req, res) => {
    let post = await postModel.findById(req.params.id);
    if (!post) {
        return res.status(404).send("Post not found");
    }
    if (post.user.toString() !== req.user._id.toString()) {
        return res.status(403).send("Unauthorized");
    }

    let user = await userModel.findById(req.user._id);
    user.posts.pull(req.params.id);
    await user.save();
    await postModel.findByIdAndDelete(req.params.id);

    res.redirect('/profile');

});

// Middleware for protecting route
async function isLoggedIn(req, res, next) {
    let token = req.cookies.token;
    if (!token) {
        return res.status(401).send("You must be logged in");
    }
    try {
        let data = jwt.verify(token, process.env.JWT_SECRET);
        let user = await userModel.findById(data.userid);
        if (!user) {
            return res.status(404).send("User not found");
        }
        req.user = user;
        next();
    }
    catch (err) {
        return res.status(401).send("Invalid Token");
    }
}



const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {

    console.log(`Server Running on ${PORT}`);

});