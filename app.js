const express = require('express');
const bodyParser = require('body-parser');
//bodyParser makes it ez to read info from requests

const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;
var User = require('./models/user');

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // brew services start mongodb
  // brew services stop mongodb 
  console.log('connected to mongoDB database :)');      
});

//tell express to use bodyParser
app.use (bodyParser.urlencoded({extended: true}));

app.get('/', function (req, res) {
        res.sendFile(__dirname + '/index.html');
});

app.post('/register', function (req, res) {
        console.log('register button is pressed');
        //console.log(req.body); //information from request is in here

        //create new user based on fields that were populated
        var user = new User({
                username: req.body.name,
                password: req.body.password
        });
        
        user.save(function(err, user) {
                if (err) console.log(err);
                console.log(user);
        });

        res.redirect('/');
});

app.listen(3000, function() {
        console.log('app is listening on port 3000');
});
