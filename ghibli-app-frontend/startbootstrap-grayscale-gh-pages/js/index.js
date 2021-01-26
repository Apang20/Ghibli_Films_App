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
    return document.createElement(el)
}

function fetchMovies(){
    fetch(moviesURL)
    .then((res) => res.json())
    .then ((movieData) => {
        qSelect('#masterh').innerHTML = ""
        movieData.forEach(function(movie) {
            renderMovie(movie)
        })
    })
}

function renderMovie(movie){
    // const body = qSelect('#page-top')
    // const header = qSelect('header')
    //       header.className = "flex-nowrap"
    const movieBox = qSelect('#masterh')
        //   movieBox.classList.add("container", "flex-nowrap")

    // const section = create('section')
    //       section.classList.add("about-section", "text-center")
    //       section.id = "about"

    // const moviesContainer = create('div')
    //       moviesContainer.className = "container"

    let movieCard = create('div')
        movieCard.className = "card"
        movieCard.style = "width: 18rem;"

    let movieImage = create('img')
        movieImage.className = "movie-poster"
        movieImage.src = movie.poster_image

        console.log(movieCard)
        movieCard.appendChild(movieImage)
        // movieBox.appendChild(movieCard)
        movieBox.appendChild(movieCard)
        // body.appendChild(section)

        // <section class="about-section text-center" id="about">
        //     <div class="container">
        //         <div class="row">
        //             <div class="col-lg-8 mx-auto">
        //                 <h2 class="text-white mb-4">Built with Bootstrap 4</h2>
        //                 <p class="text-white-50">
        //                     Grayscale is a free Bootstrap theme created by Start Bootstrap. It can be yours right now, simply download the template on
        //                     <a href="https://startbootstrap.com/theme/grayscale/">the preview page</a>
        //                     . The theme is open source, and you can use it for any purpose, personal or commercial.
        //                 </p>
        //             </div>
        //         </div>
        //         <img class="img-fluid" src="assets/img/ipad.png" alt="" />
        //     </div>
        // </section>

//         <div class="card" style="width: 18rem;">
//   <img src="..." class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">Card title</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>
}