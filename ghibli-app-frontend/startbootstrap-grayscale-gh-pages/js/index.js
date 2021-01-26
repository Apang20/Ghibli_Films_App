const URL = 'http://localhost:3000/'
const moviesURL = 'http://localhost:3000/movies/'
const charactersURL = 'http://localhost:3000/characters/'


document.addEventListener('DOMContentLoaded', () => {
    qSelect("#film").addEventListener('click', () => {
        fetchMovies()
    })
    qSelect("#character").addEventListener('click', () => {
        fetchCharacters()
    })
})


function qSelect(id){
    return document.querySelector(id)
}

function create(el){
    document.createElement(el)
}

function fetchMovies(){
    fetch(moviesURL)
    .then((res) => res.json())
    .then ((movieData) => movieData.forEach(function(movie) {
        renderMovie(movie)
    }))
}

function renderMovie(movie){
    // console.log(movie)
    const movieBox = qSelect('#masterh')
          movieBox.innerHTML = ""

    let movieCard = create('div')
        movieCard.className = "card"
        movieCard.style = "width: 18rem;"

    let movieImage = create('img')
        movieImage.className = "card-img-top"
        movieImage.src = movie.poster_image

        console.log(movieCard)
        movieCard.appendChild(movieImage)
        movieBox.appendChild(movieCard)


//         <div class="card" style="width: 18rem;">
//   <img src="..." class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">Card title</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>
}