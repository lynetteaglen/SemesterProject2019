window.rollDice = () => {
  const maxNum = 6;
  const rollDice = Math.ceil(Math.random() * maxNum);
  console.log("You rolled", rollDice);

  if (rollDice == 6) {
    console.log("It's your lucky day! Take another spin");
  }
};


Function RollDice(){
  const maxNum = 6;
}
/*
let playerOne = 0;
let playerTwo = 0;

for (; playerOne < 30, playerTwo < 30;) {
  playerOne += (rollDice())
  if (playerOne >= 30) {
    console.log("Player 1 has won the game!")
  }


}


*/


/*


var spiller_1 = 0
var spiller_2 = 0

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

for(; spiller_1<30, spiller_2<30;) {
   spiller_1 += (getRandomInt(6))
   if (spiller_1 >= 30){
    console.log('spiller 1 har vunnet!')
   }


    console.log('spiller 1 er nå på felt ', spiller_1, ' , spiller 2 er nå på felt', spiller_2, ' ! spiller 2 sin tur til å kaste')

    spiller_2 += (getRandomInt(6))
    if (spiller_2 >= 30){
      console.log('spiller 2 har vunnet!')
    }


    console.log('spiller 1 er nå på felt ', spiller_1, ' , spiller 2 er nå på felt', spiller_2, ' ! spiller 1 sin tur til å kaste !')
}

*/