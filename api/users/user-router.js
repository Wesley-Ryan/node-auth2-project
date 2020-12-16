const express = require("express");
const User = require("./user-model");
const { validator } = require("../auth/middleware");

const router = express.Router();
router.get("/users", validator, (req, res) => {
  User.find()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((err) => res.send(err));
});

module.exports = router;
