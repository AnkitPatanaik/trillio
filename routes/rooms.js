const express = require('express');
const router = express.Router();
const path = require('path');
const util = require('util');

var Room = require('../models/room');

router.post('/updateboard', function (req, res) {
        console.log('update board in db');
        //console.log(util.inspect(req.body.board, { showHidden: true, depth: null }));
        
        var room = new Room({
                board: req.body.board
        });

        //save user in db
        room.save(function(err,user) {
                if (err) console.log(err);
                console.log(room);
                res.redirect('/');
        }); 
});

module.exports = router;
