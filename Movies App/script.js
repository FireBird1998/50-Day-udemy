const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=a12fec9c80f58b536e1e7aa872dea16e&page=1&accpect=application/json';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCH_URL = 'https://api.themoviedb.org/3/search/movie?api_key=a12fec9c80f58b536e1e7aa872dea16e&include_adult=false&language=en-US&page=1&query="'


getMovies(API_URL);


async function getMovies(url) {
    const res = await fetch(url);   
    const data = await res.json();
    showMovies(data.results);
}

function showMovies(movies) {
    const main = document.getElementById('main');
    main.innerHTML = '';

    movies.forEach((movie) => {
        const { title, poster_path, vote_average, overview } = movie;
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');
        movieEl.innerHTML = `
            <img src="${IMG_PATH + poster_path}" alt="${title}">
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getClassByRate(vote_average)}">${vote_average}</span>
            </div>
            <div class="overview">
                <h3>Overview</h3>
                ${overview}
            </div>
        `
        main.appendChild(movieEl);
    })

}

function getClassByRate(vode){
    if(vode >= 8){
        return 'green';
    } else if(vode >= 5){
        return 'orange';
    } else {
        return 'red';
    }
}


const form = document.getElementById('form');
const search = document.getElementById('search');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchTerm = search.value;
    if (searchTerm && searchTerm !== '') {
        getMovies(SEARCH_URL + searchTerm);
        search.value = '';
    } else {
        window.location.reload();
    }
})


