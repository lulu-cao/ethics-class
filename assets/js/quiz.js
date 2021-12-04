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

    //when the button "start" is clicked, the timer starts
    let i = 120; 

    let timeInterval = setInterval(function() {
        i--;
        timeLeft.textContent = i;
        if (i < 1) {
            clearInterval(timeInterval)
        };
    }, 1000);        
};

// setting up basic variables and functions in order to check answers and indicate the check results
let answerOne = document.getElementById('answerOne');
let answerTwo = document.getElementById('answerTwo');
let answerThree = document.getElementById('answerThree');
let answerOneLabel = document.getElementById('answerOneLabel');
let answerTwoLabel = document.getElementById('answerTwoLabel');
let answerThreeLabel = document.getElementById('answerThreeLabel');
let questionSet = document.getElementById('textCenter');

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

// setting up arrays for each question set and the correct answer
let questionContent = [
    "1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "2. Suspendisse non metus tempus, suscipit turpis id, congue nulla. Pellentesque scelerisque libero lacinia, aliquet sem non, mollis magna.",
    "3. Cras placerat erat, a egestas quam tempor aliquet. Curabitur ultrices lacus mi, ut hendrerit nisi suscipit sit amet. Morbi eu bibendum sem.",
    "4. Vestibulum pellentesque tellus id tempus rhoncus. Nunc ullamcorper varius massa, nec porta eros vehicula eget.",
    "5. Praesent rutrum dapibus ornare. Duis faucibus elit a ipsum convallis, nec tempor arcu auctor. Donec mattis ultrices volutpat."
];

let answerOneContent = [
    "I am the correct answer.",
    "Vestibulum sodales risus eget imperdiet molestie.",
    "I am the correct answer.",
    "Duis molestie est et sem condimentum, vitae elementum arcu efficitur.",
    "Fusce euismod interdum tempor.",
];

let answerTwoContent = [
    "Nam dui nisi",
    "Integer tincidunt suscipit arcu sit amet aliquam.",    
    "Duis molestie est et sem condimentum, vitae elementum arcu efficitur.",
    "I am the correct answer.", 
    "Duis molestie est et sem condimentum, vitae elementum arcu efficitur.",
];

let answerThreeContent = [
    "Fusce euismod interdum tempor.",
    "I am the correct answer.",
    "Integer tincidunt suscipit arcu sit amet aliquam.",
    "Etiam tellus risus, tincidunt a turpis nec, posuere luctus felis.",
    "I am the correct answer."
];

let correctAnswer = [
    answerOne,
    answerThree,
    answerOne,
    answerTwo,
    answerThree
];

let incorrectAnswer1 = [
    answerTwo,
    answerOne,
    answerTwo,
    answerOne,
    answerOne
];

let incorrectAnswer2 = [
    answerThree,
    answerTwo,
    answerThree,
    answerThree,
    answerTwo
];

//check answers, create "next" button, and jump to next question
let addBtn = document.createElement('button');
let g = 0;

correctAnswer[g].addEventListener('change', 
    function correctAnswerChecked() {if (correctAnswer[g].checked == true) {
    green();
    incorrectAnswer1[g].disabled = true;
    incorrectAnswer2[g].disabled = true;
    createNextButton();
    j++;
    currentScore.textContent = j;
}})

incorrectAnswer1[g].addEventListener('change', 
    function incorrectAnswer1Checked() {if (incorrectAnswer1[g].checked) {
    red();
    correctAnswer[g].disabled = true;
    incorrectAnswer2[g].disabled = true;
    createNextButton();
}})

incorrectAnswer2[g].addEventListener('change', 
    function incorrectAnswer2Checked() {if (incorrectAnswer2[g].checked) {
    red();
    correctAnswer[g].disabled = true;
    incorrectAnswer1[g].disabled = true;
    createNextButton();
}})

// answerOne.addEventListener('change', 
//     function correctAnswerChecked() {if (answerOne.checked == true) {
//     console.log(correctAnswer[g]);
//     green();
//     answerTwo.disabled = true;
//     answerThree.disabled = true;
//     createNextButton();
//     j++;
//     currentScore.textContent = j;
// }})

// answerTwo.addEventListener('change', 
//     function incorrectAnswer1Checked() {if (answerTwo.checked) {
//     console.log(incorrectAnswer1[g]);
//     red();
//     answerOne.disabled = true;
//     answerThree.disabled = true;
//     createNextButton();
// }})

// answerThree.addEventListener('change', 
//     function incorrectAnswer2Checked() {if (answerThree.checked) {
//     console.log(incorrectAnswer2);
//     red();
//     answerOne.disabled = true;
//     answerTwo.disabled = true;
//     createNextButton();
// }})

function createNextButton() {
    addBtn.classList.add("btn-dark");
    addBtn.classList.add("btn");
    addBtn.innerHTML = "Next";
    eval.appendChild(addBtn);
    g++;
    if (g > 4) {
        console.log("log me when g > 4");
        console.log("start building end page");
        addBtn.classList.add("btn-dark");
        addBtn.classList.add("btn");
        addBtn.innerHTML = "Complete";
        eval.appendChild(addBtn);
        addBtn.addEventListener('click', 
        function completeQuiz() {
            questionSet.remove();
            eval.innerHTML = "<h2><br/><br/>Congrats! You have finished this quiz.<br/><br/>Your score is: " + j++ + ".</h2>";
            eval.style.color = "darkgreen";
            return;
        })
    } else {
    correctAnswer[g].addEventListener('change', 
        function correctAnswerChecked() {if (correctAnswer[g].checked == true) {
        console.log(correctAnswer[g]);
        console.log("correct");
        green();
        incorrectAnswer1[g].disabled = true;
        incorrectAnswer2[g].disabled = true;
        createNextButton();
        j++;
        currentScore.textContent = j;
    }})

    incorrectAnswer1[g].addEventListener('change', 
        function incorrectAnswer1Checked() {if (incorrectAnswer1[g].checked) {
        console.log(incorrectAnswer1[g]);
        console.log("wrong1");
        red();
        correctAnswer[g].disabled = true;
        incorrectAnswer2[g].disabled = true;
        createNextButton();
    }})

    incorrectAnswer2[g].addEventListener('change', 
        function incorrectAnswer2Checked() {if (incorrectAnswer2[g].checked) {
        console.log(incorrectAnswer2[g]);
        console.log("wrong2");
        red();
        correctAnswer[g].disabled = true;
        incorrectAnswer1[g].disabled = true;
        createNextButton();
    }})

    addBtn.addEventListener('click',
    function newQuestion() {
        console.log("g is currently " + g); 
        console.log("start building new question");       
        question.innerHTML = questionContent[g];
        answerOneLabel.innerHTML = answerOneContent[g];
        answerTwoLabel.innerHTML = answerTwoContent[g];
        answerThreeLabel.innerHTML = answerThreeContent[g];
        eval.textContent = "";
        answerOne.checked = false;
        answerTwo.checked = false;
        answerThree.checked = false;
        answerOne.disabled = false;
        answerTwo.disabled = false;
        answerThree.disabled = false;
        console.log("new question is complete");
    })}
};
