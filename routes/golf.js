var express = require('express');
var db = require('mongoskin').db('mongodb://localhost:27017/ccexp');
//mongodb://user:pass@host:port/dbname
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	var rounds;
	db.collection('rounds').find().toArray(function(err, result){
		rounds = (!err) ? result : []; 
//		console.log(rounds);
		res.render('rounds', {r: rounds} );
	});  
//	console.log('outside the query: ');
//	console.log(rounds);
});

router.get('/api', function(req, res, next) {
	db.collection('rounds').find().toArray(function(err, result){
		 if (!err) res.send(result);
	}); 
});

router.get('/create', function(req, res, next) {
	res.render('rounds/create');
});
router.post('/', function(req, res, next) {
	console.log(req.body);
	var newRound = {
		score : req.body.score,
		course : req.body.course
	};
	//console.log(newRound);
	db.collection('rounds').insert(newRound, function(err, result) {
		res.redirect('/golf');
	});
});

module.exports = router;
