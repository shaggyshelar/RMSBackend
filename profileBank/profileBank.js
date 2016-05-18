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
    profile.Status = [{
            "Id":2,
            "CandidateStatus" : "PendingScreening"
        }];
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

var getBlacklistedCandidates = function (req, res) {
    res.json(profileBank.candidateProfile);
}

var getRecentProfiles = function (req, res) {
    res.json(profileBank.candidateProfile);
}

var AddQualificationDetails = function (req, res) {
    var Qualification = req.body.qualification;
    var index = _.findIndex(profileBank.candidateProfile, { CandidateID: Qualification.CandidateID });
    Qualification.QualificationID = profileBank.candidateProfile[index].Qualifications.length + 1;
    profileBank.candidateProfile[index].Qualifications.push(Qualification);
    res.json(Qualification);
};

var getQualificationDetails = function (req, res) {
    var profileID = parseInt(req.body.profile.ProfileId);
    var index = _.findIndex(profileBank.candidateProfile, { CandidateID: profileID });
    res.json(profileBank.candidateProfile[index].Qualifications);
};

var updateQualifications = function (req, res) {
    var qualification = req.body.qualification;
    var index = _.findIndex(profileBank.candidateProfile, { CandidateID: qualification.CandidateID });
    var QIndex = _.findIndex(profileBank.candidateProfile[index].Qualifications , {QualificationID: qualification.QualificationID } );
    profileBank.candidateProfile[index].Qualifications[QIndex] = qualification;
    res.json(qualification);
};

var updateCandidateProfileStatus = function (req, res) {
    var profile = req.body.profile;
    var index = _.findIndex(profileBank.candidateProfile, { CandidateID: profile.CandidateID });
    profileBank.candidateProfile[index].Status[0] = profile.Status;
    profileBank.candidateProfile[index].Comments = profile.Comments;
    res.json(profile);
};
module.exports = function (app) {
    app.get('/api/ProfileBank/getOpenProfiles', utils.EnsureAuthenticated, getOpenProfiles);
    app.post('/api/ProfileBank/addCandidateProfile', utils.EnsureAuthenticated, addCandidateProfile);
    app.post('/api/ProfileBank/getCandidateProfile', utils.EnsureAuthenticated, getCandidateProfile);
    app.post('/api/ProfileBank/editCandidateProfile', utils.EnsureAuthenticated, editCandidateProfile);
    app.get('/api/ProfileBank/getBlacklistedCandidates', utils.EnsureAuthenticated, getBlacklistedCandidates);
    app.get('/api/ProfileBank/getRecentProfiles', utils.EnsureAuthenticated, getRecentProfiles);
    app.post('/api/ProfileBank/AddPersonalDetails', utils.EnsureAuthenticated, editCandidateProfile);
    app.post('/api/ProfileBank/AddCandidateOtherDetails', utils.EnsureAuthenticated, editCandidateProfile);
    app.post('/api/ProfileBank/AddPersonalDetails', utils.EnsureAuthenticated, editCandidateProfile);
    app.post('/api/ProfileBank/AddCandidateOtherDetails', utils.EnsureAuthenticated, editCandidateProfile);
    app.post('/api/ProfileBank/AddCareerProfileDetails', utils.EnsureAuthenticated, editCandidateProfile);
    app.post('/api/ProfileBank/AddCandidateSkillsDetails', utils.EnsureAuthenticated, editCandidateProfile);
    app.post('/api/ProfileBank/AddCandidateSalaryDetails', utils.EnsureAuthenticated, editCandidateProfile);
    app.post('/api/ProfileBank/AddCandidateTeamManagementDetails', utils.EnsureAuthenticated, editCandidateProfile);
    app.post('/api/ProfileBank/UpdateStatus', utils.EnsureAuthenticated, updateCandidateProfileStatus);
    app.post('/api/ProfileBank/AddQualificationDetails', utils.EnsureAuthenticated, AddQualificationDetails);
    app.post('/api/ProfileBank/getQualificationDetails', utils.EnsureAuthenticated, getQualificationDetails);

    app.post('/api/Masters/UpdateQualifications', utils.EnsureAuthenticated, updateQualifications);
};
