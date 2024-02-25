const { default: mongoose } = require('mongoose');
require('dotenv').config();
const connectDB = require('C:/Users/User/Documents/GitHub/proutectapp/mobile-application/backend-server/config/db.js');

// File to store functions that hold queries
// These will be needed for Feedback anaysis

const Feedback = require('./../models/Feedback.js');
const Response = require('./../models/Response.js');

async function fetchAllRatings() {

    // Define aggregation pipeline - coordinates will be split up and stored as separate records in another db collection.
    const pipeline = [
        { $unwind: "$coordinates" },
        { $project: { _id:0, coordinate: "$coordinates", q1: 1, q2: 1, q3: 1, q4: 1, date: 1}},
        { $merge: { into: "all_feedback"} }
    ];

    try {
        await connectDB();
        const result = await Feedback.aggregate(pipeline);
        console.log("feedback coordiante processed");
        return result
    } catch (error) {
        console.error("Error fetching feedback: ", error);
        throw error;
    } finally {
        mongoose.disconnect(); 
    }
}

async function fetchAllResponses() {
    // Define aggregation pipeline - coordinates will be split up and stored as separate records in another db collection.
    const pipeline = [
        { $unwind: "$coordinates" },
        { $project: { _id:0, coordinate: "$coordinates", reponse: 1, date: 1}},
        { $merge: { into: "all_responses"} }
    ];

    try {
        await connectDB();
        const result = await Response.aggregate(pipeline);
        console.log("response coordiante processed");
        return result
    } catch (error) {
        console.error("Error fetching response: ", error);
        throw error;
    } finally {
        mongoose.disconnect(); 
    }
}

async function convertStringToArray() {
    await connectDB(); // Connect to your database

    const feedbacks = await Feedback.find(); // Find documents with the stringified array

    for (let feedback of feedbacks) {
        if (typeof feedback.coordinates === 'string') {
            try {
                feedback.coordinates = JSON.parse(feedback.coordinates); // Convert string to array
                await feedback.save(); // Save the updated document
            } catch (error) {
                console.error("Error parsing coordinates string:", error);
            }
        }
    }

    mongoose.disconnect(); // Disconnect from the database
}




module.exports = {
    fetchAllRatings,
    fetchAllResponses,
    convertStringToArray
};