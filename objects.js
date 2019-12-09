
// Player objects + attributes and values. 
const playerOne = {
    tile: 0,
    id: 1,
    PlayerName: sessionStorage.getItem("player1"),
    isPlayerTurn: true,
    wonGame: false,
    playerImg: `/Images/${sessionStorage.getItem("player1")}.svg`,
};

const playerTwo = {
    tile: 0,
    id: 2,
    PlayerName: sessionStorage.getItem("player2"),
    isPlayerTurn: false,
    wonGame: false,
    playerImg: `/Images/${sessionStorage.getItem("player2")}.svg`,
};

// switch

const trapOne = {
    tileNum: 5,
    penalty: 1,
    alertMessage: "Quickly hide! A whitewalker is coming. Go back 1 tile"
}

const trapTwo = {
    tileNum: 13,
    penalty: 5,
    alertMessage: "You got unlucky and stepped on a neelde. Go back 5 tiles"
}

const trapThree = {
    tileNum: 19,
    penalty: 5,
    alertMessage: "The dragons of Targaryen started a fire in the forrest. Go back 5 tiles"
}

const trapFour = {
    tileNum: 24,
    penalty: 1,
    alertMessage: "Your enemy set out a trap. Go back 1 tile"
}

const trapFive = {
    tileNum: 29,
    penalty: 26,
    alertMessage: "When you play a game of thrones you win or you die. Go back till tile number 3"
}






