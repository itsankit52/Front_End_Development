const express = require('express');
const router = express.Router();
const userModel = require('../models/userModel')

router.get('/', (req, res) => {
    res.send('User Server Start ')
})


router.post('/register', async (req, res) => {

    try {
        let { fullname, email, password } = req.body;

        let user = await userModel.create({
            fullname,
            email,
            password
        });
        res.send(user);
    } catch (err) {
        console.log(err.message);
    }



});


module.exports = router;