const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Product Server Start ')
})



// app.listen(3000, () => {
//     console.log('Server running on port 3000');
// })

module.exports = router;