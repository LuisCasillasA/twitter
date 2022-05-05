class User{
    constructor(id, userName, name, bio){
        this.id = id
        this.name = name
        this.userName = userName
        this.bio = bio
        this.dateCreated = new Date()
        this.lastUpdate = new Date()
    }
    get getUserName(){
        return this.userName
    }
    get getBio(){
        return this.bio
    }
    get getDateCreated(){
        return this.dateCreated
    }
    get getLastUpdate(){
        return this.lastUpdate
    }
    set setUserName(userName){
        this.userName = userName
    }
    set setBio(bio){
        this.bio = bio
    }
}

module.exports = User