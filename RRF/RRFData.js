var RRFList = {};
RRFList.GetRaisedRRF =
    [{
        "RRFID": 1,
        "practice": "EBS",
        "technology": "Microsoft",
        "position_Title": "Developer",
        "description": "Multi line text",
        "no_Of_Openings": 3,
        "skills_Required": "Multi line text",
        "designation": "SSE",
        "min_Exp": "3",
        "priority": 1,
        "exp_Date_Of_Joining": "30 May 2016",
        "status": "Pending Approval"
    },
        {
            "RRFID": 2,
            "practice": "EBS",
            "technology": "Microsoft",
            "position_Title": "Developer",
            "description": "Multi line text",
            "no_Of_Openings": 3,
            "skills_Required": "Multi line text",
            "designation": "SSE",
            "min_Exp": "3",
            "priority": 1,
            "exp_Date_Of_Joining": "30 May 2016",
            "status": "Pending Approval"
        },
        {
            "RRFID": 3,
            "practice": "EBS",
            "technology": "Microsoft",
            "position_Title": "Developer",
            "description": "Multi line text",
            "no_Of_Openings": 3,
            "skills_Required": "Multi line text",
            "designation": "SSE",
            "min_Exp": "3",
            "priority": 1,
            "exp_Date_Of_Joining": "30 May 2016",
            "status": "Pending Approval"
        },
        {
            "RRFID": 4,
            "practice": "EBS",
            "technology": "Microsoft",
            "position_Title": "Developer",
            "description": "Multi line text",
            "no_Of_Openings": 3,
            "skills_Required": "Multi line text",
            "designation": "SSE",
            "min_Exp": "3",
            "priority": 1,
            "exp_Date_Of_Joining": "30 May 2016",
            "status": "Pending Approval"
        },
        {
            "RRFID": 5,
            "practice": "EBS",
            "technology": "Microsoft",
            "position_Title": "Developer",
            "description": "Multi line text",
            "no_Of_Openings": 3,
            "skills_Required": "Multi line text",
            "designation": "SSE",
            "min_Exp": "3",
            "priority": 1,
            "exp_Date_Of_Joining": "30 May 2016",
            "status": "Pending Approval"
        }]

RRFList.RRFDetails = {
    "practice": "EBS",
    "technology": "Microsoft",
    "positionTitle": "Developer",
    "description": "Multi line text",
    "noOfOpenings": 3,
    "skillsRequired": "Multi line text",
    "designation": "SSE",
    "minExp": "3",
    "maxExp": "5",
    "priority": 1,
    "expDateOfJoining": "30 May 2016",
    "raisedBy": "abc",
    "panel":
    [{
        "roundNumber": "1",
        "interviewers":
        [
            "abc", "xyz", "user"
        ],
        "status": "Selected",
        "comments": "Multi line text"
    },
        {
            "roundNumber": "2",
            "interviewers":
            [
                "abc", "xyz", "user"
            ],

            "status": "Selected",
            "comments": "Multi line text"
        }]

}


RRFList.getAllRaisedRRF = [
    {
        "RRFID": "1",
        "practice": "EBS",
        "technology": "Microsoft",
        "positionTitle": "Developer",
        "description": "Multi line text",
        "noOfOpenings": 3,
        "skillsRequired": "Multi line text",
        "designation": "SSE",
        "minExp": "3",
        "priority": 1,
        "raisedBy": 'abc xyz',
        "expDateOfJoining": "30 May 2016",
    },
    {
        "RRFID": "2",
        "practice": "EBS",
        "technology": "Microsoft",
        "positionTitle": "Developer",
        "description": "Multi line text",
        "noOfOpenings": 3,
        "skillsRequired": "Multi line text",
        "designation": "SSE",
        "minExp": "3",
        "priority": 1,
        "raisedBy": 'abc xyz',
        "expDateOfJoining": "30 May 2016",
    },
]

RRFList.GetAllRRF = [{
    "RRFID": 1,
    "practice": "EBS",
    "technology": "Microsoft",
    "positionTitle": "Developer",
    "description": "Multi line text",
    "noOfOpenings": 3,
    "skillsRequired": "Multi line text",
    "designation": "SSE",
    "minExp": "3",
    "maxExp": "5",
    "priority": 1,
    "expDateOfJoining": "30 May 2016",
    "raisedBy": "abc",
    "status": "closed",
    "panel":
    [{
        "roundNumber": "1",
        "interviewers":
        [
            "abc", "xyz", "user"
        ],
        "status": "Selected",
        "comments": "Multi line text"
    },
        {
            "roundNumber": "2",
            "interviewers":
            [
                "abc", "xyz", "user"
            ],

            "status": "Selected",
            "comments": "Multi line text"
        }]

},
    {
        "RRFID": 2,
        "practice": "ECS",
        "technology": "SAlesForce",
        "positionTitle": "Developer",
        "description": "Multi line text",
        "noOfOpenings": 1,
        "skillsRequired": "Multi line text",
        "designation": "SSE",
        "minExp": "3",
        "maxExp": "5",
        "priority": 1,
        "expDateOfJoining": "30 May 2016",
        "raisedBy": "abc",
        "status": "Open",
        "panel":
        [{
            "roundNumber": "1",
            "interviewers":
            [
                "abc", "xyz", "user"
            ],
            "status": "Selected",
            "comments": "Multi line text"
        },
            {
                "roundNumber": "2",
                "interviewers":
                [
                    "abc", "xyz", "user"
                ],

                "status": "Selected",
                "comments": "Multi line text"
            }]

    },

]
RRFList.id = 2;

module.exports = RRFList;