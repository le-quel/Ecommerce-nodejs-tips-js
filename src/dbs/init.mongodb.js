'use strict'
const mongoose = require('mongoose')
const connectString = `mongodb://localhost:27017/shopdev`

class Database {
    constructor() {
        this.connect()
    }
    // connect
    connect(type = 'mongodb') {

        if (1 === 1) {
            mongoose.set('debug', true)
            mongoose.set('debug', { color: true })

        }
        mongoose.connect(connectString).then(_ => console.log(`connected Mongodb successfully PRO`))
            .catch(err => console.log(`Error connecting to MongoDB: ${err}`))

    }
    static getInstance() {
        if (!Database.instance) {
            Database.instance = new Database()
        }
        return Database.instance
    }
}
const instanceMongodb = Database.getInstance()
module.exports = instanceMongodb