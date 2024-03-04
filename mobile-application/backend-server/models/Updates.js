const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UpdatesSchema = new Schema({
    username: String,
    date: Date,
    update: String
});

const Updates = mongoose.model('Updates', UpdatesSchema);

module.exports = Updates;