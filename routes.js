const express = require('express')
const router = express.Router()
const puppies = require('./data.json')
// const getData = require(fs)


router.get('/', function (req, res) {
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

router.get('/:id', (req, res) => {
  let id = req.params.id
  let puppy = puppies.puppies.find( item => {
    return item.id == req.params.id;
  });
  res.render('puppies/view', puppy)
});



module.exports = router