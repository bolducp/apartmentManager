'use strict';

var mongoose = require('mongoose');
var Tenant;

var tenantSchema = mongoose.Schema({
  name: String,
  phone: Number,
  email: String,
  dob: Date,
  aptNum: Number
})

tenantSchema.statics.create = function(personObj, callback){
  var tenant = new Tenant(personObj);
  tenant.save(callback)
}

tenantSchema.statics.showAll = function(req, callback){
  Tenant.find({}).exec(callback);
}

Tenant = mongoose.model('tenant', tenantSchema);

module.exports = Tenant;
