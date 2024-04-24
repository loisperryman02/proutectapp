const mongoose = require('mongoose');
const Updates = require('../Updates'); // Adjust path to your User model

beforeAll(async () => {
  await mongoose.connect("mongodb+srv://loisperryman02:25.P3rryp3opl3@cluster0.ctt8oou.mongodb.net/?retryWrites=true&w=majority");
});

afterAll(async () => {
  await mongoose.disconnect();
});

test('inserts new update into database', async () => {
  const update = new Updates({ username: 'testuser', date: new Date().toISOString(), update: 'I have arrived home safely.' });
  await update.save();

  const findUpdate = await Updates.findOne({ username: 'testuser' });
  expect(findUpdate).toBeDefined();
  expect(findUpdate.update).toEqual('I have arrived home safely.');
});