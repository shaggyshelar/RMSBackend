// User authentication using user name, password and returning token
// Creating jwt and verifying it in each request
// Get Logged In user details
var users = require('./../users/usersData');
var utils = require('./../utils/utils');
var _ = require('lodash');

var authenticate = function (req, res) {
    var userName = req.body.credentials.userName;
    var password = req.body.credentials.password;
    var userIndex = _.findIndex(users, { name: userName, password: password });
    if (userIndex != '-1') {
        var token = utils.CreateJWT(users[userIndex]);
        res.send({ token: token });
    } else {
        res.status(500).end('Invalid credentials.');
    }
}

module.exports = function (app) {
    app.post('/api/Authenticate', authenticate);
}