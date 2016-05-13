var utils = require('./../utils/utils');
var qualifications = require('./../qualifications/qualificationsData');
var _ = require('lodash');

var getQualifications = function (req, res) {  
    res.json(qualifications.qualificationsList);
};

var addQualification = function (req, res) {
    var qualification = req.body.qualification;
    qualification.id = ++qualifications.ids;
    qualifications.qualificationsList.push(qualification);
    res.json(qualification);
};

var deleteQualification = function (req, res) {
    var qualification = req.body.qualification;
    var index = _.findIndex(qualifications.qualificationsList, qualification);
    qualifications.qualificationsList.splice(index, 1)
    res.json(qualification);
};

var getQualificationById = function (req, res) {
    var qualificationID = parseInt(req.body.qualification.id);
    var index = _.findIndex(qualifications.qualificationsList, { id: qualificationID });
    res.json(qualifications.qualificationsList[index]);
};

var editQualification = function (req, res) {
    var qualification = req.body.qualification;
    var index = _.findIndex(qualifications.qualificationsList, { id: qualification.id });
    qualifications.qualificationsList[index] = qualification;
    res.json(qualification);
};

module.exports = function (app) {
    app.get('/api/Masters/GetQualifications', utils.EnsureAuthenticated, getQualifications);
    app.post('/api/Masters/Qualification/GetqualificationById', utils.EnsureAuthenticated, getQualificationById);
    app.post('/api/Master/Qualification/Add', utils.EnsureAuthenticated, addQualification);
    app.post('/api/Master/Qualification/Delete', utils.EnsureAuthenticated, deleteQualification);
    app.post('/api/Master/Qualification/Edit', utils.EnsureAuthenticated, editQualification);
};