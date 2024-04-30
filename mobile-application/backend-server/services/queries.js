const { default: mongoose } = require('mongoose');
require('dotenv').config();
const connectDB = require('C:/Users/User/Documents/GitHub/proutectapp/mobile-application/backend-server/config/db.js');

// File to store functions that hold queries needed for Feedback Analysis.

const Feedback = require('./../models/Feedback.js');
const Response = require('./../models/Response.js');

/**
 * Splits the array of coordinates that represent entire routes into singular data entries for each indiviudal coordinate.
 * Each coordinate is stored with to its corresponding ratings (the same ratings as the entire route.)
 */
async function getAllRatings() {
    const pipeline = [
        { $unwind: "$coordinates" },
        { $project: { _id:0, coordinate: "$coordinates", q1: 1, q2: 1, q3: 1, q4: 1, date: 1}},
        { $merge: { into: "all_feedback"} }
    ];

    try {
        await connectDB();
        const result = await Feedback.aggregate(pipeline);
        return result
    } catch (error) {
        console.error("Error fetching feedback: ", error);
        throw error;
    } finally {
        mongoose.disconnect(); 
    }
}

/**
 * Splits the array of coordinates that represent entire routes into singular data entries for each indiviudal coordinate.
 * Each coordinate is stored with to its corresponding written responses (the same ratings as the entire route.)
 */
async function getAllResponses() {
    const pipeline = [
        { $unwind: "$coordinates" },
        { $project: { _id:0, coordinate: "$coordinates", reponse: 1, date: 1}},
        { $merge: { into: "all_responses"} }
    ];

    try {
        await connectDB();
        const result = await Response.aggregate(pipeline);
        return result
    } catch (error) {
        throw error;
    } finally {
        mongoose.disconnect(); 
    }
}

// Converts the string that stores route coordinates to an array.
async function convertStringRouteToArray() {
    await connectDB(); 

    const feedbacks = await Feedback.find(); 

    for (let feedback of feedbacks) {
        if (typeof feedback.coordinates === 'string') {
            try {
                feedback.coordinates = JSON.parse(feedback.coordinates); 
                await feedback.save(); 
            } catch (error) {
                console.error("Error parsing coordinates string:", error);
            }
        }
    }

    mongoose.disconnect(); 
}

module.exports = {
    getAllResponses,
    getAllRatings,
    convertStringRouteToArray
};