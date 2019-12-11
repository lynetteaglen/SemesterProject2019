
// Getting ID and classes from HTML and converting them to JS variables. 
let popup = document.getElementById("myPopup");
let closeButton = document.getElementsByClassName("closeBtn")[0];

// Hides the popup modal 
function hidePopUp() {
  popup.style.display = "none";

}

// Shows the popup
function showPopUp(result, id) {
  popup.style.display = "block";

  // making a variable that changes the name of the character in sessions storage to create a path to the image
  let thisName = result.name.replace(/ /g, ''); // making a variable to get the name of character. 
  document.getElementById("popupContent").innerHTML =
    `<div class="[ characters ]">
    <span class="closeBtn" onclick="hidePopUp()">&times;</span>
      <h2>Title</h2>
      <p class="popup-text">${result.titles}</p>
      <h2>Name</h2>
      <p class="popup-text">${result.name}</p>
      </div>
      <button id="selectBtn" data-character="${thisName}" onclick="saveStorage(${id})">Select Player</button> 
    `; // getting an attribute. the name who is saved here is for example Arya Stark
}



let player = false;
// Saving the value of the cards into session storage
// Making two players that is set to false. When selected it turns into true
// if the character is selected then it changes player two to true. 
function saveStorage(id) { // Saving the value of the cards into session storage
  let btn = document.getElementById("selectBtn");
  let charName = btn.getAttribute("data-character");
  let name = ["player1", "player2"];
  if (player === false) {
    sessionStorage.setItem(name[0], charName);
    charName = charName.replace(/([A-Z])/g, ' $1').trim();
    sessionStorage.setItem(name[0] + "name", charName)
    player = true;
  }
  else {
    sessionStorage.setItem(name[1], charName);
    charName = charName.replace(/([A-Z])/g, ' $1').trim();
    sessionStorage.setItem(name[1] + "name", charName)
  }
  popup.style.display = "none";


  // when card is selected it gets the id
  function selectCards() {
    let selectedCard = document.querySelector("#character-card-" + id);
    selectedCard.classList.add('cardSelected');
  }
  //selectedCard.classList.remove('cardSelected');
  selectCards();

}

//Fetching the API
function getInfo(id) {
  fetch("https://anapioficeandfire.com/api/characters/" + id)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      console.log(result);
      showPopUp(result, id);
    })
}
