// Return current user's permissions array
var utils = require('./../utils/utils');
var RRFList = require('./../RRF/RRFData');
var _ = require('lodash');

var getRaisedRRF = function (req, res) {
    res.json(RRFList.GetRaisedRRF); 
};

var viewRRF = function (req, res) {
    res.json(RRFList.RRFDetails); 
};

module.exports = function( app ) {
    app.get( '/api/RRF/GetRaisedRRF', utils.EnsureAuthenticated, getRaisedRRF );
    app.post('/api/RRF/ViewRRF', utils.EnsureAuthenticated, viewRRF );
};

