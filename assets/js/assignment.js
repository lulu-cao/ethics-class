// initial display of "current time" when the page loads
let currentTime = moment().format("MMM. D YYYY [at] h:mm:ss a");
$("#currentTime").text(currentTime);

// "current time" progresses when the page displays
setInterval(function() {
    let currentTime = moment().format("MMM. D YYYY [at] h:mm:ss a");
    $("#currentTime").text(currentTime);
}, 1000);

// add datepicker to the modal
$( function() {
    $( "#datepicker" ).datepicker();
  } );

console.log($('#exampleFormControlTextarea1').text());

// add form submission function for the modal
let addAssignmentModal = $('#staticBackdrop');
let formToAddAssignment = $('#custom-form');
let newTitle = $('#formGroupExampleInput').val().trim();
let newDescription = $('#exampleFormControlTextarea1').val().trim();
let newType = $('#newType').val().trim();
let newPoints = $('#newPoints').val().trim();
let newDueDate = $('#datepicker').val().trim();
let addBtn = document.getElementById("custom-btn");

function addNewAssignment(name, description, type, points, dueDate) {    
    let createRow = document.createElement("tr");
    let createNewTitle = document.createElement("td");
    createNewTitle.classList.add('p-2');
    createNewTitle.innerHTML = name;
    let createNewDescription = document.createElement("td");
    createNewDescription.classList.add('p-2');
    createNewDescription.innerHTML = description;
    let createNewType = document.createElement("td");
    createNewType.classList.add('p-2');
    createNewType.innerHTML = type;
    let createNewPoints = document.createElement("td");
    createNewPoints.classList.add('p-2');
    createNewPoints.innerHTML = points;
    let createNewDueDate = document.createElement("td");
    createNewDueDate.classList.add('p-2');
    createNewDueDate.innerHTML = dueDate;
    let deleteBtn = document.createElement("td");
    deleteBtn.classList.add('p-2 delete-project-btn text-center');
    deleteBtn.innerHTML = 'Delete';

    createRow.append(
        createNewTitle, 
        createNewDescription, 
        createNewType, 
        createNewPoints,
        createNewDueDate,
        deleteBtn
    );

    $('#hwtable').append(createRow);
    
    addAssignmentModal.modal('hide');
};

addBtn.addEventListener("click", function formSubmit(event) {
    event.preventDefault();
    addNewAssignment(newTitle, newDescription, newType, newPoints, newDueDate);
});

function executeDeletion(event) {
    console.log(event.target);
    let deleteConfirmed  = $(event.target);
    deleteConfirmed.parent('tr').remove();
};

$('#hwtable').on('click', '.delete-project-btn', executeDeletion);