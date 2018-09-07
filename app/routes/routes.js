module.exports = function(app, passport) {

// normal routes ===============================================================

    // show the home page (will also have our login links)
    app.get('/', function(req, res) {
        res.render('index.ejs');
    });

    // PROFILE SECTION =========================
    app.get('/profile', isLoggedIn, function(req, res) {
        res.render('profile.ejs', {
            user : req.user
        });
    });

    // App-Teams SECTION =========================
    app.get('/teams', function(req, res) {

        res.render('app-teams.ejs');
    });

    // App-Score SECTION =========================
    app.get('/score', function(req, res) {

        // BWW Need json obj to live elsewhere???
        var course = {
            "coursename": "Harvard Gulch Golf Course"
        }

        res.render('app-score.ejs', {
            course: course
        });
    });

    // App-Select-Hole SECTION =========================
    app.get('/select-hole', function(req, res) {

        // BWW Need json obj to live elsewhere???
        var course = {
            "coursename": "Harvard Gulch Golf Course"
        }

        res.render('app-select-hole.ejs', {
            course: course
        });
    });

       // App-Select-Team SECTION =========================
       app.get('/select-team', function(req, res) {

        res.render('app-selectteam.ejs');
    });

       // Show the Map-Page
       app.get('/map', function(req, res) {
        res.render('app-map.ejs');
    });

    //Test
    app.get('/test', function(req, res) {
        res.render('test.ejs');
    });

    // App-Scorecard SECTION =========================
    app.get('/scorecard', function(req, res) {

        var course = {
            "courseid": 6127,
            "holeteeboxes": [
                {
                    "holeid": 75402,
                    "holenumber": 1,
                    "color": "White",
                    "length": 85,
                    "par": 3,
                    "handicap": 8,
                    "teeboxtype": "Men's"
                },
                {
                    "holeid": 75402,
                    "holenumber": 1,
                    "color": "Red",
                    "length": 85,
                    "par": 3,
                    "handicap": 8,
                    "teeboxtype": "Women's"
                },
                {
                    "holeid": 75403,
                    "holenumber": 2,
                    "color": "White",
                    "length": 128,
                    "par": 3,
                    "handicap": 2,
                    "teeboxtype": "Men's"
                },
                {
                    "holeid": 75403,
                    "holenumber": 2,
                    "color": "Red",
                    "length": 128,
                    "par": 3,
                    "handicap": 2,
                    "teeboxtype": "Women's"
                },
                {
                    "holeid": 75404,
                    "holenumber": 3,
                    "color": "White",
                    "length": 64,
                    "par": 3,
                    "handicap": 7,
                    "teeboxtype": "Men's"
                },
                {
                    "holeid": 75404,
                    "holenumber": 3,
                    "color": "Red",
                    "length": 64,
                    "par": 3,
                    "handicap": 7,
                    "teeboxtype": "Women's"
                },
                {
                    "holeid": 75405,
                    "holenumber": 4,
                    "color": "White",
                    "length": 117,
                    "par": 3,
                    "handicap": 5,
                    "teeboxtype": "Men's"
                },
                {
                    "holeid": 75405,
                    "holenumber": 4,
                    "color": "Red",
                    "length": 117,
                    "par": 3,
                    "handicap": 5,
                    "teeboxtype": "Women's"
                },
                {
                    "holeid": 75406,
                    "holenumber": 5,
                    "color": "White",
                    "length": 134,
                    "par": 3,
                    "handicap": 1,
                    "teeboxtype": "Men's"
                },
                {
                    "holeid": 75406,
                    "holenumber": 5,
                    "color": "Red",
                    "length": 134,
                    "par": 3,
                    "handicap": 1,
                    "teeboxtype": "Women's"
                },
                {
                    "holeid": 75407,
                    "holenumber": 6,
                    "color": "White",
                    "length": 88,
                    "par": 3,
                    "handicap": 6,
                    "teeboxtype": "Men's"
                },
                {
                    "holeid": 75407,
                    "holenumber": 6,
                    "color": "Red",
                    "length": 88,
                    "par": 3,
                    "handicap": 6,
                    "teeboxtype": "Women's"
                },
                {
                    "holeid": 75408,
                    "holenumber": 7,
                    "color": "White",
                    "length": 102,
                    "par": 3,
                    "handicap": 4,
                    "teeboxtype": "Men's"
                },
                {
                    "holeid": 75408,
                    "holenumber": 7,
                    "color": "Red",
                    "length": 102,
                    "par": 3,
                    "handicap": 4,
                    "teeboxtype": "Women's"
                },
                {
                    "holeid": 75409,
                    "holenumber": 8,
                    "color": "White",
                    "length": 104,
                    "par": 3,
                    "handicap": 3,
                    "teeboxtype": "Men's"
                },
                {
                    "holeid": 75409,
                    "holenumber": 8,
                    "color": "Red",
                    "length": 104,
                    "par": 3,
                    "handicap": 3,
                    "teeboxtype": "Women's"
                },
                {
                    "holeid": 75410,
                    "holenumber": 9,
                    "color": "White",
                    "length": 64,
                    "par": 3,
                    "handicap": 9,
                    "teeboxtype": "Men's"
                },
                {
                    "holeid": 75410,
                    "holenumber": 9,
                    "color": "Red",
                    "length": 64,
                    "par": 3,
                    "handicap": 9,
                    "teeboxtype": "Women's"
                },
                {
                    "holeid": 75411,
                    "holenumber": 10
                },
                {
                    "holeid": 75412,
                    "holenumber": 11
                },
                {
                    "holeid": 75413,
                    "holenumber": 12
                },
                {
                    "holeid": 75414,
                    "holenumber": 13
                },
                {
                    "holeid": 75415,
                    "holenumber": 14
                },
                {
                    "holeid": 75416,
                    "holenumber": 15
                },
                {
                    "holeid": 75417,
                    "holenumber": 16
                },
                {
                    "holeid": 75418,
                    "holenumber": 17
                },
                {
                    "holeid": 75419,
                    "holenumber": 18
                }
            ],
            "coursename": "Harvard Gulch Golf Course"
        }

        res.render('app-scorecard.ejs', {
            course: course
        });
    });

    // LOGOUT ==============================
    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });

