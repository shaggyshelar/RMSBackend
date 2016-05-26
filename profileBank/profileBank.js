// Return current user's permissions array
var utils = require('./../utils/utils');
var profileBank = require('./../profileBank/profileBankData');
var master = require('./../masters/masterData');
var qualificationMaster = require('./../qualifications/qualificationsData');
var _ = require('lodash');

var getOpenProfiles = function (req, res) {
    //profileBank.profile is profile array with Primary details only
    res.json(profileBank.profile);
};
var viewCandidateInformation = function (req, res) {
    //profileBank.candidateProfile is Whole Array with all info about profile including all tabs
    res.json(profileBank.candidateProfile);
};


var addCandidateProfile = function (req, res) {
    try {
        var profile = req.body.profile;
        profile.CandidateID = "C00" + (profileBank.candidateProfile.length + 1);
        profile.ResumeID = profileBank.candidateProfile.length + 1;
        profile.Candidate = profile.FirstName + ' ' + profile.LastName;
        profile.Status = { "Id": 2, "Value": "PendingScreening" };
        //Adding in both arrays
        profileBank.candidateProfile.push(profile);

        profile.CandidateOtherDetails = {};
        profile.CandidateOtherDetails.NoticePeriod = '';

        profile.CandidateSalaryDetails = {};
        profile.CandidateSalaryDetails.CurrentSalary = '';
        profile.CandidateSalaryDetails.ExpectedSalary = '';
        profileBank.profile.push(profile);
        var JsonRes =
            {
                "StatusCode": "1",
                "Message": "Candidate Added Sucessfully",
                "ReasonCode": "rc00001",
                "ErrorMsg": ""
            };
        res.json(JsonRes);
    } catch (err) {
        var JsonRes =
            {
                "StatusCode": "2",
                "Message": "",
                "ReasonCode": "rc00001",
                "ErrorMsg": err
            };
        res.json(JsonRes);
    }


};

var getCandidateProfile = function (req, res) {
    var profileID = req.body.profile.ProfileId;
    var index = _.findIndex(profileBank.candidateProfile, { CandidateID: profileID });
    res.json(profileBank.candidateProfile[index]);
};


var editCandidateProfile = function (req, res) {
    try {
        var profile = req.body.profile;
        profile.Candidate = profile.FirstName + profile.LastName;
        var index = _.findIndex(profileBank.candidateProfile, { CandidateID: profile.CandidateID });
        profileBank.candidateProfile[index] = profile;
        var index = _.findIndex(profileBank.profile, { CandidateID: profile.CandidateID });
        profileBank.profile[index].CandidateOtherDetails.NoticePeriod = profile.NoticePeriod;
        profileBank.profile[index].CandidateSalaryDetails.CurrentSalary = profile.CurrentSalary;
        profileBank.profile[index].CandidateSalaryDetails.ExpectedSalary = profile.ExpectedSalary;
        res.json(profile);
        var JsonRes =
            {
                "StatusCode": "1",
                "Message": "Profile Updated Sucessfully",
                "ReasonCode": "rc00001",
                "ErrorMsg": ""
            };
        res.json(JsonRes);
    } catch (err) {
        var JsonRes =
            {
                "StatusCode": "2",
                "Message": "",
                "ReasonCode": "rc00001",
                "ErrorMsg": err
            };
        res.json(JsonRes);
    }

};

var getBlacklistedCandidates = function (req, res) {
    res.json(profileBank.candidateProfile);
}

var getRecentProfiles = function (req, res) {
    res.json(profileBank.candidateProfile);
}

var AddQualificationDetails = function (req, res) {
    try {
        var Qualification = req.body.qualification;
        var index = _.findIndex(profileBank.candidateProfile, { CandidateID: Qualification.CandidateID });
        if (index !== -1) {
            if (index !== -1 && profileBank.candidateProfile[index].Qualifications !== undefined) {
                Qualification.QualificationID = profileBank.candidateProfile[index].Qualifications.length + 1;
            }
            else {
                profileBank.candidateProfile[index].Qualifications = [];
                Qualification.QualificationID = profileBank.candidateProfile[index].Qualifications.length + 1;
            }
        }
        var QIndex = _.findIndex(qualificationMaster.qualificationsList, { Id: Qualification.Qualification });
        Qualification.Qualification = [];
        Qualification.Qualification = qualificationMaster.qualificationsList[QIndex];


        var YIndex = _.findIndex(master.year, { Id: Qualification.YearOfPassing });
        Qualification.YearOfPassing = [];
        Qualification.YearOfPassing = master.year[YIndex];


        var GIndex = _.findIndex(master.grades, { Id: Qualification.Grade });
        Qualification.Grade = [];
        Qualification.Grade = master.grades[GIndex];

        profileBank.candidateProfile[index].Qualifications.push(Qualification);
        var JsonRes =
            {
                "StatusCode": "1",
                "Message": "Qualification Added Sucessfully",
                "ReasonCode": "rc00001",
                "ErrorMsg": ""
            };
        res.json(JsonRes);
    } catch (err) {
        var JsonRes =
            {
                "StatusCode": "2",
                "Message": "",
                "ReasonCode": "rc00001",
                "ErrorMsg": ""
            };
        res.json(JsonRes);
    }
};

