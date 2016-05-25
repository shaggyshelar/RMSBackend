var utils = require('./../utils/utils');
var practices = require('./../practice/practicesData');
var _ = require('lodash');

var getPractices = function (req, res) {
    res.json(practices.practicesList);
};

var addPractice = function (req, res) {
    var practice = req.body.practice;
    practice.Id = ++practices.ids;
    practices.practicesList.push(practice);
    res.json(practice);
};

var deletePractice = function (req, res) {
    var practice = req.body.practice;
    var index = _.findIndex(practices.practicesList, practice);
    practices.practicesList.splice(index, 1)
    res.json(practice);
};

var getPracticeById = function (req, res) {
    var practiceID = parseInt(req.body.practice.Id);
    var index = _.findIndex(practices.practicesList, { Id: practiceID });
    res.json(practices.practicesList[index]);
};

var editPractice = function (req, res) {
    var practice = req.body.practice;
    var index = _.findIndex(practices.practicesList, { Id: practice.Id });
    practices.practicesList[index] = practice
    res.json(practice);
};

module.exports = function(app) {
    app.get('/api/Masters/GetPractices', utils.EnsureAuthenticated, utils.CheckServerType, getPractices);
    app.post('/api/Masters/Practice/GetPracticeById', utils.EnsureAuthenticated, utils.CheckServerType, getPracticeById);
    app.post('/api/Masters/Practice/Add', utils.EnsureAuthenticated, utils.CheckServerType, addPractice);
    app.post('/api/Masters/Practice/Delete', utils.EnsureAuthenticated, utils.CheckServerType, deletePractice);
    app.post('/api/Masters/Practice/Edit', utils.EnsureAuthenticated, utils.CheckServerType, editPractice);
};
