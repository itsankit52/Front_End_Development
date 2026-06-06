// Import the Express framework
const express = require('express');

// Create an Express application
const app = express();

// Import body-parser middleware
// It is used to read data sent by the client in the request body
const Bodyparser = require('body-parser');

// Middleware
// Converts incoming JSON data into a JavaScript object
// and stores it inside req.body
app.use(Bodyparser.json());

// Port number on which the server will run
const PORT = 3000;

// Start the server and listen for incoming requests
app.listen(PORT, () => {
    console.log(`Server started at port: ${PORT}`);
});

// ROUTES

// GET Route
// When a user visits http://localhost:3000/
// this route will be executed
app.get('/', (req, res) => {
    res.send("Hello World");
});

// POST Route
// URL: http://localhost:3000/api/home
// Used to receive data from the client
app.post('/api/home', (req, res) => {

    // Extract data from req.body using destructuring
    // Client must send JSON like:
    // {
    //   "homeName": "KASRP",
    //   "homeMade": "Bricks"
    // }
    const { homeName, homeMade } = req.body;

    // Print received data in the terminal
    console.log("Home Name:", homeName);
    console.log("Home Made:", homeMade);

    // Send response back to the client
    res.send("Successfully Submitted");
});