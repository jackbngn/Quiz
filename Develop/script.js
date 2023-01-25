// get element by id
var startButton = document.querySelector("#start-button");
var questionCard = document.querySelector("#card-question");
var startCard = document.querySelector(".card-start");
var timer = document.querySelector("#timer");
var highScoreCard = document.querySelector("#high-score-card");
var scoreCard = document.querySelector("#score-card");
var textResultCorr = document.querySelector("#text-result-correct");
var textResultInc = document.querySelector("#text-result-incorrect");
var userPoints = document.querySelector("#user-scores");

var userScore = 0;

// hide cards
function hideCards() {
	startCard.setAttribute("hidden", true);
	hideTextResult();
}

function hideTextResult() {
	textResultCorr.classList.add("hide");
	textResultInc.classList.add("hide");
}

function unHideCorrect() {
	textResultCorr.classList.remove("hide");
}

function unHideWrong() {
	textResultInc.classList.remove("hide");
}

// start button on click
startButton.addEventListener("click", startQuiz);

// console.log("start");
//start quiz function
function startQuiz() {
	hideCards();
	timerInterval = setInterval(countdown, 1000);
	timeRemaining();
	shuffledQuestions();
	questionCard.classList.remove("hide");
	showQuestions();
}
var timerInterval;
var timeLeft = 10;

//display timer
function timeRemaining() {
	timer.textContent = "Time " + timeLeft;
}

// add timer
function countdown() {
	timeLeft--;
	timeRemaining();
	if (timeLeft < 0) {
		endQuiz();
	}
}

function endQuiz() {
	scoreCard.classList.remove("hide");
	questionCard.setAttribute("hidden", true);
	clearInterval(timerInterval);
	timer.classList.add("hide");
	displayUserScore();
}

function displayUserScore() {
	userPoints.textContent = "You got " + userScore + " points!";
}

// function to shuffle the question randomly
function shuffledQuestions() {
	for (var i = questions.length - 1; i > 0; i--) {
		var currentQuestionIndex = questions[i];
		var randomIndex = Math.floor(Math.random() * (i - 1));
		var randomQuestion = questions[randomIndex];
		questions[i] = randomQuestion;
		questions[randomIndex] = currentQuestionIndex;
	}
}
// function showQuestions
var currentQuestionIndex = 0;
//question array
var questions = [
	{
		question: "Inside which HTML element do we put the JavaScript?",
		answers: ["JavaScript", "<js>", "<script>", "<scripting> </scripting>"],
		correct: "<scripting> </scripting>",
	},
	{
		question: 'How do you write "Hello World" in an alert box?',
		answers: [
			'alert("Hello World")',
			'msgBox("Hello World")',
			'alertBox="Hello World"',
			'alertBox("Hello World")',
		],
		correct: 'alert("Hello World")',
	},
	{
		question: "How do you create a function?",
		answers: [
			"function:myFunction()",
			"function=myFunction()",
			"function myFunction()",
			"myFunction():function",
		],
		correct: "function myFunction()",
	},
	{
		question:
			'How do you write a conditional statement for executing some statements only if "i" is equal to 5?',
		answers: [" if i==5 then", "if (i==5)", "if i=5 then", "if i=5"],
		correct: "if (i==5)",
	},
	{
		question: "How can you add a comment in a JavaScript?",
		answers: [
			"//This is a comment",
			"'This is a comment'",
			"<!--This is a comment-->",
			"#This is a comment",
		],
		correct: "//This is a comment",
	},
	{
		question:
			"A named element in a JavaScript program that is used to store and retrieve data is a _____.",
		answers: ["Method", "assignment operator", "Variable", "string"],
		correct: "Variable",
	},
];

var questionSlot = document.querySelector("#questions");
var answer0 = document.querySelector("#answer0");
var answer1 = document.querySelector("#answer1");
var answer2 = document.querySelector("#answer2");
var answer3 = document.querySelector("#answer3");
var answerSelect = document.querySelectorAll(".answer-button");

