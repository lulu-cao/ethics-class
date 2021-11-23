// // //get holidays from API and add them to the calendar
// let url = "https://calendarific.com/api/v2/holidays?api_key=bb3af9b5b18b01debdb7d770723b84dee8c9e30d&country=US&year=2021&month=10&type=national";
// fetch(url)
// .then(function(response){
//     response.json().then(function(data) {
//         console.log(data);
//         let holidayFromAPI = data.response.holidays[0].date.iso;
//         let holidayDateFormated = moment(holidayFromAPI, "YYYY-MM-DD").format("MMDDYY");
//         console.log(holidayDateFormated);
//         let dateFromCalendar = document.getElementById("date" + holidayDateFormated);
//         let holidayName = document.createElement('p');
//         holidayName.innerHTML = data.response.holidays[0].name;
//         holidayName.classList.add("custom-td");
//         holidayName.style.fontSize = "11px";
//         dateFromCalendar.appendChild(holidayName);
//     });
// }).catch(function(error) {
//     console.log('Fetch Error:', error);
// });


// // highlight current date
// let currentDateFromMoment = moment().format('MMDDYY');
// console.log(currentDateFromMoment);
// let currentDateFromCalendar = document.getElementById("date" + currentDateFromMoment);
// currentDateFromCalendar.classList.add("table-active");



// below is the calendar I designed myself
// let monthyear = document.getElementById("monthyear");

// function printMonthYear() {
//     let currentMonthYear = moment().format("MMMM YYYY");
//     monthyear.innerHTML = `<h2>${currentMonthYear}</h2>`;
// };

// printMonthYear();

// let nov1DayofMonth = moment("11/1/2021", "MM-DD-YYYY").format("D"); //output "1"
// console.log(nov1DayofMonth);
// let nov1DayofWeek = moment("11/1/2021", "MM-DD-YYYY").format("dd"); //output "Mo"
// console.log(nov1DayofWeek);
// let nov1DayofWeekAdjusted = nov1DayofWeek.toLowerCase() + 1; // output "mo1"
// console.log(nov1DayofWeekAdjusted);

// function setNov1() {
//     document.getElementById(`${nov1DayofWeekAdjusted}`).innerHTML = 1
// };

// setNov1();

// let everyIdInMonth = ["su1", "mo1", "tu1", "we1", "tr1", "fr1", "sa1", "su2", "mo2", "tu2", "we2", "tr2", "fr2", "sa2", "su3", "mo3", "tu3", "we3", "tr3", "fr3", "sa3", "su4", "mo4", "tu4", "we4", "tr4", "fr4", "sa4", "su5", "mo5", "tu5", "we5", "tr5", "fr5", "sa5"];
// function setDaysBeforeNov1() {
//     if (nov1DayofWeekAdjusted == "mo1") {
//         document.getElementById("su1").innerHTML = 31;
//         document.getElementById("su1").classList.add("notCurrentMonth");
//     }
// };

// setDaysBeforeNov1();

// function setDaysDuringFirstWeek() {
//     if (nov1DayofWeekAdjusted == "mo1") {
//         document.getElementById("tu1").innerHTML = 2;
//         document.getElementById("we1").innerHTML = 3;
//         document.getElementById("tr1").innerHTML = 4;
//         document.getElementById("fr1").innerHTML = 5;
//         document.getElementById("sa1").innerHTML = 6;
//     }
// };

// setDaysDuringFirstWeek();

// function setDaysDuringRemainingMonth() {
//     let lastDayOfFirstWeek = document.getElementById("sa1").innerHTML;
//     console.log(lastDayOfFirstWeek);
//     if (moment("11/2021", "MM/YYYY").daysInMonth() == 30) {
//         document.getElementById("su2").innerHTML = 7;
//         document.getElementById("mo2").innerHTML = 8;
//         document.getElementById("tu2").innerHTML = 9;
//         document.getElementById("we2").innerHTML = 10;
//         document.getElementById("tr2").innerHTML = 11;
//         document.getElementById("fr2").innerHTML = 12;
//         document.getElementById("sa2").innerHTML = 13;
//         document.getElementById("su3").innerHTML = 14;
//         document.getElementById("mo3").innerHTML = 15;
//         document.getElementById("tu3").innerHTML = 16;
//         document.getElementById("we3").innerHTML = 17;
//         document.getElementById("tr3").innerHTML = 18;
//         document.getElementById("fr3").innerHTML = 19;
//         document.getElementById("sa3").innerHTML = 20;
//         document.getElementById("su4").innerHTML = 21;
//         document.getElementById("mo4").innerHTML = 22;
//         document.getElementById("tu4").innerHTML = 23;
//         document.getElementById("we4").innerHTML = 24;
//         document.getElementById("tr4").innerHTML = 25;
//         document.getElementById("fr4").innerHTML = 26;
//         document.getElementById("sa4").innerHTML = 27;
//         document.getElementById("su5").innerHTML = 28;
//         document.getElementById("mo5").innerHTML = 29;
//         document.getElementById("tu5").innerHTML = 30;
//         document.getElementById("we5").innerHTML = 1;
//         document.getElementById("tr5").innerHTML = 2;
//         document.getElementById("fr5").innerHTML = 3;
//         document.getElementById("sa5").innerHTML = 4;
//         document.getElementById("we5").classList.add("notCurrentMonth");
//         document.getElementById("tr5").classList.add("notCurrentMonth");
//         document.getElementById("fr5").classList.add("notCurrentMonth");
//         document.getElementById("sa5").classList.add("notCurrentMonth");
//     }
// };

// setDaysDuringRemainingMonth();

// let leftArrow = document.getElementById("leftArrow");
// let rightArrow = document.getElementById("rightArrow");

// let allMonths2021 = ["January 2021", "Febuary 2021", "March 2021", "April 2021", "May 2021", "June 2021", "July 2021", "August 2021", "September 2021", "October 2021", "November 2021", "December 2021"];

// let m = 10; 

// function printPreviousMonth(num) {
//     m = m + num;
//     if (m<0) {m=11}
// };

// function printNextMonth(num) {
//     m = m + num;
//     if (m>11) {m=0}
// };

// leftArrow.addEventListener("click", function(event) {
//     printPreviousMonth(-1);
//     monthyear.innerHTML = `<h2>${allMonths2021[m]}</h2>`;
// });

// rightArrow.addEventListener("click", function(event) {
//     printNextMonth(+1);
//     monthyear.innerHTML = `<h2>${allMonths2021[m]}</h2>`;
// });

// add scheduler from jQuery UI
$( function() {
    $( "#datepicker" ).datepicker();
  } );