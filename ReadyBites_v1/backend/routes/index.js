var express = require('express');
var router = express.Router();
var passport = require("passport");
var LocalStrategy = require('passport-local').Strategy;

router.get('/register', function(req, res, next) {
  res.render('register', { title: 'Register' });
});

router.post('/register', function(req, res, next) {
  console.log('enter register post');
    var username = req.query.username;
    var password = req.query.password;
    // var confirm_password = req.body.confirm_password;
    var profile_image = 'default_image.jpg';
    // if (req.file) {
    //     var profile_image = req.file.filename;
    // } else {
    //     var profile_image = 'default_image.jpg';
    // }

    req.checkBody('username', 'Username field is required').notEmpty();
    req.checkBody('password', 'Password field is required').notEmpty();
    // req.checkBody('confirm_password', 'Password do not match').equals(req.body.password);
    req.getValidationResult().then(function(result) {
        if (!result.isEmpty()) {
            var errors = result.mapped();
            res.render('register', { errors: errors, validated: req.body});
        } else {
            var newUser = new User({
                username : username,
                password : password,
                profile_image: profile_image
            });
            bcrypt.genSalt(10, function(err, salt) {
                bcrypt.hash(newUser.password, salt, function(err, hash) {
                    newUser.password = hash;
                    newUser.save(function(err) {
                        if (err) {
                            if (err.code === 11000) {
                                // Duplicate username
                                return res.render('register', { validated: req.body, errors: { username:{msg:'User already exists!'}} });
                            } else {
                                return res.render('register');
                            }
                            // Some other error

                        }
                        res.location('/');
                        res.redirect('/');
                    });
                });
            });
        }
    });
});

router.get('/login', function(req, res, next) {
    res.render('login', { title: 'Log in' });
});

router.post('/login',
    passport.authenticate('local', {failureRedirect: '/login',
        failureFlash: 'Invalid username or password',
        successRedirect: '/'})
);
passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(err, user);
    });
});
passport.use(new LocalStrategy(function(username, password, done){
    User.findOne({ username: username }, function(err, user) {
        if (err) throw err;
        if (!user) {
            return done(null, false, {message: 'Unknown User'});
        }
        bcrypt.compare(password, user.password, function(err, isMatch) {
            if (err) return done(err);
            if (isMatch) {
                return done(null, user);
            } else {
                return done(null, false, { message: 'Incorrect password.' });
            }
        });
    })
}));

router.get('/logout', function(req, res) {
    req.logout();
    req.flash('success', 'You are now logged out');
    res.redirect('/login');
});

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
