// Display different rows with different colors based on if it is in the past or in the present/future
let inputArray = document.getElementsByClassName("form-control");
let btnArray = document.getElementsByClassName("btn");

let currentTime = moment().format("k");

function colorRow() {
  for (let j = 7; j < 21; j++) {
    if (currentTime > j) {
      document
        .getElementsByClassName("custom-row")
        [j - 7].classList.add("gray");
      inputArray[j - 7].classList.add("gray");
    }
  }
}

colorRow();

// Store planned items in local storage and get them upon landing the page
function init() {
  let storageArray = JSON.parse(localStorage.getItem("storageArray")) || [];
  if (storageArray) {
    console.log("There is a storageArray.");
    for (let j = 0; j < storageArray.length; j++) {
      inputArray[storageArray[j][0].index].placeholder =
        storageArray[j][1].inputValue;
    }
  }
  for (let i = 0; i < inputArray.length; i++) {
    btnArray[i].addEventListener("click", function storeData(event) {
      event.preventDefault();
      console.log("clicked");
      let inputValue = inputArray[i].value.trim();
      storageArray.push([{ index: i }, { inputValue: inputValue }]);
      localStorage.setItem("storageArray", JSON.stringify(storageArray));
      window.location.reload();
    });
  }
}

init();
