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

Apartment = mongoose.model('apartment', apartmentSchema);

module.exports = Apartment;
