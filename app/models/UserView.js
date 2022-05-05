class UserView{
    static createUser(payload){
        if(payload === null){
            return {error: "payload doesn't exist"}
        }
    }
}

module.exports = UserView