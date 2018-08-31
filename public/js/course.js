var inquire = require('inquire');

// Here we will prompt the user for course by selecting from drop down or entering ID
// var courseID = 6127
inquirer
  .prompt([
    // Here we create a basic text prompt.
    {
      type: "input",
      message: "What is your name?",
      name: "username"
    },
    {
      type: "confirm",
      message: "Are you sure:",
      name: "confirm",
      default: true
    },
  ])
  .then(function(inquirerResponse) {
    // If the inquirerResponse confirms, we displays the inquirerResponse's username and pokemon from the answers.
    if (inquirerResponse.confirm) {
      console.log("\nWelcome " + inquirerResponse.username);
      console.log("Your " + inquirerResponse.pokemon + " is ready for battle!\n");
    }
    else {
      console.log("\nThat's okay " + inquirerResponse.username + ", come again when you are more sure.\n");
    }
  });
  

// Here we will pull course information from Golfbert API
// and add json information to mysql db
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://api.golfbert.com/v1/courses/6127/scorecard",
  "method": "GET",
  "headers": {
    "access_key": "AKIAJUL7OJW5U2IQNSCQ",
    "secret_key": "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",
    "x-api-key": "VkLDNOsBrO4R4tckXl80t6tDptVONTxI12UKBFyr",
    "Content-Type": "application/x-www-form-urlencoded",
    "Host": "api.golfbert.com",
    "X-Amz-Date": "20180831T044229Z",
    "Authorization": "AWS4-HMAC-SHA256 Credential=AKIAJUL7OJW5U2IQNSCQ/20180831/us-east-1/execute-api/aws4_request, SignedHeaders=access_key;cache-control;content-type;host;postman-token;secret_key;x-amz-date;x-api-key, Signature=d8917c36cd855106568289aeb18f92a78fbf2f73705bf8f1597ba57a781a19bf",
    "Cache-Control": "no-cache",
    "Postman-Token": "30c47ec7-686c-455b-a0b6-faf109256f32"
  }
}

$.ajax(settings).done(function (response) {
  console.log(response);
});