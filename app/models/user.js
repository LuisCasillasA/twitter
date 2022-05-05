class User{
    constructor(id, userName, name, bio){
        this.id = id
        this.name = name
        this.userName = userName
        this.bio = bio
        this.dateCreated = new Date()
        this.lastUpdate = new Date()
    }
    getUserName(){
        return this.userName
    }
    getBio(){
        return this.bio
    }
    getDateCreated(){
        return this.dateCreated
    }
    getLastUpdate(){
        return this.lastUpdate
    }
}

module.exports = User