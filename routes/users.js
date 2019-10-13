var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/help', function(req, res, next) {
  res.send('respond with a help');
});

module.exports = router;
