

if (playerTwo.wonGame === true) {
    document.getElementById("finalWinner").innerHTML += `<img class="tile_player2" src="${playerTwo.playerImg}" width="50%" />`

}
else {
    document.getElementById("finalWinner").innerHTML += `<img class="tile_player1" src="${playerOne.playerImg}" width="50%" />`
}