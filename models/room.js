const mongoose = require('mongoose');

var boardSchema = mongoose.Schema({
        board: { 
                type: Array, 
                "default" : []
        }
});

var room = mongoose.model('Room', boardSchema);

module.exports = room;
