var RRFList = {};



RRFList.GetAllRRF = [{
    "RRFID": 1,
    "Practice": { Id: 1,Value:"EBS"},
    "Technology": { "Id": 1,"Value":"Microsoft"},
    "PositionTitle": "Developer",
    "Description": "Multi line text",
    "NoOfOpenings": 3,
    "SkillsRequired": [{ "Id": 2,"Value":"AngularJs"},{ "Id": 1,"Value":"SharePoint"}],
    "Designation": { "Id": 1,"Value":"SSE"},
    "MinExp": "3",
    "MaxExp": "5",
    "Priority": 1,
    "ExpDateOfJoining": "30 May 2016",
    "RaisedBy": "abc",
    "ApprovedBy": "",
    "Status": { Id: 2, Value: "Rejected" },
    "ClosedComment":"",
    "Panel":[
  { "RoundNumber":
      { "Id":1,
        "Value":"Technical1"
     },
    "Interviewers":[{ 
      "Id":1,
      "Value":"ABC"
    },{ "Id":"2",
      "Value":"XYZ"
    }]
    
  }],
    "AssignedData":
    [{
        "RRFID": "1",
        "AssignedTo": { Id: 1, Value: "ABC" },

        "AssignedComments": "Multiline Text",
        "AssignedDate": "11/05/2016",
        "UnassigningComment": "Multiline Text",
        "AssigneeLastDate": "11/05/2016",
        "Status":"UnAssigned"
    },
        {
            "RRFID": "1",
            "AssignedTo": { Id: 2, Value: "XYZ" },
            "ExpClosureDate": "11/05/2016",
            "AssignedComments": "Multiline Text",
            "AssignedDate": "11/05/2016",
            "UnassigningComment": "Multiline Text",
            "AssigneeLastDate": "",
            "Status":"Assigned",
        }],
        "ApproverList" :[{
            "ApproverDetails" : { Id: 1, Value: "ABC" },
            "Status" : { Id: 1, Value: "Approved" },
            "Comment" : "Approved!"
        },
        {
            "ApproverDetails" : { Id: 2, Value: "XYZ" },
            "Status" : { Id: 2, Value: "Rejected" },
            "Comment" : "Rejected!"
        }],
},
    {
        "RRFID": 2,
        "Practice": { Id: 1,Value:"EBS"},
        "Technology": { "Id": 2,"Value":"SAlesForce"},
        "PositionTitle": "Developer",
        "Description": "Multi line text",
        "NoOfOpenings": 1,
        "SkillsRequired": [{ "Id": 1,"Value":"SharePoint"}],
        "Designation": { "Id": 2,"Value":"SSE"},
        "MinExp": "3",
        "MaxExp": "5",
        "Priority": 1,
        "ExpDateOfJoining": "30 May 2016",
        "RaisedBy": "abc",
        "ApprovedBy": "",
        "Status":   { Id: 1, Value: "PendingApproval" },
        "ClosedComment":"",
        // "AssignedData":[], //TODO check when API integration will do

       "Panel":[
  { "RoundNumber":
      { "Id":1,
        "Value":"Technical1"
     },
    "Interviewers":[{ 
      "Id":1,
      "Value":"ABC"
    },{ "Id":"2",
      "Value":"XYZ"
    }]
    
  },
  { "RoundNumber":
      { "Id":2,
        "Value":"Technical2"
      },
      
    "Interviewers":[{ 
      "Id":1,
      "Value":"ABC"
    },{ "Id":"2",
      "Value":"XYZ"
    }]
    
  }
  ],
        "AssignedData":
        [{
            "RRFID": "1",
            "AssignedTo": { Id: 1, Value: "ABC" },

            "AssignedComments": "Multiline Text",
            "AssignedDate": "11/05/2016",
            "UnassigningComment": "Multiline Text",
            "AssigneeLastDate": "11/05/2016",
            "Status":"UnAssigned"
        }],
        
        "ApproverList" :[{
            "ApproverDetails" : { Id: 1, Value: "ABC" },
            "Status" : { Id: 1, Value: "Approved" },
            "Comment" : "Approved!"
        },
        {
            "ApproverDetails" : { Id: 2, Value: "XYZ" },
            "Status" : { Id: 1, Value: "Approved" },
            "Comment" : "Approved!"
        }],

    },

]
RRFList.id = 2;

RRFList.StatuswiseRRFCount = {
    "PendingApproval": 5,
    "Rejected": 2,
    "Open": 15,
    "Assigned": 13,
    "InProgress": 13,
    "ClosureApproval": 2,
    "Closed": 50
};

RRFList.MyRRFStatuswiseRRFCount = {
    "PendingApproval":1,
    "Rejected": 0,
    "Open": 2,
    "Assigned": 1,
    "InProgress": 1,
    "ClosureApproval": 2,
    "Closed": 10
};

RRFList.SaveResult = {
    "StatusCode": 1,
    "Message": "Details Saved Successfully"
};

RRFList.Approved = {
    "StatusCode": 1,
    "Message": "Added successfully"
};


RRFList.AssignedData =
[{

  
        "RRFID": 1,
        "AssignedTo": { Id: 1, Value: "ABC" },
        "ExpClosureDate": "11/05/2016",
        "AssignedComments": "Multiline Text",
        "AssignedDate": "11/05/2016",
        "UnassigningComment": "Multiline Text",
        "Status":"UnAssigned",
         "AssigneeLastDate": "11/05/2016",
    },
        {
            "RRFID": 1,
            "AssignedTo": { Id: 2, Value: "XYZ" },
            "ExpClosureDate": "11/05/2016",
            "AssignedComments": "Multiline Text",
            "AssignedDate": "11/05/2016",
            "UnassigningComment": "Multiline Text",
            "Status":"Assigned",
            "AssigneeLastDate": "",
        }];


module.exports = RRFList;