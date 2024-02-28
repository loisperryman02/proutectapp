const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const bcrypt = require('bcrypt');

const Feedback = require('./../models/Feedback.js');
const Response = require('./../models/Response.js');
const User = require('../models/User.js');

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

router.post("/login", async (req, res) => {
    console.log("trying!!!");
    let { username, password } = req.body;
    username = username.trim();
    password = password.trim();

    console.log(username);
    console.log(password);

    try {
        const user = await User.findOne({ username: username });
        console.log(user);
        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }

        // Compare the hashed password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        // Here, implement token generation or session management as needed
        res.json({ message: "Login successful" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
    }

})

router.post("/signup", async (req, res) => {
    let { name, username, password } = req.body;
    name = name.trim();
    username = username.trim();
    password = password.trim();
    try {
        let user = await User.findOne({ username: username });
        if (user) {
            return res.status(400).json({ message: "User Already Exists" });
        }



        NewUser = new User({
            name,
            username,
            password
        });

        await NewUser.save();

        // Here, implement token generation or session management as needed
        res.json({ message: "Sign up Successful" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
    }

})


module.exports = router;