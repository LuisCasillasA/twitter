const User = require('./../../app/models/user')

class UserService{
    static create(id, userName, name){
        return new User(id, userName, name, 'Sin Bio')
    }
    static getInfo(user){
        this.user = [user.id, user.userName, user.name, user.bio]
        return this.user
    }
    static updateUsername(user, userName){
        user.userName = userName
    }
    static getAllUserNames(users){
        const userNames = []
        for(let i in users){
            userNames.push(users[i].userName)
        }
        return userNames
    }
}

module.exports = UserService