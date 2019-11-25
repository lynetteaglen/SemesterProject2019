// Player objects
let playerOne = {
  tile: 0,
  PlayerName: "",
  isPlayerTurn: true,
  playerImg: sessionStorage.getItem("Player1")
};

let playerTwo = {
  tile: 0,
  PlayerName: "",
  isPlayerTurn: false,
  playerImg: sessionStorage.getItem("Player2")


};


//Make the dice roll (1-6). This function deletes the player, amd creates a new player when it is updated by clicking the button. 
function rollDiceAndMovePlayer() {
  let diceRoll = (Math.floor(Math.random() * 6) + 1)
  // Gets the objects and tile and updates the tile with the result of the diceRoll. 
  playerOne.tile = playerOne.tile + diceRoll;

  // Placing the information from object inside the HTML. Then adds the image gotten from the previous page. 
  document.getElementById(`tile_${playerOne.tile}`).innerHTML += `<div>${playerOne.playerImg}</div>`

  // Creates a variable that should be able to delete the previous placed player 
  let element = document.getElementById(`tile_${playerOne.playerImg}`);
  element.parentNode.removeChild(element);


  // Should move the player every other turn. 
  if (playerOne.isPlayersTurn === true) {
    playerOne.isPlayersTurn = false;
    playerTwo.isPlayersTurn = true;
  }
  else {
    playerOne.isPlayersTurn = true;
    playerTwo.isPlayersTurn = false;
  }
}


//  Displaying player information in the current tile they are placed in. 
console.log(sessionStorage.getItem("Player1"));
document.getElementById(`tile_${playerOne.tile}`).innerHTML += `<div>${playerOne.playerImg}</div>`
document.getElementById(`tile_${playerTwo.tile}`).innerHTML += `<div>${playerTwo.playerImg}</div>`


