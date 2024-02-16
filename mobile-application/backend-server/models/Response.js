const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ResponseSchema = new Schema({
    coordinates: String,
    date: Date,
    response: String
});

const Response = mongoose.model('Response', ResponseSchema);

module.exports = Response;