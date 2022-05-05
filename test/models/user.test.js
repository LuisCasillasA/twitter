const User = require('./../../app/models/user.js')

describe('Unit Test for User class', () => {
    test('Create an user object', () =>{
        //Instance User
        const user = new User(1, 'LuisCasillasA', 'Luis', 'Bio')

        //Validate values
        expect(user.id).toBe(1);
        expect(user.userName).toBe('LuisCasillasA');
        expect(user.name).toBe('Luis');
        expect(user.bio).toBe('Bio');
        expect(user.dateCreated).not.toBeUndefined();
        expect(user.lastUpdate).not.toBeUndefined();
    });
    test('Add Getters', () =>{
        //Instance User
        const user = new User(1, 'LuisCasillasA', 'Luis', 'Bio')

        //Test getters
        expect(user.getUserName).toBe('LuisCasillasA');
        expect(user.getBio).toBe('Bio');
        expect(user.getDateCreated).not.toBeUndefined();
        expect(user.getLastUpdate).not.toBeUndefined();
    });
    test('Add Setters', () =>{
        //Instance User
        const user = new User(1, 'LuisCasillasA', 'Luis', 'Bio')

        //Test Setters
        user.setUserName = 'LuisCasillas'
        expect(user.userName).toBe('LuisCasillas');

        user.setBio = 'New Bio'
        expect(user.bio).toBe('New Bio')
    });
})