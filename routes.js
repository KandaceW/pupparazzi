const express = require('express')
const router = express.Router()
const data = require('./data.json')
const fs = require('fs')


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

router.get('/edit/:id',(req, res) =>{
  const pups = data.puppies.find(item => {
    return item.id == req.params.id;
  });
  const viewData = {
    puppies: [data.puppies]
  };
  console.log(pups);
  res.render("puppies/edit", pups);
})
// Create an object that represents all the data of the puppy we are going to update
// Read in the JSON file and locate the puppy we are going to update
// Update the puppy in the array
// Write the entire array back into the JSON file
// Redirect to the get /puppies/edit/:id route

router.post('/edit/:id',(req, res) =>{
//  const pupBeingEdited = {puppies[id]}
console.log(req.body)
const pup = data.puppies.find(item => {
  return item.id == req.params.id;
});
//modify pup using req.body then write data back to the file
pup.name = req.body.name
pup.breed = req.body.breed
pup.owner = req.body.owner
// fs.writeFile


console.log(data)
})


module.exports = router