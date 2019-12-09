// placing the players in tile 0.
document.getElementById("tile_0").innerHTML += `<img class="tile_player1" src="${playerOne.playerImg}" width="50%" />`
document.getElementById("tile_0").innerHTML += `<img class="tile_player2" src="${playerTwo.playerImg}" width="50%" />`


// function contains the happenings of the game
function boardFunction() {

  let currentPlayer;
  let notCurrentPlayer;

  // figures out which player is the current player and which is not
  if (playerOne.isPlayerTurn === true) {
    currentPlayer = playerOne;
    notCurrentPlayer = playerTwo;
  }
  else {
    currentPlayer = playerTwo;
    notCurrentPlayer = playerOne;
  }
  // rolls dice. 1 to 6
  let diceRoll = (Math.floor(Math.random() * 6) + 1);
  console.log("Diceroll: " + diceRoll)


  if (diceRoll === 6) { // if diceroll = 6 , move 6 steps and add another roll, and then move again 
    showPopUp();
    document.getElementById("popupContent").innerHTML =
      `<div class="[ characters ]">
      <span class="closeBtn" onclick="hidePopUp()">&times;</span>
      <h2>You rolled a 6</h2>
      <p>The Gods are with you. Continue your journey!</p>
      <button id="rolled" onclick="hidePopUp">Continue</button> 
      </div>
    `;
    // Shows the popup

    currentPlayer.tile = setCurrenPlayerInTile(currentPlayer, diceRoll)
    // console.log('The Gods are with you. Continue your journey!');
    boardFunction();
  }
  else { // if not 6, move the number of steps the dice has
    if (currentPlayer.tile === notCurrentPlayer.tile) { // if both players are on the same tile. Leave the not current player on the tile. 
      document.getElementById('tile_' + notCurrentPlayer.tile).innerHTML = `<p>${notCurrentPlayer.tile}</p>`;
      currentPlayer.tile = setCurrenPlayerInTile(currentPlayer, diceRoll); // updates the current players tile NOT the other player
      // console.log("Player: " + currentPlayer.id + " Tile " + currentPlayer.tile)
      setPlayerImageInTile(currentPlayer); // updates pictures into the new tile 
      setPlayerImageInTile(notCurrentPlayer); // not current player image remains in same tile
    }
    else { // if the players are NOT in the same tile 
      currentPlayer.tile = setCurrenPlayerInTile(currentPlayer, diceRoll)
      console.log("Player: " + currentPlayer.id + " Tile " + currentPlayer.tile)
      setPlayerImageInTile(currentPlayer);
    }

  }

  // switch statement setting the traps. 
  switch (currentPlayer.tile) {

    case trapOne.tileNum:
      alert(trapOne.alertMessage);
      document.getElementById('tile_' + currentPlayer.tile).innerHTML = `<p> ${currentPlayer.tile}</p>`;
      currentPlayer.tile = currentPlayer.tile - trapOne.penalty;
      document.getElementById('tile_' + currentPlayer.tile).innerHTML += `<img src="${currentPlayer.playerImg}" width="60px"/>`;
      break;

    case trapTwo.tileNum:
      alert(trapTwo.alertMessage);
      document.getElementById('tile_' + currentPlayer.tile).innerHTML = `<p> ${currentPlayer.tile}</p>`;
      currentPlayer.tile = currentPlayer.tile - trapTwo.penalty;
      document.getElementById('tile_' + currentPlayer.tile).innerHTML += `<img src="${currentPlayer.playerImg}" width="60px"/>`;
      break;

    case trapThree.tileNum:
      alert(trapThree.alertMessage);
      document.getElementById('tile_' + currentPlayer.tile).innerHTML = `<p> ${currentPlayer.tile}</p>`;
      currentPlayer.tile = currentPlayer.tile - trapThree.penalty;
      document.getElementById('tile_' + currentPlayer.tile).innerHTML += `<img src="${currentPlayer.playerImg}" width="60px"/>`;
      break;

    case trapFour.tileNum:
      alert(trapFour.alertMessage);
      document.getElementById('tile_' + currentPlayer.tile).innerHTML = `<p> ${currentPlayer.tile}</p>`;
      currentPlayer.tile = currentPlayer.tile - trapFour.penalty;
      document.getElementById('tile_' + currentPlayer.tile).innerHTML += `<img src="${currentPlayer.playerImg}" width="60px"/>`;
      break;

    case trapFive.tileNum:
      alert(trapFive.alertMessage);
      document.getElementById('tile_' + currentPlayer.tile).innerHTML = `<p> ${currentPlayer.tile}</p>`;
      currentPlayer.tile = currentPlayer.tile - trapFive.penalty;
      document.getElementById('tile_' + currentPlayer.tile).innerHTML += `<img src="${currentPlayer.playerImg}" width="60px"/>`;
      break;

    default:
  }


  // figures out which player turn it is. 
  if (currentPlayer === playerOne) {
    playerOne.isPlayerTurn = false;
    playerTwo.isPlayerTurn = true;
  } else if (currentPlayer === playerTwo) {
    playerOne.isPlayerTurn = true;
    playerTwo.isPlayerTurn = false;
  }

}





// Popups 
let popup = document.getElementById("myPopup");
let closeButton = document.getElementsByClassName("closeBtn")[0];

// Hides the popup modal 
function hidePopUp() {
  popup.style.display = "none";
}

function showPopUp(popup) {
  popup.style.display = "block";
}




// function that places the current player in tile 
function setCurrenPlayerInTile(currentPlayer, diceRoll) {
  document.getElementById('tile_' + currentPlayer.tile).innerHTML = `<p>${currentPlayer.tile}</p>`;
  currentPlayer.tile += diceRoll;
  return currentPlayer.tile;
}

// places the image in the tile. 
function setPlayerImageInTile(currentPlayer) {
  // winning the game
  try {
    document.getElementById('tile_' + currentPlayer.tile).innerHTML += `<div><img src="${currentPlayer.playerImg}" width="60px"/></div>`;
  } catch {
    alert("Congratulations! You won the Throne")
  }
}
