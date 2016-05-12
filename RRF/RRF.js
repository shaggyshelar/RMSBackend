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

var getAllRaisedRRF =function (req, res) {
    res.json(RRFList.getAllRaisedRRF); 
};

module.exports = function( app ) {
    app.post( '/api/RRF/GetRaisedRRF', utils.EnsureAuthenticated, getRaisedRRF );
    app.post('/api/RRF/ViewRRF', utils.EnsureAuthenticated, viewRRF );
     app.post('/api/RRF/GetAllRaisedRRF', utils.EnsureAuthenticated, getAllRaisedRRF);
};


