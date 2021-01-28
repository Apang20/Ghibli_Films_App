const URL = 'http://localhost:3000/'

function qSelect(id){
  return document.querySelector(id)
}

document.addEventListener('DOMContentLoaded', () => {
    qSelect("#films").addEventListener('click', () => {
        showDiv()
        fetchMovies()
    })
    qSelect("#characters").addEventListener('click', () => {
        showDiv()
        fetchCharacters()
    })

})

function showDiv() {
    const cardsContainer = qSelect('.album')
          cardsContainer.className = ""
          cardsContainer.classList.add("album", "py-5", "bg-light")
}






