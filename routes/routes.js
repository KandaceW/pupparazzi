const express = require('express')
const router = express.Router()
const puppies = require('../data')


router.get('/', (req, res) => {
  res.send('Pupparazzi')
})

// this should show the puppies on the screen
router.get('/puppies', (req, res) => {
  res.render('puppies/index', puppies)
})

// this should show the puppies id
router.get('/puppies/:id', (req, res) => {
  const puppy = puppies.puppies.find(item => {
    return item.id == req.params.id
  })
 
  res.render('puppies/view', puppy)
})


//id

// let id = req.params.id
  // let puppy = puppies.find(item => {
  //   return item.id == req.params.id
  // })
  // console.log(puppies)

  // res.render('puppies/view', puppies)



module.exports = router