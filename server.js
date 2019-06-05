const express = require('express')
const hbs = require('express-handlebars')
const Routes = require('./routes/routes')

const server = express()



server.use('/', Routes)

// Middleware
server.engine('hbs', hbs({
  defaultLayout: 'main',
  extname: 'hbs'
}))
server.set('view engine', 'hbs')
server.use(express.static('public'))
server.use(express.urlencoded({extended: false}))

// server.get('/', (req, res) => {
//   res.send('Pupparazzi')
// })

module.exports = server
