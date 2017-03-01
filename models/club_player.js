var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var Club = require('./club');
var Player = require('./player');

var schema = new Schema({
	club: {type: Schema.Types.ObjectId, ref: 'Club'},
  	player: {type: Schema.Types.ObjectId, ref: 'Player'}
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('ClubPlayer', schema);