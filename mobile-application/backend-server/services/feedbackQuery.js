const Feedback = require('../models/Feedback.js');
const IndividualFeedback = require('../models/IndividualFeedback.js');
const connectDB = require('C:/Users/User/Documents/GitHub/proutectapp/mobile-application/backend-server/config/db.js');
const { default: mongoose } = require('mongoose');


/**
 * This function splits the fields in the feedbacks collection.
 * Initially, the entire route is stored with its feedback given from each user. This function splits up the fields
 * so that each coordinate in the route is stored against its feedback.
 */
async function splitsRouteArray() {
    try {
      await connectDB();
      const feedbackEntries = await Feedback.find({});
  
      for (const entry of feedbackEntries) {
        const coordinates = JSON.parse(entry.coordinates);
        for (const { latitude, longitude } of coordinates) {
          const eachFeedback = new IndividualFeedback({
            latitude: latitude,
            longitude: longitude,
            q1: entry.q1,
            q2: entry.q2,
            q3: entry.q3,
            q4: entry.q4,
            date: entry.date
          });
          await eachFeedback.save();
        }
      }
    } catch (error) {
      console.error('Error splitting route', error);
    }

    mongoose.disconnect();
  }
  
// Function used to join feedback by coordinate, so all written responses for the same coordinate are stored in the same collection and field.
async function joinByCoordinates() {
  try {
    await connectDB();
    const aggregatedResults = await IndividualFeedback.aggregate([
      {
        $group: {
          _id: { latitude: "$latitude", longitude: "$longitude" }, 
          q1: { $avg: "$q1" },
          q2: { $avg: "$q2" },
          q3: { $avg: "$q3" },
          q4: { $avg: "$q4" },
          feedbackDateList: { $push: "$date" }
        }
      },
      {
        $out: "individualfeedbacks" 
      }
    ]);

  } catch (error) {
    console.error('Error performing group by aggregation:', error);
  }
  mongoose.disconnect();
}

// Function used to join responses by coordinate, so all written responses for the same coordinate are stored in the same collection and field.
async function joinFeedbackCollections() {
  try {
    await connectDB();
    await IndividualFeedback.aggregate([
      {
        $lookup: {
          from: "individualresponses", 
          localField: "_id", 
          foreignField: "_id", 
          as: "responses" 
        }
      },
      {
        $out: "joinedfeedback2" 
      }
    ]);

  } catch (error) {
    console.error('Error joining collections:', error);
  }

  mongoose.disconnect();
}
