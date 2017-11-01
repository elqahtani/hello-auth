var express = require('express');
var router = express.Router();

const controller = require ('./controller')

router.get('/', function(req, res, next) {
  res.send({
  	message: "Hello Auth"
  })
});


router.post('/login', controller.checkBody, function(req, res, next) {
  res.send({
  	username: req.body.username,
  	message: req.message,
  	token: req.token
  })
});

router.get('/check', controller.checkToken, function(req, res, next) {
  res.send({
  	token: req.headers.authorization,
  	message: req.message
  })
});


module.exports = router 