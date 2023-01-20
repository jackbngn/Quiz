// get element by id
var startButton = document.querySelector("#start-button")
var questionCard = document.querySelector("#question-card")

var startCard = document.querySelector(".card-start")
var timer = document.getElementById("#timer")



// hide cards 
function hideCards() {
startCard.setAttribute("hidden", true );
questionCard.setAttribute("hidden", true);
}

// start button on click
startButton.addEventListener("click", startQuiz);
console.log(startButton);
//start quiz function
function startQuiz() {
    hideCards();
    questionCard.removeAttribute("hidden");
    

    time =question.length * 10;

    intervalID = setInterval(countdown, 1000);

    countdown();
}


time--;
    displayTime();
    if (time < 1) {
        endQuiz();
    }



// add timer
var timeLeft = 30;

function countdown() {
    var timeInterval = setInterval(function(){
    if (timeLeft > 0) {
        timer.textContent = timeLeft;
        timeLeft--;
    } else {
        timer.textContent = "";
        clearInterval(timeInterval);
    }

}, 1000);
}



// questions 

// high score 

