// get element by id
var startButton = document.querySelector("#start-button")
var questionCard = document.querySelector("#card-question")
var nextButton = document.querySelector("#next-button")
var startCard = document.querySelector(".card-start")
var timer = document.querySelector("#timer")
var scoreCard = document.querySelector("#high-score-card")





// hide cards 
function hideCards() {
startCard.setAttribute("hidden", true);
}

// start button on click
startButton.addEventListener("click", startQuiz);
console.log("start");
nextButton.addEventListener("click", nextQuestions)

// nextButton.addEventListener("click", nextQuestions);
// currentQuestionIndex++;

//start quiz function
function startQuiz() {
    hideCards();
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

function nextQuestions() {
    if (currentQuestionIndex < questions.length) {
        showQuestions();
    } else {
        endQuiz();
    }


}



// question arrays

//if answered corrected, button will add the class correct to make the button green.

// if answered incorrected, button will add the class incorrect to make the button red.




// function game() {
    var currentQuestionIndex = 0;

    //question functions
    var questions = [ {
          question: "Inside which HTML element do we put the JavaScript?",
          answers: ["JavaScript", "<js>", "<script>", "<scripting></scripting>"],
          correct: 2
    }, {
        question: 'How do you write "Hello World" in an alert box?',
        answers: ['alert("Hello World")', 'msgBox("Hello World")', ' alertBox="Hello World"', 'alertBox("Hello World")'],
        correct: 0
    }, {
        question: "How do you create a function?",
        answers: ["function:myFunction()", "function=myFunction()", "function myFunction()", "myFunction():function"],
        correct: 2
    }
    ]
    
    function correctAnswerEvent(button) {
        button.classList.add("correct");
        nextButton.classList.remove('hide')
    }
    
    function incorrectAnswerEvent(button) {
        button.classList.add('incorrect');
        timeLeft -=2;
    }
    
    function showQuestions() {
        shuffledQuestions();

        while (currentQuestionIndex < questions.length && timeLeft > 0) {
            var { question, answers, correct } = questions[currentQuestionIndex];
    
          // update question
          var questionSlot = document.querySelector("#questions");
          questionSlot.innerText = question;
          
          // update answer selections
          // get all answer buttons
          var answer0 = document.querySelector("#answer0")
          answer0.innerText = answers[0]
          answer0.addEventListener("click", () => {
            if (correct === 0) {
                correctAnswerEvent(answer0)
            } else {
                incorrectAnswerEvent(answer0)
            }
          })
          
          var answer1 = document.querySelector("#answer1")
          answer1.innerText = answers[1]
          answer1.addEventListener("click", () => {
            if (correct === 1) {
                correctAnswerEvent(answer1)
            } else {
                incorrectAnswerEvent(answer1)
            }
          })
    
          var answer2 = document.querySelector("#answer2")
          answer2.innerText = answers[2]
          answer2.addEventListener("click", () => {
            if (correct === 2) {
                correctAnswerEvent(answer2)
            } else {
                incorrectAnswerEvent(answer2)
            }
          })
          var answer3 = document.querySelector("#answer3")
          answer3.innerText = answers[3]
          answer3.addEventListener("click", () => {
            if (correct === 3) {
                correctAnswerEvent(answer3)
            } else {
                incorrectAnswerEvent(answer3)
            }
          })
    
          currentQuestionIndex++;
        }
    
        // after the game
        // get initials
        // render high scores
    }


// function to shuffle the question randomly
function shuffledQuestions() {
    for (var i = questions.length - 1; i > 0; i--) {
        var currentQuestionIndex = questions[i];
        var randomIndex = Math.floor(Math.random() * 4 - 1);
        var randomQuestion = questions[randomIndex];
        questions[i] = randomQuestion; 
        questions[randomIndex] = currentQuestionIndex;
    }
}


 // after the game
    // get initials
    // render high scores



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