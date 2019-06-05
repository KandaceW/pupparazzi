const express = require('express')
const router = express.Router()
const puppies = require('./data.json')
// const getData = require(fs)


router.get('/puppies', function (req, res) {
  // fs.readFile('./data.json', 'utf8', function (err, data) {
    // if (err) {
    //   return res.status(500).send('An Error Occured!')
    // }
    // var puppies = {
    //   puppies: JSON.parse(data)
    // }
    res.render('puppies/index', puppies);
  // })
});



module.exports = router