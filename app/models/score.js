var mongoose = require('mongoose');

var scoreSchema = mongoose.Schema({
    score: Number,
});

// create the model for users and expose it to our app
module.exports = mongoose.model('Score', scoreSchema);