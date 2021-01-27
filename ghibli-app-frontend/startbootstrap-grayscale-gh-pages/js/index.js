const URL = 'http://localhost:3000/'

document.addEventListener('DOMContentLoaded', () => {
    qSelect("#film").addEventListener('click', () => {
        fetchMovies()
    })
    qSelect("#character").addEventListener('click', () => {
        fetchCharacters()
    })
})



