const express = require('express')
const hbs = require('express-handlebars')
const indexRoutes = require('./routes')
const indexContacts = require('./contacts')
const server = express()

// Middleware
server.engine('hbs', hbs({
  defaultLayout: 'main',
  extname: 'hbs'
}))
server.set('view engine', 'hbs')
server.use(express.static('public'))
server.use(express.urlencoded({extended: false}))

server.use('/', indexContacts)

server.use('/', indexRoutes)




module.exports = server
