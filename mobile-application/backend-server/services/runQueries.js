// This file is used to run queries & store all output to a JSON file
// This can then be fetched by a Python file and analysed using appropriate ML models. 

const { fetchAllRatings, fetchAllResponses, convertStringToArray } = require('./queries.js');

// // Calls query to fetch all routes & ratings and 
// async function fetchAndStoreRatings() {
//     try {
//         const ratings = await fetchAllRatings();
//         fs.writeFile("feedback.json", )
//     }
// }


// fetchAllResponses().then(() => {
//     console.log("Responses fetched successfully")
// }).catch(error => {
//     console.error("Failed to execute aggregation function:", error);
// });

// fetchAllRatings().then(() => {
//     console.log("Responses fetched successfully")
// }).catch(error => {
//     console.error("Failed to execute aggregation function:", error);
// });

convertStringToArray().then(() => console.log("Conversion complete."));

// module.exports = {
    
// }