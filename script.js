// Step 2: Write the logic to get the computer choice

const { get } = require("mongoose")

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

step 6:
// Step 4: Declare the players score variables

let humanScore = 0
let computerScore = 0






