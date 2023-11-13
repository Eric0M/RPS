// Gets a random value between 0-9 and returns a random "weighted for rock" rps choice
function getComputerChoice(){
    let rand = Math.floor(Math.random()*10)
    if(rand >= 0 && rand <=3){
        let computerChoice = "rock"
        return computerChoice
    }
    else if(rand > 3 && rand <=6){
        let computerChoice = "paper"
        return computerChoice
    }
    else if(rand > 6 && rand <=9){
        let computerChoice = "scissors"
        return computerChoice  
    }
    else{
        console.log("unexpected error")
    }
}

// Gets users choice of rock paper or scissors and denies any other inputs (rps is not case sensitive)
// function getUserChoice(){
//     let userChoice = prompt("Pick your weapon (Rock, Paper, or Scissors)");
//     userChoice = userChoice.toLowerCase()
//     if(userChoice == "rock" || userChoice == "paper" || userChoice == "scissors"){
//         return userChoice
//     }
//     else{
//         alert("Please enter rock, paper, or scissors")
//     }
// }
// Plays a 5 round game of rps
function game(){
    for(let item = 0; item < 5; item++){
        letsPlay()
    }
}

function userChoseRock(){
    letsPlay("rock")
}
function userChosePaper(){
    letsPlay("paper")
}
function userChoseScissors(){
    letsPlay("scissors")
}

document.getElementById('rock').addEventListener('click', userChoseRock)
document.getElementById('paper').addEventListener('click', userChosePaper)
document.getElementById('scissors').addEventListener('click', userChoseScissors)

// Player and Computer scores
    let pScore = 0
    let cScore = 0
    let playerScore = document.getElementById('pScore')
    let computerScore = document.getElementById('cScore')
// Plays out the game of rps 
function letsPlay(p){
    let c = getComputerChoice();

    if(p == "rock" && c == "paper"){
        alert(`Computer picked ${c}, you lose!`)
        cScore = ++cScore
    }
    else if(p == "paper" && c == "paper"){
        alert(`Computer picked ${c}, it's a draw!`)
    }
    else if(p == "scissors" && c == "paper"){
        alert(`Computer picked ${c}, you win!`)
        pScore = ++pScore
    }
    else if(p == "rock" && c == "rock"){
        alert(`Computer picked ${c}, it's a draw!`)
    }
    else if(p == "paper" && c == "rock"){
        alert(`Computer picked ${c}, you win!`)
        pScore = ++pScore
    }
    else if(p == "scissors" && c == "rock"){
        alert(`Computer picked ${c}, you lose!`)
        cScore = ++cScore
    }
    else if(p == "rock" && c == "scissors"){
        alert(`Computer picked ${c}, you win!`)
        pScore = ++pScore
    }
    else if(p == "paper" && c == "scissors"){
        alert(`Computer picked ${c}, you lose!`)
        cScore = ++cScore
    }
    else if(p == "scissors" && c == "scissors"){
        alert(`Computer picked ${c}, it's a draw!`)
    }
    else{
        alert("an unexpected error has occured")
    }

    console.log(`The score is now ${pScore} for player and ${cScore} for the computer`)
    playerScore.textContent = pScore
    computerScore.textContent = cScore

    if(cScore == 3){
        alert('Computer Wins Best of 5')
        cScore = 0
        pScore = 0
        playerScore.textContent = pScore
        computerScore.textContent = cScore
    }
    if(pScore == 3){
        alert('Player Wins Best of 5')
        cScore = 0
        pScore = 0
        playerScore.textContent = pScore
        computerScore.textContent = cScore
    }
}



