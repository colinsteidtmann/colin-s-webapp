var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('homepage', { title: 'Express' });
});


/* GET vacationhomes page. */
router.get('/vacation-rentals', function(req, res, next) {
  res.render('vacation-rentals', { title: 'Vacation Homes' });
});

/* GET promotions page. */
router.get('/promotions', function(req, res, next) {
  res.render('promotions', { title: 'Promotions' });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Us' });
});

/* GET rates page. */
router.get('/rates', function(req, res, next) {
  res.render('rates', { title: 'Rates' });
});

/* GET legal-info page. */
router.get('/legal-info', function(req, res, next) {
  res.render('legal-info', { title: 'Legal Info' });
});

/* GET house-listing page. */
router.get('/house-listing', function(req, res, next) {
  res.render('house-listing', { title: 'House Listing' });
});

/* GET checkout page. */
router.get('/checkout', function(req, res, next) {
  res.render('checkout', { title: 'checkout' });
});

/* GET user-authentication page. */
router.get('/user-authentication', function(req, res, next) {
  res.render('user-authentication', { title: 'Log In / Sign Up' });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Us' });
});



module.exports = router;

