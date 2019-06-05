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

router.get('/:id',(req, res) =>{
  const pups = data.puppies.find(item => {
    return item.id == req.params.id;
  });
  const viewData = {
    puppies: [data.puppies]
  };
  console.log(pups);
  res.render("puppies/view", pups);
})

router.get('/:id',(req, res) =>{
  const pups = data.puppies.find(item => {
    return item.id == req.params.id;
  });
  const viewData = {
    puppies: [data.puppies]
  };
  console.log(pups);
  res.render("puppies/view", pups);
})


module.exports = router