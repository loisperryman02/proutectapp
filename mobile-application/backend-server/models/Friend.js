const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FriendSchema = new Schema({
    username: String,
    friends: [String],
    requests: [String]
});

const Friend = mongoose.model('Friend', FriendSchema);

module.exports = Friend;

