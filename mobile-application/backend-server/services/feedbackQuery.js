const Feedback = require('./../models/Feedback.js');
const Response = require('./../models/Response.js');
const IndividualFeedback = require('./../models/IndividualFeedback.js');
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
  
  // Call the function
  transformData();
  