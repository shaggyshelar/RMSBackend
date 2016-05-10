// List of hardcoded users along with their details.
var users = [
    {
        id: 10,
        name: 'admin',
        password: 'admin',
        roles: [{
            id: 1,
            roleName: 'SuperAdmin'
        },
            {
                id: 2,
                roleName: 'Management Team'
            }]
    },
    {
        id: 11,
        name: 'user1',
        password: 'password',
        roles: [{
            id: 2,
            roleName: 'Management Team'
        }]
    },
    {
        id: 12,
        name: 'user2',
        password: 'password',
        roles: [{
            id: 2,
            roleName: 'Management Team'
        }]
    },
    {
        id: 13,
        name: 'user3',
        password: 'password',
        roles: [{
            id: 2,
            roleName: 'Management Team'
        }]
    }];
module.exports = users;