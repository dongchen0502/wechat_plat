var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '旅游WIFI' });
});

router.get('/api/auth', function(req, res, next){

});

router.post('/api/msg', function(req, res, next){

});

module.exports = router;
