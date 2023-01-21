// get element by id
var startButton = document.querySelector("#start-button")
var questionCard = document.querySelector("#card-question")
var nextButton = document.querySelector("#next-button")
var startCard = document.querySelector(".card-start")
var timer = document.querySelector("#timer")



// hide cards 
function hideCards() {
startCard.setAttribute("hidden", true );
}

// start button on click
startButton.addEventListener("click", startQuiz);
console.log("start");


//start quiz function
function startQuiz() {
    hideCards();
    questionCard.classList.remove("hide");
    
    countdown();
    setQuestions()
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

//question functions
var questions = [ {
      questions: "Inside which HTML element do we put the JavaScript?",
      answers: [
        {}
      ]
}
]






















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


// high score 