// =============================================================================
// AUTHENTICATE (FIRST LOGIN) ==================================================
// =============================================================================

    // locally --------------------------------
        // LOGIN ===============================
        // show the login form
        app.get('/login', function(req, res) {
            res.render('login.ejs', { message: req.flash('loginMessage') });
        });

        // process the login form
        app.post('/login', passport.authenticate('local-login', {
            successRedirect : '/profile', // redirect to the secure profile section
            failureRedirect : '/login', // redirect back to the signup page if there is an error
            failureFlash : true // allow flash messages
        }));

        // SIGNUP =================================
        // show the signup form
        app.get('/signup', function(req, res) {
            res.render('signup.ejs', { message: req.flash('signupMessage') });
        });

        // process the signup form
        app.post('/signup', passport.authenticate('local-signup', {
            successRedirect : '/profile', // redirect to the secure profile section
            failureRedirect : '/signup', // redirect back to the signup page if there is an error
            failureFlash : true // allow flash messages
        }));

    // facebook -------------------------------

        // send to facebook to do the authentication
        app.get('/auth/facebook', passport.authenticate('facebook', { scope : ['public_profile', 'email'] }));

        // handle the callback after facebook has authenticated the user
        app.get('/auth/facebook/callback',
            passport.authenticate('facebook', {
                successRedirect : '/profile',
                failureRedirect : '/'
            }));

    // twitter --------------------------------

        // send to twitter to do the authentication
        app.get('/auth/twitter', passport.authenticate('twitter', { scope : 'email' }));

        // handle the callback after twitter has authenticated the user
        app.get('/auth/twitter/callback',
            passport.authenticate('twitter', {
                successRedirect : '/profile',
                failureRedirect : '/'
            }));


    // google ---------------------------------

        // send to google to do the authentication
        app.get('/auth/google', passport.authenticate('google', { scope : ['profile', 'email'] }));

        // the callback after google has authenticated the user
        app.get('/auth/google/callback',
            passport.authenticate('google', {
                successRedirect : '/profile',
                failureRedirect : '/'
            }));

// =============================================================================
// AUTHORIZE (ALREADY LOGGED IN / CONNECTING OTHER SOCIAL ACCOUNT) =============
// =============================================================================

    // locally --------------------------------
        app.get('/connect/local', function(req, res) {
            res.render('connect-local.ejs', { message: req.flash('loginMessage') });
        });
        app.post('/connect/local', passport.authenticate('local-signup', {
            successRedirect : '/profile', // redirect to the secure profile section
            failureRedirect : '/connect/local', // redirect back to the signup page if there is an error
            failureFlash : true // allow flash messages
        }));

    // facebook -------------------------------

        // send to facebook to do the authentication
        app.get('/connect/facebook', passport.authorize('facebook', { scope : ['public_profile', 'email'] }));

        // handle the callback after facebook has authorized the user
        app.get('/connect/facebook/callback',
            passport.authorize('facebook', {
                successRedirect : '/profile',
                failureRedirect : '/'
            }));

    // twitter --------------------------------

        // send to twitter to do the authentication
        app.get('/connect/twitter', passport.authorize('twitter', { scope : 'email' }));

        // handle the callback after twitter has authorized the user
        app.get('/connect/twitter/callback',
            passport.authorize('twitter', {
                successRedirect : '/profile',
                failureRedirect : '/'
            }));


    // google ---------------------------------

        // send to google to do the authentication
        app.get('/connect/google', passport.authorize('google', { scope : ['profile', 'email'] }));

        // the callback after google has authorized the user
        app.get('/connect/google/callback',
            passport.authorize('google', {
                successRedirect : '/profile',
                failureRedirect : '/'
            }));

// =============================================================================
// UNLINK ACCOUNTS =============================================================
// =============================================================================
// used to unlink accounts. for social accounts, just remove the token
// for local account, remove email and password
// user account will stay active in case they want to reconnect in the future

    // local -----------------------------------
    app.get('/unlink/local', isLoggedIn, function(req, res) {
        var user            = req.user;
        user.local.email    = undefined;
        user.local.password = undefined;
        user.save(function(err) {
            res.redirect('/profile');
        });
    });

    // facebook -------------------------------
    app.get('/unlink/facebook', isLoggedIn, function(req, res) {
        var user            = req.user;
        user.facebook.token = undefined;
        user.save(function(err) {
            res.redirect('/profile');
        });
    });

    // twitter --------------------------------
    app.get('/unlink/twitter', isLoggedIn, function(req, res) {
        var user           = req.user;
        user.twitter.token = undefined;
        user.save(function(err) {
            res.redirect('/profile');
        });
    });

    // google ---------------------------------
    app.get('/unlink/google', isLoggedIn, function(req, res) {
        var user          = req.user;
        user.google.token = undefined;
        user.save(function(err) {
            res.redirect('/app-select-hole');
        });
    });


};

// route middleware to ensure user is logged in
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();

    res.redirect('/');
}
