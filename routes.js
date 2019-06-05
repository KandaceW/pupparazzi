const express = require('express')
const router = express.Router()
const puppies = require('./data.json')
const fs = require('fs')


router.get('/', function (req, res) {
    res.render('puppies/index', puppies);
});

router.get('/:id', (req, res) => {
  let id = req.params.id
  let puppy = puppies.puppies.find( item => {
    return item.id == req.params.id;
  });
  res.render('puppies/view', puppy)
});

router.get('/edit/:id', function (req, res) {
  fs.readFile('./data.json', 'utf8', function (err, data) {
    if (err) {
      return res.status(500).send('An Error Occured!')
    }
    let id = Number(req.params.id)
    let puppies = JSON.parse(data)

    for (let i = 0; i < puppies.length; i++) {
      if (puppies[i].id ===id){
        let puppy = puppies[i]
        return res.render('puppies/edit', puppy)
      }
    }
    res.send('No puppy found :(')
  })
})



module.exports = router