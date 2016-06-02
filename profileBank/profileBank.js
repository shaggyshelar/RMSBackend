// Return current user's permissions array
var utils = require('./../utils/utils');
var profileBank = require('./../profileBank/profileBankData');
var master = require('./../masters/masterData');
var qualificationMaster = require('./../qualifications/qualificationsData');
var _ = require('lodash');

var getOpenProfiles = function (req, res) {
    res.json(profileBank.profile);
};
var viewCandidateInformation = function (req, res) {
    //profileBank.candidateProfile is Whole Array with all info about profile including all tabs
    res.json(profileBank.candidateProfile);
};


var addCandidateProfile = function (req, res) {
    try {
        var profile = req.body.profile;
        if(profile.CandidateID === undefined)
        {
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

            profileBank.SuccessResult.candidateLookupId = {};
            profileBank.SuccessResult.candidateLookupId = profile.CandidateID;
            res.json(profileBank.SuccessResult);
        }
        else {
            var index = _.findIndex(profileBank.profile, { CandidateID: profile.CandidateID });
            profileBank.profile[index].CandidateOtherDetails.NoticePeriod = profile.NoticePeriod;
            profileBank.profile[index].CandidateSalaryDetails.CurrentSalary = profile.CurrentSalary;
            profileBank.profile[index].CandidateSalaryDetails.ExpectedSalary = profile.ExpectedSalary;
            profileBank.profile[index].CandidateSkills.Primary = profile.PrimarySkills;
            profileBank.profile[index].Candidate = profile.Candidate;
            profile.Candidate = profile.FirstName + ' ' + profile.LastName;

            index = _.findIndex(profileBank.candidateProfile, { CandidateID: profile.CandidateID });
            profileBank.candidateProfile[index] = profile;
            
            res.json(profileBank.SuccessResult);
        }
    } catch (err) {
        var JsonRes =
            res.json(profileBank.ErrorResult);
    }
};

var uploadResume = function (req, res) {
    try {
        res.json(profileBank.SuccessResult);
        
    } catch (err) {
        var JsonRes =
            res.json(profileBank.ErrorResult);
    }
}

var getCandidateProfile = function (req, res) {
    var profileID = req.body.profile.ProfileId;
    var index = _.findIndex(profileBank.candidateProfile, { CandidateID: profileID });
    res.json(profileBank.candidateProfile[index]);
};


var editCandidateProfile = function (req, res) {
    try {
        var profile = req.body.profile;
        profile.Candidate = profile.FirstName + ' ' + profile.LastName;
        var index = _.findIndex(profileBank.candidateProfile, { CandidateID: profile.CandidateID });
        profileBank.candidateProfile[index] = profile;

        var index = _.findIndex(profileBank.profile, { CandidateID: profile.CandidateID });
        profileBank.profile[index].CandidateOtherDetails.NoticePeriod = profile.NoticePeriod;
        profileBank.profile[index].CandidateSalaryDetails.CurrentSalary = profile.CurrentSalary;
        profileBank.profile[index].CandidateSalaryDetails.ExpectedSalary = profile.ExpectedSalary;
        profileBank.profile[index].Candidate = profile.Candidate;
        res.json(profileBank.SuccessResult);
    } catch (err) {
        res.json(profileBank.ErrorResult);
    }

};

var getBlacklistedCandidates = function (req, res) {
    res.json(profileBank.profile);
}

var getRecentProfiles = function (req, res) {
    res.json(profileBank.profile);
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

        res.json(profileBank.SuccessResult);
    } catch (err) {
        res.json(profileBank.ErrorResult);
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

    res.json(profileBank.SuccessResult);
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
    res.json(profileBank.SuccessResult);
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
    app.post('/api/ProfileBank/UploadCandidateProfile', utils.EnsureAuthenticated, uploadResume);
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
