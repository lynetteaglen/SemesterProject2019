//Fetching the API

function getInfo(id) {
  fetch("https://anapioficeandfire.com/api/characters/" + id)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      console.log(result);

      //Inserting information into the cards 
      function populateCards() {
        document.getElementById("popupContent").innerHTML +=
          `<div class="[ characters ]">
            <p>${result.title}</p>
            <p>${result.name}</p>
            </div>
          `;
      }

      showPopUp();
      populateCards();
    })
}

//Popup


let popup = document.getElementById("myPopup");
let span = document.getElementsByClassName("closeBtn")[0];

//Shows the Popup modal 

function showPopUp() {
  popup.style.display = "block";
};



window.onclick = function (event) {
  popup.style.display = "none";
};

span.onclick = function () {
  popup.style.display = "none";
};


























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
