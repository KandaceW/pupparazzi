const express = require('express')
const router = express.Router()
const puppies = require('../data')

const server = express()

router.get('/', (req, res) => {
  res.send('Pupparazzi')
})

//This route displays puppies on screen
router.get('/puppies', (req, res) => {
  res.render("puppies", puppies)
})

//This route gives information about each puppy
router.get('/puppies/:id', (req, res) => {
  
  const puppy = puppies.puppies.find(item => {
    return item.id == req.params.id
  })

  res.render('puppies/view', puppy)
  // res.send('puppy', puppy)
})

//get route for update form
router.get('/puppies/edit/:id', (req, res) => {
  
  const puppy = puppies.puppies.find(item => {
    return item.id == req.params.id
  })

  res.render('puppies/edit', puppy)
})

router.post('/puppies/edit/:id', (req, res) => {
  
  //get url encoded stuff from request
  const puppyUpdate = req.
  
  //locate the puppy we are going to update
  const puppy = puppies.puppies.find(item => {
    return item.id == req.params.id
  })

  fs.readFile("puppies", (err, data) => {
    if (err) throw err
    puppy = 
  })

})



module.exports = router