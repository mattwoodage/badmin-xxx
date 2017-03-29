var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var Division = require('./division');
var Team = require('./team');
var Venue = require('./venue');

var schema = new Schema({
	division: {type: Schema.Types.ObjectId, ref: 'Division', required: true},
	venue: {type: Schema.Types.ObjectId, ref: 'Venue', required: true},
	homeTeam: {type: Schema.Types.ObjectId, ref: 'Team', required: true},
	awayTeam: {type: Schema.Types.ObjectId, ref: 'Team', required: true},
	numCourts: {type: Number, required: true},
	dateTime: {type: Date, required: true},
	status: {type: Number}
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('Match', schema);