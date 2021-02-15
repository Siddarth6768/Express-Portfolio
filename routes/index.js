/* 
Express-Portfolio(Comp 229)
Assignment 01
Siddarth Sundarajan
301149472
*/

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home'});
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('partials/home', { title: 'Home'});
});

/* GET About page. */
router.get('/aboutme', function(req, res, next) {
  res.render('partials/about', { title: 'About Me'});
});
/* GET Products page. */
router.get('/projects', function(req, res, next) {
  res.render('partials/projects', { title: 'Projects'});
});
/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('partials/services', { title: 'Services'});
});

/* GET Contact page. */
router.get('/contact', function(req, res, next) {
  res.render('partials/contact', { title: 'Contact'});
});


module.exports = router;
