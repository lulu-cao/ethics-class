let url = "https://safe-beach-06186.herokuapp.com/https://zenquotes.io/api/random/?custom=true";

fetch(url).then(function(response) {
    response.json().then (function(data) {
        console.log(data);
        let quote = document.getElementById('quote');
        let author = document.getElementById('author');
        let sentence = document.createElement('h4');
        let name = document.createElement('p');
        sentence.innerHTML = data[0].q;
        author.innerHTML = "-- " + data[0].a;
        quote.appendChild(sentence);
        author.appendChild(name);
    });
})

