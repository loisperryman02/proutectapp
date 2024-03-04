const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const bcrypt = require('bcrypt');

const Feedback = require('./../models/Feedback.js');
const Response = require('./../models/Response.js');
const User = require('../models/User.js');
const Friend = require('../models/Friend.js');

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

router.post("/friend", async (req, res) => {
    let { friend_username, username } = req.body;
    friend_username = friend_username.trim();
    username = username.trim();

    let user = await User.findOne({ username: friend_username });
    
    if (!user) {
        return res.status(400).json({ message: "User does not exist." });
    }

    if (username == friend_username) {
        return res.status(400).json({ message: "Current user and requested user are the same." });
    }

    let friend = await Friend.findOne({ username: friend_username });
    console.log("finding friend");
    console.log(friend);

    if (friend) {
        // Checks that the current user has not already had a request from this user.
        if (!friend.requests.includes(username)) {
            friend.requests.push(username);
            await friend.save();
        } else {
            console.log("You have already sent a request to this user.")
        }
    } else {
        // If the user hasn't had any friend requests, make a new entry for Schema.
        friend = new Friend({
        username: friend_username,
        friends: [],
        requests: [username], // Initialize with the requester
        updates: []
        });
        await friend.save();
    }

    res.status(200).json({ success: true, message: 'Friend request sent.' });

})


// Get friend requests for a user
router.get('/friend/requests/:username', async (req, res) => {
    const { username } = req.params;
    console.log("username!!");
    console.log(username);
  
    try {
      const user = await Friend.findOne({ username: username });
      if (user) {
        res.status(200).json({ success: true, requests: user.requests });
      } else {
        res.status(404).json({ success: false, message: 'User not found.' });
      }
    } catch (error) {
      res.status(500).json({ success: false, message: 'Error fetching requests.' });
    }
  });
  

module.exports = router;