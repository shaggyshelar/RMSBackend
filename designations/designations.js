var utils = require('./../utils/utils');
var designations = require('./../designations/designationsData');
var _ = require('lodash');

var getDesignations = function (req, res) {  
    res.json(designations.designationsList);
};

var addDesignation = function (req, res) {
    var designation = req.body.designation;
    designation.Id = ++designations.ids;
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
    var designationID = parseInt(req.body.designation.Id);
    var index = _.findIndex(designations.designationsList, { Id: designationID });
    res.json(designations.designationsList[index]);
};

var editDesignation = function (req, res) {
    var designation = req.body.designation;
    var index = _.findIndex(designations.designationsList, { Id: designation.Id });
    designations.designationsList[index] = designation;
    res.json(designation);
};

module.exports = function(app) {
    app.get('/api/Masters/GetDesignations', utils.EnsureAuthenticated, utils.CheckServerType, getDesignations);
    app.post('/api/Masters/Designation/GetDesignationById', utils.EnsureAuthenticated, utils.CheckServerType, getDesignationById);
    app.post('/api/Master/Designation/Add', utils.EnsureAuthenticated, utils.CheckServerType, addDesignation);
    app.post('/api/Master/Designation/Delete', utils.EnsureAuthenticated, utils.CheckServerType, deleteDesignation);
    app.post('/api/Master/Designation/Edit', utils.EnsureAuthenticated, utils.CheckServerType, editDesignation);
};
