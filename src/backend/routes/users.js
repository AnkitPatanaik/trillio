var express = require('express');
var router = express.Router();
var path = require('path');

var User = require('../models/user');

router.get('/', function (req, res) {
         res.sendFile(path.resolve('./assets//index.html'));
});

router.get('/register', function(req, res) {
         res.sendFile(path.resolve('./assets//register.html'));
});

router.get('/home', function(req, res) {
        res.sendFile(path.resolve('./assets/home.html'));
});

router.post('/create', function (req, res) {
         console.log('register button is pressed');

         //create new user based on fields that were populated
         var user = new User({
                 username: req.body.name,
                 password: req.body.password
         });

         //save users to db
         user.save(function(err, user) {
                 if (err) console.log(err);
                 console.log(user);
                 res.redirect('/');
         });
});

module.exports = router;
