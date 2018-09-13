// var answerCorrect = false;
var count = 0;
var correctCount = 0;
var wrongCount = 0;
var userClick = "";
var clicked = false;
var userClick1 = false;
var userClick2 = false;
var userClick3 = false;
var userClick4 = false;
var userClick5 = false;
var userClick6 = false;
var userClick7 = false;
var userClick8 = false;
var userClick9 = false;
run();

$("#game-reset").on('click', gameReset());

// INITIATE GAME RESET
function gameReset() {
console.log("game reset runs")
count = 0;
correctCount = 0;
wrongCount = 0;
userClick = "";
clicked = false;
userClick1 = false;
userClick2 = false;
userClick3 = false;
userClick4 = false;
userClick5 = false;
userClick6 = false;
userClick7 = false;
userClick8 = false;
userClick9 = false;
questionID;
questionDeclared;
questionChoice;

run();
};

// THIS FUNCTION CHANGES THE QUESTION AND ANSWER KEY IMMEDIATELY FOLLOWING LAST QUESTION SELECTION
$("#next-play").on('click', function() {
    if (count === 6) {
        $("#question-box").html('<h1>' + 'Score: ' + correctCount 
        + ' out of ' + count +'<h1>')
        
    } else {
    userClick = "";
    clicked = false;
    userClick1 = false;
    userClick2 = false;
    userClick3 = false;
    userClick4 = false;
    userClick5 = false;
    userClick6 = false;
    userClick7 = false;
    userClick8 = false;
    userClick9 = false;
    questionID;
    questionDeclared;
    questionChoice;
    // j = Math.floor(Math.random() * carQuestions.length);

    // $("#random-img").html('<img src="' + carImgArr[Math.floor(Math.random() * (carImgArr.length))] + '"width="360px" ">');


    // $(".question-number").html("<h4>" + questionID[j] + "</h4>");
    $(".question-asked").html("<h4>" + questionDeclared[j] + "<h4>");
    $(".text-a").html("<h4>" + questionChoice[j].a + "</h4>");
    $(".text-b").html("<h4>" + questionChoice[j].b + "</h4>");
    $(".text-c").html("<h4>" + questionChoice[j].c + "</h4>");
    $(".text-d").html("<h4>" + questionChoice[j].d + "</h4>");
    }
});

// TIMER
    var number = 60;

    var intervalId;

    //  The run function sets an interval
    //  that runs the decrement function once a second.
    function run() {
      clearInterval(intervalId);
      intervalId = setInterval(decrement, 1000);
    }

    //  The decrement function.
    function decrement() {

      //  Decrease number by one.
      number--;

      //  Show the number in the #show-number tag.
      $("#timer").html("<h2>" + number + "</h2>");


      //  Once number hits zero...
      if (number === 0) {
        stop();
        
        function stop() {

            //  Clears our intervalId
            clearInterval(intervalId);
          }
        //  Alert the user that time is up.
        $("#timer").html('<h1>' + "Time Up!" + '</h1>' +
        '<h1>' + 'Score: ' + correctCount 
        + ' out of ' + count +'<h1>')
     
    }
    }


