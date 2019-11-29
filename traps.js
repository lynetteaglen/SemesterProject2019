// switch

const trapOne = {
    tileNum: "5",
    penalty: "1",
    alertMessage: "Quickly hide! Some whitewalker is coming. Go back 1 tile"
}

const trapTwo = {
    tileNum: "13",
    penalty: "3",
    alertMessage: "You got unlucky and stepped on a midget. Go back 3 tiles"
}

const trapThree = {
    tileNum: "17",
    penalty: "5",
    alertMessage: "The dragons of Targaryen fired up the forrest. Go back 5 tiles"
}

const trapFour = {
    tileNum: "24",
    penalty: "1",
    alertMessage: "You enemy set out a trap. Go back 1 tile"
}

const trapFive = {
    tileNum: "29",
    penalty: "10",
    alertMessage: "The throne is so close you got so excited and"
}


switch (whichPlayer.tile) {
    case trapOne.tileNum:
        alert(trapOne.alertMessage);
        break;

    case trapTwo.tileNum:
        alert(trapTwo.alertMessage);
        break;

    case trapThree.tileNum:
        alert(trapThree.alertMessage);
        break;

    case trapFour.tileNum:
        alert(trapFour.alertMessage);
        break;

    case trapFive.tileNum:
        alert(trapFive.alertMessage);
        break;

    default:
}





