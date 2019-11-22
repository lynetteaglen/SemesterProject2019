let playerOne = {
  tile: 0,
  PlayerName: "",
  isPlayerTurn: true,
  playerImg: "Player1"
};

let playerTwo = {
  tile: 0,
  PlayerName: "",
  isPlayerTurn: false,
  playerImg: "Player2"
};

console.log(playerOne.playerImg);



//Make the dice roll (1-6). This function deletes the player, amd creates a new player when it is updated by clicking the button. 
function rollDice() {
  let diceRoll = (Math.floor(Math.random() * 6) + 1)
  playerOne.tile = playerOne.tile + diceRoll;
  document.getElementById(`tile_${playerOne.tile}`).innerHTML += `<div>${playerOne.playerImg}</div>`

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
document.getElementById(`tile_${playerOne.tile}`).innerHTML += `<div>${playerOne.playerImg}</div>`
document.getElementById(`tile_${playerTwo.tile}`).innerHTML += `<div>${playerTwo.playerImg}</div>`

let element = document.getElementById(`tile_${playerOne.playerImg}`);
element.parentNode.removeChild(element);


  // // Changing the value of player in game to decide when its their turn
  // function playerTurn() {
  //   if (playerOne.isPlayerTurn == true) {
  //     playerOne.isPlayerTurn = false;
  //     playerTwo.isPlayerTurn = true;
  //   }
  //   // removing the player 
  //   let element = document.getElementById("tile_0");
  //   element.parentNode.removeChild(element);
  // }








//   //  Update tile inside object with the value from the dice. 
// function placePlayerinTile() {
//   document.getElementById(`tile_${playerOne.tile}`).innerHTML += `<div>${playerOne.playerImg}</div>
//   `
// }
// placePlayerinTile();

// //Make the dice roll (1-6).
// function rollDice() {
//   let diceRoll = (Math.floor(Math.random() * 6) + 1)
//   playerOne.tile = playerOne.tile + diceRoll;

//   // Placing the player inside HTML by displaying the value of PlayerImg. 
//   document.getElementById(`tile_${playerOne.tile}`).innerHTML += `<div>${playerOne.playerImg}</div>
//    `
//   let element = document.getElementById(`tile_${playerOne.playerImg}`);
//   element.parentNode.removeChild(element);
// }












// if (playerOne.isPlayersTurn === true) {
//   playerOne.isPlayersTurn = false;
//   playerTwo.isPlayersTurn = true;
// }
// else {
//   playerOne.isPlayersTurn = true;
//   playerTwo.isPlayersTurn = false;
// }



// placePlayerInTile();
// //Finds what player turn it is, and makes it turn 
// function movePlayerOnBoard() {
//   if (playerOne.isPlayerTurn === true) {
//     console.log(playerOne)
//   }
//   else {
//     whichPlayer = playerTwo;
//   }
// }


