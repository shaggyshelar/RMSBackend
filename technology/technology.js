var utils = require('./../utils/utils');
var technologies = require('./../technology/technologyData');
var _ = require('lodash');

var getTechnologies = function(req, res) {
    res.json(technologies.technologiesList);
};

var addTechnology = function(req, res) {
    var technology = req.body.technology;
    technology.id = ++technologies.ids;
    technology.permissions = [];
    technologies.technologiesList.push(technology);
    res.json(technology);
};

var deleteTechnology = function(req, res) {
    var technology = req.body.technology;
    var index = _.findIndex(technologies.technologiesList, technology);
    technologies.technologiesList.splice(index, 1)
    res.json(technology);
};

var getTechnologyById = function(req, res) {
    var roleID = parseInt(req.body.technology.id);
    var index = _.findIndex(technologies.technologiesList, { id: roleID });
    res.json(technologies.technologiesList[index]);
};

var editTechnology = function(req, res) {
    var technology = req.body.technology;
    var index = _.findIndex(technologies.technologiesList, { id: technology.id });
    technologies.technologiesList[index] = technology
    res.json(technology);
};


module.exports = function(app) {
    app.get('/api/Masters/GetTechnologies', utils.EnsureAuthenticated, utils.CheckServerType, getTechnologies);
    app.post('/api/Masters/Technology/GetTechnologyById', utils.EnsureAuthenticated, utils.CheckServerType, getTechnologyById);
    app.post('/api/Masters/Technology/Add', utils.EnsureAuthenticated, utils.CheckServerType, addTechnology);
    app.post('/api/Masters/Technology/Delete', utils.EnsureAuthenticated, utils.CheckServerType, deleteTechnology);
    app.post('/api/Masters/Technology/Edit', utils.EnsureAuthenticated, utils.CheckServerType, editTechnology);
};