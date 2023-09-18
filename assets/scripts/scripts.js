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
var questionEnd = document.querySelector('.question-end');
// var answerOne = document.getElementById("answer-one");
// var answerTwo = document.getElementById("answer-two");
// var answerThree = document.getElementById("answer-three");
// var answerFour = document.getElementById("answer-four");
var playerName = document.getElementById("player-name")
var btnSubmitScore = document.getElementById("submit-score")
// <input type="text" id="player-name">
// <button id="submit-score">
// btnSubmitScore.addEventListener....
//   playerName.value // NOT playerName.textContent
//   saving to localStorage
//   document.createElement ul... 
//   FOR loop of all players, document.createElement li... li.textContent = whatever was in the object that's iterated (player name, player score)... append to ul

var timeScore = localStorage.getItem('time-score');
var timeInterval = null;
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
    title: "Arrays in JavaScript can be used to store __________",
    answers: ['Numbers and Strings', 'Other Arrays', 'Booleans', 'All of the above'],
    correctAnswer : 'All of the above'
};
var questionFour = {
    title: "String values must be enclosed within __________ when being assigned to variables",
    answers: ['Commas', 'Curly Brackets', 'Quotes', 'Parenthesis'],
    correctAnswer : 'Quotes'
};
var questionFive = {
    title: "A very useful tool used during development and debugging for printing content to the debugger is:",
    answers: ['Javascript', 'Terminal/Bash', 'For Loops', 'Console.log'],
    correctAnswer : 'Console.log'
};

function endQuiz(){
    questionSection.classList.add("hidden");
    questionEnd.classList.remove("hidden");
}

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
    timeInterval = setInterval(function(){
        seconds--;
        quizTimer.textContent = "Timer: " + seconds;

        if(seconds <= 0){
            clearInterval(timeInterval);
            endQuiz();
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
            askQuestionFour()
        }
        else if(btnElOne.textContent !== questionThree.correctAnswer){
            console.log("Incorrect");
            subtractTime();
            askQuestionFour()
        };
    });

    btnElTwo.addEventListener('click', function(){
        if(btnElTwo.textContent == questionThree.correctAnswer){
            console.log("Correct");
            askQuestionFour()
        }
        else if(btnElTwo.textContent !== questionThree.correctAnswer){
            console.log("Incorrect");
            subtractTime();
            askQuestionFour()
        };
    });

    btnElThree.addEventListener('click', function(){
        if(btnElThree.textContent == questionThree.correctAnswer){
            console.log("Correct");
            askQuestionFour()
        }
        else if(btnElThree.textContent !== questionThree.correctAnswer){
            console.log("Incorrect");
            subtractTime();
            askQuestionFour()
        };
    });

    btnElFour.addEventListener('click', function(){
        if(btnElFour.textContent == questionThree.correctAnswer){
            console.log("Correct");
            askQuestionFour()
        }
        else if(btnElFour.textContent !== questionThree.correctAnswer){
            console.log("Incorrect");
            subtractTime();
            askQuestionFour()
        };
    });
}

function askQuestionFour(){
    questionTitle.textContent = questionFour.title;

    btnElOne.classList.add('answer');
    btnElOne.textContent = questionFour.answers[0];
    questionSection.appendChild(btnElOne);

    btnElTwo.classList.add('answer');
    btnElTwo.textContent = questionFour.answers[1];
    questionSection.appendChild(btnElTwo);

    btnElThree.classList.add('answer');
    btnElThree.textContent = questionFour.answers[2];
    questionSection.appendChild(btnElThree);

    btnElFour.classList.add('answer');
    btnElFour.textContent = questionFour.answers[3];
    questionSection.appendChild(btnElFour);

    btnElOne.addEventListener('click', function(){
        if(btnElOne.textContent == questionFour.correctAnswer){
            console.log("Correct");
            askQuestionFive()
        }
        else if(btnElOne.textContent !== questionFour.correctAnswer){
            console.log("Incorrect");
            subtractTime();
            askQuestionFive()
        };
    });

    btnElTwo.addEventListener('click', function(){
        if(btnElTwo.textContent == questionFour.correctAnswer){
            console.log("Correct");
            askQuestionFive()
        }
        else if(btnElTwo.textContent !== questionFour.correctAnswer){
            console.log("Incorrect");
            subtractTime();
            askQuestionFive()
        };
    });

    btnElThree.addEventListener('click', function(){
        if(btnElThree.textContent == questionFour.correctAnswer){
            console.log("Correct");
            askQuestionFive()
        }
        else if(btnElThree.textContent !== questionFour.correctAnswer){
            console.log("Incorrect");
            subtractTime();
            askQuestionFive()
        };
    });

    btnElFour.addEventListener('click', function(){
        if(btnElFour.textContent == questionFour.correctAnswer){
            console.log("Correct");
            askQuestionFive()
        }
        else if(btnElFour.textContent !== questionFour.correctAnswer){
            console.log("Incorrect");
            subtractTime();
            askQuestionFive()
        };
    });
}

