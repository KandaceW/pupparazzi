const express = require('express')
const router = express.Router()
const data = require('./data.json')



const viewData = {
  title: "pupperazzi",
  puppies: data.puppies
}
router.get('/',(req, res) =>{
  console.log(viewData)
  res.render('puppies/index',viewData)
})

module.exports = router