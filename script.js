// Computer choice
function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) return "rock";
    if (randomNumber === 1) return "paper";
    return "scissor";
}

// Scores (global so they persist)
let humanScore = 0;
let computerScore = 0;

// Select DOM elements
const resultsDiv = document.querySelector("#results");
const scoreDiv = document.querySelector("#score");

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorBtn = document.querySelector("#scissor");

// Play one round
function playRound(humanChoice) {

    // Stop game if someone already won
    if (humanScore === 5 || computerScore === 5) return;

    const computerChoice = getComputerChoice();
    let roundResult = "";

    if (humanChoice === computerChoice) {
        roundResult = `It's a tie! Both chose ${humanChoice}`;
    }
    else if (
        (humanChoice === "rock" && computerChoice === "scissor") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissor" && computerChoice === "paper")
    ) {
        roundResult = `You win! ${humanChoice} beats ${computerChoice}`;
        humanScore++;
    }
    else {
        roundResult = `You lose! ${computerChoice} beats ${humanChoice}`;
        computerScore++;
    }

    // Display round result
    const roundParagraph = document.createElement("p");
    roundParagraph.textContent = roundResult;
    resultsDiv.appendChild(roundParagraph);

    // Update running score
    scoreDiv.textContent =
        `Score → Human: ${humanScore} | Computer: ${computerScore}`;

    // Announce winner at 5 points
    if (humanScore === 5 || computerScore === 5) {
        const winnerMessage = document.createElement("h3");

        if (humanScore === 5) {
            winnerMessage.textContent = "🎉 You won the game!";
        } else {
            winnerMessage.textContent = "💻 Computer won the game!";
        }

        resultsDiv.appendChild(winnerMessage);
    }
}

// Event listeners
rockBtn.addEventListener("click", () => playRound("rock"));
paperBtn.addEventListener("click", () => playRound("paper"));
scissorBtn.addEventListener("click", () => playRound("scissor"));