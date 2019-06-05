const express = require("express");
const pups = require("./data.json");
const router = express.Router();

router.get("/puppies", (req, res) => {
  res.render("puppies/index.hbs", pups);
});

module.exports = router;
