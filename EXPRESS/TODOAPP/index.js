const express = require('express');
const app = express();

// Middleware
app.use(express.static("public"));

// GET Request
app.get('/', (req, res) => {
    console.log("This is a GET Request");
    res.send("Server Start");
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