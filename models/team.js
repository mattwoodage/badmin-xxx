var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var Division = require('./division');
var Club = require('./club');

var schema = new Schema({
	suffix: {type: String, required: false},
  	club: {type: Schema.Types.ObjectId, ref: 'Club'},
	division: {type: Schema.Types.ObjectId, ref: 'Division'}
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('Team', schema);