var utils = require('./../utils/utils');
var designations = require('./../designations/designationsData');
var _ = require('lodash');

var getDesignations = function (req, res) {  
    res.json(designations.designationsList);
};

var addDesignation = function (req, res) {
    var designation = req.body.designation;
    designation.id = ++designations.ids;
    designations.designationsList.push(designation);
    res.json(designation);
};

var deleteDesignation = function (req, res) {
    var designation = req.body.designation;
    var index = _.findIndex(designations.designationsList, designation);
    designations.designationsList.splice(index, 1)
    res.json(designation);
};

var getDesignationById = function (req, res) {
    var designationID = parseInt(req.body.designation.id);
    var index = _.findIndex(designations.designationsList, { id: designationID });
    res.json(designations.designationsList[index]);
};

var editDesignation = function (req, res) {
    var designation = req.body.designation;
    var index = _.findIndex(designations.designationsList, { id: designation.id });
    designations.designationsList[index] = designation;
    res.json(designation);
};

module.exports = function (app) {
    app.get('/api/Masters/GetDesignations', utils.EnsureAuthenticated, getDesignations);
    app.post('/api/Masters/Designation/GetDesignationById', utils.EnsureAuthenticated, getDesignationById);
    app.post('/api/Master/Designation/Add', utils.EnsureAuthenticated, addDesignation);
    app.post('/api/Master/Designation/Delete', utils.EnsureAuthenticated, deleteDesignation);
    app.post('/api/Master/Designation/Edit', utils.EnsureAuthenticated, editDesignation);
};