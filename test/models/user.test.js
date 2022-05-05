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
    })
})