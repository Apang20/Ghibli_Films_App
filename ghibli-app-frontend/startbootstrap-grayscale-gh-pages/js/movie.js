const moviesURL = 'http://localhost:3000/movies/'

function qSelect(id){
    return document.querySelector(id)
}

function create(el){
    return document.createElement(el)
}

function fetchMovies(){
    fetch(moviesURL)
    .then((res) => res.json())
    .then ((movieData) => {
        qSelect('header').remove() 

        //create new div with new background image
        const movieBody = qSelect('body')
        const movieBox = create('div')
        movieBox.id = "movieBox"
        movieBox.className = "container"
        movieBody.appendChild(movieBox)

        movieData.forEach(function(movie) {
            renderMovie(movie)
        })
    })
}

function renderMovie(movie){

    let movieBox = document.querySelector("#movieBox")

    let movieCard = create('div')
        movieCard.className = "card"
        // movieCard.style = "width: 18rem;"

    let movieImage = create('img')
        movieImage.className = "card-image-top"
        movieImage.src = movie.poster_image

    let movieBreak = create('br')

    movieCard.addEventListener('click', () => {
        fetchMovie(movie)
    })
        movieCard.appendChild(movieImage)
        movieBox.append(movieCard, movieBreak)
debugger
}

function fetchMovie(movie){
    fetch(moviesURL + movie.id)
    .then((res) => res.json())
    .then((movieData) => {
        showMovie(movieData)
    })
}

function showMovie(movie){

    let movieBox = document.querySelector("#movieBox")
        movieBox.innerHTML = ""

    let movieCard = create('div')

    let movieImage = create('img')
        movieImage.className = "card-image-top"
        movieImage.src = movie.poster_image

    let movieTitle = create('h2')
        movieTitle.innerText = movie.title

    let movieYear = create('h3')
        movieYear.innerText = movie.year 

    let movieDir = create('h3')
        movieDir = movie.director

    let movieDesc = create('p')
        movieDesc.innerText = movie.description 

    movieCard.append(movieImage, movieTitle, movieYear, movieDir, movieDesc)
    movieBox.appendChild(movieCard)

    
}