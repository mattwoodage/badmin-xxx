var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var Division = require('./division');
var Team = require('./team');
var Venue = require('./venue');

var schema = new Schema({
	name: {type: String, required: true},
	division: {type: Schema.Types.ObjectId, ref: 'Division'}
	venue: {type: Schema.Types.ObjectId, ref: 'Venue'}

	home_team: {type: Schema.Types.ObjectId, ref: 'Team'}
	away_team: {type: Schema.Types.ObjectId, ref: 'Team'}

});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('Match', schema);