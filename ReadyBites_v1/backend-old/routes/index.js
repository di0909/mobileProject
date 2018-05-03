var express = require('express');
var router = express.Router();
var User = require('../models/user');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/users/:username', function(req, res, next) {
  var username = req.query.username;
  console.log(username);
  //where 1 is ascending and -1 is desceding.

  User.find({username: username}).exec(function(err, user) {
    if(err)
        return console.log(err);
    console.log(user);
    res.status(200).json(user);
  });
});

module.exports = router;
