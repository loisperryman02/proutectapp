require('./config/db');

const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;

const FeedbackRouter = require('./api/api');

const bodyParser = express.json();
app.use(bodyParser);
app.use(cors());
app.use(FeedbackRouter);

const server = app.listen(port, () => {
    console.log(`server running on port ${port}`);
});

server.setTimeout(5000);



