// get element by id
var startButton = document.querySelector("#start-button")
var questionCard = document.querySelector("#card-question")
var nextButton = document.querySelector("#next-button")
var startCard = document.querySelector(".card-start")
var timer = document.querySelector("#timer")
var scoreCard = document.querySelector("#high-score-card")

var answerChoices = document.querySelector("#answers-choices")


// hide cards 
function hideCards() {
startCard.setAttribute("hidden", true);
}

// start button on click
startButton.addEventListener("click", startQuiz);
// console.log("start");
//start quiz function
function startQuiz() {
    hideCards();
    shuffledQuestions();
    questionCard.classList.remove("hide");
    countdown();
    showQuestions();
}

// add timer
var timeLeft = 60;

function countdown() {
    var timeInterval = setInterval(function(){
    if (timeLeft > 0) {
        timer.textContent = "Time " + timeLeft;
        timeLeft--;
    } else {
        timer.textContent = "";
        clearInterval(timeInterval);
        endQuiz();
    }

}, 1000);
}

function endQuiz (){
    scoreCard.classList.remove("hide")
    questionCard.setAttribute("hidden", true);
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
    var questions = [ {
          question: "Inside which HTML element do we put the JavaScript?",
          answers: ["JavaScript", "<js>", "<script>", "<scripting> </scripting>"],
          correct: "<scripting> </scripting>"
    }, {
        question: 'How do you write "Hello World" in an alert box?',
        answers: ['alert("Hello World")', 'msgBox("Hello World")', 'alertBox="Hello World"', 'alertBox("Hello World")'],
        correct: 'alert("Hello World")'
    }, {
        question: "How do you create a function?",
        answers: ["function:myFunction()", "function=myFunction()", "function myFunction()", "myFunction():function"],
        correct: "function myFunction()"
    }, {
        question: 'How do you write a conditional statement for executing some statements only if "i" is equal to 5?',
        answers: [" if i==5 then", "if (i==5)", "if i=5 then", "if i=5", ],
        correct: "if (i==5)"
    }, {
        question: "How can you add a comment in a JavaScript?",
        answers: ["//This is a comment", "'This is a comment'", "<!--This is a comment-->", "#This is a comment"],
        correct: "//This is a comment"
    }, {
        question: "A named element in a JavaScript program that is used to store and retrieve data is a _____.",
        answers: ["Method", "assignment operator", "Variable", "string"],
        correct: "Variable"
    }
    ]

    var questionSlot = document.querySelector("#questions")
    var answer0 = document.querySelector("#answer0")
    var answer1 = document.querySelector("#answer1")
    var answer2 = document.querySelector("#answer2")
    var answer3 = document.querySelector("#answer3")
    var answerButton = document.querySelectorAll(".answer-button")



function showQuestions() {
     var { question, answers, correct } = questions[currentQuestionIndex];
        // update question
        questionSlot.innerText = question;
          
        // update answer selections
        // get all answer buttons
        answer0.innerText = answers[0];
        answer1.innerText = answers[1];
        answer2.innerText = answers[2];
        answer3.innerText = answers[3];

// var answerSelect = document.querySelectorAll(".answer-button")
      
//     for (var i = 0; i < answerSelect.length; i++) {
//         answerSelect[i].setAttribute("onclick", "answerSelection(this)");
//         }
    }  

function answerSelection(answer) {
    var userAnswer = answer.textContent
    var correctAnswer = correct;
    console.log(correct);
    if (userAnswer == correctAnswer){
        answer.classList.add("correct")
        nextButton.classList.remove("hide")
        console.log("correct");
    } else {
        answer.classList.add("incorrect")
        timeLeft -=4;
        console.log("wrong");
    }
    
}

nextButton.addEventListener("click", nextQuestions);

function nextQuestions() {
    if (currentQuestionIndex < questions.length - 1 && timeLeft > 0) {
        currentQuestionIndex++;
        clearAnswers()
        showQuestions(currentQuestionIndex);
        } else {
            console.log("done");
        }
    }
var answerButtonCorrect = document.querySelector("answer-button correct")
var answerButtonincorrect = document.querySelector("answer-button incorrect")

function clearAnswers() {
    answerButtonCorrect.classList.remove("correct")
    answerButtonincorrect.classList.remove("incorrect")
}
    

    
 



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