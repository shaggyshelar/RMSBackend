// Permissions of users according to userId

var permissions = {
    userPermission: [{
        userId: 10, //Admin
        Permissions: [
            'REPORTS.READ',
            'ANALYTICS.READ',
            'EXPORT.READ',
            'AUTH.LOGIN',
            'AUTH.LOGOUT',
            'ADMIN.USER.MANAGE',
            'USER.CREATE',
            'USER.READ',
            'USER.UPDATE',
            'USER.DELETE',
            'FEATURE.DELETE',
            'FEATURE.CREATE',
            'FEATURE.READ',
            'FEATURE.UPDATE',

            'DASHBOARD.READ',

        // PROFILE Menus
            'PROFILE.MANAGE',
            'PROFILE.ALLPROFILES.READ',
            'PROFILE.BALCKLISTEDPROFILES.READ',
            'PROFILE.RECENTPROFILES.READ',
            'PROFILE.MYPROFILES.READ',

        // RRF Menus
            'RRF.MANAGE',
            'RRF.MYRRF.READ',
            'RRF.RRFAPPROVAL.READ',
            'RRF.RRFDASHBOARD.READ',

        // RCIC Menus
            'RCIC.MANAGE',
            'RCIC.INTERVIEWERCALENDER.READ',
            'RCIC.MYCALENDER.READ',
            'RCIC.SCHEDULEINTERVIEW.READ',
            'RCIC.IEF.READ',

        // Administrator Menus
            'ADMIN.MANAGE',
            'ADMIN.ROLE.READ',
            'ADMIN.FEATURE.READ',
            'ADMIN.PERMISSION.READ',
            'ADMIN.THEMEPANEL.READ',
            'ADMIN.Practice.READ',
            'ADMIN.USER.READ',
            'ADMIN.Technology.READ',
            'ADMIN.Skills.READ',
            'ADMIN.Qualifications.READ',
            'ADMIN.Designation.READ',
            'ADMIN.InterviewRounds.READ',
            'ADMIN.OwnerType.READ'
        ]
    }, {
            userId: 11,
            Permissions: [
                'ANALYTICS.READ',
                'AUTH.LOGIN',
                'AUTH.LOGOUT',
                'USER.READ',
                'FEATURE.READ',
                'DASHBOARD.READ',

                'PROFILE.MANAGE',
                'PROFILE.ALLPROFILES.READ',
                'PROFILE.MYPROFILES.READ',

                'RCIC.MANAGE',
                'RCIC.INTERVIEWERCALENDER.READ',
                'RCIC.MYCALENDER.READ',
                'RCIC.SCHEDULEINTERVIEW.READ',
                'RCIC.IEF.READ',
            ]
        }, {
            userId: 12,
            Permissions: [
                'EXPORT.READ',
                'AUTH.LOGIN',
                'AUTH.LOGOUT',
                'USER.READ',
                'FEATURE.CREATE',
                'DASHBOARD.READ',

                'RRF.MANAGE',
                'RRF.MYRRF.READ',
                'RRF.RRFDASHBOARD.READ',

                'RCIC.MANAGE',
                'RCIC.SCHEDULEINTERVIEW.READ',
                'RCIC.IEF.READ',
            ]
        }, {
            userId: 13,
            Permissions: [
                'ANALYTICS.READ',
                'EXPORT.READ',
                'AUTH.LOGIN',
                'AUTH.LOGOUT',
                'USER.READ',
                'USER.UPDATE',
                'DASHBOARD.READ',

                'PROFILE.MANAGE',
                'PROFILE.ALLPROFILES.READ',
                'PROFILE.MYPROFILES.READ',

                'RRF.MANAGE',
                'RRF.MYRRF.READ',
                'RRF.RRFDASHBOARD.READ',

                'RCIC.MANAGE',
                'RCIC.SCHEDULEINTERVIEW.READ',
                'RCIC.IEF.READ',
            ]
        }]
}

permissions.permissionsList = [
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
    },
    {
        id: 4,
        key: 'PROFILE.BALCKLISTEDPROFILES.READ',
        text: 'Can read Blacklisted Profile'
    },
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
    },
    {
        id: 10,
        key: 'RRF.RRFDASHBOARD.READ',
        text: 'Can read RRF Dasboard'
    },
]
module.exports = permissions;