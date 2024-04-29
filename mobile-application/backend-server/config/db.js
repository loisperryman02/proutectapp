// File needed to start the database.

require('dotenv').config();
const mongoose = require('mongoose');

mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("Db connected.");
    })
    .catch((err) => console.log(err));