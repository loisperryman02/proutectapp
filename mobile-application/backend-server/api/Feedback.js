const express = require('express');
const router = express.Router();

const Feedback = require('./../models/Feedback');



// Route feedback
router.post('/feedback', (req, res) => {
    let {id, coordinates, q1, q2, q3, q4, written_feedback, date, time} = req.body;
    id = id.trim();
    coordinates = coordinates.trim();
    q1 = q1.trim();
    q2 = q2.trim();
    q3 = q3.trim();
    q4 = q4.trim();
    written_feedback = written_feedback.trim();
    date = date.trim();
    time = time.trim();

    // doesn't matter if there is any empty entries in the database for this case. 
    // but here would be verification for different entries if needed.

    // Creates a new feedback object. 
    const newFeedback  = new Feedback({
        id,
        coordinates,
        q1,
        q2,
        q3,
        q4,
        written_feedback,
        date,
        time
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

module.exports = router;