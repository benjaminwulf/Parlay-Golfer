var MongoClient = require('mongodb').MongoClient;

var uri = "mongodb+srv://mongodb+srv://parlay-golfer:Peruluv2@cluster0-crslf.mongodb.net/test?retryWrites=true";
MongoClient.connect(uri, function(err, client) {
   const collection = client.db("test").collection("devices");
   // perform actions on the collection object
   client.close();
});


var PracticeSchema = new mongoose.Schema({ 
  Name: String, 
  Role: String, 
  Org: String
});

//==================================================
// Logic for scorecard
//
// Function that resets the game.
function resetGame() {
  // Generate a random target number and render it to the page.
  // numberToDisplay = 0;
  randomNumber = 0;
  strokes = 0;
  sumPoints = 0;
  winCounter = 0;
  lossCounter = 0;
  counter = 0;
};

$("#resetGame").on("click", function() {
  resetGame();
  $("#number-to-display").text(randomNumber);
  $("#strokes").text(strokes);
  $("#sum-points").text(sumPoints);
  $(".hole").text("X"); 
  $("#display-message").text("Mulligan");
});

//=================================================================================


$("#ball-green").on("click", function() {
  sumPoints += greenPoints;
  counter++;
  gameChecker();
  $("#strokes").text(greenPoints);
  $("#sum-points").text(sumPoints);
});

//=================================================================================

$("#save-score").on("click", function () { // needs to refer to score.js
// $(".ball-image").on("click", function () {

switch (counter) {
  case 0:
  counter = 0;
  break;
  case 1:
  counter = 1;
  $("#hole-01").text(sumPoints);
  break;
  case 2:
  counter = 2;
  $("#hole-02").text(sumPoints);
  break;
  case 3:
  counter = 3;
  $("#hole-03").text(sumPoints);
  break;
  case 4:
  counter = 4;
  $("#hole-04").text(sumPoints);
  break;
  case 5:
  counter = 5;
  $("#hole-05").text(sumPoints);
  break;
  case 6:
  counter = 6;
  $("#hole-06").text(sumPoints);
  break;
  case 7:
  counter = 7;
  $("#hole-07").text(sumPoints);
  break;
  case 8:
  counter = 8;
  $("#hole-08").text(sumPoints);
  break;
  case 9:
  counter = 9;
  $("#hole-09").text(sumPoints);
  break;
  
  case 10:
  counter > 10;
  $("#display-message").text("Head to the 19th hole...")
  break;
  }
});

//==================================================

function gameChecker() {
 if (sumPoints == 27) {
  $("#display-message").text("Par Round. Nice!");
} else if (sumPoints > 27) {
  overPar = sumPoints % 27;
  $("#display-message").text(overPar + " Over Par!");
}  else if (counter >= 9) {
  $("#display-message").text("Round Complete!");
} else {
  console.log($("#display-message").text("Next Hole..."));
  }
};

//========================================================

module.exports = mongoose.model('practice', PracticeSchema, 'practice');
