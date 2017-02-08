var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var Team = require('./team');
var Player = require('./player');

var schema = new Schema({
	team: {type: Schema.Types.ObjectId, ref: 'Team'},
  player: {type: Schema.Types.ObjectId, ref: 'Player'}
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('TeamPlayer', schema);