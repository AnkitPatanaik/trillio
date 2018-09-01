var express = require("express");
var router = express.Router();
var path = require("path");

var User = require("../models/user");

router.get("/", function(req, res) {
  res.sendFile(path.resolve("./assets/index.html"));
});

router.get("/register", function(req, res) {
  res.sendFile(path.resolve("./assets/register.html"));
});

router.get("/home", function(req, res) {
  res.sendFile(path.resolve("./assets/home.html"));
});

//register a new user
router.post("/create", function(req, res) {
  //create new user based on fields that were populated
  var user = new User({
    username: req.body.username,
    password: req.body.password
  });

  //save users to db
  user.save(function(err, user) {
    if (err) {
      console.log(err);
      return res.status(404).send();
    } else {
      console.log(user);
      return res.status(200).send();
    }
  });
});

router.post("/login", function(req, res) {
  var username = req.body.username;
  var password = req.body.password;

  User.findOne({ username: username, password: password }, function(err, user) {
    if (err) {
        //server error
      console.log(err);
      return res.status(500).send();
    }
    if (!user) {
      //user not found
      return res.status(404).send();
    }

    console.log("successfully logged in");
    return res.status(200).send();
  });
});

module.exports = router;
