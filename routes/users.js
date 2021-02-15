/* 
Express-Portfolio(Comp 229)
Assignment 01
Siddarth Sundarajan
301149472
*/


var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
