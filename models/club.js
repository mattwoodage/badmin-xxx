var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
	name: {type: String, required: true},
  	description: {type: String, required: false},
  	adults: {type: Boolean, required: false},
  	juniors: {type: Boolean, required: false},
  	members: {type: Number, required: false},
  	website: {type: String, required: false}
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('Club', schema);