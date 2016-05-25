var utils = require('./../utils/utils');
var interviewRounds = require('./../interviewRound/interviewRoundData');
var _ = require('lodash');

var getInterviewRounds = function(req, res) {
    res.json(interviewRounds.interviewRoundList);
};

var addInterviewRounds = function(req, res) {
    var interviewRound = req.body.interviewRound;
    interviewRound.Id = ++interviewRounds.ids;
    interviewRound.permissions = [];
    interviewRounds.interviewRoundList.push(interviewRound);
    res.json(interviewRound);
};

var deleteInterviewRounds = function(req, res) {
    var interviewRound = req.body.interviewRound;
    var index = _.findIndex(interviewRounds.interviewRoundList, interviewRound);
    interviewRounds.interviewRoundList.splice(index, 1)
    res.json(interviewRound);
};

var getInterviewRoundsById = function(req, res) {
    var roundID = parseInt(req.body.interviewRound.Id);
    var index = _.findIndex(interviewRounds.interviewRoundList, { Id: roundID });
    res.json(interviewRounds.interviewRoundList[index]);
};

var editInterviewRounds = function(req, res) {
    var interviewRound = req.body.interviewRound;
    var index = _.findIndex(interviewRounds.interviewRoundList, { Id: interviewRound.Id });
    interviewRounds.interviewRoundList[index] = interviewRound
    res.json(interviewRound);
};


module.exports = function(app) {
    app.get('/api/Masters/GetRounds', utils.EnsureAuthenticated, utils.CheckServerType, getInterviewRounds);
    app.post('/api/Masters/InterviewRound/GetRoundsById', utils.EnsureAuthenticated, utils.CheckServerType, getInterviewRoundsById);
    app.post('/api/Masters/InterviewRound/Add', utils.EnsureAuthenticated, utils.CheckServerType, addInterviewRounds);
    app.post('/api/Masters/InterviewRound/Delete', utils.EnsureAuthenticated, utils.CheckServerType, deleteInterviewRounds);
    app.post('/api/Masters/InterviewRound/Edit', utils.EnsureAuthenticated, utils.CheckServerType, editInterviewRounds);
};