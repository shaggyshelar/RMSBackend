var utils = require('./../utils/utils');
var ownerTypes = require('./../ownerTypes/ownerTypesData');
var _ = require('lodash');

var getOwnerTypes = function (req, res) {  
    res.json(ownerTypes.ownerTypesList);
};

var addOwnerType = function (req, res) {
    var ownerType = req.body.ownerType;
    ownerType.Id = ++ownerTypes.ids;
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
    var ownerTypeID = parseInt(req.body.ownerType.Id);
    var index = _.findIndex(ownerTypes.ownerTypesList, { Id: ownerTypeID });
    res.json(ownerTypes.ownerTypesList[index]);
};

var editOwnerType = function (req, res) {
    var ownerType = req.body.ownerType;
    var index = _.findIndex(ownerTypes.ownerTypesList, { Id: ownerType.Id });
    ownerTypes.ownerTypesList[index] = ownerType;
    res.json(ownerType);
};

module.exports = function(app) {
    app.get('/api/Masters/GetOwnerTypes', utils.EnsureAuthenticated,utils.CheckServerType, getOwnerTypes)
    app.post('/api/Masters/OwnerType/GetOwnerTypeById', utils.EnsureAuthenticated, utils.CheckServerType, getOwnerTypeById);
    app.post('/api/Master/OwnerType/Add', utils.EnsureAuthenticated, utils.CheckServerType, addOwnerType);
    app.post('/api/Master/OwnerType/Delete', utils.EnsureAuthenticated, utils.CheckServerType, deleteOwnerType);
    app.post('/api/Master/OwnerType/Edit', utils.EnsureAuthenticated, utils.CheckServerType, editOwnerType);
};
