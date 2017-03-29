var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var Season = require('./season');
var Format = require('./format');

var schema = new Schema({
	name: {type: String, required: true},
	format: {type: Schema.Types.ObjectId, ref: 'Format'},
  	season: {type: Schema.Types.ObjectId, ref: 'Season'},
  	order: {type: Number, required: true}
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('Division', schema);