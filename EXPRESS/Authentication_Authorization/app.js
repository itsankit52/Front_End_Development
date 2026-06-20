const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();
const bcrypt = require('bcrypt')
app.use(cookieParser());


app.get('/enc', (req, res) => {
    // Encryption 
    bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash("mypassword", salt, function (err, hash) {
            console.log(hash);
        });
    });
})

// Decryption - To check password 
app.get('/dec', (req, res) => {
    bcrypt.compare("mypassword", "$2b$10$bn3YultNHucjRPkGtbBzwu7gJIPoYr040zICNNR4eVoYqdT1erMXC", function (err, result) {
        console.log(result);
    })
})

app.listen(3000, () => {
    console.log('Server running on port 3000');
})

