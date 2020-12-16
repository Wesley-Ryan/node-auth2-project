const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../users/user-model");
const tokenCreator = require("./tokenCreator");
const { validatePermissions } = require("./middleware");

router.post("/register", (req, res) => {
  const credentials = req.body;
  if (validatePermissions(credentials)) {
    const hash = bcrypt.hashSync(credentials.password, 9);
    credentials.password = hash;
    User.add(credentials)
      .then((usr) => {
        console.log(usr);
        res.status(201).json({ data: usr });
      })
      .catch((err) => res.status(500).json(err.message));
  } else {
    res.status(400).json({ message: "invalid credentials" });
  }
});

router.post("/login", (req, res) => {
  if (validatePermissions(req.body)) {
    User.findBy({ username: req.body.username })
      .then(([user]) => {
        if (user && bcrypt.compareSync(req.body.password, user.password)) {
          const token = tokenCreator(user);
          res.status(200).json({
            message: "Welcome, " + user.username,
            token,
          });
        } else {
          res
            .status(401)
            .json("Unable to verify your credentials,please login");
        }
      })
      .catch((err) => res.status(500).json(err.message));
  } else {
    res.status(401).json("Unable to verify your credentials,please login");
  }
});

module.exports = router;
