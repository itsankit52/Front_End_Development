const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send(`
    
        <form action="/register" method="POST">
            <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
            >

            <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
            >

            <button>
                Register
            </button>
        </form>
    `);
});

app.post('/register', (req, res) => {
    console.log(req.body);
    res.send("User Registered");
});

app.listen(3000);