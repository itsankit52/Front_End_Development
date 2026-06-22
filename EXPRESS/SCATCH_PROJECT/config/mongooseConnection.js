const mongoose = require('mongoose');
const config = require('config');

const dbgr = require('debug')('development: mongoose'); // export DEBUG=development:*


mongoose.connect(`${config.get("MONGODB_URL")}/scatch`)
    .then(function () {
        dbgr("Connected"); // This will not print in console, because we use 'debugger'
    }).catch(function (err) {
        dbgr(err); // This will not print in console, because we use 'debugger'
    })



module.exports = mongoose.connection;