function getComputerChoice() {
    rand = Math.floor(Math.random() * 3);
    if (rand == 0) {
        return "rock";
    }
    else if (rand == 1) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function playRound(playerSelection) {
    computerSelection = getComputerChoice();
    switch (playerSelection) {
        case "rock":
            switch (computerSelection) {
                case "rock":
                    console.log("Tie! Both chose rock.");
                    break;
                case "paper":
                    console.log("You lose! Paper beats rock.");
                    break;
                case "scissors":
                    console.log("You win! Rock beats scissors.");
                    break;
            }
            break;
        case "paper":
            switch (computerSelection) {
                case "rock":
                    console.log("You win! Paper beats rock.");
                    break;
                case "paper":
                    console.log("Tie! Both chose paper.");
                    break;
                case "scissors":
                    console.log("You lose! Scissors beats paper.");
                    break;
            }
            break;
        case "scissors":
            switch (computerSelection) {
                case "rock":
                    console.log("You lose! Rock beats scissors.");
                    break;
                case "paper":
                    console.log("You win! Scissors beats paper");
                    break;
                case "scissors":
                    console.log("Tie! Both chose scissors");
                    break;
            }
            break;
    }
}

function getPlayerChoice(e) {
    let playerChoice = e.target.id;
    playRound(playerChoice);
}

const playerOptions = document.querySelectorAll('.playerOptions button');
playerOptions.forEach(button => button.addEventListener('click', getPlayerChoice));
