const Response = require('../models/Response.js');
const IndividualResponse = require('../models/IndividualResponse.js');

const connectDB = require('C:/Users/User/Documents/GitHub/proutectapp/mobile-application/backend-server/config/db.js');
const { default: mongoose } = require('mongoose');

// Splits the route coordinates array into individual fields and stores each coordinate with its written response. 
async function splitRouteCoordinates() {
    try {
      await connectDB();

      const responseEntries = await Response.find({});
  
      for (const entry of responseEntries) {
        const coordinates = JSON.parse(entry.coordinates);
        for (const { latitude, longitude } of coordinates) {
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

  /**
   * Joins the database that has just been split by coordinates, so each 
   * coordinate is stored with an array of written responses (All from each route that the coordiante has been in.)
   */
async function joinByCoordinate() {
  try {
    await connectDB();
    const aggregatedResults = await IndividualResponse.aggregate([
      {
        $group: {
          _id: { latitude: "$latitude", longitude: "$longitude" }, 
          responseList: { $push: "$response" },
          dateList: { $push: "$date" }
        }
      },
      {
        $out: "individualresponses" 
      }
    ]);

  } catch (error) {
    console.error('Error performing group by aggregation:', error);
  }
  mongoose.disconnect();
}

// Functions can be called here.
  