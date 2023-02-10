/*users.js, Chan Kai Chung, 301321990, 9th Feb 2023*/
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Placeholder');
});

module.exports = router;
