// require("dotenv").config();
var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var mongoose = require('mongoose'); 
var passport = require('passport');
var flash    = require('connect-flash');
// var path = require('path');
// var fs = require('fs');
// var https = require('https');

// BWW Cert
// var certOptions = {
//   key: fs.readFileSync(__dirname + '/server.key'),
//   cert: fs.readFileSync(__dirname + '/server.crt')
// }
// var certOptions = {
//   key: fs.readFileSync('./rootCA.pem', 'utf8'),
//   cert: fs.readFileSync('./rootCA.key', 'utf8')
// };

var fs = require('fs'); //bww am I needing this
var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');
// console.log("PROCESS ENV.....", process.env.NODE_ENV);
var configDB = require('./app/config/database.js');

var db = require("./app/models/teams"); // bww not setup yet

var app = express();

var PORT = process.env.PORT || 8080;

var configAuth = require('./app/config/auth'); // use this one for testing
console.log('configAuth: ', configAuth);


// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));

// Get help here to use ejs and handbars with consolidate.js
var engines = require('consolidate');

app.engine('ejs', engines.ejs);

app.engine('handlebars', engines.handlebars);

// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "ejs");
app.set("view engine", "handlebars");


var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// configuration ===============================================================
mongoose.connect(configDB.url); // connect to our database

require('./app/config/passport')(passport); // pass passport for configuration

// set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.json()); // get information from html forms
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs'); // set up ejs for templating

// required for passport
app.use(session({
    secret: 'ilovescotchscotchyscotchscotch', // session secret
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

// routes ======================================================================
require('./app/routes/routes.js')(app, passport); // load our routes and pass in our app and fully configured passport

// BWW Cert
// var server = https.createServer(certOptions, app).listen(443)

// Starting the server, syncing our models ------------------------------------/
//db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });

module.exports = app;
