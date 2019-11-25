
// Getting ID and classes from HTML and converting them to JS variables. 
let popup = document.getElementById("myPopup");
let closeButton = document.getElementsByClassName("closeBtn")[0];


// Hides the popup modal 
function hidePopUp() {
  popup.style.display = "none";
}

// Changes the CSS display: none to block. Popup displayes in browser. 
function showPopUp(result) {
  popup.style.display = "block";

  // Inserting information into the cards 
  let thisName = result.name.replace(/ /g, ''); // making a variable to get the name of character. 
  document.getElementById("popupContent").innerHTML =
    `<div class="[ characters ]">
      <p>${result.titles}</p>
      <p>${result.name}</p>
      </div>
      <span onclick="hidePopUp()">&times;</span>
      <button id="selectBtn" data-character="${thisName}" onclick="saveStorage()">Select Player</button> 
    `; // getting an attribute. the name who is saved here is for example arya startk
}

// function that makes a variable and connects it with the button in HTML. Then getting the data attribute and sets the item in session storage.
function saveStorage() {
  let btn = document.getElementById("selectBtn");
  let charName = btn.getAttribute("data-character");
  sessionStorage.setItem("player", charName);
}


//Fetching the API
function getInfo(id) {
  fetch("https://anapioficeandfire.com/api/characters/" + id)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      console.log(result);
      showPopUp(result);
    })
}

//save data to session storage



// hvis bildet spiller 1 finnes i session storage så lagre i spiller to. 
// else så lagrer du det i spiller 1. 

// denne spilleren valgte dette bildet. 


// i


// function getPlayerImage() {
//   sessionStorage.getItem("Player1", "/images/photo1.svg")
// }

// getPlayerImage();

// let photo = sessionStorage.getItem("Player1")

