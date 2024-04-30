// This file is used to run queries & store all output to a JSON file
// This can then be fetched by a Python file and analysed using appropriate ML models. 

const { fetchAllRatings, fetchAllResponses, convertStringToArray } = require('./queries.js');