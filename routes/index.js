var express = require('express');
var router = express.Router();


router.get('/', function (req, res) {
    res.render('index', {});
  });


router.get('/profile', function (req, res) {
  res.render('profile', {});
});


router.get('/question', function (req, res) {
 // res.render('question', {});
 res.send("question page");
});


router.get('/form', function (req, res) {
  // res.render('form', {});
  res.send("form page");
 });


module.exports = router;