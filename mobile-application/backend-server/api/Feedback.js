const express = require('express');
const router = express.Router();

const Feedback = require('./../models/Feedback.js');
const Response = require('./../models/Response.js');

// Route feedback endpoint 
router.post('/feedback', (req, res) => {
    let {coordinates, date, q1, q2, q3, q4} = req.body;
    coordinates = coordinates.trim();
    date = date.trim();
    q1 = q1;
    q2 = q2;
    q3 = q3;
    q4 = q4;

    // doesn't matter if there is any empty entries in the database for this case. 
    // but here would be verification for different entries if needed.

    // Creates a new feedback object. 
    const newFeedback  = new Feedback({
        coordinates,
        date,
        q1,
        q2,
        q3,
        q4
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
    let {coordinates, date, response} = req.body;
    console.log(response);
    coordinates = coordinates.trim();
    date = date.trim();
    response = response.trim();

    console.log(response);
    
    // Creates a new response object. 
    const newResponse  = new Response({
        coordinates,
        date,
        response
    });

   console.log(newResponse);

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