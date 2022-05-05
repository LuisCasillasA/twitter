class User{
    constructor(id, userName, name, bio){
        this.id = id
        this.name = name
        this.userName = userName
        this.bio = bio
        this.dateCreated = new Date()
        this.lastUpdate = new Date()
    }
}

module.exports = User