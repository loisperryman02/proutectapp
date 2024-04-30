require('dotenv').config();
const mongoose = require('mongoose');
const Friend = require('../Friend'); // Adjust the path to where your model is located

beforeAll(async () => {
    await mongoose.connect(process.env.MONGODB_URI);
  });
  
  afterAll(async () => {
    await Friend.collection.drop();
    await mongoose.disconnect();
  });

test('inserts a user into the friend database when a user is first created', async () => {
    const friendData = new Friend({ username: 'testuser', friends: [], requests: [] });
    await friendData.save();

    const newFriend = await Friend.findOne({ username: 'testuser' });
    expect(newFriend).toBeDefined();
    expect(newFriend.username).toEqual('testuser');
});

test('testuser2 is correctly added as a friend of testuser', async () => {
    const friendData = await Friend.findOne({ username: 'testuser' });

    if (!friendData.requests.includes("testuser2")) {
        friendData.friends.push("testuser2");
        await friendData.save();
    }
    
    const newFriend = await Friend.findOne({ username: 'testuser' });
    expect(newFriend.friends).toEqual(["testuser2"]);
});

test('insert new friend request for testuser', async () => {
    const friendData = await Friend.findOne({ username: 'testuser' });

    if (!friendData.friends.includes("requestuser")) {
        friendData.requests.push("requestuser");
        await friendData.save();
    }
    
    const newFriend = await Friend.findOne({ username: 'testuser' });
    expect(newFriend.requests).toEqual(["requestuser"]);
});

test('new request is only added if user has not already sent a friend request', async () => {
    const friendData = await Friend.findOne({ username: 'testuser' });

    if (!friendData.requests.includes("requestuser")) {
        friendData.requests.push("requestuser");
        await friendData.save();
    }
    
    const newFriend = await Friend.findOne({ username: 'testuser' });
    expect(newFriend.requests).toEqual(["requestuser"]);
});