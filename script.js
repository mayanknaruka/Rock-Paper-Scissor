// Step 2: Write the logic to get the computer choice

function getComputerChoice() {
    let randomNumber = Math.floor((Math.random() * 3))

    if (randomNumber === 0) {
        return "rock"
    }
    if (randomNumber === 1) {
        return "paper"
    }
    else {
        return "scissor"
    }
}
  
//    Step 3: Write the logic to get the human choice

function getHumanChoice() {
    return prompt("Enter your choice rock, paper, scissor: ").toLowerCase()
}

// console.log(getHumanChoice());

// step 6: Write the logic to play the entire game

function playGame() {
   
// Step 4: Declare the players score variables

let humanScore = 0
let computerScore = 0

// Step 5: Write the logic to play a single round
   
function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase()


  if (humanChoice==="rock" && computerChoice==="scissor") {
    console.log("You win, rock beats scissors");
    humanScore++
  }
  else if (humanChoice==="paper"&& computerChoice==="rock"){
        console.log("You win, paper beats rock");
        humanScore++
  }
  
  else if (humanChoice==="scissor"&& computerChoice==="paper"){
        console.log("You win, scissor beats paper");
        humanScore++
  }

else if (humanChoice  === computerChoice){
        console.log(`It's a tie! Both choose ${humanChoice}`);
        humanScore++
  }
  
  else if (humanChoice==="scissor"&& computerChoice==="rock"){
        console.log("You loose, scissor beats rock");
        computerScore++
  }


    else if (humanChoice==="rock"&& computerChoice==="paper"){
        console.log("You loose, rock beats paper");
        computerScore++
  }

    else if (humanChoice==="paper"&& computerChoice==="scissor"){
        console.log("You loose, paper beats scissor");
        computerScore++
  }

  }

  // Play 5 rounds
   for (let i = 0; i <= 5; i++) {
        console.log("Round" + i);    

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
console.log("score => Human:" + humanScore + "|computer " + computerScore);

 }

//   final result

if(humanScore > computerScore){
   console.log("whoo! you win the game");  
}

else if(humanScore < computerScore ){
   console.log("Whoo! you loose the game ");
     
}
else{
    console.log("its a drwa");
    
}
}

playGame()