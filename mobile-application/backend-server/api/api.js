const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const Feedback = require('../models/Feedback.js');
const Response = require('../models/Response.js');
const User = require('../models/User.js');
const Friend = require('../models/Friend.js');
const Updates = require('../models/Updates.js')

// Route feedback endpoint 
router.post('/feedback', (req, res) => {
    let {coordinates, date, q1, q2, q3, q4} = req.body;
    coordinates = coordinates.trim();
    date = date.trim();
    q1 = q1;
    q2 = q2;
    q3 = q3;
    q4 = q4;

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
    coordinates = coordinates.trim();
    date = date.trim();
    response = response.trim();
    
    // Creates a new response object. 
    const newResponse  = new Response({
        coordinates,
        date,
        response
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

router.post("/login", async (req, res) => {
    let { username, password } = req.body;
    username = username.trim();
    password = password.trim();

    console.log(username);
    console.log(password);

    try {
        const user = await User.findOne({ username: username });
        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        res.json({ message: "Login successful" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
    }

})

router.post("/signup", async (req, res) => {
    let { name, username, password, passwordtwo } = req.body;
    name = name.trim();
    username = username.trim();
    password = password.trim();
    passwordtwo = passwordtwo.trim();

    try {
        let user = await User.findOne({ username: username });
        
        if (user) {
            return res.status(400).json({ message: "Username already exists." });
        }

        if (password !== passwordtwo) {
            return res.status(400).json({ message: "Passwords do not match." });
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
    console.log("found friend");

    if (friend) {
        friend.requests.push(username);
        await friend.save();
        // Checks that the current user has not already had a request from this user.
        // Ensures that users are not already friends. 
        // if (!friend.requests.includes(username) && (!friend.friends.includes(username))) {
            
            
        // } else {
        //     return res.status(400).json({ message: "You are already friends with this user or have sent them a pending request. " });
        // }
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

    // Adds the current user (one who made the request) to the Friend table if not there already. 
    requester = await Friend.findOne({ username : username });

    if (!requester) {
         requestedFriend = new Friend({
            username: username,
            friends: [],
            requests: [],
            updates: []
        })

        await requestedFriend.save();
    }

    res.status(200).json({ success: true, message: 'Friend request sent.' });

})

router.post("/acceptUser", async (req, res) => {
    let { request_username, username } = req.body;
    request_username = request_username.trim();
    username = username.trim();

    let friend = await Friend.findOne({ username: username });

    if (friend) {
        // Removes username from requests list and adds to friends array.
        if (friend.requests.includes(request_username)) {
            const index = friend.requests.indexOf(request_username);
            friend.requests.splice(index, 1);

            friend.friends.push(request_username)

            await friend.save();
        } else {
            console.log("You have already sent a request to this user.")
        }
    } else {
        console.log("There is an error - this user does not exist in Friend Schema.");
    }

    let new_friend = await Friend.findOne({ username: request_username});

    // Adds current user to list of friends of user they have just accepted.
    if (new_friend) {
        new_friend.friends.push(username);
        await new_friend.save();
    } else {
        console.log("This user has not been added to the schema.");
    }

    res.status(200).json({ success: true, message: 'Friends added successfully.' });

})

router.post("/rejectUser", async (req, res) => {
    let { reject_username, username } = req.body;
    reject_username = reject_username.trim();
    username = username.trim();

    let friend = await Friend.findOne({ username: username });

    if (friend) {
        // Removes username from requests list as they have rejected the friend. 
        if (friend.requests.includes(reject_username)) {
            const index = friend.requests.indexOf(reject_username);
            friend.requests.splice(index, 1);

            await friend.save();
        } else {
            console.log("Error - a request has not been stored from this user. ")
        }
    } else {
        console.log("There is an error - this user does not exist in Friend Schema.");
    }

    res.status(200).json({ success: true, message: 'Friends added successfully.' });

})

// Get friend requests for a user
router.get('/friend/requests/:username', async (req, res) => {
    const { username } = req.params;
  
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

router.post('/updates', (req, res) => {
    let {username, date, update} = req.body;
    username = username.trim();
    date = date.trim();
    update = update.trim();

    // Creates a new update object
    const newUpdate  = new Updates({
        username,
        date,
        update
    });

    newUpdate.save().then(result => {
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

// Route to fetch the updates feed
router.get('/updates/:username', async (req, res) => {
    const current_user = req.params.username;

    try {
        const user = await Friend.findOne({ username: current_user });

        if (user && user.friends.length > 0) {
            const updates = await fetchFriendsUpdates(user.friends);
            
            res.status(200).json({ success: true, updates });
        } else {
            let updates = "There are no updates to display.";
        }
    } catch (err) {
        res.status(500).json({ message: "An error occurred while fetching the updates feed." });
    }
});

async function fetchFriendsUpdates(friend_usernames) {
    // Implementation as shown before
    const updates = await Updates.find({ 
        username: { $in: friend_usernames }
    })

    return updates
}


module.exports = router;