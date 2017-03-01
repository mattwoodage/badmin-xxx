var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
	firstName: {type: String, required: true},
	lastName: {type: String, required: true},
  	swap: {type: Boolean, required: false},
  	gender: {type: String, required: true}
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('Player', schema);