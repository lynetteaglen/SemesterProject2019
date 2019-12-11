console.log(sessionStorage.getItem("winnerPlayer"));

document.getElementById("finalWinner").innerHTML = `<img class="tile_player1"  src="${sessionStorage.getItem("winnerImage")}" width="20%" />`

