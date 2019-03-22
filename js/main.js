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
 
    var onClick = function() {
        var question = prompt("ASK A YES/NO QUESTION!");
        magic8Ball.askQuestion(question);
    };
 
    $("#questionButton").click( onClick );
 
});
// SOLUTION
// OBJECT magic 8-ball
// PROPERTY list of answers = [it is certain, as I see it yes, most likley, outlook good, outlook hazy, ask again later, better not tell you now, dont count on it, my reply is no, my sources say no, very doubtful]

// FUNCTION ask the magic 8-ball a question about a future event
// INPUT question
// shake the 8-ball
// 8-ball picks random answer from list of answers
// OUTPUT answer
// STOP

// RUN FUNCTION ask question WITH INPUT "Will I ever learn JavaScript?"
