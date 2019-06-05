const express = require("express");
const puppies = require("./data.json");
const router = express.Router();

router.get("/puppies", (req, res) => {
  res.render("puppies/index.hbs", puppies);
});

router.get("/puppies/:id", (req, res) => {
  const pup = puppies.puppies.find(pup => {
    return pup.id == req.params.id;
  });
  console.log(pup)
  res.render("puppies/view.hbs", pup);
});

module.exports = router;
