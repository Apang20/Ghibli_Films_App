const URL = 'http://localhost:3000/'

function qSelect(id){
  return document.querySelector(id)
}

document.addEventListener('DOMContentLoaded', () => {
    qSelect("#films").addEventListener('click', () => {
        fetchMovies()
    })
    qSelect("#characters").addEventListener('click', () => {
        fetchCharacters()
    })

})




