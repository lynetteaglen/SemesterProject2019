


// Gets information from session storage
let playerImage = sessionStorage.getItem("player");

//  Displaying player information in the current tile they are placed in. 
console.log(sessionStorage.getItem("player"));

// Player objects
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

document.getElementById(`tile_0`).innerHTML += `<img src="${playerOne.playerImg}" width="60px" border-radius="50px" />`
document.getElementById(`tile_0`).innerHTML += `<img src="${playerTwo.playerImg}" width="60px" border-radius="50px"/>`


// This function makes an empty object. The if statement populates the object with the object and its variable and sets it to true. 
// The else statement switching the playertwo to equals to true. 
function rollDiceAndMovePlayer() {

  // populate empty object with either 1 or 2 depending on whos turn it is.
  let currentPlayer = {};

  if (playerOne.isPlayerTurn === true) {
    currentPlayer = playerOne;
  }
  else {
    currentPlayer = playerTwo;
  }

  // Makes Dice into a variable that has a method that makes the dice span from 1-6 whole numbers. 
  let diceRoll = (Math.floor(Math.random() * 6) + 1)
  // currentPlayer has a value 
  console.log(currentPlayer);


  // Gets the objects and tile and updates the tile with the result of the diceRoll. 
  currentPlayer.tile = currentPlayer.tile + diceRoll;
  console.log(currentPlayer.tile);

  // Placing the information from object inside the HTML. Then adds the image gotten from the previous page. 
  document.getElementById('tile_' + currentPlayer.tile).innerHTML += `<img src="${currentPlayer.playerImg}">`

  // Change player turn when the dice rolls 6. 
  if (diceRoll === 6) {
    console.log('Have another roll!');

    rollDiceAndMovePlayer();
  }
  else {
    document.getElementById('tile_' + currentPlayer.tile).innerHTML += `<img src="${currentPlayer.playerImg}" class="hide" width="60px" border-radius="50px"/>`;
  }

  //switching characters
  if (currentPlayer === playerOne) {
    playerOne.isPlayerTurn = false;
    playerTwo.isPlayerTurn = true;
  } else {
    playerOne.isPlayerTurn = true;
    playerTwo.isPlayerTurn = false;
  }

}


