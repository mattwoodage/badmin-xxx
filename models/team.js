var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var Division = require('./division');
var Club = require('./club');

var schema = new Schema({
	suffix: {type: String, required: false},
  	club: {type: Schema.Types.ObjectId, ref: 'Club', required: true},
	division: {type: Schema.Types.ObjectId, ref: 'Division', required: true}
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('Team', schema);