$(document).ready(function(){
	var magic8Ball = {};
	magic8Ball.listOfAnswers = ["only time will tell", "too soon to know", "maybe", "don't count on it", "doubtful", "future doesn't look good"];
	$("#answer").hide();
	magic8Ball.askQuestion = function () {
        $("#answer").fadeIn(4000);
        var randomNumber = Math.random();
        var randomNumberArray = randomNumber * magic8Ball.listOfAnswers.length; 
        var randomIndex = Math.floor(randomNumberArray); 
        var randomAnswer = 	this.listOfAnswers[randomIndex];
        $("#answer").text(randomAnswer);
        $("#8ball").attr("src","https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
    };
  
	var onClick = function (){
		$("#answer").hide();
        $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png");
		setTimeout(
			function() {
    			var question = prompt("ASK A YES/NO QUESTION!");
                magic8Ball.askQuestion();
                $("#8ball").effect("shake");
			}, 500);
    	
    	
  };
  
  $("#questionButton").click(onClick);

  
	
	
});



