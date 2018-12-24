var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var PlayerSchema = new Schema({
  name: {
    type: String,
    required: true
  }
})

var Player = mongoose.model('Player', PlayerSchema)

module.exports = mongoose.model('Player', PlayerSchema)

