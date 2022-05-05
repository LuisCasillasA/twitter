const UserView = require('./../../app/models/UserView')

describe('Unit Test for User View class', () => {
    test('1. Return an error object when try to create a new user with a null payload', () =>{
        //Create object with payload null
        const payload = null
        const result = UserView.createUser(payload)

        //Validate values
        expect(result.error).toMatch(/payload doesn't exist/);
    });
    test('2. Return an error object when try to create a new user with a paylod with invalid properties', () =>{
        //Create object with a payload with invalid property
        const payload = {usernName: null, name: 'Luis', id: 1}
        const result  = UserView.createUser(payload)

        //Validate values
        expect(result.error).toMatch(/you need to have a valid value/);
    });
    test('3. Return an error object when try to create a new user with a paylod with missing properties', () =>{
        //Create object with a payload with invalid property
        const payload = {usernName: 'LuisCasillasA'}
        const result  = UserView.createUser(payload)

        //Validate Values
        expect(result.error).toMatch(/missing property/)
    });
    test('Create a User with payload', () =>{
        //Create valid object
        const payload = {usernName: 'User name', name: 'Name', id: 1}
        const user = UserView.createUser(payload)

        //Validate values
        expect(user.name).toBe('name');
        expect(user.id).toBe(1);
        expect(user.usernName).toBe('User name');
    })
})