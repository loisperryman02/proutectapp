const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ResponseSchema = new Schema({
    coordinates: String,
    reponse: String,
    date: Date
});

const Response = mongoose.model('Response', ResponseSchema);

module.exports = Response;

