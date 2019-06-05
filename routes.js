const express = require('express')
const data = require('./data.json')
const router = express.Router()


//routes


router.get('/puppies', (req, res) => {
  const viewData = {
    puppies: data.puppies
  }
  res.render('puppies/index', viewData)
})

// router.get('/route', (req, res) => {
//   res.send('Pupparazzi')
// })


module.exports = router
