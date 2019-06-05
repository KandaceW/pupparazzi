const express = require("express");
const router = express.Router();
const puppies = require("../data");
const fs = require("fs");

const server = express();

router.get("/", (req, res) => {
  res.send("Pupparazzi");
});

//This route displays puppies on screen
router.get("/puppies", (req, res) => {
  res.render("puppies", puppies);
});

//This route gives information about each puppy
router.get("/puppies/:id", (req, res) => {
  const puppy = puppies.puppies.find(item => {
    return item.id == req.params.id;
  });

  res.render("puppies/view", puppy);
  // res.send('puppy', puppy)
});

//get route for update form
router.get("/puppies/edit/:id", (req, res) => {
  const puppy = puppies.puppies.find(item => {
    return item.id == req.params.id;
  });

  res.render("puppies/edit", puppy);
});

router.post("/puppies/edit/:id", (req, res) => {
  // console.log("THIS IS IN THE BODY OF THE REQUEST ", req.body);
  //get url encoded stuff from request
  let puppyUpdate = req.body; //form data

  //locate the puppy we are going to update
  let puppy = puppies.puppies.find(item => {
    return item.id == req.params.id;
  });
  
  //write the update into the puppy array
  Object.assign(puppy, puppyUpdate)

  console.log("NEW VALUE OF PUPPY ", puppy);
  console.log("UPDATED ARRAY??? ", puppies);

  fs.writeFile("puppies", JSON.stringify(puppies.puppies, null, 2),"utf8", err => {
      if (err) throw err;
      console.log('The puppies have been updated');
      res.render("puppies/edit", puppy);
    }
  );

  //read in the puppies.JSON we want to update
  // fs.readFile("puppies", (err, data) => {
  //   if (err) throw err
  //   puppy =
  // })

  //Write the entire array back into the JSON file
}); //AFTER THIS WRITE THE REDIRECT FOR THIS ROUTE

module.exports = router;
