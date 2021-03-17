const moviesURL = 'http://localhost:3000/movies/'

const movies = []

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
        createDiv2()

        const cardContainer = qSelect('#card-container')
        cardContainer.innerHTML = ""
        cardContainer.classList.add("row", "row-cols-1", "row-cols-sm-2", "row-cols-md-3", "g-3")
        

        movieData.forEach(function(movie) {
            movies.push(movie)
            renderMovie(movie)
        })
    })
        qSelect("#characters").addEventListener('click', () => {
            fetchCharacters()
    })

}

function createDiv2(){
    const revealF = qSelect("#reveal-form")
          revealF.innerHTML = ""

    const form = qSelect("#form")
        form.innerHTML = ""

    let header = create('h4')
        header.innerText = "Don't see your favorite Ghibli film?"
        header.className = "fw-light"

    let button = create('button')
        button.classList.add('btn', 'btn-default', 'button')
        button.innerText = "Add a Film!"

        button.addEventListener('click', () => {
          showForm()
        })

        
        revealF.append(header, button)
}

function showForm() {
    qSelect("#reveal-form").innerHTML = ""

    const formContainer = qSelect("#form-container")
          formContainer.className = "container"

          
    const form = qSelect("#form")
          form.innerHTML = ""
          
    const titleDiv = create('div')
          titleDiv.className = "form-group"
          
          let title = document.createElement('input')
              title.type = "text"
              title.className = "form-control"
              title.placeholder = "Add Title"
              title.name = "title"
          
          titleDiv.appendChild(title)

    const imageDiv = create('div')
          imageDiv.className = "form-group"

          let image = document.createElement('input')
              image.type = "text"
              image.className = "form-control"
              image.placeholder = "Add Poster Image URL"
              image.name = "poster"

          imageDiv.appendChild(image)

    const yearDiv = create('div')
          yearDiv.className = "form-group"
          
          let year = document.createElement('input')
              year.type = "text"
              year.className = "form-control"
              year.placeholder = "Add Release Year"
              year.name = "year"

          yearDiv.appendChild(year)

    const directorDiv = create('div')
          directorDiv.className = "form-group"
          
          let director = document.createElement('input')
              director.type = "text"
              director.className = "form-control"
              director.placeholder = "Add Film Director"
              director.name = "director"

          directorDiv.appendChild(director)

    const descriptionDiv = create('div')
          descriptionDiv.className = "form-group"
          
          let description = document.createElement('textarea')
              description.className = "form-control"
              description.placeholder = "Add Film Summary"
              description.name = "summary"

          descriptionDiv.appendChild(description)
          
          let button = document.createElement('button')
              button.type = "submit"
              button.classList.add('btn', 'btn-default', 'button')
              button.innerText = "Add Ghibli Film!"
          
        form.append(titleDiv, imageDiv, yearDiv, directorDiv, descriptionDiv, button)

        form.addEventListener('submit', (event) => {
              event.preventDefault()
              addMovie(event.target)
          })
        }

function addMovie(formInfo) {
    const newMovie = {
        title: formInfo.title.value,
        ["poster_image"]: formInfo.poster.value,
        year: formInfo.year.value,
        director: formInfo.director.value,
        description: formInfo.summary.value
    }

    const reqPackage = {
        headers: {
            "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(newMovie)
    }

    fetch(moviesURL, reqPackage)
        .then(res => res.json())
        .then(movieObj => {
            qSelect('#form').reset()
            renderMovie(movieObj)
        }) 
}

function renderMovie(movie){
    const cardContainer = qSelect('#card-container') 

    const col = create('div')
          col.className = "col"

    const card = create('div')
          card.classList.add("card", "shadow-sm")

    const image = create('img')
          image.src = movie["poster_image"]
          image.className = "img-thumbnail"
          image.alt = movie.title

    const cardBody = create('div')
          cardBody.className = "card-body"

    const p = create('p')
          p.className = "card-text"
          p.innerText = movie.title

    const div = create('div')
          div.classList.add("d-flex", "justify-content-between", "align-items-center")

    const buttonGroup = create('div')
          buttonGroup.className = "btn-group"

    const viewBtn = create('button')
          viewBtn.classList.add("btn", "btn-sm", "btn-outline-secondary")
          viewBtn.innerText = "View"
          viewBtn.addEventListener('click', () => {
              fetchMovie(movie)
          })
          
    const deleteBtn = create('button')
          deleteBtn.classList.add("btn", "btn-sm", "btn-outline-secondary")
          deleteBtn.innerText = "Delete"

          deleteBtn.addEventListener('click', () => {
            deleteMovie(movie, col)
          })

    buttonGroup.append(viewBtn, deleteBtn)

    div.appendChild(buttonGroup)
    
    cardBody.append(p, div)

    card.append(image, cardBody)

    col.appendChild(card)
        
    cardContainer.appendChild(col)
}

function fetchMovie(movie){
    fetch(moviesURL + movie.id)
    .then((res) => res.json())
    .then((movieData) => {
        showMovie(movieData)
    })
}

function showMovie(movie){

    const revealF = qSelect("#reveal-form")
          revealF.innerHTML = ""

    const cardContainer = qSelect('#card-container')
        cardContainer.innerHTML = ""
        cardContainer.className = "text-center"

    let movieImage = create('img')
        movieImage.classList.add("img-fluid", "img-thumbnail")
        movieImage.src = movie.poster_image

    let br = create('br')

    let movieTitle = create('h2')
        movieTitle.innerText = movie.title
        movieTitle.classList.add("fw-light", "padding")

    let movieYear = create('p')
        movieYear.innerText = `Release Year: ${movie.year}` 
        movieYear.className = "fw-light"

    let movieDir = create('h2')
        movieDir = `Director: ${movie.director}`
        movieDir.className = "fw-light"

    let movieDesc = create('p')
        movieDesc.innerText = movie.description 
        movieDesc.className = "fw-light"

    let button = document.createElement('button')
        button.classList.add('btn', 'btn-default', 'button')
        button.innerText = "Back"
        button.addEventListener('click', () => {
            fetchMovies()
        })

    cardContainer.append(movieTitle, movieImage, br,  movieDir, movieYear, movieDesc, button)

    
}

function deleteMovie(movie, col){
    fetch(moviesURL + movie.id, {method: "DELETE"})
    .then((res) => res.json())
    .then (col.remove()) 
    console.log(movie)
}

