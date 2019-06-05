const express = require('express')
const hbs = require('express-handlebars')
const router = require('./routes')
// const puppiesRoutes

const server = express()

// Middleware
server.engine('hbs', hbs({
  defaultLayout: 'main',
  extname: 'hbs'
}))
server.set('view engine', 'hbs')
server.use(express.static('public'))
server.use(express.urlencoded({extended: false}))

module.exports = server

server.get('/',(req, res) =>{
  res.send('pupperazzi')
})

server.use('/puppies', router) 


