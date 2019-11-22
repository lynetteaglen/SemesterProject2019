function rollDiceAndMovePlayer() {
    let whichPlayer;
    if (playerOne.isPlayersTurn === true) {
        whichPlayer = playerOne;
    }
    else {
        whichPlayer = playerTwo;
    }
    const { tile, playerImg } = whichPlayer;

    let diceRoll = (Math.floor(Math.random() * 6) + 1);
    console.log(whichPlayer.tile);
    whichPlayer.tile += diceRoll;

    if (diceRoll === 6) {
        document.getElementById('tile' + tile).innerHTML += `<img src="${playerImg}" id="playerOne" class="hide" width="100px" />`;
        console.log('You have another roll');
        rollDiceAndMovePlayer();
    }
    else {
        document.getElementById('tile' + whichPlayer.tile).innerHTML += `<img src="${playerImg}" id="playerTwo" class="hide" width="100px" />`;

        if (playerOne.isPlayersTurn === true) {
            playerOne.isPlayersTurn = false;
            playerTwo.isPlayersTurn = true;
        }
        else {
            playerOne.isPlayersTurn = true;
            playerTwo.isPlayersTurn = false;
        }
    }
}