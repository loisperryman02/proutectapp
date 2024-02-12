// Mongo DB
require('./config/db');

const app = require('express')();
const port = 3000;

const FeedbackRouter = require('./api/Feedback');

// Accept post form data
const bodyParser = require('express').json;
app.use(bodyParser());

app.listen(port, () => {
    console.log(`server running on port ${port}`);
});

