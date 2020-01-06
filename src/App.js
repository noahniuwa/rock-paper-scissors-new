import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      title: "Rock, paper, scissors!!",
      statusMessage: "Initialized",
      gameChoices: {"1": "rock", "2": "paper", "3": "scissors"},
      score: 0,

    }
  }

  startHandler = () => {

    this.setState({
      statusMessage: "Game has begun! Choose rock, paper, or scissors",
      status: "started",
    })
    
  }

  gameOutcome(playerChoice, computerChoice) {
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

  playButtonHandler = (event) => {
    const playerChoice = event.target.getAttribute('value')
    const computerChoice = this.state.gameChoices[Math.ceil(Math.random() * 3)]
    let outcome = this.gameOutcome(playerChoice, computerChoice)
    let score = outcome[0] === "win" ? 1 : 0
    score = this.state.score + score
    this.setState({statusMessage: outcome[1], playerChoice: playerChoice, computerChoice: computerChoice, score: score})
  }
 

  render() {

    return (
      <div className="App">
        <h1 className="title">
          {this.state.title}
        </h1>
        <div onClick={this.playButtonHandler} className="btn" value={"rock"}>
          Rock
        </div>
        <div onClick={this.playButtonHandler} className="btn" value={"paper"}>
          Paper
        </div>
        <div onClick={this.playButtonHandler} className="btn" value={"scissors"}>
          Scissors
        </div>

        <div className="game-status">
          <p>{this.state.statusMessage}</p>
          <p>Player: {this.state.playerChoice}</p>
          <p>Computer: {this.state.computerChoice}</p>
          <p>Score: {this.state.score}</p>
        </div>
        
        <div onClick={this.startHandler} className="btn">
          Start game
        </div>

        <div className="stateInfo">

        </div>
      </div>
    );
  }
  
}

export default App;
