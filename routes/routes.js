const express = require('express')
const router = express.Router()
const data = require('../data.json')


const viewData = {
  puppies: data,
}

router.get('/', (req, res) => {
  res.redirect('/puppies') // update to redirect to puppies
})

router.get('/puppies', (req, res) => {
  res.render('../views/puppies/view')
})

// server.get('/', (req, res) => {
//   let id = req.params
//   res.render('home', viewData)
// })

// router.get('/', (req, res) => {
//   res.send('This is the home page')
// })

// router.get('/', (req, res) => {
//   res.send('This is the home page')
// })

// router.get('/', (req, res) => {
//   res.send('This is the home page')
// })

// router.get('/', (req, res) => {
//   res.send('This is the home page')
// })


module.exports = router
