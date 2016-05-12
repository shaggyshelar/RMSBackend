// Return current user's permissions array
var utils = require('./../utils/utils');
var profileBank = require('./../profileBank/profileBankData');
var _ = require('lodash');

var getOpenProfiles = function (req, res) {
    res.json(profileBank.candidateProfile);
};

var addCandidateProfile = function (req, res) {
    var profile = req.body.profile;
    profile.CandidateID = profileBank.candidateProfile.length + 1;
    profile.ResumeID = profileBank.candidateProfile.length + 1;
    profile.Candidate = profile.FirstName + profile.LastName;
    profile.Status="PendingScreening";
    profileBank.candidateProfile.push(profile);
    res.json(profile);
};

var getCandidateProfile = function (req, res) {
    var profileID = parseInt(req.body.profile.ProfileId);
    var index = _.findIndex(profileBank.candidateProfile, { CandidateID: profileID });
    res.json(profileBank.candidateProfile[index]);
};


var editCandidateProfile = function (req, res) {
    var profile = req.body.profile;
    profile.Candidate = profile.FirstName + profile.LastName;
    var index = _.findIndex(profileBank.candidateProfile, { CandidateID: profile.CandidateID });
    profileBank.candidateProfile[index] = profile;
    res.json(profile);
};

var getBlacklistedCandidates=function (req, res){
    res.json(profileBank.candidateProfile);
}

var getRecentProfiles=function (req, res){
    res.json(profileBank.candidateProfile);
}
module.exports = function (app) {
    app.get('/api/ProfileBank/getOpenProfiles', utils.EnsureAuthenticated, getOpenProfiles);
    app.post('/api/ProfileBank/addCandidateProfile', utils.EnsureAuthenticated, addCandidateProfile);
    app.post('/api/ProfileBank/getCandidateProfile', utils.EnsureAuthenticated, getCandidateProfile);
    app.post('/api/ProfileBank/editCandidateProfile', utils.EnsureAuthenticated, editCandidateProfile);
    app.get('/api/ProfileBank/getBlacklistedCandidates', utils.EnsureAuthenticated, getBlacklistedCandidates);
    app.get('/api/ProfileBank/getRecentProfiles', utils.EnsureAuthenticated, getRecentProfiles);
};
