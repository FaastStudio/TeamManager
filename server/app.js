var express = require('express')
var app = express()
var db = require('./db')

var UserController = require('./user/UserController')
var AuthController = require('./auth/AuthController')
var PlayerController = require('./player/PlayerController')

app.use('/users', UserController)
app.use('/api/auth', AuthController)
app.use('/api/players', PlayerController)

module.exports = app;
