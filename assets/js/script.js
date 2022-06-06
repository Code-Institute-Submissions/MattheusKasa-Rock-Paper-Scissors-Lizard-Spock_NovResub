let computerChoiceDisplay = document.getElementById ('computer-choice')
let userChoiceDisplay = document.getElementById ('user-choice')
let resultDisplay = document.getElementById ('result')
let possibleChoices = document.querySelectorAll ("button")
let userChoice
let computerChoice
let result

    possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1
    
    if (randomNumber === 1) {
        computerChoice = 'rock'
    }
    if (randomNumber === 2) {
        computerChoice = 'paper'
    }
    if (randomNumber === 3) {
        computerChoice = 'scissors'
    }
    if (randomNumber === 4) {
        computerChoice = 'lizard'
    }
    if (randomNumber === 5) {
        computerChoice = 'spock'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === userChoice) {
        result = 'its a draw!'
    } 
    if (computerChoice === 'rock' && userChoice === "paper") {
        result = 'you win!'
    }
    if (computerChoice === 'rock' && userChoice === "scissors") {
        result = 'you loose!'
    }
    if (computerChoice === 'rock' && userChoice === "lizard") {
        result = 'you loose!'
    }
    if (computerChoice === 'rock' && userChoice === "spock") {
        result = 'you win!'
    }

    if (computerChoice === 'paper' && userChoice === "scissors") {
        result = 'you win!'
    }
    if (computerChoice === 'paper' && userChoice === "rock") {
        result = 'you loose!'
    }
    if (computerChoice === 'paper' && userChoice === "lizard") {
        result = 'you win!'
    }
    if (computerChoice === 'paper' && userChoice === "spock") {
        result = 'you loose!'
    }

    if (computerChoice === 'scissors' && userChoice === "rock") {
        result = 'you win!'
    }
    if (computerChoice === 'scissors' && userChoice === "paper") {
        result = 'you loose!'
    }
    if (computerChoice === 'scissors' && userChoice === "lizard") {
        result = 'you loose!'
    }
    if (computerChoice === 'scissors' && userChoice === "spock") {
        result = 'you win!'
    }

    if (computerChoice === 'lizard' && userChoice === "rock") {
        result = 'you win!'
    }
    if (computerChoice === 'lizard' && userChoice === "paper") {
        result = 'you win!'
    }
    if (computerChoice === 'lizard' && userChoice === "scissors") {
        result = 'you loose!'
    }
    if (computerChoice === 'lizard' && userChoice === "spock") {
        result = 'you loose!'
    }

    if (computerChoice === 'spock' && userChoice === "rock") {
        result = 'you win!'
    }
    if (computerChoice === 'spock' && userChoice === "paper") {
        result = 'you loose!'
    }
    if (computerChoice === 'spock' && userChoice === "scissors") {
        result = 'you win!'
    }
    if (computerChoice === 'spock' && userChoice === "lizard") {
        result = 'you loose!'
    }
    resultDisplay.innerHTML = result
}

