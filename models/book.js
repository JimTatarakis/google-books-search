// Mongoose/MongoDB: Generates new Schema for Articles
const BookSchema = new Schema({
    title: {
        type: String,
    },
    view: {
        type: String,
        default: 'No link today!'
    },
    summary: {
        type: String,
        default: 'No summary this time!'
    }
});

module.exports = Books = mongoose.model('book', BookSchema);