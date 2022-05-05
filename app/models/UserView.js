class UserView{
    static createUser(payload){
        if(payload === null){
            return {error: "payload doesn't exist"}
        }else if(Object.values(payload).some((value) => value === null)){
            return {error: "you need to have a valid value"}
        }else if(payload.id === undefined && payload.name === undefined && payload.useName === undefined){
            return {error: "missing property"}
        }
    }
}

module.exports = UserView