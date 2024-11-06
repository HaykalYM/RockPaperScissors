const choices = ["rock", "paper", "scissors"]

function game(){
    // play the game
    // play five round
    // console based
    playround()
}

function playRound(){

    playerSelection = playerchoice();
    const computerSelection = computerChoice();
}

function playerChoice(){
//get input from player
 let input = prompt("type Rock, Paper or Scissors")
 input = input.toLowerCase();
 console.log(input);
}

function computerChoice(){
// get random input for computer

return choices[Math.floor(Math.random()*choices.length)]
}

game();


const playerChoice = "rock"
const comp = "paper"



   console.log("hello world");

    let random = Math.random();
    console.log("Random Number:", random);
    getComputerChoice(random);

   

    function getComputerChoice() {
      if (random <= 0.33) {
        console.log("scissors");
      } else if (random > 0.33 && random <= 0.66) {
        console.log("Paper");
      } else {
        console.log("Rock");
      }
      
      return random;
    }
    
    function getHumanChoice(){
      prompt("what","")
    }