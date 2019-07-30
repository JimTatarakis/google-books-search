const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Mongoose/MongoDB: Generates new Schema for Articles
const BookSchema = new Schema({
    title: {
        type: String,
    },
    authors: {
        type: Array,
    },
    description: {
        type: String,
        default: 'No description this time!'
    },
    image: {
        type: String,
        default: 'No image this time!'
    },
    link: {
        type: String,
        default: 'No link this time!'
    }
});

module.exports = Books = mongoose.model('book', BookSchema);