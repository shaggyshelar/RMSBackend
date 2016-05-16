var utils = require('./../utils/utils');
var roles = require('./../roles/rolesData');
var _ = require('lodash');

var getRoles = function (req, res) {
    res.json(roles.roleList);
};

var addRole = function (req, res) {
    var role = req.body.role;
    role.id = ++roles.ids;
    role.permissions = [];
    roles.roleList.push(role);
    res.json(role);
};

var deleteRole = function (req, res) {
    var role = req.body.role;
    var index = _.findIndex(roles.roleList, role);
    roles.roleList.splice(index, 1)
    res.json(role);
};

var getRoleById = function (req, res) {
    var roleID = parseInt(req.body.role.id);
    var index = _.findIndex(roles.roleList, { id: roleID });
    res.json(roles.roleList[index]);
};

var editRole = function (req, res) {
    var role = req.body.role;
    var index = _.findIndex(roles.roleList, { id: role.id });
    roles.roleList[index] = role
    res.json(role);
};

var getPermissionsByRole = function (req, res) {
    var roleId = parseInt(req.body.roleId);
    var index = _.findIndex(roles.roleList, { id: roleId });
    res.json(roles.roleList[index].permissions);
};
var addPermissionToRole = function (req, res) {
    var permission = req.body.permission;
    var index = _.findIndex(roles.roleList, { id: parseInt(permission.roleId) });
    roles.roleList[index].permissions.push(permission);
    res.json(permission);
};
var revokePermissionFromRole = function (req, res) {
    var permission = req.body.permission;
    var roleindex = _.findIndex(roles.roleList, { id: parseInt(permission.roleId) });
    var permissionindex = _.findIndex(roles.roleList[roleindex].permissions, { text: permission.text });
    roles.roleList[roleindex].permissions.splice(permissionindex, 1);
    res.json(permission);
};
module.exports = function (app) {
    app.get('/api/Role/GetRoles', utils.EnsureAuthenticated,utils.CheckServerType, getRoles);
    app.post('/api/Role/GetRoleById', utils.EnsureAuthenticated,utils.CheckServerType, getRoleById);
    app.post('/api/Role/Add', utils.EnsureAuthenticated,utils.CheckServerType, addRole);
    app.post('/api/Role/Delete', utils.EnsureAuthenticated,utils.CheckServerType, deleteRole);
    app.post('/api/Role/Edit', utils.EnsureAuthenticated,utils.CheckServerType, editRole);
    app.post('/api/Role/GetPermissionsByRole', utils.EnsureAuthenticated,utils.CheckServerType, getPermissionsByRole);
    app.post('/api/Role/AddPermissionToRole', utils.EnsureAuthenticated,utils.CheckServerType, addPermissionToRole);
    app.post('/api/Role/RevokePermissionFromRole', utils.EnsureAuthenticated,utils.CheckServerType, revokePermissionFromRole);
};