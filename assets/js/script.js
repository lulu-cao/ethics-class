var currentTime = moment().format("MMM. D YYYY, h:mm:ss a");
$("#currentTime").text(currentTime);

setInterval(function() {
    var currentTime = moment().format("MMM. D YYYY, h:mm:ss a");
    $("#currentTime").text(currentTime);
}, 1000);

var now = moment();
var dueDate = $('#hwtable').closest("tr").find("td:eq(5)").text();
console.log(now);
console.log("due" + dueDate);
$('#tduntil').text(now.to(moment([dueDate])));



$( function() {
    $( "#datepicker" ).datepicker();
  } );

