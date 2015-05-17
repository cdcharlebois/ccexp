var express = require('express');
var db = require('mongoskin').db('mongodb://localhost:27017/ccexp');
//mongodb://user:pass@host:port/dbname
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
//  var newThing = {text:"here's another"};
//  db.collection('foo').insert(newThing, function(err, res){
//    if (err) throw err;
//    console.log(res);
//  });
  //get some record from the DB
  db.collection('foo').find().toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    res.send("There are " + result.length + " things in this collection");
//    res.send(result);
  });
//  res.send('respond with a resource');
  
});

module.exports = router;
