/*Fetching the API*/
function getInfo(id) {
  fetch("https://anapioficeandfire.com/api/characters/" + id)
    .then(response => response.json())
    .then(result => populateCards(result));
}




/* Inserting information into the cards */
/*
function populateCards() {
  document.getElementById("character-cards").innerHTML +=
    `<div class="[ characters ]">
    <p>${character.title}</p>
    <p>${character.name}</p>
    <p>${character.culture}</p>
    </div>
    `;
}


/*

`<div class="[ cards-GOG ]
      <h1>${value.name}</h1>
      <img>
      <p>id="${value.name}Select"></p>
      <button onclick="viewMoreFunction('${value.name}', '${value.id}')>Select</button>
      </div>
      `;

*/

/*

function viewMoreFunction(name, url) {
  console.log(name, url)
  document.getElementById(name + 'ReadMore').innerHTML = '';
  fetch(url)
    .then((response) => { return response.json() })
    .then((result) => {
      var abilities = result.abilities;
      abilities.map((value, index) => {
        return document.getElementById(name + 'ReadMore').innerHTML += `<p>${value.ability.name}</p>`
      })
    })
}


*/
