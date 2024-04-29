const mongoose = require('mongoose');
const Feedback = require('../Feedback'); // Adjust path to your User model

beforeAll(async () => {
  await mongoose.connect("mongodb+srv://loisperryman02:25.P3rryp3opl3@cluster0.ctt8oou.mongodb.net/?retryWrites=true&w=majority");
});

afterAll(async () => {
  await mongoose.disconnect();
});

test('inserting a new feedback entry into the database', async () => {
  const feedback = new Feedback({ coordinates: '{52.125, -1.239}', date: new Date().toISOString(), q1: 5, q2: 2, q3: 2, q4: 1 });
  await feedback.save();

  const findFeedback = await Feedback.findOne({ coordinates: '{52.125, -1.239}' });
  expect(findFeedback).toBeDefined();
  expect(findFeedback.q1).toEqual(5);
  expect(findFeedback.q2).toEqual(2);
  expect(findFeedback.q3).toEqual(2);
  expect(findFeedback.q4).toEqual(1);
});