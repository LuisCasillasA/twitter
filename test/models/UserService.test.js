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
    test('getInfo static method', () => {
        //Create user service
        const user = UserService.create(1, 'LuisCasillasA', 'Luis')

        //Validate values
        const userInfoList = UserService.getInfo(user)
        expect(userInfoList[0]).toBe(1);
        expect(userInfoList[1]).toBe('LuisCasillasA');
        expect(userInfoList[2]).toBe('Luis');
        expect(userInfoList[3]).toBe('Sin Bio');
    })
})