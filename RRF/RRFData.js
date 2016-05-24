var RRFList = {};

RRFList.RRFDetails = {
    "Practice": "EBS",
    "Technology": "Microsoft",
    "PositionTitle": "Developer",
    "Description": "Multi line text",
    "NoOfOpenings": 3,
    "SkillsRequired": "Multi line text",
    "Designation": "SSE",
    "MinExp": "3",
    "MaxExp": "5",
    "Priority": 1,
    "ExpDateOfJoining": "30 May 2016",
    "RaisedBy": "abc",
    "Panel":
    [{
        "RoundNumber": "1",
        "Interviewers":
        [
            "abc", "xyz", "user"
        ],
        "Status": "Selected",
        "Comments": "Multi line text"
    },
        {
            "RoundNumber": "2",
            "Interviewers":
            [
                "abc", "xyz", "user"
            ],

            "Status": "Selected",
            "Comments": "Multi line text"
        }]

}


RRFList.getAllRaisedRRF = [
    {
        "RRFID": "1",
        "Practice": "EBS",
        "Technology": "Microsoft",
        "PositionTitle": "Developer",
        "Description": "Multi line text",
        "NoOfOpenings": 3,
        "SkillsRequired": "Multi line text",
        "Designation": "SSE",
        "MinExp": "3",
        "Priority": 1,
        "RaisedBy": 'abc xyz',
        "ExpDateOfJoining": "30 May 2016",
    },
    {
        "RRFID": "2",
        "Practice": "EBS",
        "Technology": "Microsoft",
        "PositionTitle": "Developer",
        "Description": "Multi line text",
        "NoOfOpenings": 3,
        "SkillsRequired": "Multi line text",
        "Designation": "SSE",
        "MinExp": "3",
        "Priority": 1,
        "RaisedBy": 'abc xyz',
        "ExpDateOfJoining": "30 May 2016",
    },
]

RRFList.GetAllRRF = [{
    "RRFID": 1,
    "Practice": "EBS",
    "Technology": "Microsoft",
    "PositionTitle": "Developer",
    "Description": "Multi line text",
    "NoOfOpenings": 3,
    "SkillsRequired": "Multi line text",
    "Designation": "SSE",
    "MinExp": "3",
    "MaxExp": "5",
    "Priority": 1,
    "ExpDateOfJoining": "30 May 2016",
    "RaisedBy": "abc",
    "ApprovedBy": "",
    "Status": "closed",
    "Panel":[
  { "RoundNunber":
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
        "AssigneeLastDate": "11/05/2016"
    },
        {
            "RRFID": "1",
            "AssignedTo": { Id: 2, Value: "XYZ" },
            "ExpClosureDate": "11/05/2016",
            "AssignedComments": "Multiline Text",
            "AssignedDate": "11/05/2016",
            "UnassigningComment": "Multiline Text",
            "AssigneeLastDate": ""
        }]
},
    {
        "RRFID": 2,
        "Practice": "ECS",
        "Technology": "SAlesForce",
        "PositionTitle": "Developer",
        "Description": "Multi line text",
        "NoOfOpenings": 1,
        "SkillsRequired": "Multi line text",
        "Designation": "SSE",
        "MinExp": "3",
        "MaxExp": "5",
        "Priority": 1,
        "ExpDateOfJoining": "30 May 2016",
        "RaisedBy": "abc",
        "ApprovedBy": "",
        "Status": "Open",
        // "AssignedData":[], //TODO check when API integration will do

       "Panel":[
  { "RoundNunber":
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
  { "RoundNunber":
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
            "AssigneeLastDate": "11/05/2016"
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

RRFList.SaveResult = {
    "StatusCode": 1,
    "Message": "Details Saved Successfully"
};

RRFList.Approved = {
    "StatusCode": 1,
    "Message": "Added successfully"
};


module.exports = RRFList;