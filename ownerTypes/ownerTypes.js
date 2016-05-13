var utils = require('./../utils/utils');
var ownerTypes = require('./../ownerTypes/ownerTypesData');
var _ = require('lodash');

var getOwnerTypes = function (req, res) {  
    res.json(ownerTypes.ownerTypesList);
};

var addOwnerType = function (req, res) {
    var ownerType = req.body.ownerType;
    ownerType.id = ++ownerTypes.ids;
    ownerTypes.ownerTypesList.push(ownerType);
    res.json(ownerType);
};

var deleteOwnerType = function (req, res) {
    var ownerType = req.body.ownerType;
    var index = _.findIndex(ownerTypes.ownerTypesList, ownerType);
    ownerTypes.ownerTypesList.splice(index, 1)
    res.json(ownerType);
};

var getOwnerTypeById = function (req, res) {
    var ownerTypeID = parseInt(req.body.ownerType.id);
    var index = _.findIndex(ownerTypes.ownerTypesList, { id: ownerTypeID });
    res.json(ownerTypes.ownerTypesList[index]);
};

var editOwnerType = function (req, res) {
    var ownerType = req.body.ownerType;
    var index = _.findIndex(ownerTypes.ownerTypesList, { id: ownerType.id });
    ownerTypes.ownerTypesList[index] = ownerType;
    res.json(ownerType);
};

module.exports = function (app) {
    app.get('/api/Masters/GetOwnerTypes', utils.EnsureAuthenticated, getOwnerTypes);
    app.post('/api/Masters/OwnerType/GetOwnerTypeById', utils.EnsureAuthenticated, getOwnerTypeById);
    app.post('/api/Master/OwnerType/Add', utils.EnsureAuthenticated, addOwnerType);
    app.post('/api/Master/OwnerType/Delete', utils.EnsureAuthenticated, deleteOwnerType);
    app.post('/api/Master/OwnerType/Edit', utils.EnsureAuthenticated, editOwnerType);
};
