var express = require('express'),
    app = express(),
    server = require('http').createServer(app);

var path = require('path');
var bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
require('./auth/auth')(app);
require('./permissions/permissions')(app);
require('./features/features')(app);
require('./roles/roles')(app);
require('./RRF/RRF')(app);
require('./profileBank/profileBank')(app);
require('./users/users')(app);
require('./practice/practices')(app);
require('./skills/skills')(app);
require('./technology/technology')(app);
require('./qualifications/qualifications')(app);

app.get('/', function (req, res) {
    res.send('App Loaded...');
});

server.listen(process.env.PORT || 3000, function () {
    console.log('RMS APP listening on port 3000!');
});