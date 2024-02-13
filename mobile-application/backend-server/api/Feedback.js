const express = require('express');
const router = express.Router();

const Feedback = require('./../models/Feedback.js');
const Response = require('./../models/Response.js');

// Route feedback endpoint 
router.post('/feedback', (req, res) => {
    let {coordinates, q1, q2, q3, q4, date} = req.body;
    coordinates = coordinates.trim();
    q1 = q1.trim();
    q2 = q2.trim();
    q3 = q3.trim();
    q4 = q4.trim();
    date = date.trim();

    // doesn't matter if there is any empty entries in the database for this case. 
    // but here would be verification for different entries if needed.

    // Creates a new feedback object. 
    const newFeedback  = new Feedback({
        coordinates,
        q1,
        q2,
        q3,
        q4,
        date
    });

    newFeedback.save().then(result => {
        res.json({
            status: "SUCCESS",
            message: "Feedback saved sucessfully.",
            data: result
        })
    })
    .catch(err => {
        res.json({
            status: "FAILED",
            message: "An error occurred while saving the feedback."
        })
    })
})

// Route writen response feedback endpoint
router.post('/response', (req, res) => {
    let {id, coordinates, response, date} = req.body;
    id = id.trim();
    coordinates = coordinates.trim();
    response = response.trim();
    date = date.trim();

    // Creates a new response object. 
    const newResponse  = new Response({
        id,
        coordinates,
        response, 
        date
    });

    newResponse.save().then(result => {
        res.json({
            status: "SUCCESS",
            message: "Feedback saved sucessfully.",
            data: result
        })
    })
    .catch(err => {
        res.json({
            status: "FAILED",
            message: "An error occurred while saving the feedback."
        })
    })
})

module.exports = router;