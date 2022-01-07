// Display different rows with different colors based on if it is in the past or in the present/future
let inputArray = document.getElementsByClassName("form-control");
let btnArray = document.getElementsByClassName("btn");

let currentTime = moment().format("k");
console.log(currentTime);

function colorRow() {
  for (let j = 7; j < 21; j++) {
    if (currentTime > j) {
      console.log(j);
      let string = `#row${j}`;
      console.log(string);
      console.log(document.querySelector(string));
      document
        .getElementsByClassName("custom-row")
        [j - 7].classList.add("gray");
      inputArray[j - 7].classList.add("lightgray");
    } else {
      document
        .getElementsByClassName("custom-row")
        [j - 7].classList.add("green");
    }
  }
}

colorRow();

function init() {
  for (let i = 0; i < inputArray.length; i++) {
    console.log("initiated");
    btnArray[i].addEventListener("click", function storeData(event) {
      event.preventDefault();
      console.log("clicked");
      let inputValue = inputArray[i].value.trim();
      let storedData = JSON.parse(localStorage.getItem(inputValue)) || "";
      if (!storedData) {
        localStorage.setItem("inputValue", inputValue);
      } else {
        inputArray[i].innerHTML = storedData;
      }
    });
  }
}

init();
