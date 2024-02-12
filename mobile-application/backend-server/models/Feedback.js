const { Timestamp } = require('mongodb');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FeedbackSchema = new Schema({
    id: Number,
    coordinates: String,
    q1: Number,
    q2: Number,
    q3: Number,
    q4: Number,
    written_feedback: String,
    date: Date,
    time: Timestamp
});

const Feedback = mongoose.model('Feedback', FeedbackSchema);

mondule.exports = Feedback;

