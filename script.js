// Step 2: Write the logic to get the computer choice
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) return "rock";
    if (randomNumber === 1) return "paper";
    return "scissor";
}

// Step 3: Write the logic to get the human choice
function getHumanChoice() {
    return prompt("Enter your choice rock, paper, scissor: ").toLowerCase();
}

// Step 4: Declare score variables OUTSIDE so they persist
let humanScore = 0;
let computerScore = 0;

// Step 5: Write the logic to play a single round
function playRound(humanChoice, computerChoice) {

    console.log("Human:", humanChoice);
    console.log("Computer:", computerChoice);

    if (humanChoice === computerChoice) {
        console.log(`It's a tie! Both chose ${humanChoice}`);
    }
    else if (
        (humanChoice === "rock" && computerChoice === "scissor") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissor" && computerChoice === "paper")
    ) {
        console.log("You win this round!");
        humanScore++;
    }
    else {
        console.log("You lose this round!");
        computerScore++;
    }

    console.log(`Score → Human: ${humanScore} | Computer: ${computerScore}`);
}

// Now manually play ONE round (no loop)
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);