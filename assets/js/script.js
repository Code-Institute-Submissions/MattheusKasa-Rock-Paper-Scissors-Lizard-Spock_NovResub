let computerChoiceDisplay = document.getElementById ('computer-choice');
let userChoiceDisplay = document.getElementById ('user-choice');
let resultDisplay = document.getElementById ('result');
let possibleChoices = document.querySelectorAll ("button");
let userChoice;
let computerChoice;
let result;
var userScore = 0;
var computerScore = 0;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
userChoice = e.target.id;
userChoiceDisplay.innerHTML = userChoice;
generateComputerChoice();
getResult();
}));

/** functions for the computers choices **/
function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1;
    
    if (randomNumber === 1) {
        computerChoice = 'rock';
    }
    if (randomNumber === 2) {
        computerChoice = 'paper';
    }
    if (randomNumber === 3) {
        computerChoice = 'scissors';
    }
    if (randomNumber === 4) {
        computerChoice = 'lizard';
    }
    if (randomNumber === 5) {
        computerChoice = 'spock';
    }
    computerChoiceDisplay.innerHTML = computerChoice;
}

/** function comparing the users choice and giving a message depending if its a win or a loss **/
function getResult() {

    if (computerChoice === userChoice) {
        result = 'its a draw!';
    }
    else if(computerChoice === 'rock') {

        if(userChoice ==='paper') {
            playerWins();
            
        } else if (userChoice === 'spock') {
            playerWins();
             
        } else {
            computerWins();
        }
    }
    else if(computerChoice === 'paper') {

        if(userChoice ==='scissors') {
            playerWins();
            
        } else if (userChoice === 'lizard') {
            playerWins();
             
        } else {
            computerWins();
        }
    }
    else if(computerChoice === 'scissors') {

        if(userChoice ==='rock') {
            playerWins();
            
        } else if (userChoice === 'spock') {
            playerWins();
            
        } else {
            computerWins();
        }
    }
    else if(computerChoice === 'lizard') {
        
        if(userChoice ==='scissors') {
            playerWins();
            
        } else if (userChoice === 'rock') {
            playerWins();
           
        } else {
            computerWins();
        }
    }
    else if(computerChoice === 'spock') {

        if(userChoice ==='paper') {
            playerWins();
            
        } else if (userChoice === 'lizard') {
            playerWins();
          
        } else {
            computerWins();
        }
    }
    
/** Displays results **/
    resultDisplay.innerHTML = result;
}

/** Function showing if the users choice wins over the computers **/
function playerWins() {
    result = 'You win :)';
    document.getElementById("result-score-user").innerText = ++userScore;
    userScore.textContent = userScore;
}

/** Function showing if the users choice does not win over the computers **/
function computerWins() {
    result = 'Computer wins :(';
    document.getElementById("result-score-computer").innerText = ++computerScore;
    computerScore.textContent = computerScore;
}
