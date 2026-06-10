const express = require('express');
const app = express();

// Middleware -> It runs before GET request
// Method 1  
app.use((req, res, next) => {
    console.log("Middleware done first time...");
    next(); // don't forget to writ this
});

app.use((req, res, next) => {
    console.log("Middleware done second time...");
    next(); // don't forget to writ this
});

// //Method 2 of writing Midleware
function myMiddleware(req, res, next) {
    console.log("Middleware Executed using 2nd method...");
    next(); // don't forget to writ this
}
app.use(myMiddleware)


//These middleware are used to parse incoming request data and make it available inside: req.body
// Without them, Express cannot properly read the data sent by the client.
app.use(express.json()); // Used to parse JSON data sent in the request body.

app.use(express.urlencoded({ extended: true })); // Used to parse data submitted from HTML forms.

// GET Request
app.get('/', (req, res) => {
    console.log("This is a GET Request");
    res.send("Server Start");
});


// If we search for profile route then it will show error, and it show in terminal not on UI
app.get('/profile', (req, res, next) => {
    return next(new Error("Somthing Went Wrong!"))
});

// Error Handling 
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke! Error handling done...'); // This will show on UI (Front-End)
});
// POST Request
app.post('/', (req, res) => {
    console.log("This is a POST Request");
    res.send("Post Request Done");
});

// About Route
app.get('/about', (req, res) => {
    console.log("This is a GET Request for About");
    res.sendFile("template/about.html", { root: __dirname });
});

// json examples 
app.post('/api', (req, res) => {
    res.json({
        "id": 1,
        "name": "Ankit Thakur",
        "age": 22,
        "course": "B.Tech CSE",
        "college": "VVIT"
    })
    res.send("Post request done for api");
});

// Start Server
app.listen(3000, () => {
    console.log("App is running on port 3000");
});

// npm i cookie-parser