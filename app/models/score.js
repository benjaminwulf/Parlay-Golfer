// // Database configuration
// var databaseUrl = "parlay_golfer_db";
// var collections = ["parlay_golfer_collection"];

// // Hook mongojs config to db variable
// var db = mongojs(databaseUrl, collections);

// // Log any mongojs errors to console
// db.on("error", function(error) {
//   console.log("Database Error:", error);
// });

// // When the #make-new button is clicked
// $(document).on("click", "#save-score", function() {
//   // AJAX POST call to the submit route on the server
//   // This will take the data from the form and send it to the server
//   $.ajax({
//     type: "POST",
//     dataType: "json",
//     url: "/submit",
//     data: {
//       score: $("#save-score").val(),
//       created: Date.now()
//     }
//   })
//   // BWW ??
//   // If that API call succeeds, add the title and a delete button for the note to the page
//     .then(function(data) {
//     // Add the title and delete button to the #results section
//       $("#results").prepend("<p class='data-entry' data-id=" + data._id + "><span class='dataTitle' data-id=" +
//       data._id + ">" + data.title + "</span><span class=delete>X</span></p>");
//       // Clear the note and title inputs on the page
//       $("#display-score").val("");
//     });
// });