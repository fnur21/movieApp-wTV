//  elementleri seçmek
const form =document.querySelector("#form");
const searhInput = document.querySelector("#searchInput")

const movieApi = new MovieAPI();

runEventListener();

// burda bir fonksiyon tanımladık sen sayfayı yoklediğinde getpopularmovies metodu çalışsın dedik
function runEventListener(){
    document.addEventListener("DOMContentLoaded" , movieApi.getPopularMovies());
    form.addEventListener("submit", getMoviesByName);
}


function getMoviesByName(e) {
   const movieName = searhInput.value.trim();
   movieApi.getMoviesByName(movieName);
  
  e.preventDefault();
}
