var express = require('express');
var router = express.Router();

var Tenant = require("../models/tenant.js");
var Apartment = require("../models/apartment.js");


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/all', function(req, res, next){
  Tenant.showAll(req, function(err, people){
    if(!people) return res.render('addTenant');
    if (err) return res.status(400).send(err);
    res.render("tenants", {people: people});
  });
});

router.post('/addToApt', function(req, res){
  Apartment.findOne({apartmentNumber: req.body.aptNum}, function(err, apartment){
    apartment.save(function(err, updatedApt){
      if (err) {
        return res.status(400).send(err);
      }
      res.send(updatedApt);
    });
  });
});

router.post('/create', function(req, res, next) {
  Tenant.create(req.body, function(err, savedTenant){
    if (err) return res.status(400).send(err);
    res.send(savedTenant);
  });
});

module.exports = router;
