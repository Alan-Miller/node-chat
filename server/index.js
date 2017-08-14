const express = require('express');
const bodyParser = require('body-parser');
const messagesController = require(__dirname + '/controllers/messages_controller');

const app = express();

app.use( bodyParser.json() )

const port  = 3000;

app.listen(port, () => {console.log(`Server listening on port ${port}.`)});