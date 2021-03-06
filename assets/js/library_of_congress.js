let search = document.getElementById('button-addon2');
let result = document.getElementById('result');

let lastFormat = document.getElementById('lastFormat');
let lastKeyword = document.getElementById('lastKeyword');

let libraryOfCongressArray = JSON.parse(localStorage.getItem("libraryOfCongressArray")) || [];

// search begins
function beginSearch() {
    let userSelect = document.getElementById('userSelect').value;
    let userSearch = document.getElementById('userSearch').value.trim();
    
    //log data into local storage
    let libraryOfCongressItem = {format: userSelect, keyword: userSearch};
    libraryOfCongressArray.push(libraryOfCongressItem); 
    localStorage.setItem("libraryOfCongressArray", JSON.stringify(libraryOfCongressArray));  
    lastFormat.textContent += userSelect + "; ";
    lastKeyword.textContent += userSearch + "; ";  

    let url = "https://www.loc.gov/" + userSelect + "/?q=" + userSearch + "&fo=json";

    console.log(url);

    if (userSearch.length === 0) {
        console.log("check if the user entered keywords");
        var warning = document.createElement('p');
        warning.innerText = "Warning: Please enter a keyword to search.";
        result.appendChild(warning);
    } else {
        console.log("begin search");
        function displaySearchResult() {
            fetch(url).then(function (response) {
            return response.json();
            })
            .then(function (data) {   
                console.log("search in progress"); 
                console.log(data);
                result.textContent = "";      

                for (let i = 0; i < data.results.length; i++) {
                    var note = document.createElement('p'); //these variables must be inside the for loop so that every time i++, a new element set will be created
                    var createTitle = document.createElement('p');
                    var createDate = document.createElement('p');
                    var createDescription = document.createElement('p');
                    var createLink = document.createElement('p');
                    var j = i + 1;
                    note.innerHTML = "<strong>Search Result " + j + ":</strong>"; //use innerHTML not textContent, so I can add the strong tag within the quote
                    createTitle.innerHTML = "<strong>Title: </strong>" + data.results[i].title;
                    createDate.innerHTML = "<strong>Date: </strong>" + data.results[i].date;
                    createDescription.innerHTML = "<strong>Description: </strong>" + data.results[i].description;
                    createLink.innerHTML = "<strong>Link: </strong>" + data.results[i].url; 
                    createDescription.appendChild(createLink);
                    createDate.appendChild(createDescription);
                    createTitle.appendChild(createDate);    
                    note.appendChild(createTitle);
                    result.appendChild(note);
                    console.log("search is complete");
            
                }
            })
        };
        
        displaySearchResult();        
    }
};

search.addEventListener('click', function(e) {
    e.preventDefault();          
                
    beginSearch();
});

//get data from local storage
function renderLastSearch() {
    if (libraryOfCongressArray) {
    libraryOfCongressArray.forEach(element => {
        lastFormat.textContent += element.format + "; ";
        lastKeyword.textContent += element.keyword + "; ";
    })
}};

renderLastSearch();