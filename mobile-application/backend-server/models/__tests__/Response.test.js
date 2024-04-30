require('dotenv').config();
const mongoose = require('mongoose');
const Response = require('../Response'); // Adjust path to your User model

beforeAll(async () => {
  await mongoose.connect(process.env.MONGODB_URI);
});

afterAll(async () => {
  await mongoose.disconnect();
});

test('inserts new user into database', async () => {
  const response = new Response({ coordinates: '{52.125, -1.239}', date: new Date().toISOString(), response: 'A very safe journey.' });
  await response.save();

  const findResponse = await Response.findOne({ coordinates: '{52.125, -1.239}' });
  expect(findResponse).toBeDefined();
  expect(findResponse.response).toEqual('A very safe journey.');
});