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
  playerOne.tile = playerOne.tile + diceRoll;

  document.getElementById(`tile_${playerOne.tile}`).innerHTML += `<div>${playerOne.playerImg}</div>`

  let element = document.getElementById(`tile_${playerOne.playerImg}`);
  element.parentNode.removeChild(element);


  if (playerOne.isPlayersTurn === true) {
    playerOne.isPlayersTurn = false;
    playerTwo.isPlayersTurn = true;
  }
  else {
    playerOne.isPlayersTurn = true;
    playerTwo.isPlayersTurn = false;
  }
}

// Placing the player inside HTML by displaying the value of PlayerImg. 
//  Update tile inside object with the value from the dice. This places the player on the current tile in use. 
console.log(sessionStorage.getItem("Player1"));
document.getElementById(`tile_${playerOne.tile}`).innerHTML += `<div>${playerOne.playerImg}</div>`
document.getElementById(`tile_${playerTwo.tile}`).innerHTML += `<div>${playerTwo.playerImg}</div>`


