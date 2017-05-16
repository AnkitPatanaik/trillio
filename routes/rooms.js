const express = require('express');
const router = express.Router();
const path = require('path');
const util = require('util');

var Room = require('../models/room');

//use when trying to make new room
router.post('/createRoom', function (req, res) {
        console.log('update board in db');
        //console.log(util.inspect(req.body.board, { showHidden: true, depth: null }));
        //create empty board to attach to new room
        var emptyBoard = new Array(h);
        for (var y = 0; y < h; ++y) {
                emptyBoard[y] = new Array(w);
                emptyBoard[y].fill(false);
        }

        var room = new Room({
                id: req.body.id,
                name: req.body.name,
                board: emptyBoard 
        });

        //save user in db
        room.save(function(err,user) {
                if (err) console.log(err);
                console.log(room);
                res.redirect('/');
        }); 
});

// call when board is updated
router.post('/updateRoom', function (req, res) {
        console.log('update board in db');
        //console.log(util.inspect(req.body.board, { showHidden: true, depth: null }));
        // search for room w/name, update corresponding board
        Room.findOne({ name: req.body.name }, function (err, date) {
              if (err) console.log(err);
              else {
                     data.board = req.body.board;
                     data.save(function (err) {
                             if (err) console.log(err);
                     }); 
              }  
        });
});

module.exports = router;
