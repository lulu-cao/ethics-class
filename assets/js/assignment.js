// initial display of "current time" when the page loads
let currentTime = moment().format("MMM. D YYYY [at] h:mm:ss a");
$("#currentTime").text(currentTime);

// "current time" progresses when the page displays
setInterval(function () {
  let currentTime = moment().format("MMM. D YYYY [at] h:mm:ss a");
  $("#currentTime").text(currentTime);
}, 1000);

// add datepicker to the modal
$(function () {
  $("#datepicker").datepicker();
});

// Add event listener to the "add" cutton on form
let addAssignmentModal = $("#staticBackdrop");
let addBtn = document.getElementById("custom-btn");

addBtn.addEventListener("click", function formSubmit(event) {
  event.preventDefault();
  let newTitle = $("#formGroupExampleInput").val().trim();
  let newDescription = $("#exampleFormControlTextarea1").val().trim();
  let newType = $("#newType").val().trim();
  let newPoints = $("#newPoints").val().trim();
  let newDueDate = $("#datepicker").val().trim();
  addNewAssignment(newTitle, newDescription, newType, newPoints, newDueDate);
});

// create new row to add new assignment when the modal form is submitted
function addNewAssignment(name, description, type, points, dueDate) {
  let createRow = document.createElement("tr");
  let createNewTitle = document.createElement("td");
  createNewTitle.classList.add("p-2");
  createNewTitle.innerHTML = name;
  let createNewDescription = document.createElement("td");
  createNewDescription.classList.add("p-2");
  createNewDescription.innerHTML = description;
  let createNewType = document.createElement("td");
  createNewType.classList.add("p-2");
  createNewType.innerHTML = type;
  let createNewPoints = document.createElement("td");
  createNewPoints.classList.add("p-2");
  createNewPoints.innerHTML = points;
  let createNewDueDate = document.createElement("td");
  createNewDueDate.classList.add("p-2");
  createNewDueDate.innerHTML = dueDate;

  createRow.append(
    createNewTitle,
    createNewDescription,
    createNewType,
    createNewPoints,
    createNewDueDate
  );

  $("#hwtable").append(createRow);

  addAssignmentModal.modal("hide");
}
