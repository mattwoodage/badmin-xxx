var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var League = require('./league');

var schema = new Schema({
  name: {type: String, required: true},
  league: {type: Schema.Types.ObjectId, ref: 'League'},
  status: {type: String, required: false}
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('Season', schema);