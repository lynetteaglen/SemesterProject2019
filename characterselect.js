
//Popup
let popup = document.getElementById("myPopup");
let span = document.getElementsByClassName("closeBtn")[0];

//Shows the Popup modal 
function showPopUp() {
  popup.style.display = "block";
};

// Hides the popup modal 
function hidePopUp() {
  // Hides modal outside the modal
  window.onclick = function () {
    popup.style.display = "none";
  };
  // Hides modal by clicking on the span  
  span.onclick = function () {
    popup.style.display = "none";
  };
}

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
        document.getElementById("popupContent").innerHTML = "";
        document.getElementById("popupContent").innerHTML +=
          `<div class="[ characters ]">
            <p>${result.titles}</p>
            <p>${result.name}</p>
            </div>
          `;
      }

      showPopUp();
      populateCards();
      hidePopUp();
      populateCards.removeItem();
    })
}

//save data to session storage
sessionStorage.setItem('Player1', 'Character1');
sessionStorage.setItem('Player2', 'Character2');
//get saved data from session storage
// let data = sessionStorage.getItem('Player');




