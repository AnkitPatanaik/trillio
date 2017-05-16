const mongoose = require('mongoose');

var boardSchema = mongoose.Schema({
        id: {
                type: mongoose.Schema.Types.ObjectId,
                required: true
        },
        name: {
                type: String,
                required: true
        },
        board: { 
                type: Array, 
                "default" : []
        }
});

var room = mongoose.model('Room', boardSchema);

module.exports = room;
