import { MongoClient, Db, Collection } from 'mongodb'
import { config } from 'dotenv'
import User from '~/models/User.schema'

config()

const client = new MongoClient(process.env.DATABASE as string)
const db = client.db('database_node')

async function connect() {
    try {
        await db.command({ ping: 1 })
        console.log('Connected successfully to server')
    } catch (error) {
        console.dir(error)
    }
}

function getUsersCollection(): Collection<User> {
    return db.collection('users')
}

const database = {
    connect,
    users: getUsersCollection
}

export default database