// VARIABLES WITH QUESTIONS AND BOOLEAN TO MAKE TRUE/FALSE
var carQuestions = [ {
         id: 1,
         question: "Choose hole fly by:",
         choices: {
            hole01: "Hole 1",
            hole02: "Hole 2",
            hole03: "Hole 3",
            hole04: "Hole 4",
            hole05: "Hole 5",
            hole06: "Hole 6",
            hole07: "Hole 7",
            hole08: "Hole 8",
            hole09: "Hole 9"
        }
    }];
    // {
    //     id: 2,
    //     question: "What appendage to the engine charges the battery?",
    //     choices: {
    //         a: "Starter Motor",
    //         b: "Alternator",
    //         c: "Power steering pump",
    //         d: "Airconditioning compressor"
    //     }
    // },
    // {
    //     id: 3,
    //     question: "What car is NOT manufactured by Ford Motor Company",
    //     choices: {
    //         a: "Mustang",
    //         b: "Bronco",
    //         c: "Edsel",
    //         d: "Grand Prix"
    //     }
    // },
    // {
    //      id: 4,
    //      question: "Name the component of an engine that opens and closes the valves on the overhead valve engine?",
    //      choices: {
    //         a: "Exhause",
    //         b: "Crankshaft",
    //         c: "Camshaft",
    //         d: "Piston"
    //     }
    // },
    // {
    //     id: 5,
    //     question: "What engine component allow leftover gasses escape the engine?",
    //     choices: {
    //         a: "Rotory Splint",
    //         b: "Exhaust",
    //         c: "Power steering pump",
    //         d: "Airconditioning compressor"
    //     }
    // },
    // {
    //     id: 6,
    //     question: "Acronym given to engines that have dual camshafts located at top of engine",
    //     choices: {
    //         a: "SOCH",
    //         b: "SOHC",
    //         c: "DOHC",
    //         d: "DODS"
    //     }
    // },
    // {
    //      id: 7,
    //      question: "Component that allows signals to travel from different sensors thoughout the engine to the computer",
    //      choices: {
    //         a: "Relays",
    //         b: "Flux Capacity",
    //         c: "Fuse box",
    //         d: "Wiring harness"
    //     }
    // },
    // {
    //     id: 8,
    //     question: "This automotive leader was not involved in designing Chevrolet Vega but gained credit largely due to recently becoming General Manager of Chevrolet devision at GM?",
    //     choices: {
    //         a: "John DeLorean",
    //         b: "Lee Iacocca",
    //         c: "Henry Ford II",
    //         d: "Batman"
    //     }
    // },
    // {
    //     id: 9,
    //     question: "what engine is not a Ford block?",
    //     choices: {
    //         a: "429 Shotgun",
    //         b: "350",
    //         c: "460 Big Block",
    //         d: "2.3"
    //     }
    // },
    // {
    //     id: 10,
    //     question: "What engine block is a Chevrolet engine?",
    //     choices: {
    //         a: "Hemi",
    //         b: "V Wedge",
    //         c: "454 Big Block",
    //         d: "6.2 SRT"
    //     }
    // } ]
  
// GET ON CLICK EVENT AND MAP TO VARIALBLE
// HERE WE ARE CREATING VARIABLE WITH THE CONTENT OF THE carQuestions obj

var questionID = carQuestions.map(function(questionNum) {return questionNum.id;});
var questionDeclared = carQuestions.map(function(multChoice) {return multChoice.question;});
var questionChoice = carQuestions.map(function(multChoice) {return multChoice.choices;});
var j = [ 
youtubeHole01 = "Gu7zlL42_3U",
youtubeHole02 = "ZQOVvv5c-e8",
youtubeHole03 = "DAkKaogbK0M",
youtubeHole04 = "_c4XPqiKJWg",
youtubeHole05 = "rmogCu_UWtU",
youtubeHole06 = "zjSF7bSfNFg",
youtubeHole07 = "PJYHBgB1IHs",
youtubeHole08 = "uKNNdtqq1CE",
youtubeHole09 = "yxdz20RfMvc",
];


    // $(".question-number").html("<h4>" + questionID[j] + "</h4>");
    $(".question-asked").html("<h4>" + questionDeclared[j] + "<h4>");
    $(".text-1").html("<h4>" + questionChoice[j].youtubeHole01 + "</h4>");
    $(".text-2").html("<h4>" + questionChoice[j].youtubeHole02 + "</h4>");
    $(".text-3").html("<h4>" + questionChoice[j].youtubeHole03 + "</h4>");
    $(".text-4").html("<h4>" + questionChoice[j].youtubeHole04 + "</h4>");
    $(".text-5").html("<h4>" + questionChoice[j].youtubeHole05 + "</h4>");
    $(".text-6").html("<h4>" + questionChoice[j].youtubeHole06 + "</h4>");
    $(".text-7").html("<h4>" + questionChoice[j].youtubeHole07 + "</h4>");
    $(".text-8").html("<h4>" + questionChoice[j].youtubeHole08 + "</h4>");
    $(".text-9").html("<h4>" + questionChoice[j].youtubeHole09 + "</h4>");

// START youtube iframe code
    $("#player").attr('player');
// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '319',
        width: '420',
        videoId: 'j.youtubeHold01',
        events: {
            'onReady': onPlayerReady
        }
    });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
    player.setPlaybackRate(2);
    event.target.playVideo(1);
}