'use strict';

var mongoose = require('mongoose');
var moment = require('moment');

var Apartment;

var apartmentSchema = new mongoose.Schema({
  rentPerRoom: Number,
  apartmentNumber: Number,
  numRooms: Number,
  photoUrl: String,
  tenants: [{type: mongoose.Schema.Types.ObjectId, ref: "Tenant"}]
});

apartmentSchema.statics.create = function(apartmentObj, callback){
  var apartment = new Apartment(apartmentObj);
  apartment.save(callback)
}

apartmentSchema.statics.showAll = function(req, callback){
  Apartment.find({}).exec(callback);
}


Apartment = mongoose.model('apartment', apartmentSchema);

module.exports = Apartment;
