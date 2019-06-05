const express = require("express");
const data = require("./data1.json");
const router = express.Router();
const fs = require("fs");

router.get("/puppies", (req, res) => {
  res.render("puppies/index.hbs", data);
});

router.get("/puppies/:id", (req, res) => {
  const pup = data.puppies.find(pup => {
    return pup.id == req.params.id;
  });
  res.render("puppies/view.hbs", pup);
});

router.get("/puppies/edit/:id", (req, res) => {
  const pup = data.puppies.find(pup => {
    return pup.id == req.params.id;
  });
  res.render("puppies/edit.hbs", pup);
});

/////////////////////////////////////////////////////////////

router.post("/puppies/edit/:id", (req, res) => {
  const id = req.params.id;

  const pupToUpdate = data.puppies.find(pup => {
    return pup.id == req.params.id;
  });

  pupToUpdate.name = req.body.name;
  pupToUpdate.breed = req.body.breed;
  pupToUpdate.owner = req.body.owner;

  fs.writeFile("data1.json", JSON.stringify(data, null, 2), "utf8", err => {
    if (err) throw err;
  });

  res.redirect("/puppies/" + id);
});

module.exports = router;
