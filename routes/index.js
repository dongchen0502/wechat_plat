var express = require('express');
var jsSHA = require('jssha');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: '旅游WIFI'});
});

/**
 * 微信验证接口
 */
router.get('/api/auth', function (req, res, next) {
    var token = 'leondc';
    var signature = req.query.signature;
    var timestamp = req.query.timestamp;
    var echostr = req.query.echostr;
    var nonce = req.query.nonce;

    var oriArray = [nonce, timestamp, token];
    oriArray.sort();
    var original = oriArray.join('');
    var shaObj = new jsSHA(original, 'TEXT');
    var scyptoString = shaObj.getHash('SHA-1', 'HEX');

    if(scyptoString === signature){
        res.json(echostr);
    }else{
        res.json('error');
    }
});

router.post('/api/msg', function (req, res, next) {

});

module.exports = router;
