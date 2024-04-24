const mongoose = require('mongoose');
const Response = require('../Response'); // Adjust path to your User model

beforeAll(async () => {
  await mongoose.connect("mongodb+srv://loisperryman02:25.P3rryp3opl3@cluster0.ctt8oou.mongodb.net/?retryWrites=true&w=majority");
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