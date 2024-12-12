let title = document.getElementById("title");
let plot = document.getElementById("plot");
let year = document.getElementById("year");
let img = document.getElementById("img");
let input = document.getElementById("input");

// http://www.omdbapi.com/?apikey=YOUR_API_KEY&t=movie_name

function getData(event) {
    event.preventDefault();

    const api = "7ad67533";
    const movie = input.value;

    const url = `http://www.omdbapi.com/?apikey=${api}&t=${movie}`;

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);

            title.innerText = data.Title;
            plot.innerText = data.Plot;
            year.innerText = data.Year;
            img.src = data.Poster;
        })
        .catch((error) => console.log(error));
}
