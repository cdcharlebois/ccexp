var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
	var thoughts = req.db.collection('thoughts')
		.find().toArray(function (err, result) {
			if (!err) res.render('thoughts', { thoughts: result });		
		});
});

router.get('/create', function (req, res) {
	res.render('thoughts/create');
});

router.post('/', function (req, res) {
	var newThought = {
		title : req.body.title,
		text : req.body.text
	};
	req.db.collection('thoughts').insert(newThought, function(err, result) {
		res.redirect('/thoughts');
	});
});
module.exports = router;