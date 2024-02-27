const Feedback = require('../models/Feedback.js');
const IndividualFeedback = require('../models/IndividualFeedback.js');
const connectDB = require('C:/Users/User/Documents/GitHub/proutectapp/mobile-application/backend-server/config/db.js');
const { default: mongoose } = require('mongoose');

async function transformData() {
    try {
      await connectDB();
  
      // Step 2: Read entries from the original collection
      console.log("finding entries");
      const feedbackEntries = await Feedback.find({});
  
      for (const entry of feedbackEntries) {
        // Parse the coordinates and assign values
        const coordinates = JSON.parse(entry.coordinates);
        console.log("trying");
        for (const { latitude, longitude } of coordinates) {
            
          // Insert transformed data into the new collection
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
  
      // Step 6: Delete all documents from Feedback after processing
    //   await Feedback.deleteMany({});
  
    //   console.log('Data transformation and cleanup complete.');
    } catch (error) {
      console.error('Error transforming data:', error);
    }

    mongoose.disconnect();
  }


  
async function groupByCoordinatesAndAggregate() {
  try {
    await connectDB();
    const aggregatedResults = await IndividualFeedback.aggregate([
      {
        $group: {
          _id: { latitude: "$latitude", longitude: "$longitude" }, // Group by both latitude and longitude
          q1: { $avg: "$q1" },
          q2: { $avg: "$q2" },
          q3: { $avg: "$q3" },
          q4: { $avg: "$q4" },
          feedbackDateList: { $push: "$date" }
        }
      },
      {
        $out: "individualfeedbacks" // Output the results into the AggregatedResponses collection
      }
    ]);

  } catch (error) {
    console.error('Error performing group by aggregation:', error);
  }
  mongoose.disconnect();
}


async function joinCollectionsAndSaveResults() {
  try {
    await connectDB();
    await IndividualFeedback.aggregate([
      {
        $lookup: {
          from: "individualresponses", // MongoDB collection names are typically lowercase
          localField: "_id", // Assuming _id is the field you want to join on in the individualFeedback collection
          foreignField: "_id", // Assuming _id is also the field in the individualResponses collection
          as: "responses" // The field in the resulting documents where the joined documents will be stored
        }
      },
      {
        $out: "joinedfeedback2" // This will output the results into a new collection called "joinedFeedback"
      }
    ]);

    console.log('Join operation completed and results saved in "joinedFeedback" collection.');
  } catch (error) {
    console.error('Error joining collections:', error);
  }

  mongoose.disconnect();
}

joinCollectionsAndSaveResults();

// transformData();

// groupByCoordinatesAndAggregate();
  