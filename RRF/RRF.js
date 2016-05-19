// Return current user's permissions array
var utils = require( "./../utils/utils" );
var RRFList = require( "./../RRF/RRFData" );
var _ = require( "lodash" );

var getRaisedRRF = function( req, res ) {
    res.json( RRFList.GetAllRRF );
};

var viewRRF = function( req, res ) {
    var RRFID = parseInt( req.body.RRFID );
    var index = _.findIndex( RRFList.GetAllRRF, { RRFID: RRFID } );
    res.json( RRFList.GetAllRRF[ index ] );
};

var getAllRaisedRRF = function( req, res ) {
    res.json( RRFList.GetAllRRF );
};

var getAllRRF = function( req, res ) {
    res.json( RRFList.GetAllRRF );
};

var raiseRRF = function( req, res ) {
    var rrfDetails = req.body.rrfDetails;
    rrfDetails.RRFID = ++RRFList.id;
    RRFList.GetAllRRF.push( rrfDetails );
    res.json( RRFList.SaveResult );
};
var actionOnRaisedRRF = function( req, res ) {
    var RRFID = req.body.RRFID;
    var Approver = req.body.Approver;
    var Status = req.body.Status;
    var Comments = req.body.Comments;
    var index = _.findIndex( RRFList.GetAllRRF, { RRFID: RRFID } );
    RRFList.GetAllRRF[ index ].RaisedBy = Approver;
    RRFList.GetAllRRF[ index ].Status = Status;
    res.json( RRFList.Approved );
};

var getStatuswiseRRFCount = function( req, res ) {
    res.json( RRFList.StatuswiseRRFCount );
};


module.exports = function(app) {
    app.post( "/api/RRF/GetRaisedRRF", utils.EnsureAuthenticated, getRaisedRRF );
    app.post( "/api/RRF/ViewRRF", utils.EnsureAuthenticated, viewRRF );
    app.post( "/api/RRF/GetAllRaisedRRF", utils.EnsureAuthenticated, getAllRaisedRRF );
    app.get( "/api/RRF/GetAllRRF", utils.EnsureAuthenticated, getAllRRF );
    app.post( "/api/RRF/RaiseRRF", utils.EnsureAuthenticated, raiseRRF );
    app.post( "/api/RRF/ActionOnRaisedRRF", utils.EnsureAuthenticated, actionOnRaisedRRF );
    app.get( "/api/RRF/GetStatuswiseRRFCount", utils.EnsureAuthenticated, getStatuswiseRRFCount );
};


