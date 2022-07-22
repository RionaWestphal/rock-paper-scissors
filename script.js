const playerOptions = document.querySelectorAll('.playerOptions button');
playerOptions.forEach(button => button.addEventListener('click', getPlayerChoice));
const result = document.querySelector('.results');
const currentResult = document.createElement('p');
const runningScore = document.createElement('p');
let playerScore = 0;
let cpuScore = 0;
const finalWinner = document.createElement('p');
finalWinner.style.cssText='font-size:50px;font-weight:bold;color:#023020';
let gameOver = false;

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
    if (gameOver) {
        return;
    }
    computerSelection = getComputerChoice();
    switch (playerSelection) {
        case "rock":
            switch (computerSelection) {
                case "rock":
                    currentResult.textContent = "Tie! Both chose rock.";
                    break;
                case "paper":
                    currentResult.textContent = "You lose! Paper beats rock.";
                    cpuScore++;
                    break;
                case "scissors":
                    currentResult.textContent = "You win! Rock beats scissors.";
                    playerScore++;
                    break;
            }
            break;
        case "paper":
            switch (computerSelection) {
                case "rock":
                    currentResult.textContent = "You win! Paper beats rock.";
                    playerScore++;
                    break;
                case "paper":
                    currentResult.textContent = "Tie! Both chose paper.";
                    break;
                case "scissors":
                    currentResult.textContent = "You lose! Scissors beats paper.";
                    cpuScore++;
                    break;
            }
            break;
        case "scissors":
            switch (computerSelection) {
                case "rock":
                    currentResult.textContent = "You lose! Rock beats scissors.";
                    cpuScore++;
                    break;
                case "paper":
                    currentResult.textContent = "You win! Scissors beats paper";
                    playerScore++;
                    break;
                case "scissors":
                    currentResult.textContent = "Tie! Both chose scissors";
                    break;
            }
            break;
    }
    result.appendChild(currentResult);
    runningScore.textContent = `You: ${playerScore} Opponent: ${cpuScore}`;
    result.appendChild(runningScore);
    if (playerScore == 5) {
        finalWinner.textContent = "You win!!!";
        result.appendChild(finalWinner);
        gameOver = true;
    }
    if (cpuScore == 5) {
        finalWinner.textContent = "CPU wins!!!";
        result.appendChild(finalWinner);
        gameOver = true;
    }
}

function getPlayerChoice(e) {
    let playerChoice = e.target.id;
    playRound(playerChoice);
}