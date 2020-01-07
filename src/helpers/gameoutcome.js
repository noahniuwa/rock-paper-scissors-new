const gameOutcome = (playerChoice, computerChoice) => {
  if (playerChoice === "rock") {
    if (computerChoice === "rock"){
      return ["tie", "It's a tie, rock and rock"]
    }
    if (computerChoice === "paper"){
      return ["lose", "You lose! Paper beats rock"]
    }
    if (computerChoice === "scissors"){
      return ["win", "You win! Rock beats scissors"]
    }
  }
  if (playerChoice === "paper") {
    if (computerChoice === "rock"){
      return ["win", "You win! Paper beats rock"]
    }
    if (computerChoice === "paper"){
      return ["tie", "It's a tie! Paper and paper."]
    }
    if (computerChoice === "scissors"){
      return ["lose", "You lose! Scissors beats paper!"]
    }
  }
  if (playerChoice === "scissors") {
    if (computerChoice === "rock"){
      return ["lose", "You lose! Rock beats scissors!"]
    }
    if (computerChoice === "paper"){
      return ["win", "You win! Scissors beats paper!"]
    }
    if (computerChoice === "scissors"){
      return ["tie", "It's a tie! Scissors and scissors!"]
    }
  }
}

export default gameOutcome