var getQualificationDetails = function (req, res) {
    var profileID = req.body.profile.ProfileId;
    var index = _.findIndex(profileBank.candidateProfile, { CandidateID: profileID });
    res.json(profileBank.candidateProfile[index].Qualifications);
};

var updateQualifications = function (req, res) {
    var Qualification = req.body.qualification;
    var index = _.findIndex(profileBank.candidateProfile, { CandidateID: Qualification.CandidateID });
    var QIndex = _.findIndex(profileBank.candidateProfile[index].Qualifications, { QualificationID: Qualification.QualificationID });

    var QQIndex = _.findIndex(qualificationMaster.qualificationsList, { Id: Qualification.Qualification });
    Qualification.Qualification = [];
    Qualification.Qualification = qualificationMaster.qualificationsList[QQIndex];


    var YIndex = _.findIndex(master.year, { Id: Qualification.YearOfPassing });
    Qualification.YearOfPassing = [];
    Qualification.YearOfPassing = master.year[YIndex];


    var GIndex = _.findIndex(master.grades, { Id: Qualification.Grade });
    Qualification.Grade = [];
    Qualification.Grade = master.grades[GIndex];


    profileBank.candidateProfile[index].Qualifications[QIndex] = Qualification;

    var JsonRes =
        {
            "StatusCode": "1",
            "Message": "Qualification Updated Sucessfully",
            "ReasonCode": "rc00001",
            "ErrorMsg": ""
        };
    res.json(JsonRes);
};

var updateCandidateProfileStatus = function (req, res) {
    var profile = req.body.profile;
    //profileBank.candidateProfile is Whole Array with all info about profile including all tabs
    var index = _.findIndex(profileBank.candidateProfile, { CandidateID: profile.CandidateID });
    var statusIndex = _.findIndex(master.CandidateStatus, { Id: profile.StatusId });
    profileBank.candidateProfile[index].Status = master.CandidateStatus[statusIndex];
    profileBank.candidateProfile[index].Comments = profile.Comments;

    //profileBank.profile is profile array with Primary details only
    var index = _.findIndex(profileBank.profile, { CandidateID: profile.CandidateID });
    profileBank.profile[index].Status = master.CandidateStatus[statusIndex];
    profileBank.profile[index].Comments = profile.Comments;
    var JsonRes =
        {
            "StatusCode": "1",
            "Message": "Status Updated Sucessfully",
            "ReasonCode": "rc00001",
            "ErrorMsg": ""
        };
    res.json(JsonRes);
};

module.exports = function (app) {
    app.get('/api/ProfileBank/getOpenProfiles', utils.EnsureAuthenticated, getOpenProfiles);
    app.get('/api/ProfileBank/ViewCandidateInformation', utils.EnsureAuthenticated, viewCandidateInformation);
    app.post('/api/ProfileBank/addCandidateProfile', utils.EnsureAuthenticated, addCandidateProfile);
    app.post('/api/ProfileBank/getCandidateProfile', utils.EnsureAuthenticated, getCandidateProfile);
    app.post('/api/ProfileBank/editCandidateProfile', utils.EnsureAuthenticated, editCandidateProfile);
    app.get('/api/ProfileBank/getBlacklistedCandidates', utils.EnsureAuthenticated, getBlacklistedCandidates);
    app.get('/api/ProfileBank/getRecentProfiles', utils.EnsureAuthenticated, getRecentProfiles);
    app.post('/api/ProfileBank/AddPersonalDetails', utils.EnsureAuthenticated, editCandidateProfile);
    app.post('/api/ProfileBank/AddCandidateOtherDetails', utils.EnsureAuthenticated, editCandidateProfile);
    //app.post('/api/ProfileBank/AddPersonalDetails', utils.EnsureAuthenticated, editCandidateProfile);
    app.post('/api/ProfileBank/AddCandidateOtherDetails', utils.EnsureAuthenticated, editCandidateProfile);
    app.post('/api/ProfileBank/AddCareerProfileDetails', utils.EnsureAuthenticated, editCandidateProfile);
    app.post('/api/ProfileBank/AddCandidateSkillsDetails', utils.EnsureAuthenticated, editCandidateProfile);
    app.post('/api/ProfileBank/AddCandidateSalaryDetails', utils.EnsureAuthenticated, editCandidateProfile);
    app.post('/api/ProfileBank/AddCandidateTeamManagementDetails', utils.EnsureAuthenticated, editCandidateProfile);
    app.post('/api/ProfileBank/UpdateStatus', utils.EnsureAuthenticated, updateCandidateProfileStatus);
    app.post('/api/ProfileBank/AddQualificationDetails', utils.EnsureAuthenticated, AddQualificationDetails);
    app.post('/api/ProfileBank/getQualificationDetails', utils.EnsureAuthenticated, getQualificationDetails);

    app.post('/api/ProfileBank/UpdateQualifications', utils.EnsureAuthenticated, updateQualifications);

};
