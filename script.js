function getComputerChoice() {
    rand = Math.floor(Math.random() * 3);
    if(rand == 0) {
        return "rock";
    }
    else if(rand == 1) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    switch(playerSelection) {
        case "rock": 
            switch(computerSelection) {
                case "rock": 
                    return "Tie! Both chose rock.";
                case "paper":
                    return "You lose! Paper beats rock.";
                case "scissors":
                    return "You win! Rock beats scissors.";
            }
        case "paper":
            switch(computerSelection) {
                case "rock":
                    return "You win! Paper beats rock.";
                case "paper":
                    return "Tie! Both chose paper.";
                case "scissors":
                    return "You lose! Scissors beats paper.";
            }
        case "scissors":
            switch(computerSelection) {
                case "rock":
                    return "You lose! Rock beats scissors.";
                case "paper":
                    return "You win! Scissors beats paper";
                case "scissors":
                    return "Tie! Both chose scissors";
            }
    }
}