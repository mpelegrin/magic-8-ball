$(document).ready(function(){
var magic8Ball = {};
magic8Ball.listOfAnswers = ["Without a doubt", "Yes – definitely", "Signs point to yes", "Fo Sho!", "Don't count on it", "My sources say no", "Very doubtful", "Not likely", "No way, Jose"];

magic8Ball.announceAnswer = function (askquestion){
$("#answer").hide();
var randomNumber = Math.random();
var randomNumberlistOfAnswers = randomNumber * this.listOfAnswers.length;
var randomIndex = Math.floor(randomNumberlistOfAnswers);
var randomAnswer = this.listOfAnswers[randomIndex];
  $("#answer").text(randomAnswer);
	console.log(askquestion);
	console.log(randomAnswer);
  var onClick = function () {
    $("#8ball").effect("shake");
    $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballAnswer.png");
    $("#answer").hide();
    setTimeout(
    function() {
    var askquestion = prompt ("ASK A YES/NO QUESTION!");
	magic8Ball.askquestion(question);
    }, 200);
    $("#answer").fadeIn(4000);
  };

$("#questionButton").click( onClick );
console.log(askquestion);
console.log(randomAnswer);
};
magic8Ball.announceAnswer();
console.log(askquestion);
console.log(randomAnswer);
});
