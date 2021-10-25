let btn = document.getElementById('button-addon2');
let result = document.getElementById('result');

let lastFormat = document.getElementById('lastFormat');
let lastKeyword = document.getElementById('lastKeyword');


function getAPI() {
    let source = document.getElementById('userSelect').value;
    let keyword = document.getElementById('userSearch').value.trim();
    let url = "http://api.mediastack.com/v1/news?access_key=62f1b0acc252645a11a76c8973524605&sources=" + source + "&keywords=" + keyword + "&limit=100";
    let i=0;

    fetch(url)
    .then(function(response){
        response.json().then(function(data) {
            console.log(data);
            result.textContent = "";
            for (let i = 0; i < data.data.length; i++) {
                if (data.data[i].image !== null) {
                    console.log("start logging image");
                    let note = document.createElement('p');
                    let j = i + 1;
                    note.innerHTML = "<br/><br/><strong>Search result " + j + ":</strong>";
                    let image = document.createElement('img');
                    image.src = data.data[i].image;
                    image.alt = data.data[i].title;
                    image.classList.add('img');
                    let title = document.createElement('p');
                    title.innerHTML = "<strong>Title: </strong>" + data.data[i].title;
                    let date = document.createElement('p');
                    date.innerHTML = "<strong>Date: </strong>" + data.data[i].published_at;
                    let description = document.createElement('p');
                    description.innerHTML = "<strong>Description: </strong>" + data.data[i].description;
                    let link = document.createElement('a');
                    link.innerHTML = "<br/><strong>Source: </strong>" + data.data[i].source + "<br/>";
                    link.href = data.data[i].url;
                    link.appendChild(image);
                    description.appendChild(link);
                    date.appendChild(description);
                    title.appendChild(date);
                    note.appendChild(title);
                    result.appendChild(note);
                    console.log("finish logging image");
                } 
                else if (source.value = "bbc" && data.data[i].image == null) {
                    console.log("start logging data");
                    let note = document.createElement('p');
                    let j = i + 1;
                    note.innerHTML = "<strong>Search result " + j + ":</strong>";
                    let title = document.createElement('p');
                    title.innerHTML = "<strong>Title: </strong>" + data.data[i].title;
                    let date = document.createElement('p');
                    date.innerHTML = "<strong>Date: </strong>" + data.data[i].published_at;
                    let description = document.createElement('p');
                    description.innerHTML = "<strong>Description: </strong>" + data.data[i].description;
                    let link = document.createElement('a');
                    link.innerHTML = "<br/><strong>Source: </strong>" + data.data[i].source + "<br/><br/>";
                    link.href = data.data[i].url;
                    description.appendChild(link);
                    date.appendChild(description);
                    title.appendChild(date);
                    note.appendChild(title);
                    result.appendChild(note);
                    console.log("finish logging data");
                }

            }
        });
    }).catch(function(error) {
        console.log('Fetch Error:', error);
    });
};

btn.addEventListener('click', getAPI);
