var express = require('express');
var router = express.Router();

const DATA = require("./data.json")


/* GET secrets */
router.get('/', function(req, res, next) {
  res.send(DATA);
});

module.exports = router;
