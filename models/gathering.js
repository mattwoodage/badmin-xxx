var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var Club = require('./club');
var Venue = require('./venue');

var schema = new Schema({
	name: {type: String, required: true},
  type: {type: String, required: true},
  date: {type: Date, required: true},
	club: {type: Schema.Types.ObjectId, ref: 'Club'},
  venue: {type: Schema.Types.ObjectId, ref: 'Venue'}
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('Gathering', schema);