console.log(playerOne.wonGame);
console.log(playerTwo.wonGame);

if (playerOne.wonGame === true) {
    document.getElementById("finalWinner").innerHTML += `<img class="tile_player1" src="${playerOne.playerImg}" width="20%" />`
}
else {
    document.getElementById("finalWinner").innerHTML += `<img class="tile_player2" src="${playerTwo.playerImg}" width="20%" />`
}

