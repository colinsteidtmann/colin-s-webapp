var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('homepage', { title: 'Express' });
});


/* GET vacationhomes page. */
router.get('/vacation-homes', function(req, res, next) {
  res.render('vacationrentals', { title: 'Vacation Homes' });
});


module.exports = router;

