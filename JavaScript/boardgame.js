// placing the players in tile 0, also known as the start
document.getElementById("tile_0").innerHTML += `<img class="tile_player1" src="${playerOne.playerImg}" width="50%" />`
document.getElementById("tile_0").innerHTML += `<img class="tile_player2" src="${playerTwo.playerImg}" width="50%" />`
document.getElementById('playerOneName').innerHTML = sessionStorage.getItem('player1name');
document.getElementById('playerTwoName').innerHTML = sessionStorage.getItem('player2name');
// Popups 
let popup = document.getElementById("popupDiceRollSix");

// Hides the popup modal 
function hidePopUp(popup) {
  popup.style.display = "none";
}

function showPopUp(popup) {
  popup.style.display = "block";
}

// Board game function
function boardFunction() {

  // Variables for which player is playing 
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

  // Rolls dice from 1-6 and then displayes it into html. 
  let diceRoll = (Math.floor(Math.random() * 6) + 1);
  document.getElementById("dice").innerHTML = "";
  document.getElementById("dice").innerHTML += `<p>${diceRoll}</p>`
  console.log(currentPlayer.PlayerName);
  // console.log("Diceroll: " + diceRoll)

  if (diceRoll === 6) { // if dice equals to 6 -->
    showPopUp(popup);  // show this popup
    document.getElementById("popupContent").innerHTML =
      `<div class="[ characters ]">
      <h2>You rolled a 6</h2>
      <p class="[ trap-text ]">The Gods are with you. Continue your journey!</p>
      </div>
      <button id="rolled" onclick="hidePopUp(popup)">Continue</button> 
      `;
    if (currentPlayer.tile === notCurrentPlayer.tile) {
      document.getElementById('tile_' + notCurrentPlayer.tile).innerHTML = `<p>${notCurrentPlayer.tile}</p>`; // leave the notcurrentplayer in the tile it is placed in
      currentPlayer.tile = setCurrenPlayerInTile(currentPlayer, diceRoll); // moves the currentplayers steps the dice has rolled
      setPlayerImageInTile(currentPlayer); // updates pictures into the new tile 
      setPlayerImageInTile(notCurrentPlayer); // not current player image remains in same tile
    }
    currentPlayer.tile = setCurrenPlayerInTile(currentPlayer, diceRoll);  // places the currentplayer into the tile. You have to add the value of the diceroll
    boardFunction(); // Calls the function again, since you get another spin

    // to be able to display the 6 in the dice. 
    document.getElementById("dice").innerHTML = `<p></p>`
    document.getElementById("dice").innerHTML += `<p>${diceRoll}</p>`
  }
  else { // if not 6, move the number of steps the dice has rolled
    if (currentPlayer.tile === notCurrentPlayer.tile) { // if both players are on the same tile --> 
      document.getElementById('tile_' + notCurrentPlayer.tile).innerHTML = `<p>${notCurrentPlayer.tile}</p>`; // leave the notcurrentplayer in the tile it is placed in
      currentPlayer.tile = setCurrenPlayerInTile(currentPlayer, diceRoll); // moves the currentplayers steps the dice has rolled
      setPlayerImageInTile(currentPlayer); // updates pictures into the new tile 
      setPlayerImageInTile(notCurrentPlayer); // not current player image remains in same tile
    }
    else { // if the players are NOT in the same tile  --> 
      currentPlayer.tile = setCurrenPlayerInTile(currentPlayer, diceRoll)  // place the currentplayer in the number of steps the dice has rolled 
      console.log("Player: " + currentPlayer.id + " Tile " + currentPlayer.tile)
      setPlayerImageInTile(currentPlayer);  // place the image in the tile it has moved to
    }
  }

  // switch statement setting the traps showing in a popup.  
  switch (currentPlayer.tile) {

    case trapOne.tileNum:
      showPopUp(popup);
      document.getElementById("popupContent").innerHTML =
        `<div class="[ characters ]">
          <h2>Trap</h2>
          <p class="[ trap-text ]">${trapOne.alertMessage}</p>
          </div>
          <button id="rolled" onclick="hidePopUp(popup)">Continue</button> 
          `;
      document.getElementById('tile_' + currentPlayer.tile).innerHTML = `<p> ${currentPlayer.tile}</p>`;
      currentPlayer.tile = currentPlayer.tile - trapOne.penalty;  // makes the player move back the amount of the penalty from the object 
      document.getElementById('tile_' + currentPlayer.tile).innerHTML += `<img src="${currentPlayer.playerImg}" width="60px"/>`; // place the image of the currentplayer in the new tile
      break;

    case trapTwo.tileNum:
      showPopUp(popup);
      document.getElementById("popupContent").innerHTML =
        `<div class="[ characters ]">
          <h2>Trap</h2>
          <p class="[ trap-text ]">${trapTwo.alertMessage}</p>
          </div>
          <button id="rolled" onclick="hidePopUp(popup)">Continue</button> 
          `;
      document.getElementById('tile_' + currentPlayer.tile).innerHTML = `<p> ${currentPlayer.tile}</p>`;
      currentPlayer.tile = currentPlayer.tile - trapTwo.penalty;
      document.getElementById('tile_' + currentPlayer.tile).innerHTML += `<img src="${currentPlayer.playerImg}" width="60px"/>`;
      break;

    case trapThree.tileNum:
      showPopUp(popup);
      document.getElementById("popupContent").innerHTML =
        `<div class="[ characters ]">
          <h2>Trap</h2>
          <p class="[ trap-text ]">${trapThree.alertMessage}</p>
          </div>
          <button id="rolled" onclick="hidePopUp(popup)">Continue</button> 
          `;
      document.getElementById('tile_' + currentPlayer.tile).innerHTML = `<p> ${currentPlayer.tile}</p>`;
      currentPlayer.tile = currentPlayer.tile - trapThree.penalty;
      document.getElementById('tile_' + currentPlayer.tile).innerHTML += `<img src="${currentPlayer.playerImg}" width="60px"/>`;
      break;

    case trapFour.tileNum:
      showPopUp(popup);
      document.getElementById("popupContent").innerHTML =
        `<div class="[ characters ]">
          <h2>Trap</h2>
          <p class="[ trap-text ]">${trapFour.alertMessage}</p>
          </div>
          <button id="rolled" onclick="hidePopUp(popup)">Continue</button> 
          `;
      document.getElementById('tile_' + currentPlayer.tile).innerHTML = `<p> ${currentPlayer.tile}</p>`;
      currentPlayer.tile = currentPlayer.tile - trapFour.penalty;
      document.getElementById('tile_' + currentPlayer.tile).innerHTML += `<img src="${currentPlayer.playerImg}" width="60px"/>`;
      break;

    case trapFive.tileNum:
      showPopUp(popup);
      document.getElementById("popupContent").innerHTML =
        `<div class="[ characters ]">
          <h2>Trap</h2>
          <p class="[ trap-text ]">${trapFive.alertMessage}</p>
          </div>
          <button id="rolled" onclick="hidePopUp(popup)">Continue</button> 
          `;
      document.getElementById('tile_' + currentPlayer.tile).innerHTML = `<p> ${currentPlayer.tile}</p>`;
      currentPlayer.tile = currentPlayer.tile - trapFive.penalty;
      document.getElementById('tile_' + currentPlayer.tile).innerHTML += `<img src="${currentPlayer.playerImg}" width="60px"/>`;
      break;

    default:
  }

  // figures out which player turn it is and updates the points.
  if (currentPlayer === playerOne) {  // if currentplayer equals playerOne --> set th playerone. playerTurn to true and the opposite. 
    document.getElementById("playerOnePoints").innerHTML = `<p>Player 1 <p/> <p></p>`
    document.getElementById("playerOnePoints").innerHTML += `<p class="[ diceAmount ]">${currentPlayer.tile}  /30</p>` // displayes the points of the player 
    playerOne.isPlayerTurn = false;
    playerTwo.isPlayerTurn = true;
  } else if (currentPlayer === playerTwo) {
    document.getElementById("playerTwoPoints").innerHTML = `<p>Player 2 <p/> <p></p>`
    document.getElementById("playerTwoPoints").innerHTML += `<p class="[ diceAmount ]">${currentPlayer.tile}  /30</p>`
    playerOne.isPlayerTurn = true;
    playerTwo.isPlayerTurn = false;
  }
}