function askQuestionFive(){
    questionTitle.textContent = questionFive.title;

    btnElOne.classList.add('answer');
    btnElOne.textContent = questionFive.answers[0];
    questionSection.appendChild(btnElOne);

    btnElTwo.classList.add('answer');
    btnElTwo.textContent = questionFive.answers[1];
    questionSection.appendChild(btnElTwo);

    btnElThree.classList.add('answer');
    btnElThree.textContent = questionFive.answers[2];
    questionSection.appendChild(btnElThree);

    btnElFour.classList.add('answer');
    btnElFour.textContent = questionFive.answers[3];
    questionSection.appendChild(btnElFour);

    btnElOne.addEventListener('click', function(){
        if(btnElOne.textContent == questionFive.correctAnswer){
            console.log("Correct");
            endQuiz();
            clearInterval(timeInterval);
        }
        else if(btnElOne.textContent !== questionFive.correctAnswer){
            console.log("Incorrect");
            subtractTime();
            endQuiz();
            clearInterval(timeInterval);
        };
    });

    btnElTwo.addEventListener('click', function(){
        if(btnElTwo.textContent == questionFive.correctAnswer){
            console.log("Correct");
            endQuiz();
            clearInterval(timeInterval);
        }
        else if(btnElTwo.textContent !== questionFive.correctAnswer){
            console.log("Incorrect");
            subtractTime();
            endQuiz();
            clearInterval(timeInterval);
        };
    });

    btnElThree.addEventListener('click', function(){
        if(btnElThree.textContent == questionFive.correctAnswer){
            console.log("Correct");
            endQuiz();
            clearInterval(timeInterval);
        }
        else if(btnElThree.textContent !== questionFive.correctAnswer){
            console.log("Incorrect");
            subtractTime();
            endQuiz();
            clearInterval(timeInterval);
        };
    });

    btnElFour.addEventListener('click', function(){
        if(btnElFour.textContent == questionFive.correctAnswer){
            console.log("Correct");
            endQuiz();
            clearInterval(timeInterval);
        }
        else if(btnElFour.textContent !== questionFive.correctAnswer){
            console.log("Incorrect");
            subtractTime();
            endQuiz();
            clearInterval(timeInterval);
        };
    });
}



startQuiz();


// // Get leaderboard array
// var oldPlayers = "[]"; // gets you json string
// if(localStorage.getItem("scores")) {
//     oldPlayers = localStorage.getItem("scores");
// }
// oldPlayers = JSON.parse(oldPlayers);


// // Updated leaderboard array
// var newPlayerInfo = {player:initialsInput.value, score:parseInt(quizTimer.textContent)} // you clicked submit score
// oldPlayers.push(newPlayerInfo);


// // Sort leaderboard array
// oldPlayers = oldPlayers.sort(function(a,b) {
//     //console.log({a})
//     //console.log({b})
//     if(a.score < b.score) return 1;
//     else if (a.score===b.score) return 0;
//     else return -1
// });


// var json = JSON.stringify(oldPlayers);

// localStorage.setItem("scores", json)

// console.log(parseInt(quizTimer.textContent.split(" ")[1]))

// <!-- document.querySelector(".question-end").classList.remove("hidden"); -->

// <!-- .hidden { display:none; }-->