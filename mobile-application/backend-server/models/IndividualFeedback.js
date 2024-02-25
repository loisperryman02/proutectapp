const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const IndividualFeedbackSchema = new Schema({
    latitude: String,
    longitude: String,
    q1: Number,
    q2: Number,
    q3: Number,
    q4: Number,
    date: Date
});

const IndividualFeedback = mongoose.model('IndividualFeedback', IndividualFeedbackSchema);

module.exports = IndividualFeedback;

