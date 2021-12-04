//questions from questions_trolley_dilemma.js can be used here directly without creating variables or imports
let startBtn = document.getElementById('startBtn');
let initContainer = document.getElementById('initContainer');
let timeLeft = document.getElementById('timeLeft');
let questionTitle = document.getElementById("question-title");
let choicesEl = document.getElementById("choices");
let currentQuestionIndex = 0;
let currentQuestion = questions[currentQuestionIndex];
let eval = document.getElementById('eval');
let currentScore = document.getElementById('currentScore');
let j = 0; //this variable is used to add up for currentScore
currentScore.textContent = j;
let submitBtn = document.getElementById("button-addon2");

// the "Correct!" or "Wrong!" will display based on whether the user chooses the correct or the wrong answer
let correctOrWrong = document.getElementById("correctOrWrong");

function displayQuestion() {
    questionTitle.innerHTML = currentQuestion.question;
    currentQuestion.choices.forEach((choices, i) => {
        choicesEl.innerHTML = "";
        let choiceItem = document.createElement("button");
        choiceItem.setAttribute("class", "btn");
        choiceItem.setAttribute("value", choices);
        choiceItem.innerHTML = i + 1 + ". " + choices;
        choiceItem.onclick = checkAnswer();
        choicesEl.appendChild(choiceItem)
    });
};

function startTimer() {
    let i = 120; 

    let timeInterval = setInterval(function() {
        i--;
        timeLeft.textContent = i;
        if (i < 1) {
            clearInterval(timeInterval);
            quizEnd();
        };
    }, 1000); 
};

function checkAnswer() {
    console.log(currentQuestion);
    if (this.value === currentQuestion.answer) {
        correctOrWrong.innerHTML = "Correct!";
        j++;
        currentScore.textContent = j;
    } else {
        correctOrWrong.innerHTML = "Wrong!"
    };

    setTimeout(function() {
        correctOrWrong.innerHTML = ""
    }, 1000);

    currentQuestionIndex++;
    currentQuestion = questions[currentQuestionIndex];

    if (currentQuestionIndex = questions.length) {
        quizEnd();
    } else {
        displayQuestion();
        startTimer();
    };
};

function quizEnd() {
    eval.removeAttribute("class");
    eval.innerHTML = `Your current score is: ${j}. Please enter your name below. <br/><br/>
    <div class="input-group mb-3 col-6 mx-auto w-50">
        <input type="text" class="form-control" aria-label="Recipient's username" aria-describedby="button-addon2">
        <button class="btn btn-outline-secondary" type="button" id="button-addon2"><a href="./score.html">Submit</a></button>
    </div>
    `
};

// when the button "start" is clicked, the quiz starts
startBtn.addEventListener('click', function() {
    initContainer.style.display = "none";
    displayQuestion();
    startTimer();
}
);
