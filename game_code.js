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
}


