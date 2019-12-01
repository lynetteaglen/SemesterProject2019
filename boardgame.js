
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
document.getElementById("tile_0").innerHTML += `<div id="token1"> <img src="${playerOne.playerImg}" width="60px" /></div>`
document.getElementById("tile_0").innerHTML += `<div id="token2"> <img src="${playerTwo.playerImg}" width="60px" /></div>`

// Function that figures which player turn it is, and rolls dice and updates the player object
// If player rolls 6, the player gets another turn
// If not the tile is emptied and places the player into current tile
// Then it changes the player turn with an if/else statement, 

// let whichPlayer;

function boardFunction() {

  let whichPlayer;

  if (playerOne.isPlayerTurn === true) {
    whichPlayer = playerOne;
  }
  else {
    whichPlayer = playerTwo;
  }

  let diceRoll = (Math.floor(Math.random() * 6) + 1);

  if (diceRoll === 6) {

    document.getElementById('tile_' + whichPlayer.tile).innerHTML = "";
    // document.getElementById('tile_' + whichPlayer.tile).innerHTML = `<div id="token1" </div>`;
    // document.getElementById('tile_' + whichPlayer.tile).innerHTML = `<div id="token2" </div>`;

    whichPlayer.tile += diceRoll;

    document.getElementById('tile_' + whichPlayer.tile).innerHTML += `<img src="${whichPlayer.playerImg}" width="60px"/>`;
    window.alert("The Gods are with you. Continue your journey!");
    console.log('The Gods are with you. Continue your journey!');
    boardFunction();
  }
  else {
    // document.getElementById(playerOne.tile.toString()).appendChild(playerOne.playerImg); // WTF 
    document.getElementById('tile_' + whichPlayer.tile).innerHTML -= `<p>""</p><img src="${whichPlayer.playerImg}" width="60px"/>`;
    whichPlayer.tile += diceRoll;
    document.getElementById('tile_' + whichPlayer.tile).innerHTML += `<img src="${whichPlayer.playerImg}" width="60px"/>`;
    if (whichPlayer === playerOne) {
      playerOne.isPlayerTurn = false;
      playerTwo.isPlayerTurn = true;
    } else {
      playerOne.isPlayerTurn = true;
      playerTwo.isPlayerTurn = false;
    }
  }

  // Switch statement setting the traps. WTF
  switch (whichPlayer.tile) {
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


  // WTFF -->

  // to set tile 30 to a winning tile using a for loop that iterates through the tiles. 
  // let boardTile;

  // for (i = 0; i < boardTile.length; i++) {
  //   if (tile === 30) {
  //     window.alert("Congratulations you won the Throne!")
  //   }
  // }

}

