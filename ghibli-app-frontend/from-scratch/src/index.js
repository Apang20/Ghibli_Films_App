const URL = 'http://localhost:3000/'

function qSelect(id){
  return document.querySelector(id)
}

document.addEventListener('DOMContentLoaded', () => {

    qSelect("#films").addEventListener('click', () => {
        document.querySelector('audio').play()
        showDiv()
        fetchMovies()
    })
    qSelect("#characters").addEventListener('click', () => {
        document.querySelector('audio').play()
        showDiv()
        fetchCharacters()
    })

})

function showDiv() {
    const cardsContainer = qSelect('.album')
          cardsContainer.className = ""
          cardsContainer.classList.add("album", "py-5", "bg-light")
}