// function that places the current player in tile. If hthere is not a tile to be placed in -->
function setCurrenPlayerInTile(currentPlayer, diceRoll) {
  try {
    document.getElementById('tile_' + currentPlayer.tile).innerHTML = `<p>${currentPlayer.tile}</p>`;
    currentPlayer.tile += diceRoll;
    return currentPlayer.tile;
  }
  catch {
    if (currentPlayer.tile >= 30 || currentPlayer.tile === undefined) {
      if (currentPlayer === playerOne) {  // set the player to won  -->
        sessionStorage.setItem("winnerPlayer", "playerOne");
        sessionStorage.setItem("winnerName", playerOne.PlayerName);  // then store the player in session storage
        sessionStorage.setItem("winnerImage", playerOne.playerImg);
        window.open("final.html");
      }
      else {
        sessionStorage.setItem("winnerPlayer", "playerTwo");
        sessionStorage.setItem("winnerName", playerTwo.PlayerName);
        sessionStorage.setItem("winnerImage", playerTwo.playerImg);
        window.open("final.html");
      }
    }
  }
}

// places the image in the tile. 
function setPlayerImageInTile(currentPlayer) {
  try {
    document.getElementById('tile_' + currentPlayer.tile).innerHTML += `<div><img src="${currentPlayer.playerImg}" width="60px"/></div>`;
  }
  catch {
    if (currentPlayer.tile >= 30 || currentPlayer.tile === undefined) {
      if (currentPlayer === playerOne) {  // set the player to won  -->
        sessionStorage.setItem("winnerPlayer", "playerOne");
        sessionStorage.setItem("winnerName", playerOne.PlayerName);  // then store the player in session storage
        sessionStorage.setItem("winnerImage", playerOne.playerImg);
        window.open("final.html");
      }
      else {
        sessionStorage.setItem("winnerPlayer", "playerTwo");
        sessionStorage.setItem("winnerName", playerTwo.PlayerName);
        sessionStorage.setItem("winnerImage", playerTwo.playerImg);
        window.open("final.html");
      }
    }
  }
}

