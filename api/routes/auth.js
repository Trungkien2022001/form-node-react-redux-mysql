const express = require('express')
const { login, register, loginWithFB} = require('../components/auth/authController')
const route = express.Router()

route.post('/login', login)
route.post('/loginFB', loginWithFB)
route.post('/register', register)

module.exports = route