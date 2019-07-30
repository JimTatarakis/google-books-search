// Dependencies
// =============================================================
const express = require('express');
const router = express.Router();

// Books Routes
// =============================================================
// Books: GET ALL Books
router.get('/books', (req, res) => {
    bookss.find({})
        .then(Books => res.json(Books)).catch(err => console.log(err));
});

module.exports = router;