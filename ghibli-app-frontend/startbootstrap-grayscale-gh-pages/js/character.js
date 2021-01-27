const charactersURL = 'http://localhost:3000/characters/'


function qSelect(id){
    return document.querySelector(id)
}

function create(el){
    return document.createElement(el)
}

function fetchCharacter(){
    fetch(charactersURL)
    .then((res) => res.json())
    .then ((characterData) => {
        qSelect('#masterh').innerHTML = ""
        characterData.forEach(function(character) {
        })
    })
}
