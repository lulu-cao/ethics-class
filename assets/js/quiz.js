let startBtn = document.getElementById('startBtn');
let quizInitContainer = document.getElementById('initContainer');
let secondContainer = document.getElementById('secondContainer');
let timeLeft = document.getElementById('timeLeft');
let eval = document.getElementById('eval');
let currentScore = document.getElementById('currentScore');
let j = 0; //this variable is used to add up for currentScore
currentScore.textContent = j;
let question = document.getElementById("question");

// when the button "start" is clicked, the quiz starts
startBtn.addEventListener('click', 
    replaceWithQuizQuestions
);

function replaceWithQuizQuestions() {
    startBtn.style.display = "none";
    quizInitContainer.style.display = "none";
    secondContainer.style.opacity = "1";

    //setting the timer
    let i = 120; 

    let timeInterval = setInterval(function() {
        i--;
        timeLeft.textContent = i;
        if (i < 1) {
            clearInterval(timeInterval)
        };
    }, 1000);        
};

function green(event) {
    var correct = document.createElement('p');
    correct.innerHTML = "Correct!<br/><br/>";
    correct.style.color = "green";
    eval.appendChild(correct);
};

function red(event) {
    eval.innerHTML = "Wrong!<br/><br/>";
    eval.style.color = "red";
};

// Add event listener to three radios 
let answerOne = document.getElementById('answerOne');
let answerTwo = document.getElementById('answerTwo');
let answerThree = document.getElementById('answerThree');
let answerOneLabel = document.getElementById('answerOneLabel');
let answerTwoLabel = document.getElementById('answerTwoLabel');
let answerThreeLabel = document.getElementById('answerThreeLabel');

answerOne.addEventListener('change', 
    function answerOneChecked() {if (answerOne.checked == true) {
    green();
    answerTwo.disabled = true;
    answerThree.disabled = true;
    createNextButton();
    j++;
    currentScore.textContent = j;
}})

answerTwo.addEventListener('change', 
    function answerTwoChecked() {if (answerTwo.checked) {
    red();
    answerOne.disabled = true;
    answerThree.disabled = true;
    createNextButton();
}})

answerThree.addEventListener('change', 
    function answerThreeChecked() {if (answerThree.checked) {
    red();
    answerOne.disabled = true;
    answerTwo.disabled = true;
    createNextButton();
}})

//create "next" button
let addBtn = document.createElement('button');
function createNextButton() {
    addBtn.classList.add("btn-dark");
    addBtn.classList.add("btn");
    addBtn.innerHTML = "Next";
    eval.appendChild(addBtn);
    addBtn.addEventListener('click',
    function newQuestion() {
        question.innerHTML = "2. Suspendisse non metus tempus, suscipit turpis id, congue nulla. Pellentesque scelerisque libero lacinia, aliquet sem non, mollis magna.";
        answerOneLabel.innerHTML = "Integer tincidunt suscipit arcu sit amet aliquam.";
        answerTwoLabel.innerHTML = "Nulla id est ac ligula posuere pellentesque volutpat eu ligula.";
        answerThreeLabel.innerHTML = "Vestibulum sodales risus eget imperdiet molestie.";
        eval.textContent = "";
        answerOne.checked = false;
        answerTwo.checked = false;
        answerThree.checked = false;
        answerOne.disabled = false;
        answerTwo.disabled = false;
        answerThree.disabled = false;
});
};


