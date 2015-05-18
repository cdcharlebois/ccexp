var express = require('express');
//var db = require('mongoskin').db('mongodb://localhost:27017/ccexp');
//mongodb://user:pass@host:port/dbname
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	res.send("This is the golf homepage :)");  
});

module.exports = router;
