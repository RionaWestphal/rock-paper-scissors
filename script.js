const playerOptions = document.querySelectorAll('.playerOptions button');
playerOptions.forEach(button => button.addEventListener('click', getPlayerChoice));
const result = document.querySelector('.results');
const currentResult = document.createElement('div');

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
                    currentResult.textContent="Tie! Both chose rock.";
                    break;
                case "paper":
                    currentResult.textContent="You lose! Paper beats rock.";
                    break;
                case "scissors":
                    currentResult.textContent="You win! Rock beats scissors.";
                    break;
            }
            break;
        case "paper":
            switch (computerSelection) {
                case "rock":
                    currentResult.textContent="You win! Paper beats rock.";
                    break;
                case "paper":
                    currentResult.textContent="Tie! Both chose paper.";
                    break;
                case "scissors":
                    currentResult.textContent="You lose! Scissors beats paper.";
                    break;
            }
            break;
        case "scissors":
            switch (computerSelection) {
                case "rock":
                    currentResult.textContent="You lose! Rock beats scissors.";
                    break;
                case "paper":
                    currentResult.textContent="You win! Scissors beats paper";
                    break;
                case "scissors":
                    currentResult.textContent="Tie! Both chose scissors";
                    break;
            }
            break;
    }
    result.appendChild(currentResult);
}

function getPlayerChoice(e) {
    let playerChoice = e.target.id;
    playRound(playerChoice);
}