var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var Division = require('./division');
var Team = require('./team');
var Venue = require('./venue');

var schema = new Schema({
	division: {type: Schema.Types.ObjectId, ref: 'Division'},
	venue: {type: Schema.Types.ObjectId, ref: 'Venue'},
	homeTeam: {type: Schema.Types.ObjectId, ref: 'Team'},
	awayTeam: {type: Schema.Types.ObjectId, ref: 'Team'}

});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('Match', schema);