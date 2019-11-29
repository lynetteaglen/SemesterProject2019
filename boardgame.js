
// Player objects + attributes and values. 
let playerOne = {
  tile: 0,
  id: 1,
  PlayerName: sessionStorage.getItem("player1"),
  isPlayerTurn: true,
  playerImg: `/Images/${sessionStorage.getItem("player1")}.svg`,
};

let playerTwo = {
  tile: 0,
  id: 2,
  PlayerName: sessionStorage.getItem("player2"),
  isPlayerTurn: false,
  playerImg: `/Images/${sessionStorage.getItem("player2")}.svg`,
};

// Placing the players in tile 0.
document.getElementById("tile_0").innerHTML += `<div id="token1"> <img src="${playerOne.playerImg}" width="60px" /></div>`
document.getElementById("tile_0").innerHTML += `<div id="token2"> <img src="${playerTwo.playerImg}" width="60px" /></div>`


function boardFunction() {
  let whichPlayer;

  if (playerOne.isPlayerTurn === true) {
    whichPlayer = playerOne;
  }
  else {
    whichPlayer = playerTwo
  }

  let diceRoll = 29; // (Math.floor(Math.random() * 6) + 1)


  if (diceRoll === 6) {

    document.getElementById('tile_' + whichPlayer.tile).innerHTML = "";
    // document.getElementById('tile_' + whichPlayer.tile).innerHTML = `<div id="token1" </div>`;
    // document.getElementById('tile_' + whichPlayer.tile).innerHTML = `<div id="token2" </div>`;

    whichPlayer.tile += diceRoll;

    document.getElementById('tile_' + whichPlayer.tile).innerHTML += `<img src="${whichPlayer.playerImg}" width="60px" border-radius="50px"/>`;
    console.log('Have another roll!');
    boardFunction();
  }
  else {
    document.getElementById('tile_' + whichPlayer.tile).innerHTML = "";
    whichPlayer.tile += diceRoll;
    document.getElementById('tile_' + whichPlayer.tile).innerHTML += `<img src="${whichPlayer.playerImg}" width="60px" border-radius="50px"/>`;
    if (whichPlayer === playerOne) {
      playerOne.isPlayerTurn = false;
      playerTwo.isPlayerTurn = true;
    } else {
      playerOne.isPlayerTurn = true;
      playerTwo.isPlayerTurn = false;
    }
  }
}






// // Gets information from session storage.
// let playerOneImage = sessionStorage.getItem("player1");
// let playerTwoImage = sessionStorage.getItem("player2");

// // Displaying player information in the current tile they are placed in. 
// console.log(sessionStorage.getItem("player1"));
// console.log(sessionStorage.getItem("player2"));





// // This function rolls the dice and moces the player. 
// function rollDiceAndMovePlayer() {

//   // Making a variable currentPlayer = and getting the function
//   let currentPlayer = getCurrentPlayer();
//   // This will display what player it is in session storage
//   console.log("The current player is: " + currentPlayer.id);

//   let diceRoll = rollDice();

//   movePlayer(diceRoll, currentPlayer);

//   //switching characters
//   currentPlayer = changeTurn(currentPlayer);
// }


// // finds out if player one or player two is the current player
// // returns the current player 
// function getCurrentPlayer() {
//   let currentPlayer = {};
//   if (playerOne.isPlayerTurn === true) {
//     currentPlayer = playerOne;
//   }
//   else {
//     currentPlayer = playerTwo;
//   }
//   return currentPlayer;
// }


// function rollDice() {
//   // Makes a variable named diceRoll. Contains a method that makes the dice span from 1-6 (whole numbers ->floor). 
//   let diceRoll = (Math.floor(Math.random() * 6) + 1)
//   console.log("The number of steps is: " + diceRoll);
//   return diceRoll;
// }


// function movePlayer(diceRoll, currentPlayer) {
//   // Change the players turn back when the dice rolls 6. If not rolled 6, display the player on the tile. 
//   if (diceRoll === 6) {
//     // moves 6 
//     document.getElementById('tile_' + currentPlayer.tile).innerHTML += `<img src="${currentPlayer.playerImg}" class="hide" width="60px" border-radius="50px"/>`;
//     console.log('Have another roll!');
//     diceRoll = rollDice();
//     movePlayer(diceRoll, currentPlayer)
//   }
//   else {
//     document.getElementById('tile_' + currentPlayer.tile).innerHTML += `<img src="${currentPlayer.playerImg}" class="hide" width="60px" border-radius="50px"/>`;
//   }
//   // Gets the objects and tile and updates the tile with the result of the diceRoll. 
//   currentPlayer.tile = currentPlayer.tile + diceRoll;
//   console.log(currentPlayer.tile);

//   // Placing the information from object inside the HTML. Then adds the image gotten from the previous page. 
//   document.getElementById('tile_' + currentPlayer.tile).innerHTML += `<img src="${currentPlayer.playerImg}">`
// }



// function changeTurn(currentPlayer) {
//   if (currentPlayer === playerOne) {
//     playerOne.isPlayerTurn = false;
//     playerTwo.isPlayerTurn = true;
//   } else {
//     playerOne.isPlayerTurn = true;
//     playerTwo.isPlayerTurn = false;
//   }
//   return currentPlayer;
// }
