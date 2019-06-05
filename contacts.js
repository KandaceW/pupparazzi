const express = require('express')
const router = express.Router()


router.get('/contacts',(req, res) => {
  res.send('We got this!')
})




module.exports = router