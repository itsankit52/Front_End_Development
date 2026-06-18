const fs = require('fs');
const express = require('express');
const path = require('path'); // Import Path module (used for handling file and folder paths)
const { fileLoader } = require('ejs');
const app = express();

app.use(express.json());// Middleware to parse incoming JSON data
app.use(express.urlencoded({ extended: true }));// Middleware to parse form data sent from HTML forms,  extended: true allows nested objects in form data
app.use(express.static(path.join(__dirname, 'public')));// Serve static files from the "public" folder
app.set('view engine', 'ejs') // Set EJS as the template/view engine

// Home Route
app.get('/', (req, res) => {
    fs.readdir(`./files`, function (err, files) {
        res.render("index", { files: files })
    });
});

app.get('/file/:filename', (req, res) => {
    fs.readFile(`./files/${req.params.filename}`, "utf-8", function (err, filedata) {
        res.render('show', { filename: req.params.filename, filedata: filedata })
    })
});

app.get('/delete/:filename', (req, res) => {
    fs.unlink(
        `./files/${req.params.filename}`,
        function (err) {
            if (err) 
                return res.send("Error deleting file");
            
            res.redirect("/");
        }
    );
});

app.post('/create', (req, res) => {
    fs.writeFile(`./files/${req.body.title.split(' ').join('')}.txt`, req.body.details, function (err) {
        res.redirect("/");
    });
});


// Dynamic routes 
// '/profile/:username' -> it means that ki username ki jagah pe kuch bhi ho skta hai
// app.get('/profile/:username', (req, res) => {
//     res.send(`Welcome back ${req.params.username}`)
// });
// app.get('/admin/:username/:age', (req, res) => {
//     res.send(`Welcome back ${req.params.username}, your age is : ${req.params.age}`)
// });

// Start server on port 3000
app.listen(3000, () => {
    console.log("running");
});