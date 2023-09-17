var quizTimer = document.getElementById("quiz-timer");
var leaderBtn = document.querySelector(".leader-btn")
var quizTitle = document.querySelector(".quiz-title");
var quizDescr = document.querySelector(".quiz-descr");
var startBtn = document.querySelector('.start-quiz');
var questionTitle = document.getElementById("question-title");
var questionSection =document.querySelector('.question-section');
var btnElOne = document.createElement("button");
var btnElTwo = document.createElement("button");
var btnElThree = document.createElement("button");
var btnElFour = document.createElement("button");
var answerClass = document.querySelector('.answer');
// var answerOne = document.getElementById("answer-one");
// var answerTwo = document.getElementById("answer-two");
// var answerThree = document.getElementById("answer-three");
// var answerFour = document.getElementById("answer-four");

var seconds = 30;

var questionOne = {
    title: "Commonly used data types DO NOT include:",
    answers: ['Strings', 'Booleans', 'Alerts', 'Numbers'],
    correctAnswer : 'Alerts'
};
var questionTwo = {
    title: "The condition in an if/else statement is enclosed with __________",
    answers: ['Quotes', 'Curly Brackets', 'Parenthesis', 'Square Brackets'],
    correctAnswer : 'Curly Brackets'
};
var questionThree = {
    title: "Arryays in JavaScript can be used to store __________",
    answers: ['Numbers and Strings', 'Other Arrys', 'Booleans', 'All of the above'],
    correctAnswer : 'All of the above'
};

function subtractTime(){
    seconds--;
}
function startQuiz(){
    quizTitle.textContent = "Coding Quiz";
    quizDescr.textContent = "Test your coding knowledge with this timed quiz";
    startBtn.textContent = "Start Quiz";
    // answerOne.remove();
    // answerTwo.remove();
    // answerThree.remove();
    // answerFour.remove();
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
    askQuestionOne();
})

function askQuestionOne(){
    questionTitle.textContent = questionOne.title;

    btnElOne.classList.add('answer');
    btnElOne.textContent = questionOne.answers[0];
    questionSection.appendChild(btnElOne);

    btnElTwo.classList.add('answer');
    btnElTwo.textContent = questionOne.answers[1];
    questionSection.appendChild(btnElTwo);

    btnElThree.classList.add('answer');
    btnElThree.textContent = questionOne.answers[2];
    questionSection.appendChild(btnElThree);

    btnElFour.classList.add('answer');
    btnElFour.textContent = questionOne.answers[3];
    questionSection.appendChild(btnElFour);

    btnElOne.addEventListener('click', function(){
        if(btnElOne.textContent == questionOne.correctAnswer){
            console.log("Correct");
            askQuestionTwo();
        }
        else if(btnElOne.textContent !== questionOne.correctAnswer){
            console.log("Incorrect");
            subtractTime();
            askQuestionTwo();
        };
    });

    btnElTwo.addEventListener('click', function(){
        if(btnElTwo.textContent == questionOne.correctAnswer){
            console.log("Correct");
            askQuestionTwo();
        }
        else if(btnElTwo.textContent !== questionOne.correctAnswer){
            console.log("Incorrect");
            subtractTime();
            askQuestionTwo();
        };
    });

    btnElThree.addEventListener('click', function(){
        if(btnElThree.textContent == questionOne.correctAnswer){
            console.log("Correct");
            askQuestionTwo();
        }
        else if(btnElThree.textContent !== questionOne.correctAnswer){
            console.log("Incorrect");
            subtractTime();
            askQuestionTwo();
        };
    });

    btnElFour.addEventListener('click', function(){
        if(btnElFour.textContent == questionOne.correctAnswer){
            console.log("Correct");
            askQuestionTwo()
        }
        else if(btnElFour.textContent !== questionOne.correctAnswer){
            console.log("Incorrect");
            subtractTime();
            askQuestionTwo();

        };
    });
}

function askQuestionTwo(){
    questionTitle.textContent = questionTwo.title;

    btnElOne.classList.add('answer');
    btnElOne.textContent = questionTwo.answers[0];
    questionSection.appendChild(btnElOne);

    btnElTwo.classList.add('answer');
    btnElTwo.textContent = questionTwo.answers[1];
    questionSection.appendChild(btnElTwo);

    btnElThree.classList.add('answer');
    btnElThree.textContent = questionTwo.answers[2];
    questionSection.appendChild(btnElThree);

    btnElFour.classList.add('answer');
    btnElFour.textContent = questionTwo.answers[3];
    questionSection.appendChild(btnElFour);

    btnElOne.addEventListener('click', function(){
        if(btnElOne.textContent == questionTwo.correctAnswer){
            console.log("Correct");
            askQuestionThree();
        }
        else if(btnElOne.textContent !== questionTwo.correctAnswer){
            console.log("Incorrect");
            subtractTime();
            askQuestionThree();
        };
    });

    btnElTwo.addEventListener('click', function(){
        if(btnElTwo.textContent == questionTwo.correctAnswer){
            console.log("Correct");
            askQuestionThree();
        }
        else if(btnElTwo.textContent !== questionTwo.correctAnswer){
            console.log("Incorrect");
            subtractTime();
            askQuestionThree();
        };
    });

    btnElThree.addEventListener('click', function(){
        if(btnElThree.textContent == questionTwo.correctAnswer){
            console.log("Correct");
            askQuestionThree();
        }
        else if(btnElThree.textContent !== questionTwo.correctAnswer){
            console.log("Incorrect");
            subtractTime();
            askQuestionThree();
        };
    });

    btnElFour.addEventListener('click', function(){
        if(btnElFour.textContent == questionTwo.correctAnswer){
            console.log("Correct");
            askQuestionThree();
        }
        else if(btnElFour.textContent !== questionTwo.correctAnswer){
            console.log("Incorrect");
            subtractTime();
            askQuestionThree();
        };
    });
}

function askQuestionThree(){
    questionTitle.textContent = questionThree.title;

    btnElOne.classList.add('answer');
    btnElOne.textContent = questionThree.answers[0];
    questionSection.appendChild(btnElOne);

    btnElTwo.classList.add('answer');
    btnElTwo.textContent = questionThree.answers[1];
    questionSection.appendChild(btnElTwo);

    btnElThree.classList.add('answer');
    btnElThree.textContent = questionThree.answers[2];
    questionSection.appendChild(btnElThree);

    btnElFour.classList.add('answer');
    btnElFour.textContent = questionThree.answers[3];
    questionSection.appendChild(btnElFour);

    btnElOne.addEventListener('click', function(){
        if(btnElOne.textContent == questionThree.correctAnswer){
            console.log("Correct");
        }
        else if(btnElOne.textContent !== questionThree.correctAnswer){
            console.log("Incorrect");
            subtractTime();
        };
    });

    btnElTwo.addEventListener('click', function(){
        if(btnElTwo.textContent == questionThree.correctAnswer){
            console.log("Correct");
        }
        else if(btnElTwo.textContent !== questionThree.correctAnswer){
            console.log("Incorrect");
            subtractTime();
        };
    });

    btnElThree.addEventListener('click', function(){
        if(btnElThree.textContent == questionThree.correctAnswer){
            console.log("Correct");
        }
        else if(btnElThree.textContent !== questionThree.correctAnswer){
            console.log("Incorrect");
            subtractTime();
        };
    });

    btnElFour.addEventListener('click', function(){
        if(btnElFour.textContent == questionThree.correctAnswer){
            console.log("Correct");
        }
        else if(btnElFour.textContent !== questionThree.correctAnswer){
            console.log("Incorrect");
            subtractTime();
        };
    });
}





startQuiz();