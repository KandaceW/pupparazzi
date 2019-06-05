const express = require('express')
// const hbs = require('./express-handlebars')
const router = express.Router()




router.get('/route', (req, res) => {
  res.send('Pupparazzi')
})


module.exports = router
