var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
  name: {type: String, required: true},
  type: {type: String, required: true},
  address_1: {type: String, required: true},
  address_2: {type: String, required: false},
  address_3: {type: String, required: false},
  town: {type: String, required: true},
  county: {type: String, required: false},
  postcode: {type: String, required: true},
  coordinates: {type: String, required: false}
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('Venue', schema);