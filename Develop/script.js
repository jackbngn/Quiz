// get element by doucument.querySelector
var startButton = document.querySelector("#start-button");
var questionCard = document.querySelector("#card-question");
var startCard = document.querySelector("#start-card");
var timer = document.querySelector("#timer");
var highScoreCard = document.querySelector("#high-score-card");
var scoreCard = document.querySelector("#score-card");
var textResultCorr = document.querySelector("#text-result-correct");
var textResultInc = document.querySelector("#text-result-incorrect");
var userPoints = document.querySelector("#user-scores");
var viewHigh = document.querySelector("#view-high-scores");

var userScore = 0;
var timerInterval;
var timeLeft;

// start button on click
startButton.addEventListener("click", startQuiz);

// View all high scores on click
viewHigh.addEventListener("click", hsMenu);

//start quiz function
function startQuiz() {
	hideCards();
	timeLeft = 30;
	timerInterval = setInterval(countdown, 1000);
	timeRemaining();
	currentQuestionIndex = 0;
	userScore = 0;
	shuffledQuestions();
	questionCard.classList.remove("hide");
	showQuestions();
}

// hide cards
function hideCards() {
	startCard.classList.add("hide");
	hideTextResult();
}
// open high score menu
function hsMenu() {
	hideCards();
	highScoreCard.classList.remove("hide");
}
// hide correct/incorrect text
function hideTextResult() {
	textResultCorr.classList.add("hide");
	textResultInc.classList.add("hide");
}

//un hide correct/incorrect text
function unHideCorrect() {
	textResultCorr.classList.remove("hide");
}

function unHideWrong() {
	textResultInc.classList.remove("hide");
}

//display timer
function timeRemaining() {
	timer.textContent = "Time " + timeLeft;
}

// add timer
function countdown() {
	timeLeft--;
	timeRemaining();
	if (timeLeft < 1) {
		endQuiz();
	}
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
// end quiz
function endQuiz() {
	scoreCard.classList.remove("hide");
	questionCard.classList.add("hide");
	clearInterval(timerInterval);
	timer.classList.add("hide");
	displayUserScore();
}

//question array
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

// display Questions
function showQuestions() {
	var { question, answers } = questions[currentQuestionIndex];

	// update question
	questionSlot.textContent = question;

	// update answer selections
	answer0.textContent = answers[0];
	answer1.textContent = answers[1];
	answer2.textContent = answers[2];
	answer3.textContent = answers[3];

	// onclick display if answer is correct
	for (var i = 0; i < answerSelect.length; i++) {
		answerSelect[i].setAttribute("onclick", "answerSelection(this)");
	}
}

//check if answer is correct/wrong
function answerSelection(answer) {
	var { correct } = questions[currentQuestionIndex];
	var userAnswer = answer.textContent;
	var correctAnswer = correct;
	// console.log(correct);

	// if answer is correct then display correct and add 2 to the user's score
	if (userAnswer == correctAnswer) {
		userScore = userScore + 2;
		// console.log(userScore);
		unHideCorrect();
		textResultCorr.textContent = "CORRECT!";
		setTimeout(hideTextResult, 2000);
		nextQuestions();
		// console.log("correct");

		// else if answer is wrong then display incorrect and -time
	} else {
		unHideWrong();
		textResultInc.textContent = "INCORRECT!";
		setTimeout(hideTextResult, 2000);
		timeLeft -= 4;
		// console.log("wrong");
	}
}

// show next questions
// check to see if there's anymore questions & time then show the next question else end quiz
function nextQuestions() {
	if (currentQuestionIndex < questions.length - 1 && timeLeft > 0) {
		currentQuestionIndex++;
		showQuestions(currentQuestionIndex);
	} else {
		endQuiz();
		// console.log("done");
	}
}

// display how many points the user got
function displayUserScore() {
	userPoints.textContent = "You got " + userScore + " points!";
}

var clearButton = document.querySelector("#clear-button");
var backButton = document.querySelector("#back-button");
var submitButton = document.querySelector("#button-submit");
var initials = document.querySelector(".text-input");
var scoreBoard = document.querySelector("#high-score-list");
var userNickname = [];

// submit listener
submitButton.addEventListener("click", saveScore);

// save user's input
function saveScore(event) {
	event.preventDefault();

	var userNickname = {
		initials: initials.value,
		score: userScore,
	};

	// var userNickname = initials.value.trim();

	// console.log(userNickname);

	updateHighScore(userNickname);
	highScoreCard.classList.remove("hide");
	scoreCard.classList.add("hide");
	showHighScore();
}

//localStorage the user's input
function updateHighScore(userNickname) {
	var userSubmit = grabHighScore();
	userSubmit.push(userNickname);
	localStorage.setItem("userSubmit", JSON.stringify(userSubmit));
}

//LocalStorage get item user's input
function grabHighScore() {
	var storeName = localStorage.getItem("userSubmit");
	if (storeName !== null) {
		var userSubmit = JSON.parse(storeName);
		return userSubmit;
	} else {
		userSubmit = [];
	}
	return userSubmit;
}

// show user's high score
function showHighScore() {
	var sortHighScore = sortHigh();
	scoreBoard.textContent = "";
	for (var i = 0; i < sortHighScore.length; i++) {
		var HighScoreSubmit = sortHighScore[i];
		var li = document.createElement("li");
		li.textContent = HighScoreSubmit.initials + " : " + HighScoreSubmit.score;
		scoreBoard.appendChild(li);
	}
}

//sort the high score card
function sortHigh() {
	var userSubmit = grabHighScore();
	if (!userSubmit) {
		return;
	}
	userSubmit.sort(function (a, b) {
		return b.score - a.score;
	});
	return userSubmit;
}
//add event listener for clearing the highscore
clearButton.addEventListener("click", clearHighScores);

// add event listener for back
backButton.addEventListener("click", menu);

//go back to the start card
function menu() {
	startCard.classList.remove("hide");
	highScoreCard.classList.add("hide");
	timer.classList.remove("hide");
}

// clear localstorage high score card
function clearHighScores() {
	localStorage.clear();
	showHighScore();
}
