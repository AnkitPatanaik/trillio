const express = require('express');
const bodyParser = require('body-parser');
//bodyParser makes it ez to read info from requests
const path = require('path');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/trillio');
var db = mongoose.connection;

var users = require('./routes/users');

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // brew services start mongodb
  // brew services stop mongodb 
  console.log('connected to mongoDB database :)');      
});

//tell express to use bodyParser
app.use (bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'assets')));

app.use('/', users); 

app.listen(3000, function() {
        console.log('app is listening on port 3000');
});
