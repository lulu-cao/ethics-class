// initial display of "current time" when the page loads
var currentTime = moment().format("MMM. D YYYY [at] h:mm:ss a");
$("#currentTime").text(currentTime);

// "current time" progresses when the page displays
setInterval(function() {
    var currentTime = moment().format("MMM. D YYYY [at] h:mm:ss a");
    $("#currentTime").text(currentTime);
}, 1000);

// add calendar or datepicker to the modal
$( function() {
    $( "#datepicker" ).datepicker();
  } );

console.log($('#exampleFormControlTextarea1').text());

// setting up the "add" button for the modal
var addAssignmentModal = $('#staticBackdrop');
var formToAddAssignment = $('#custom-form');
// setting up variables for the value inputted in the form and trimming the whitespace before and after the strings in the value
var newName = $('#formGroupExampleInput').val().trim();
var newDescription = $('#exampleFormControlTextarea1').val().trim();
var newType = $('#newType').val().trim();
var newPoints = $('#newPoints').val().trim();
var newDueDate = $('#datepicker').val().trim();

function addNewAssignment(name, description, type, points, dueDate) {    
    let createRow = $('<tr>');
    let createNewName = $('<td>').addClass('p-2').text(name);
    let createNewDescription = $('<td>').addClass('p-2').text(description);
    let createNewType = $('<td>').addClass('p-2').text(type);
    let createNewPoints = $('<td>').addClass('p-2').text(points);
    let createNewDueDate = $('<td>').addClass('p-2').text(dueDate);
    let deleteBtn = $('<td>').addClass('p-2 delete-project-btn text-center').text('Delete');

    createRow.append(
        createNewName, 
        createNewDescription, 
        createNewType, 
        createNewPoints,
        createNewDueDate,
        deleteBtn
    );

    $('#hwtable').append(createRow);
    
    addAssignmentModal.modal('hide');
};

function formSubmit(event) {
    event.preventDefault();
    addNewAssignment(newName, newDescription, newType, newPoints, newDueDate);
};

function executeDeletion(event) {
    console.log(event.target);
    let deleteConfirmed  = $(event.target);
    deleteConfirmed.parent('tr').remove();
};

// function a(){
//     console.log("1")
// };
// $('#custom-btn').on('submit', a);

//looks like something is wrong with the following line; as indicated by the above test (console couldn't log 1)
formToAddAssignment.on('submit', formSubmit);
$('#hwtable').on('click', '.delete-project-btn', executeDeletion);