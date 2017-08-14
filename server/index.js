const express = require('express');
const bodyParser = require('body-parser');
const msgControl = require(__dirname + '/controllers/messages_controller');

const app = express();

app.use( bodyParser.json() )

const baseURL = '/api/messages';

app.post(baseURL, msgControl.create);
app.get(baseURL, msgControl.read);
app.put(`${baseURL}/:id`, msgControl.update);
app.delete(`${baseURL}/:id`, msgControl.delete);

const port  = 3000;

app.listen(port, () => {console.log(`Server listening on port ${port}.`)});