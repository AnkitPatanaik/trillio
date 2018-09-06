const express = require('express');
const router = express.Router();
const path = require('path');
const util = require('util');
const verifyAuth = require('../middleware/verifyAuth')

var Room = require('../models/room');

// get one room
router.get('/getRoom', function (req, res) {
      console.log('get room');
      
      Room.findOne({ name: req.params.id }, function (err, data) {
              if (err) console.log(err);
              else {
                     console.log('found room'); 
                     //do something to display room found in data
              }
      });
});

//get board for a room
router.get('/getBoard', function (req, res) {
      console.log('get board');
      
      Room.findOne({ name: req.params.id }, function (err, data) {
              if (err) console.log(err);
              else {
                     console.log('found board'); 
                     //do something to display it
                     console.log(data.board);
              }
      });
});

//use when trying to make new room
router.post('/create', verifyAuth, function (req, res) {
        //create empty board to attach to new room
        var h = 8;
        var w = 8;
        var emptyBoard = new Array(h);
        for (var y = 0; y < h; ++y) {
            emptyBoard[y] = new Array(w);
            emptyBoard[y].fill(false);
        }

        var room = new Room({
            name: req.body.name,
            board: emptyBoard 
        });

        //save user in db
        room.save(function(err, room) {
                if (err) {
                    console.log(err);
                    return res.status(404).send();
                }
                return res.status(200).json({
                    id: room._id,
                    board: room.board
                });
        }); 
});

// call when board is updated
router.post('/update', function (req, res) {
        console.log('update board in db');
        //console.log(util.inspect(req.body.board, { showHidden: true, depth: null }));
        // search for room w/name, update corresponding board
        Room.findOne({ name: req.body.name }, function (err, data) {
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
