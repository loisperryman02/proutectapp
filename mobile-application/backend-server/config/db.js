// for running the application. 

require('dotenv').config();
const mongoose = require('mongoose');

mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("Db connected.");
    })
    .catch((err) => console.log(err));


// // config/db.js - for merging/joining databases. 
// const connectDB = async () => {
//     const mongoose = require('mongoose');
//     try {
//         uri = "mongodb+srv://loisperryman02:25.P3rryp3opl3@cluster0.ctt8oou.mongodb.net/?retryWrites=true&w=majority";
//         await mongoose.connect(uri, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true
//         });
//         console.log("Db connected.");
//     } catch (err) {
//         console.error("Database connection error:", err);
//         process.exit(1);
//     }
// };

// module.exports = connectDB;