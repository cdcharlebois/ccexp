var express = require('express');
var db = require('mongoskin').db('mongodb://localhost:27017/ccexp');
//mongodb://user:pass@host:port/dbname
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res) {
	res.send('/golf');
});

router.get('/api', function(req, res, next) {
	db.collection('rounds').find().toArray(function(err, result){
		 if (!err) res.send(result);
	}); 
});


module.exports = router;
