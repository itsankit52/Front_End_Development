const express = require('express');
const router = express.Router();
const ownerModel = require('../models/ownerModel');



// This route only avaliable for development phase 
if (process.env.NODE_ENV === 'development') {

    router.post('/create', async (req, res) => {
            console.log(req.body);

        try {

            // Check if owner already exists
            let ownerCount = await ownerModel.countDocuments();

            if (ownerCount > 0) {
                return res
                    .status(503)
                    .send("You can't create a new owner.");
            }

            // Get data from request body
            let { fullname, email, password, gstin } = req.body;

            // Create owner
            let createdOwner = await ownerModel.create({
                fullname,
                email,
                password,
                gstin
            });

            res.status(201).send(createdOwner);

        } catch (err) {

            console.log(err);

            res.status(500).send({
                message: "Something went wrong",
                error: err.message
            });

        }

    });

}


router.get('/', (req, res) => {
    res.send('Owner Server Start ')
})


// console.log(process.env.NODE_ENV); // output - development





// app.listen(3000, () => {
//     console.log('Server running on port 3000');
// })

module.exports = router;