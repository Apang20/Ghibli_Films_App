const charactersURL = 'http://localhost:3000/characters/'


function qSelect(id){
    return document.querySelector(id)
}

function create(el){
    return document.createElement(el)
}

function fetchCharacters(){
    fetch(charactersURL)
    .then((res) => res.json())
    .then ((characterData) => {

      const cardContainer = qSelect('#card-container')
      cardContainer.innerHTML = ""

        characterData.forEach(function(character) {
            renderCharacter(character)
        })
    })

    qSelect("#films").addEventListener('click', () => {
          fetchMovies()
    })
}

function renderCharacter(character){
    const cardContainer = qSelect('#card-container') 

    const col = create('div')
          col.className = "col"

    const card = create('div')
          card.classList.add("card", "shadow-sm")

    const image = create('img')
          image.src = character.image
          image.className = "img-thumbnail"
          image.alt = character.name
    

    const cardBody = create('div')
          cardBody.className = "card-body"

    const p = create('p')
          p.className = "card-text"
          p.innerText = character.name

    const div = create('div')
          div.classList.add("d-flex", "justify-content-between", "align-items-center")

    const buttonGroup = create('div')
          buttonGroup.className = "btn-group"

    const viewBtn = create('button')
          viewBtn.classList.add("btn", "btn-sm", "btn-outline-secondary")
          viewBtn.innerText = "View"
          
    const deleteBtn = create('button')
          deleteBtn.classList.add("btn", "btn-sm", "btn-outline-secondary")
          deleteBtn.innerText = "Delete"

          deleteBtn.addEventListener('click', () => {
                deleteChar(character, col)
          })

    buttonGroup.append(viewBtn, deleteBtn)

    div.appendChild(buttonGroup)
    
    cardBody.append(p, div)

    card.append(image, cardBody)

    col.appendChild(card)
        
    cardContainer.appendChild(col)
}

function deleteChar(character, col){
    fetch(charactersURL + character.id, {method: "DELETE"})
    .then((res) => res.json())
    .then (col.remove()) 
} 
