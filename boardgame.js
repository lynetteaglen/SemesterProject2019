
// Gets information from session storage.
let playerImage = sessionStorage.getItem("player");

// Displaying player information in the current tile they are placed in. 
console.log(sessionStorage.getItem("player"));

// Player objects with variables and values. 
let playerOne = {
  tile: 0,
  PlayerName: "",
  isPlayerTurn: true,
  playerImg: `/Images/${playerImage}.svg`,
  itsMe: true
};

let playerTwo = {
  tile: 0,
  PlayerName: "",
  isPlayerTurn: false,
  playerImg: `/Images/${playerImage}.svg`,
  itsMe: false
};


// Placing the players in tile 0.
document.getElementById(`tile_0`).innerHTML += `<img src="${playerOne.playerImg}" width="60px"  />`
document.getElementById(`tile_0`).innerHTML += `<img src="${playerTwo.playerImg}" width="60px" />`


// This function makes an empty object. The if statement populates the object with the object and its variable and sets it to true. 
// The else statement switching the playerTwo to true. 
function rollDiceAndMovePlayer() { // Find current player.

  // Populate empty object with either playerOne or playerTwo depending on whos turn it is.
  let currentPlayer = {};

  if (playerOne.isPlayerTurn === true) {
    currentPlayer = playerOne;
  }
  else {
    currentPlayer = playerTwo;
  }


  // Makes a variable named diceRoll. Contains a method that makes the dice span from 1-6 (whole numbers ->floor). 
  let diceRoll = (Math.floor(Math.random() * 6) + 1)
  // This will display the value that currentPlayer contains. 
  console.log(currentPlayer);
  // Change the players turn back when the dice rolls 6. If not rolled 6, display the player on the tile. 
  if (diceRoll === 6) {
    console.log('Have another roll!');

    rollDiceAndMovePlayer();
  }
  else {
    document.getElementById('tile_' + currentPlayer.tile).innerHTML += `<img src="${currentPlayer.playerImg}" class="hide" width="60px" border-radius="50px"/>`;
  }


  // Gets the objects and tile and updates the tile with the result of the diceRoll. 
  currentPlayer.tile = currentPlayer.tile + diceRoll;
  console.log(currentPlayer.tile);

  // Placing the information from object inside the HTML. Then adds the image gotten from the previous page. 
  document.getElementById('tile_' + currentPlayer.tile).innerHTML += `<img src="${currentPlayer.playerImg}">`

  //switching characters
  if (currentPlayer === playerOne) {
    playerOne.isPlayerTurn = false;
    playerTwo.isPlayerTurn = true;
  } else {
    playerOne.isPlayerTurn = true;
    playerTwo.isPlayerTurn = false;
  }


}


