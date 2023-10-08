import express from 'express'
import usersRouter from './routes/users.routes'
import database from './services/database.services'
import dotenv from 'dotenv'

const app = express()
dotenv.config()

app.use(express.json())
app.use('/api', usersRouter)

database.connect()

const appid = process.env.APPID

app.get("/", (req, res) =>
    res.send(`appid: ${appid} home page: says hello!`))

app.get("/app1", (req, res) =>
    res.send(`appid: ${appid} app1 page: says hello!`))

app.get("/app2", (req, res) =>
    res.send(`appid: ${appid} app2 page: says hello!`))

app.get("/admin", (req, res) =>
    res.send(`appid: ${appid} ADMIN page: very few people should see this`))

app.listen(appid, () => console.log(`${appid} is listening on ${appid}`))
