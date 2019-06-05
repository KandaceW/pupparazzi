const express = require('express')
const hbs = require('express-handlebars')

const server = express()
const routes = require('./routes')


// server.get('/')

// Middleware
server.engine('hbs', hbs({
  defaultLayout: 'main',
  extname: 'hbs'
}))
server.set('view engine', 'hbs')
server.use(express.static('public'))
server.use(express.urlencoded({extended: false}))

server.get('/',(req, res) => {
  res.send('Pupparazzi')
})
server.use('/puppies', routes)

module.exports = server
