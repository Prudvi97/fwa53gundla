var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('mydata', { 
    title: 'Prudvi Reddy Gundla',
    fact: 'I love learning French language by watching French series.'
  });
});

module.exports = router;