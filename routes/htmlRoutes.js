var db = require("../models");
// BWW START
var fs = require('fs');
// BWW END

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });
  
  // BWW START
  // Load example page and pass in an example by id
  var myCourse = {
    id: 6127,
    text: 'Harvard Gulch Golf Course',
    description: 'This is a par 3 golf course in Denver, Colorado!',
    courses: [
      {
        id: 6127,
        text: 'Harvard Gulch Golf Course',
        description: '660 E Iliff Ave, Denver, CO 80210 (303) 698 4078'
      },
      {
        id: 6213,
        text: 'Deer Creek Golf Club at Meadow Ranch',
        description: '8135 Shaffer Pkwy, Littleton, CO 80127 (303) 978 1800'
      }
    ]
  }
  app.get("/course/:id", function(req, res) {
    res.render('course', {
      course: myCourse
    });
    // db.Example.findOne({ where: { id: req.params.id } }).then(function(dbCourse) {
    //   res.render("course", {
    //     example: dbCourse
    //   });
    // });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};

//===========================
// This is how to use one templating language or another
// forces usage of the respective render engine by setting the file extension explicitly.
// res.render( 'about.ejs', { title: 'About' } );
// res.render( 'about.handlebars', { title: 'About' } );