var startBtn = document.getElementById('startBtn');
var quizInitContainer = document.getElementById('initContainer');
var secondContainer = document.getElementById('secondContainer');
var timeLeft = document.getElementById('timeLeft');
var eval = document.getElementById('eval');
var answerOne = document.getElementById('answerOne');
var answerTwo = document.getElementById('answerTwo');
var answerThree = document.getElementById('answerThree');

startBtn.addEventListener('click', 
    replaceWithQuizQuestions
);

function replaceWithQuizQuestions() {
    startBtn.style.display = "none";
    quizInitContainer.style.display = "none";
    secondContainer.style.opacity = "1";

    //setting the timer
    let i = 120; 

    var timeInterval = setInterval(function() {
        i--;
        timeLeft.textContent = i;
        if (i < 1) {
            clearInterval(timeInterval)
        };
    }, 1000);        
};

function green(event) {
    event.preventDefault();
    console.log("green");
    eval.textContent = "Correct!";
    eval.style.color = "green";
};

function red(event) {
    event.preventDefault();
    console.log("red");
    eval.textContent = "Wrong!";
    eval.style.color = "red";
};

if (answerOne.checked == true) {
    console.log("answerone");
    green()
};

if (answerTwo.checked) {
    red()
};

if (answerThree.checked) {
    red()
};