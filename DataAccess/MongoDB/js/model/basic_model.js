'use strict';

var mongoose = require('mongoose');

var basicSchema = new mongoose.Schema({
  version: String,
  project: String,
  datetime: String
});

basicSchema.static('GetLatest', function(callback){
  this.model('Basic')
    .find()
    .select('version project datetime -_id')
    .sort({_id: -1})
    .limit(1)
    .exec(callback);
});

module.exports = mongoose.model('Basic', basicSchema, 'basic');
