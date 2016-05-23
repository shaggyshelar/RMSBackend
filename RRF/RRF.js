// Return current user's permissions array
var utils = require("./../utils/utils");
var RRFList = require("./../RRF/RRFData");
var _ = require("lodash");

var getRaisedRRF = function(req, res) {
    res.json(RRFList.GetAllRRF);
};

var viewRRF = function(req, res) {
    var RRFID = parseInt(req.body.RRFID);
    var index = _.findIndex(RRFList.GetAllRRF, { RRFID: RRFID });
    res.json(RRFList.GetAllRRF[index]);
};

var getAllRaisedRRF = function(req, res) {
    res.json(RRFList.GetAllRRF);
};

var getAllRRF = function(req, res) {
    res.json(RRFList.GetAllRRF);
};

var raiseRRF = function(req, res) {
    var rrfDetails = req.body.rrfDetails;
    rrfDetails.RRFID = ++RRFList.id;
    RRFList.GetAllRRF.push(rrfDetails);
    res.json(RRFList.SaveResult);
};
var actionOnRaisedRRF = function(req, res) {
    var RRFID = req.body.RRFID;
    var Approver = req.body.Approver;
    var Status = req.body.Status;
    var Comments = req.body.Comments;
    var index = _.findIndex(RRFList.GetAllRRF, { RRFID: RRFID });
    RRFList.GetAllRRF[index].RaisedBy = Approver;
    RRFList.GetAllRRF[index].Status = Status;
    res.json(RRFList.Approved);
};

var getStatuswiseRRFCount = function(req, res) {
    res.json(RRFList.StatuswiseRRFCount);
};

var saveRRFAssignmentDeatils = function(req, res) {
    var RRFID = parseInt(req.body.RRFID);
    var index = _.findIndex(RRFList.GetAllRRF, { RRFID: RRFID });
    var AssignedComments = (req.body.AssignedComments);
    for (i = 0; i < req.body.AssignedTo.length; i++) {
        var assignDt = {
            AssignedTo: { Id: req.body.AssignedTo[i], Value: "ABC" },
            AssignedComments: AssignedComments,
            AssignedDate: new Date(),
            UnassigningComment: "",
            AssigneeLastDate: ""
        };
        RRFList.GetAllRRF[index].AssignedData.push(assignDt);
    }
    res.json(RRFList.SaveResult);

};

var unassignRRF = function(req, res) {
    
    var RRFID = parseInt(req.body.RRFID);
    var index = _.findIndex(RRFList.GetAllRRF, { RRFID: RRFID });
    var unAssignedComments = (req.body.UnassigningComment);
    var recID = parseInt( req.body.AssignedTo);
    for (i = 0; i <  RRFList.GetAllRRF[index].AssignedData.length; i++) {
        if(RRFList.GetAllRRF[index].AssignedData[i].AssignedTo.Id == recID)
        {
            RRFList.GetAllRRF[index].AssignedData[i].UnassigningComment = unAssignedComments;
             RRFList.GetAllRRF[index].AssignedData[i].AssigneeLastDate = new Date();
        }
    }
    
    res.json(RRFList.SaveResult);
};

module.exports = function(app) {
    app.post("/api/RRF/GetRaisedRRF", utils.EnsureAuthenticated, getRaisedRRF);
    app.post("/api/RRF/ViewRRF", utils.EnsureAuthenticated, viewRRF);
    app.post("/api/RRF/GetAllRaisedRRF", utils.EnsureAuthenticated, getAllRaisedRRF);
    app.get("/api/RRF/GetAllRRF", utils.EnsureAuthenticated, getAllRRF);
    app.post("/api/RRF/RaiseRRF", utils.EnsureAuthenticated, raiseRRF);
    app.post("/api/RRF/ActionOnRaisedRRF", utils.EnsureAuthenticated, actionOnRaisedRRF);
    app.get("/api/RRF/GetStatuswiseRRFCount", utils.EnsureAuthenticated, getStatuswiseRRFCount);
    app.post("/api/RRF/SaveRRFAssignmentDeatils", utils.EnsureAuthenticated, saveRRFAssignmentDeatils);
    app.post("/api/RRF/UnassignRRF", utils.EnsureAuthenticated, unassignRRF);
};


