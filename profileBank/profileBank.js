// Return current user's permissions array
var utils = require('./../utils/utils');
var profileBank = require('./../profileBank/profileBankData');
var _ = require('lodash');

var getOpenProfiles = function (req, res) {
    res.json(profileBank.profile);
};

var addCandidateProfile = function (req, res) {
    var profile = req.body.profile;
    profile.CandidateID = profileBank.profile.length + 1;
    profile.ResumeID = profileBank.profile.length + 1;
    profile.Candidate = profile.FirstName + profile.LastName;
    profileBank.profile.push(profile);
    res.json(profile);
};

var getCandidateProfile = function (req, res) {
    var profileID = parseInt(req.body.profile.ProfileId);
    var index = _.findIndex(profileBank.profile, { CandidateID: profileID });
    res.json(profileBank.profile[index]);
};


var editCandidateProfile = function (req, res) {
    var profile = req.body.profile;
    var index = _.findIndex(profileBank.profile, { CandidateID: profile.CandidateID });
    profileBank.profile[index] = profile;
    res.json(profile);
};

module.exports = function (app) {
    app.get('/api/getOpenProfiles', utils.EnsureAuthenticated, getOpenProfiles);
    app.post('/api/addCandidateProfile', utils.EnsureAuthenticated, addCandidateProfile);
    app.post('/api/getCandidateProfile', utils.EnsureAuthenticated, getCandidateProfile);
    app.post('/api/editCandidateProfile', utils.EnsureAuthenticated, editCandidateProfile);

};
