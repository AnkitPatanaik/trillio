var express = require('express');
var router = express.Router();
var path = require('path');

var Room = require('../models/room');

router.post('/updateboard', function (req, res) {
        console.log('update board in db');
        console.log(req);
        console.log(res);
        
        var room = new Room({
                board: req.body.state
        });

        //save user in db
        room.save(function(err,user) {
                if (err) console.log(err);
                console.log(room);
                res.redirect('/');
        }); 
});

module.exports = router;
