var startBtn = document.querySelector('#start-button')
var ans1Btn = document.querySelector('#answer1')
var ans2Btn = document.querySelector('#answer2')
var ans3Btn = document.querySelector('#answer3')
var addScoreBtn = document.querySelector('#add-score-yes')
var dontAddScoreBtn = document.querySelector('#add-score-no')
var playAgain = document.querySelector('#play-again')
var timerEl = document.querySelector('#timer')
var scoreListEl = document.querySelector('#scoreboard')
var userInfo = document.querySelector('#score-name')
var answersEl = document.querySelector('#answers')
var startEl = document.querySelector('#start')





var myQuestions = [
	{
		question: "What color are the clouds?",
		answers: {
			a: 'blue',
			b: 'pink',
			c: 'white',
		},
		correctAnswer: 'c'
	},
	{
		question: "What color is snow?",
		answers: {
			a: 'orange',
			b: 'white',
			c: 'brown'
		},
		correctAnswer: 'b'
	},
    {
        question: "What is the color of the moon?",
		answers: {
			a: 'white',
			b: 'black',
			c: 'purple'
		},
		correctAnswer: 'a'
	},
    {
        question: "What do cows drink?",
		answers: {
			a: 'milk',
			b: 'white',
			c: 'water'
		},
		correctAnswer: 'a'
	}
];

function showQuestions(questions, quizContainer){
    var output = [];
    var answers;

    for(var i=0; i<questions.length; i++){
        answers = [];

        for(letter in questions[i].answers){
            answers.push(
                '<label>'
                + '<input type="radio" name="question'+i+'"value='+letter+'">'
                + letter + ': '
                + questions[i].answers[letter]
                + '<label>'
            );
        }
    }
    output.push(
        '<div class="question">' + question[i].question + '</div>'
        + '<div class="answers>' + answers.join(' ') + '</div>'
    );
    quizContainer.innerHTML = output.join(' ');
}

function showResults(questions, quizContainer, resultsContainer){
    var answerContainers = quizContainer.querySelector('.answers');
    var userAnswer = '';
    var numCorrect = 0;

    for(var i=0; i<questions.length; i++){
        userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
    
        if(userAnswer===questions[i].correctAnswer){
            numCorrect++;
        }
    }
    resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
}

playAgain.onclick = function(){
}





startBtn.addEventListener("click", function(){

    let timerLength = 60;
    startTimer(timerLength);
});

function startTimer(quizTime){
    secondsLeft = quizTime;
    timer = setInterval(function(){
        secondsLeft--;
        console.log(secondsLeft);
        timerEl.textContent = secondsLeft + " seconds left in the quiz!";

        if (secondsLeft <= 0){
            clearInterval(timer);
        }
    }, 1000);
}

startButton.addEventListener("click", function(){
    
})

ans1Btn.addEventListener("click", function(){
    
})
ans2Btn.addEventListener("click", function(){
    
})
ans3Btn.addEventListener("click", function(){
    
})




addScoreBtn.addEventListener("click", function(){
    
})
dontAddScoreBtn.addEventListener("click", function(){
    
})



playAgain.addEventListener("click", function(){
    
})