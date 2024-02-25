const Response = require('../models/Response.js');
const IndividualResponse = require('../models/IndividualResponse.js');

const connectDB = require('C:/Users/User/Documents/GitHub/proutectapp/mobile-application/backend-server/config/db.js');
const { default: mongoose } = require('mongoose');

async function transformResponses() {
    try {
      await connectDB();
  
      // Step 2: Read entries from the original collection
      const responseEntries = await Response.find({});
  
      for (const entry of responseEntries) {
        // Parse the coordinates and assign values
        const coordinates = JSON.parse(entry.coordinates);
        console.log("trying");
        for (const { latitude, longitude } of coordinates) {
          // Insert transformed data into the new collection
          const eachResponse = new IndividualResponse({
            latitude: latitude,
            longitude: longitude,
            response: entry.response,
            date: entry.date
          });
          
          await eachResponse.save();
        
        }
      }
  
    } catch (error) {
      console.error('Error transforming data:', error);
    }

    mongoose.disconnect();
  }

async function groupByCoordinatesAndAggregate() {
  try {
    await connectDB();
    const aggregatedResults = await IndividualResponse.aggregate([
      {
        $group: {
          _id: { latitude: "$latitude", longitude: "$longitude" }, // Group by both latitude and longitude
        }
      },
      {
        $out: "individualresponses" // Output the results into the AggregatedResponses collection
      }
    ]);

  } catch (error) {
    console.error('Error performing group by aggregation:', error);
  }
  mongoose.disconnect();
}

groupByCoordinatesAndAggregate();

  
//   // Call the function
//   transformResponses();
  