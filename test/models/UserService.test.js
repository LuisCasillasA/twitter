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
    });
    test('3. Update username', () =>{
        //Create object
        const user = UserService.create(1, 'LuisCasillasA', 'Luis')
        UserService.updateUsername(user, 'LuisAcevedo')
        expect(user.userName).toBe('LuisAcevedo')
    });
    test('4. Given a list of users give me the list of usernames', () =>{
        //Create users
        const user1 = UserService.create(1, 'LuisCasillasA', 'Luis')
        const user2 = UserService.create(2, 'LuisCasillasB', 'Luis')
        const user3 = UserService.create(3, 'LuisCasillasC', 'Luis')

        //Validate values
        const userNames = UserService.getAllUserNames([user1, user2, user3])
        expect(userNames).toContain('LuisCasillasA')
        expect(userNames).toContain('LuisCasillasB')
        expect(userNames).toContain('LuisCasillasC')
    })
})