var quizTimer = document.getElementById("quiz-timer");
var leaderBtn = document.querySelector(".leader-btn")
var quizTitle = document.querySelector(".quiz-title");
var quizDescr = document.querySelector(".quiz-descr");
var startBtn = document.querySelector('.start-quiz');


var seconds = 30;

function startQuiz(){
    quizTitle.textContent = "Coding Quiz";
    quizDescr.textContent = "Test your coding knowledge with this timed quiz";
    startBtn.textContent = "Start Quiz";
}

function setTimer(){
    var timeInterval = setInterval(function(){
        seconds--;
        quizTimer.textContent = "Timer: " + seconds;

        if(seconds === 0){
            clearInterval(timeInterval);
            alert('Time has run out!');
        }
    }, 1000) 
}

startBtn.addEventListener('click', function(){
    // quizTitle.textContent = ("");
    // quizDescr.textContent = ("");
    // startButton.textContent = ("");
    quizTitle.remove();
    quizDescr.remove();
    startBtn.remove();
    leaderBtn.remove();
    setTimer();
})

startQuiz();