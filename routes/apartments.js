var express = require('express');
var router = express.Router();

var Apartment = require("../models/apartment.js");
var Tenant = require("../models/tenant.js");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.get('/all', function(req, res, next){
  Apartment.find({}, function(err, apartments){
    res.render('apartments', {apartments: apartments});
  });
});


router.post('/create', function(req, res, next) {
  Apartment.create(req.body, function(err, savedApartment){
    if (err) return res.status(400).send(err);
    res.send(savedApartment);
  });
});


module.exports = router;
