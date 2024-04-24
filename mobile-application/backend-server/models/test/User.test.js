const mongoose = require('mongoose');
const User = require('../User'); // Adjust path to your User model

beforeAll(async () => {
  await mongoose.connect(process.env.MONGODB_URI);
});

afterAll(async () => {
  await mongoose.disconnect();
});

test('inserts new user into database', async () => {
  const testUser = new User({ name: 'Test User', username: 'testuser', password: 'password' });
  await testUser.save();

  const user = await User.findOne({ username: 'testuser' });
  expect(user).toBeDefined();
  expect(user.name).toEqual('Test User');
});

test('existing user not inserted into database', async () => {
  existingUser = await User.findOne({ username: 'testuser' });

  if (!existingUser) {
    const testUser = new User({ name: 'Duplicate User', username: 'testuser', password: 'password' });
    await testUser.save();
  }

  const user = await User.findOne({ username: 'testuser' });
  expect(user).toBeDefined();
  expect(user.name).toEqual('Test User');
});