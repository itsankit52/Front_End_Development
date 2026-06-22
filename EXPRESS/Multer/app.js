const express = require('express');
const crypto = require('crypto');
const multer = require('multer');
const path = require('path');
const app = express();
const multerConfig = require('./config/multer')

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

// Static folder
app.use(express.static(path.join(__dirname, 'public')));

// Storage Configuration
const storage = multer.diskStorage({
    // Where file will be stored
    destination: function (req, file, cb) {
        cb(null, './public/images/uploads');
    },
    // Custom file name
    filename: function (req, file, cb) {
        crypto.randomBytes(12, (err, bytes) => {
            if (err) {
                return cb(err);
            }
            const fileName = bytes.toString('hex') + path.extname(file.originalname);
            cb(null, fileName);
        });
    }
});

// Multer middleware
const upload = multer({
    storage: storage
});

// Home Route
app.get('/', (req, res) => {
    res.render('index');
});

// Upload Route
app.post('/upload', upload.single('image'), (req, res) => {
    console.log(req.body);
    console.log(req.file);
    res.send("File Uploaded Successfully");
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});