// List of hardcoded users along with their details.
var roles = {
    roleList: [{
        id: 1,
        roleName: 'SuperAdmin',
        permissions: [
            {
                id: 1,
                key: 'DASHBOARD.READ',
                text: 'Can read Dasboard'
            },
            {
                id: 2,
                key: 'PROFILE.MANAGE',
                text: 'Can manage Profile'
            },
            {
                id: 3,
                key: 'PROFILE.ALLPROFILES.READ',
                text: 'Can read ALL Profile'
            }]
    },
        {
            id: 2,
            roleName: 'Management Team',
            permissions: [
                {
                    id: 5,
                    key: 'PROFILE.RECENTPROFILES.READ',
                    text: 'Can read Recent Profile'
                },
                {
                    id: 6,
                    key: 'PROFILE.MYPROFILES.READ',
                    text: 'Can read My Profile'
                },
                {
                    id: 7,
                    key: 'RRF.MANAGE',
                    text: 'Can manage RRF'
                }]
        },
        {
            id: 3,
            roleName: 'Recruitment Head',
            permissions: [
                {
                    id: 7,
                    key: 'RRF.MANAGE',
                    text: 'Can manage RRF'
                },
                {
                    id: 8,
                    key: 'RRF.MYRRF.READ',
                    text: 'Can read MY RRF '
                },
                {
                    id: 9,
                    key: 'RRF.RRFAPPROVAL.READ',
                    text: 'Can read RRF Approval'
                }]
        },
        {
            id: 4,
            roleName: 'Delivery Manager',
            permissions: [
                {
                    id: 5,
                    key: 'PROFILE.RECENTPROFILES.READ',
                    text: 'Can read Recent Profile'
                },
                {
                    id: 6,
                    key: 'PROFILE.MYPROFILES.READ',
                    text: 'Can read My Profile'
                },
                {
                    id: 7,
                    key: 'RRF.MANAGE',
                    text: 'Can manage RRF'
                }]
        },
        {
            id: 5,
            roleName: 'Project Manager',
            permissions: [
                {
                    id: 5,
                    key: 'PROFILE.RECENTPROFILES.READ',
                    text: 'Can read Recent Profile'
                },
                {
                    id: 6,
                    key: 'PROFILE.MYPROFILES.READ',
                    text: 'Can read My Profile'
                },
                {
                    id: 7,
                    key: 'RRF.MANAGE',
                    text: 'Can manage RRF'
                }]
        },
        {
            id: 6,
            roleName: 'HR Team',
            permissions: [
                {
                    id: 5,
                    key: 'PROFILE.RECENTPROFILES.READ',
                    text: 'Can read Recent Profile'
                },
                {
                    id: 6,
                    key: 'PROFILE.MYPROFILES.READ',
                    text: 'Can read My Profile'
                },
                {
                    id: 7,
                    key: 'RRF.MANAGE',
                    text: 'Can manage RRF'
                }]
        },
        {
            id: 7,
            roleName: 'HR Head',
            permissions: [
                {
                    id: 5,
                    key: 'PROFILE.RECENTPROFILES.READ',
                    text: 'Can read Recent Profile'
                },
                {
                    id: 6,
                    key: 'PROFILE.MYPROFILES.READ',
                    text: 'Can read My Profile'
                },
                {
                    id: 7,
                    key: 'RRF.MANAGE',
                    text: 'Can manage RRF'
                }]
        },
        {
            id: 8,
            roleName: 'ESPL Employees',
            permissions: [
                {
                    id: 5,
                    key: 'PROFILE.RECENTPROFILES.READ',
                    text: 'Can read Recent Profile'
                },
                {
                    id: 6,
                    key: 'PROFILE.MYPROFILES.READ',
                    text: 'Can read My Profile'
                },
                {
                    id: 7,
                    key: 'RRF.MANAGE',
                    text: 'Can manage RRF'
                }]
        }],
    ids: 8
};
module.exports = roles;