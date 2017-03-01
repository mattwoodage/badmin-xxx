var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
  name: {type: String, required: true},
  type: {type: String, required: true},
  orderOfPlay: [{type: String}],
  numRubbers: {type: Number, required: true},
  numGames: {type: Number, required: true},
  playerCombos: [{type: String}]
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('Format', schema);