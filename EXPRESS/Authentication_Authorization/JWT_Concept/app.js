const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');

const userModel = require('./models/user');


app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());

app.get('/', (req, res) => {
    res.render('index');
})

app.post('/create', async (req, res) => {

    let { username, email, password, age } = req.body;

    let user = await userModel.findOne({ email });
    if (user) {
        return res.status(400).send("User already exists");
    }

    bcrypt.genSalt(10, (err, salt) => {
        // console.log(salt);
        bcrypt.hash(password, salt, async (err, hash) => {
            // console.log(hash);
            let createdUser = await userModel.create({
                username,
                email,
                password: hash,
                age
            });

            let token = jwt.sign({ email: email }, 'piyuuu');
            res.cookie('token', token);

            res.send({
                username: createdUser.username,
                email: createdUser.email,
                age: createdUser.age
            });
        })
    })
});

app.get('/login', (req, res) => {
    res.render('login')
})

app.post('/login', async (req, res) => {
    let loginUser = await userModel.findOne({ email: req.body.email });
    // console.log(loginUser);
    if (!loginUser) return res.send("Something went wrong!");

    // console.log(loginUser.password);
    bcrypt.compare(req.body.password, loginUser.password, (err, result) => {
        // console.log(result);
        if (result) {

            let token = jwt.sign({ email: loginUser.email }, 'piyuuu');
            res.cookie('token', token);
            return res.send("You can login");
        }
        else res.send("Something went wrong! login faild");
    })
})

app.get('/logout', (req, res) => {
    res.cookie('token', '');
    res.redirect('/')
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
})

