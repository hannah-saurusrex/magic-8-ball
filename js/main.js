$(document).ready(function(){
 
    var magic8Ball = {};
    
    magic8Ball.listOfAnswers = ["No", "Yes", "I don't think so...", "Of course!", "Indubitably", "In your dreams."];

    magic8Ball.askQuestion = function(question){
        var randomNumber = Math.random();
        var randomNumberForListOfAnswers = randomNumber * this.listOfAnswers.length;
        var randomIndex = Math.floor(randomNumberForListOfAnswers);
        var answer = this.listOfAnswers[randomIndex];
 
        $("#answer").text( answer );
 
        console.log(question);
        console.log(answer);
    };
    $("#answer").hide();
 
    var onClick = function() {
        $("#answer").hide();
        $("#answer").fadeIn(4000);
        var question = prompt("ASK A YES/NO QUESTION!");
        magic8Ball.askQuestion(question);
    };
 
    $("#questionButton").click( onClick ); 
});

// $("#image").attr("src","image2.jpg");
// $("#image").hide(); this makes the image disappear
// $("#image").fadeIn(7000); this fades the image back in over 7 miliseconds. 
// $("#image").effect("shake"); this adds the shake effect to make the magic 8 ball shake