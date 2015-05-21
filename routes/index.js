var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Express',
    // social sharing
    s: [
      {
        name: "Twitter",
        link: "https://www.twitter.com/_connerc"
      },
      {
        name: "Github",
        link: "https://www.github.com/cdcharlebois"
      }
    ]
  });
});

module.exports = router;
