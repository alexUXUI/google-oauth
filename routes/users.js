var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('signin', {title: "welcome bro"});
});

module.exports = router;
