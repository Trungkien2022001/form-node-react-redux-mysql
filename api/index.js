
const express = require("express")
const morgan = require("morgan")
require('dotenv').config
const authRoute = require('./routes/auth')
const PORT = 1234
const app = express()
const server = require('http').createServer(app);


const cors = require('cors')
app.use(morgan('dev'))
app.use(express.json())
app.use(cors())

app.use('/auth', authRoute)

server.listen(PORT,(req, res)=>{
    console.log(`App is listening on port ${PORT}`)
})
