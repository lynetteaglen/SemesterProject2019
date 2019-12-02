
// Player objects + attributes and values. 
const playerOne = {
  tile: 0,
  id: 1,
  PlayerName: sessionStorage.getItem("player1"),
  isPlayerTurn: true,
  playerImg: `/Images/${sessionStorage.getItem("player1")}.svg`,
};

const playerTwo = {
  tile: 0,
  id: 2,
  PlayerName: sessionStorage.getItem("player2"),
  isPlayerTurn: false,
  playerImg: `/Images/${sessionStorage.getItem("player2")}.svg`,
};

// Placing the players in tile 0.
document.getElementById("tile_0").innerHTML += `<div><img src="${playerOne.playerImg}" width="60px" /></div>`
document.getElementById("tile_0").innerHTML += `<div><img src="${playerTwo.playerImg}" width="60px" /></div>`

// Function that figures which player turn it is, and rolls dice and updates the player object
// If player rolls 6, the player gets another turn
// If not the tile is emptied and places the player into current tile
// Then it changes the player turn with an if/else statement, 

// let currentPlayer;

function boardFunction() {

  let currentPlayer;
  let notCurrentPlayer;

  if (playerOne.isPlayerTurn === true) {
    currentPlayer = playerOne;
    notCurrentPlayer = playerTwo;
  }
  else {
    currentPlayer = playerTwo;
    notCurrentPlayer = playerOne;
  }

  let diceRoll = (Math.floor(Math.random() * 6) + 1);
  console.log("Diceroll: " + diceRoll)



  if (diceRoll === 6) { // if diceroll = 6 , move 6 steps and add another roll, and then move again 
    window.alert("The Gods are with you. Continue your journey!");
    currentPlayer.tile = setCurrenPlayerInTile(currentPlayer, diceRoll)
    // console.log('The Gods are with you. Continue your journey!');
    boardFunction();
  }
  else { // if not 6, move the number of steps 
    if (currentPlayer.tile === notCurrentPlayer.tile) { // if both players are on the same tile do this:
      document.getElementById('tile_' + notCurrentPlayer.tile).innerHTML = `<p> ${notCurrentPlayer.tile}</p>`;
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

  if (currentPlayer === playerOne) {
    playerOne.isPlayerTurn = false;
    playerTwo.isPlayerTurn = true;
  } else if (currentPlayer === playerTwo) {
    playerOne.isPlayerTurn = true;
    playerTwo.isPlayerTurn = false;
  }

  // Switch statement setting the traps. 
  switch (currentPlayer.tile) {
    case trapOne.tileNum:
      trapOne.tileNum - trapOne.penalty;
      window.alert(trapOne.alertMessage);
      console.log("hei")
      break;

    case trapTwo.tileNum:
      trapTwo.tileNum - trapTwo.penalty;
      window.alert(trapTwo.alertMessage);
      break;

    case trapThree.tileNum:
      trapThree.tileNum - trapThree.penalty;
      window.alert(trapThree.alertMessage);
      break;

    case trapFour.tileNum:
      trapFour.tileNum - trapFour.penalty;
      window.alert(trapFour.alertMessage);
      break;

    case trapFive.tileNum:
      trapFive.tileNum - trapFive.penalty;
      window.alert(trapFive.alertMessage);
      break;

    default:
  }
}

function setCurrenPlayerInTile(currentPlayer, diceRoll) {
  document.getElementById('tile_' + currentPlayer.tile).innerHTML = `<p> ${currentPlayer.tile}</p>`;
  currentPlayer.tile += diceRoll;
  return currentPlayer.tile;
}

function setPlayerImageInTile(currentPlayer) {
  document.getElementById('tile_' + currentPlayer.tile).innerHTML += `<div><img src="${currentPlayer.playerImg}" width="60px"/></div>`;
}
