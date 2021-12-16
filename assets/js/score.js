let defaultDisplay = document.getElementById("defaultDisplay");
let score = document.getElementById("score");

// get score from localStorage method 1
// function getScoreRecord() {
//     let userName = localStorage.getItem("userName");
//     let currentScore = localStorage.getItem("currentScore");
//     if (userName !== "") {
//         defaultDisplay.innerHTML = "";
//         let scoreItem = document.createElement("p");
//         scoreItem.textContent = userName + ": " + currentScore + " points";
//         score.appendChild(scoreItem);
//     }
// };

// get score from localStorage method 2
function getScoreRecord() {
    let scoreArray = JSON.parse(localStorage.getItem("scoreArray"));
    if (!scoreArray) {
        return
    } else {
        console.log("ScoreArray: " + scoreArray);
        defaultDisplay.style.display = "none";
        for (let i=0; i<scoreArray.length; i++) {
            let scoreItem = document.createElement("p");
            scoreItem.textContent = scoreArray[i].userName + ": " + scoreArray[i].currentScore + " points";
            score.appendChild(scoreItem);
    }}
};

getScoreRecord();
