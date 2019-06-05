const express = require('express')
const hbs = require('express-handlebars')

const contactRoutes = require('./routes')
const router = express()
const puppies = require('./data.json')



const server = express()

// Middleware
server.engine('hbs', hbs({
  defaultLayout: 'main',
  extname: 'hbs'
}))
server.set('view engine', 'hbs')
server.use(express.static('public'))
server.use(express.urlencoded({extended: false}))

server.get('/', (req, res)=>{
  res.render('puppies/index', puppies)
  // res.send('do you hear me?')
})

module.exports = server
