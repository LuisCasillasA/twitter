class UserView{
    static createUser(payload){
        if(payload === null){
            return {error: "payload doesn't exist"}
        }else if(Object.values(payload).some((value) => value === null)){
            return {error: "you need to have a valid value"}
        }
    }
}

module.exports = UserView