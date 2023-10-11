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
function getUserChoice(){
    let userChoice = prompt("Pick your weapon (Rock, Paper, or Scissors)");
    userChoice = userChoice.toLowerCase()
    if(userChoice == "rock" || userChoice == "paper" || userChoice == "scissors"){
        return userChoice
    }
    else{
        alert("Please enter rock, paper, or scissors")
    }
}

