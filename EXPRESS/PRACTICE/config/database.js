const mongoose = require('mongoose');

require('dotenv').config();
const db = () => {
    mongoose.connect(process.env.DATABASE,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    )
        .then(() => console.log("Connection Sucessfully"))
        .catch((error) => console.log("Error Occured.", error))
    console.error(error.mwssage);
    process.exit(1);
}

module.exports = db;