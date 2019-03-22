$(document).ready(function(){
 
    var magic8Ball = {};
    
    magic8Ball.listOfAnswers = ["No", "Yes", "I don't think so...", "Of course!", "Indubitably", "In your dreams.", "Definitely!", "It's not likely"];

    magic8Ball.askQuestion = function(question){
        var randomNumber = Math.random();
        var randomNumberForListOfAnswers = randomNumber * this.listOfAnswers.length;
        var randomIndex = Math.floor(randomNumberForListOfAnswers);
        var answer = this.listOfAnswers[randomIndex];
        $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
 
        $("#answer").text( answer );
 
        console.log(question);
        console.log(answer);
    };
    $("#answer").hide();
 
    var onClick = function() {
        $("#answer").hide();
        $("#8ball").effect("shake");
        $("#answer").fadeIn(2500);
        var question = prompt("ASK A YES/NO QUESTION!");
        $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
        magic8Ball.askQuestion(question);
        
    };
 
    $("#questionButton").click( onClick ); 
    $("#answer").hide();
    $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");

});

// $("#image").attr("src","image2.jpg");
// $("#image").hide(); this makes the image disappear
// $("#image").fadeIn(7000); this fades the image back in over 7 miliseconds. 
// $("#image").effect("shake"); this adds the shake effect to make the magic 8 ball shake