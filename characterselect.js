
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
  document.getElementById("popupContent").innerHTML =
    `<div class="[ characters ]">
      <p>${result.titles}</p>
      <p>${result.name}</p>
      </div>
      <span onclick="hidePopUp()">&times;</span>
      <button id="selectBtn" onclick="getPlayerImage()">Select Player</button>
    `;


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




// function getPlayerImage() {
//   sessionStorage.getItem("Player1", "/images/photo1.svg")
// }

// getPlayerImage();

// let photo = sessionStorage.getItem("Player1")

