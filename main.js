const choices = ["rock", "paper", "scissors"];
const winners = [];


function game(){
    // play the game
    // play five round
    // console based
    
    for(let i = 1; i <= 5; i++){
      playRound(i);
    }

    logWins();
}

function playRound(round){

  playerSelection = playerchoice();
  const computerSelection = computerChoice();
  const winner = checkWinner(playerSelecation, computerSelection);
  console.log(winner);
  winners.push(winner)
  logRound(playerSelection,computerSelection,winner)
}

function playerChoice(){
//get input from player
 let input = prompt("type Rock, Paper or Scissors")
 while(input == null){
    let input = prompt("type Rock, Paper or Scissors")
 }
 input = input.toLowerCase();

 let check = validateInput(input)
 while(check == false){
    input = prompt("type Rock, Paper or Scissors, Spelling needs to be exact, but capitilization doesn't matter") 
 while(input == null){
    let input = prompt("type Rock, Paper or Scissors")
 }
 input = input.toLowerCase(input)
  check = validateInput(input) 
}
return input; 
}

function computerChoice(){
// get random input for computer

return choices[Math.floor(Math.random()*choices.length)]
}

function validateInput(input){
  return choices.includes(choice);
}

function checkWinner(choiceP,choiceC){

  if(choiceP === choiceC){
    return 'Tie';
  }else if(
    (choiceP === "rock" && choiceC =="scissors") || 
    (choiceP === "paper" && choiceC =="rock") ||
    (choiceP === "scissors" && choiceC =="paper")
  
  ){
    return "Player";
  }else{
    return "Computer";
  }
}

function logWins(){
  let playerWins = winners.filter((item) => item == "Player").length;
  let computerWins = winners.filter ((item) => item == "Computer").length;
  let ties = winners.filter((item) => item == "Tie").length;
  console.log("Results:");
  console.log("Player Wins:", playerWins);
  console.log("Computer Wins:",computerWins);
  console.log("Ties:", ties);
} 

function logRound(playerChoice, computerChoice, winner,round){
  console.log('Round:', round);
  console.log('Player Chose:', playerChoice);
  console.log('Computer Chose:', computerChoice);
  console.log(winner, 'Won the Round');
  console.log("-------------------------------")
}



