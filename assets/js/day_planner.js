// Display different rows with different colors based on if it is in the past or in the present/future
let inputArray = document.getElementsByClassName("form-control");
let btnArray = document.getElementsByClassName("btn");

let currentTime = moment().format("k") - 8;

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
  for (let i = 0; i < inputArray.length; i++) {
    console.log("initiated");
    btnArray[i].addEventListener("click", function storeData(event) {
      event.preventDefault();
      console.log("clicked");
      let inputValue = inputArray[i].value.trim();
      let plannedItems;
      let storageArray = JSON.parse(localStorage.getItem(plannedItems)) || [];
      if (!storageArray) {
        storageArray.push(inputValue);
        localStorage.setItem("plannedItems", JSON.stringify(storageArray));
        window.location.reload();
      } else {
        inputArray[i].innerHTML = storageArray[i];
      }
    });
  }
}

init();
