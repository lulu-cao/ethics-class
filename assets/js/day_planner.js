let inputArray = document.getElementsByClassName("form-control");
let btnArray = document.getElementsByClassName("btn");

function init() {
    for (let i=0; i<inputArray.length; i++) {
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
}};

init();