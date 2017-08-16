const express = require('express');
const bodyParser = require('body-parser');
const msgControl = require(__dirname + '/controllers/messages_controller');

const app = express();

app.use( bodyParser.json() );
app.use( express.static( __dirname + '/../public/build' ) );

const baseURL = '/api/messages';


app.post(baseURL, msgControl.create);
app.get(baseURL, msgControl.read);
app.put(`${baseURL}/:id`, msgControl.update);
app.delete(`${baseURL}/:id`, msgControl.delete);

let msgs = [];
app.get('/message/:msg', (req, res, next) => {
    msgs.push(req.params.msg)
    res.status(451).send(msgs)
});
app.get('/reset', (req, res, next) => {
    msgs = [];
    res.status(200).send(msgs);
});

const port  = 8080;

app.listen(port, () => {console.log(`Server listening on port ${port}.`)});