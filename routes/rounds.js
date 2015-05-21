var express = require('express');
var router = express.Router();

// ---- //
// Show //
// ---- //
router.get('/', function(req, res, next) {
	var rounds;
	req.db.collection('rounds').find().toArray(function(err, result){
		rounds = (!err) ? result : []; 
		res.render('rounds/index', {r: rounds} );
	});  
});

// ------ //
// Create //
// ------ //
router.get('/create', function(req, res, next) {
	res.render('rounds/create');
}); 

// ---- //
// Save //
// ----//
router.post('/', function(req, res, next) {
	console.log(req.body);
	var newRound = {
		score : req.body.score,
		course : req.body.course
	};
	req.db.collection('rounds').insert(newRound, function(err, result) {
		res.redirect('/golf/rounds');
	});
});

module.exports = router;