// The following does not work but not sure why.
//let url = "https://calendarific.com/api/v2/holidays?api_key=bb3af9b5b18b01debdb7d770723b84dee8c9e30d&country=US&year=2019";
// function getApi() {
//     fetch(url).then(function(response) {
//         return response.json;
//     })
//     .then(function(data) {
//         console.log(data);
//     })
// };

// getApi();

//get holidays from API and add them to the calendar
let url = "https://calendarific.com/api/v2/holidays?api_key=bb3af9b5b18b01debdb7d770723b84dee8c9e30d&country=US&year=2021&month=10&type=national";
fetch(url)
.then(function(response){
    response.json().then(function(data) {
        console.log(data);
        let holidayFromAPI = data.response.holidays[0].date.iso;
        let holidayDateFormated = moment(holidayFromAPI, "YYYY-MM-DD").format("MMDDYY");
        console.log(holidayDateFormated);
        let dateFromCalendar = document.getElementById("date" + holidayDateFormated);
        let holidayName = document.createElement('p');
        holidayName.innerHTML = data.response.holidays[0].name;
        holidayName.classList.add("custom-td");
        holidayName.style.fontSize = "11px";
        dateFromCalendar.appendChild(holidayName);
    });
}).catch(function(error) {
    console.log('Fetch Error:', error);
});


// highlight current date
let currentDateFromMoment = moment().format('MMDDYY');
console.log(currentDateFromMoment);
let currentDateFromCalendar = document.getElementById("date" + currentDateFromMoment);
currentDateFromCalendar.classList.add("table-active");

