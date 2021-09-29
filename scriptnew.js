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
var quizEl = document.querySelector('#quiz')
var questionEl = document.querySelector('#question')
var startEl = document.querySelector('#start')

var myQuestions = [
	{
		question: "What color are the clouds?",
		answers: {
			a: 'blue',
			b: 'pink',
			c: 'white',
		},
		correctAnswer: 'white'
	},
	{
		question: "What color is snow?",
		answers: {
			a: 'orange',
			b: 'white',
			c: 'brown'
		},
		correctAnswer: 'white'
	},
    {
        question: "What is the color of the moon?",
		answers: {
			a: 'white',
			b: 'black',
			c: 'purple'
		},
		correctAnswer: 'white'
	},
    {
        question: "What do cows drink?",
		answers: {
			a: 'milk',
			b: 'white',
			c: 'water'
		},
		correctAnswer: 'milk'
	}
];

function firstQuestion(){
    questionEl.textContent = myQuestions[0].question
    ans1Btn.textContent = myQuestions[0].answers.a
    ans2Btn.textContent = myQuestions[0].answers.b
    ans3Btn.textContent = myQuestions[0].answers.c
}

function secondQuestion(){
    questionEl.textContent = myQuestions[1].question
    ans1Btn.textContent = myQuestions[1].answers.a
    ans2Btn.textContent = myQuestions[1].answers.b
    ans3Btn.textContent = myQuestions[1].answers.c
}

function thirdQuestion(){
    questionEl.textContent = myQuestions[2].question
    ans1Btn.textContent = myQuestions[2].answers.a
    ans2Btn.textContent = myQuestions[2].answers.b
    ans3Btn.textContent = myQuestions[2].answers.c
}

function fourthQuestion(){
    questionEl.textContent = myQuestions[3].question
    ans1Btn.textContent = myQuestions[3].answers.a
    ans2Btn.textContent = myQuestions[3].answers.b
    ans3Btn.textContent = myQuestions[3].answers.c
}


// function nextQuestion(event){
//     if correctAnswer.textContent === myQuestions.answers.textContent
// }





startBtn.addEventListener("click", function(){

    let timerLength = 60;
    startTimer(timerLength);
    firstQuestion()
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

// startButton.addEventListener("click", function(){
    
// })

// ans1Btn.addEventListener("click", function(){
    
// })
// ans2Btn.addEventListener("click", function(){
    
// })
// ans3Btn.addEventListener("click", function(){
    
// })


// addScoreBtn.addEventListener("click", function(){
    
// })
// dontAddScoreBtn.addEventListener("click", function(){
    
// })



// playAgain.addEventListener("click", function(){
    
// })