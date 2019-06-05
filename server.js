const express = require('express')
const hbs = require('express-handlebars')

const contactRoutes = require('./routes')
const router = express()
const data = require('./data.json')



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
})

server.get('/puppies', (req, res)=>{
  res.render('puppies/index', puppies)
})

// Array of puppies
// console.log(data.puppies)


// Get a file path
// Render the single puppy view
// Find the single puppy in the array where 
//the puppy's id is equal to the parameter id in the url

server.get('/puppies/:id', (req, res) => {
  const puppyArray = data.puppies.find(item => {
    return item.id == req.params.id;
  });
  res.render("puppies/view", puppyArray);
});

// server.get('/artwork/:id', (req, res) => {
  
//   const viewData = {
//     art: art
//   }
  
//   const id = req.params.id

//   let artistData = viewData.art.find((x) => {
//     return x.id == id
//   })

//   res.render('artwork.hbs', artistData)
// })

module.exports = server
