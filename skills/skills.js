var utils = require('./../utils/utils');
var skills = require('./../skills/skillsData');
var _ = require('lodash');

var getSkills = function (req, res) {  
    res.json(skills.skillsList);
};

var addSkill = function (req, res) {
    var skill = req.body.skill;
    skill.id = ++skills.ids;
    skills.skillsList.push(skill);
    res.json(skill);
};

var deleteSkill = function (req, res) {
    var skill = req.body.skill;
    var index = _.findIndex(skills.skillsList, skill);
    skills.skillsList.splice(index, 1)
    res.json(skill);
};

var getSkillById = function (req, res) {
    var skillID = parseInt(req.body.skill.id);
    var index = _.findIndex(skills.skillsList, { id: skillID });
    res.json(skills.skillsList[index]);
};

var editSkill = function (req, res) {
    var skill = req.body.skill;
    var index = _.findIndex(skills.skillsList, { id: skill.id });
    skills.skillsList[index] = skill;
    res.json(skill);
};

module.exports = function(app) {
    app.get('/api/Masters/GetSkills', utils.EnsureAuthenticated, utils.CheckServerType, getSkills);
    app.post('/api/Masters/Skill/GetSkillById', utils.EnsureAuthenticated, utils.CheckServerType, getSkillById);
    app.post('/api/Master/Skill/Add', utils.EnsureAuthenticated, utils.CheckServerType, addSkill);
    app.post('/api/Master/Skill/Delete', utils.EnsureAuthenticated, utils.CheckServerType, deleteSkill);
    app.post('/api/Master/Skill/Edit', utils.EnsureAuthenticated, utils.CheckServerType, editSkill);
};