function showQuestions() {
	var { question, answers } = questions[currentQuestionIndex];

	// update question
	questionSlot.innerText = question;

	// update answer selections
	// get all answer buttons
	answer0.innerText = answers[0];
	answer1.innerText = answers[1];
	answer2.innerText = answers[2];
	answer3.innerText = answers[3];

	for (var i = 0; i < answerSelect.length; i++) {
		answerSelect[i].setAttribute("onclick", "answerSelection(this)");
	}
}

function answerSelection(answer) {
	var { correct } = questions[currentQuestionIndex];

	var userAnswer = answer.textContent;
	var correctAnswer = correct;
	console.log(correct);
	if (userAnswer == correctAnswer) {
		userScore = userScore + 2;
		console.log(userScore);
		unHideCorrect();
		textResultCorr.textContent = "CORRECT!";
		setTimeout(hideTextResult, 2000);
		nextQuestions();
		console.log("correct");
	} else {
		unHideWrong();
		textResultInc.textContent = "INCORRECT!";
		setTimeout(hideTextResult, 2000);
		timeLeft -= 4;
		console.log("wrong");
	}
}

function nextQuestions() {
	if (currentQuestionIndex < questions.length - 1 && timeLeft > 0) {
		currentQuestionIndex++;
		showQuestions(currentQuestionIndex);
	} else {
		endQuiz();
		console.log("done");
	}
}

var submitButton = document.querySelector("#button-submit");
var initials = document.querySelector(".text-input");

submitButton.addEventListener("click", saveScore);

function saveScore(event) {
	event.preventDefault();
	if (!initials.value) {
		alert("Please enter a nickname!");
		return;
	}

	var highScores = {
		score: userScore,
		initials: initials.value,
	};

	// updateHsLb(highScores);
	hideCards();
	scoreCard.classList.add("hide");
	highScoreCard.classList.remove("hide");

	addHighScore(highScores);
}

function addHighScore(highScores) {
	var userHighScore = getHighScore();
	userHighScore.push(highScores);
	localStorage.setItem("userHighScore", JSON.stringify(userHighScore));
}

function getHighScore() {
	var saveHighScore = localStorage.getItem("userHighScore");
	if (saveHighScore !== null) {
		var userHighScore = JSON.parse(saveHighScore);
		return userHighScore;
	} else {
		userHighScore = [];
	}
	return saveHighScore;
}

function nextQuestions() {
	clearAnswers(answer);
	nextButton.classList.add("hide");
	if (currentQuestionIndex < questions.length - 1 && timeLeft > 0) {
		currentQuestionIndex++;
		showQuestions(currentQuestionIndex);
	} else {
		console.log("done");
	}
}

// var body = document.body
// var resetButton= document.querySelectorAll("answer-button")

//  after the game
//     get initials
//     render high scores

// function shuffledAnswers() {
//     for (var i = 0; i < 4; i++) {
//         var CurrentAnswerIndex = questions.answers[i];
//         var randomAnswerIndex = Math.floor(Math.random() * 4 - 1);
//         var randomAnswer = questions[randomAnswerIndex];
//         answers[i] = randomAnswer;
//         answers[randomAnswerIndex] = CurrentAnswerIndex
//     }

// }
// console.log(questions['answers'])

// questions
// 1.Inside which HTML element do we put the JavaScript?
// a) <javascript>
// b) <js>
// c) <script>
// d) <scripting></scripting>

// 6. How do you write "Hello World" in an alert box?
// a) alert("Hello World")
// b) msgBox("Hello World")
// c) alertBox="Hello World"
// d) alertBox("Hello World")

// 7. How do you create a function?
// a) function:myFunction()
// b) function=myFunction()
// c) function myFunction()
// d) myFunction():function

// 9. How do you write a conditional statement for executing some statements only if "i" is equal to 5?
// a) if i==5 then
// b) if (i==5)
// c) if i=5 then
// d) if i=5

// 13. How can you add a comment in a JavaScript?
// a) //This is a comment
// b) 'This is a comment
// c) <!--This is a comment-->
// d) #This is a comment

// 39. A named element in a JavaScript program that is used to store and retrieve data is a _____.
// a) Method
// b) assignment operator
// c) Variable
// d) string

//
