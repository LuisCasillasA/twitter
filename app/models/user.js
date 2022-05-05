class User{
    constructor(id, userName, name, bio, dateCreated, lastUpdate){
        this.id = id
        this.name = name
        this.userName = userName
        this.bio = bio
        this.dateCreated = dateCreated
        this.lastUpdate = lastUpdate
    }
}

module.exports = User