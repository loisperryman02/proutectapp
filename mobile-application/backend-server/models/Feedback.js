const { Timestamp } = require('mongodb');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FeedbackSchema = new Schema({
    coordinates: String,
    q1: Number,
    q2: Number,
    q3: Number,
    q4: Number,
    date: Date
});

const Feedback = mongoose.model('Feedback', FeedbackSchema);

module.exports = Feedback;

