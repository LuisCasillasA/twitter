const UserService = require('./../../app/models/UserService.js')

describe('Unit Test for User Service class', () => {
    test('Create an user using UserService', () =>{
        //Create user service
        const user = UserService.create(1, 'LuisCasillasA', 'Luis')

        //Validate values
        expect(user.id).toBe(1);
        expect(user.userName).toBe('LuisCasillasA');
        expect(user.name).toBe('Luis');
        expect(user.bio).not.toBeUndefined();
    });
})