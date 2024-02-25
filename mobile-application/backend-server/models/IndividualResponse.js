const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const IndividualResponseSchema = new Schema({
    latitude: String,
    longitude: String,
    date: Date,
    response: String
});

const IndividualResponse = mongoose.model('IndividualResponse', IndividualResponseSchema);

module.exports = IndividualResponse;