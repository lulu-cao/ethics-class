var url = "https://zenquotes.io/api/quotes";

function getHoliday() {
    fetch(url).then(function(response) {
        return response.json;
    })
    .then(function(data) {
        console.log(data);
    })
};

