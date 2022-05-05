const UserView = require('./../../app/models/UserView')

describe('Unit Test for User View class', () => {
    test('1. Return an error object when try to create a new user with a null payload', () =>{
        //Create object with payload null
        const payload = null
        const result = UserView.createUser(payload)

        //Validate values
        expect(result.error).toMatch(/payload doesn't exist/);
    });
})