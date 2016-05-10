// Return current user's permissions array
var utils = require('./../utils/utils');
var permissions = require('./../permissions/permissionsData');
var _ = require('lodash');

var getLoggedInUserPermission = function (req, res) {
    var userIndex = _.findIndex(permissions.userPermission, { userId: req.userID });
    res.json(permissions.userPermission[userIndex].Permissions);
};

var getAllPermissions = function (req, res) {
    res.json(permissions.permissionsList);
};


module.exports = function (app) {
    app.get('/api/user/GetLoggedInUserPermission', utils.EnsureAuthenticated, getLoggedInUserPermission);
    app.get('/api/permission/GetAllPermissions', utils.EnsureAuthenticated, getAllPermissions);
};
