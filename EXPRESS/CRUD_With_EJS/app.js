const express = require('express');
const app = express();
const path = require('path');
const userModel = require('./models/user');

app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get('/', (req, res) => {
    res.render('index');
});

// Read all users
app.get('/read', async (req, res) => {

    let users = await userModel.find();

    res.render('read', { users });

});

// Create user
app.post('/create', async (req, res) => {

    let { name, email, image } = req.body;

    let userdata = await userModel.create({
        name,
        email,
        image
    });

    res.redirect('/read');

});

// Delete user
app.get('/delete/:id', async (req, res) => {

    await userModel.findByIdAndDelete(req.params.id);

    res.redirect('/read');

});

// Edit 
app.get('/edit/:id', async (req, res) => {

    let user = await userModel.findById(req.params.id);

    res.render('edit', { user });

});

app.post('/update/:id', async (req, res) => {

    let { name, email, image } = req.body;

    await userModel.findByIdAndUpdate(
        req.params.id,
        {
            name,
            email,
            image
        }
    );

    res.redirect('/read');

});


app.listen(3000, () => {
    console.log('Server running on port 3000');
});