// List of hardcoded Masters along with their details.
var master = {
    // practices: ["EBS", "ECS"],
    // technology: ["Microsoft", "Salesforce", "Angular"],
    // skills: ["C#", "CRM", "SharePoint", "Angular JS"],
    qualifications:[{
            "Id": 1,
            "Qualification": "XII"
        },
        {
            "Id": 2,
            "Qualification": "Graduate"
        },
        {
            "Id": 3,
            "Qualification": "Post Graduate"
        },
        {
            "Id": 4,
            "Qualification": "Training if Any"
        }],
    year: [{
        "Id":1,
        "Year" : "2010"
        },
        {
        "Id":2,
        "Year" : "2011"
        },
        {
        "Id":3,
        "Year" : "2012"
        },
        {
        "Id":4,
        "Year" : "2013"
        }],
    //designation: ["Trainee", "System Executive", "Senior System Executive"],

    country: [{
        "Id": 1,
        "Country": "India"
         },
        {
            "Id": 2,
            "Country": "US"
        }, {
            "Id": 3,
            "Country": "UK"
        },
        {
            "Id": 4,
            "Country": "Australia"
        }],

    States: [{
        "Id": 1,
        "State": "Maharashtra"
         },
        {
            "Id": 2,
            "State": "Goa"
        }, {
            "Id": 3,
            "State": "Delhi"
        }
    ],

    district: [{
        "Id": 1,
        "District": "Pune"
        },
        {
            "Id": 2,
            "District": "Mumbai"
        }, {
            "Id": 3,
            "District": "Nagpur"
        }
    ],
    grades :[{
            "Id":1,
            "Grade" : "A"
            },
            {
            "Id":2,
            "Grade" : "B"
            },
            {
            "Id":3,
            "Grade" : "C"
            }],
    //state: ["Maharashtra", "Goa", "Delhi"],
    //district: ["Pune", "Mumbai", "Nagpur"],
    //interviewRounds: ["Technical 1", "Technical 2"],
    interviewStatus: ["Selected", "Rejected", "On Hold"],
    ratings: [1, 2, 3, 4, 5],
    interviewMode: ["telephonic", "Face to Face", "Skype"],
    //ownerType: ["Recruiter", "Company", "Employee"],
    visa: ["B1", "H1", "Other"],
    candidateStatus: ["Open", "Selected", "In Process"],
    RRFStatus: ["Pending Approval", "Open", "Assigned"],
    interviewers: ["abc", "xyz", "abc"]
};

module.exports = master;