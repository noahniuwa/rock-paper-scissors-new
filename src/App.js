import React from 'react';
import Score from './components/Score'
import './App.css';
import gameOutcome from './helpers/gameoutcome'
import GameStateOne from './components/GameStateOne';
import GameStateTwo from './components/GameStateTwo';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      statusMessage: "Initialized",
      gameChoices: {"1": "rock", "2": "paper", "3": "scissors"},
      score: 0,
      gameState: 1,
      playerChoice: null,
      computerChoice: null,
      resultMessage: null,
    }
    this.gameOutcome = gameOutcome
  }

  playButtonHandler = (event) => {
    const playerChoice = event.target.getAttribute('value')
    const computerChoice = this.state.gameChoices[Math.ceil(Math.random() * 3)]
    let outcome = this.gameOutcome(playerChoice, computerChoice)
    let score = outcome[0] === "win" ? 1 : 0
    score = this.state.score + score
    this.setState({statusMessage: outcome[1], playerChoice: playerChoice, computerChoice: computerChoice, score: score})
    this.setState({gameState: 2})
    if (outcome[0] === "win"){
      this.setState({resultMessage: "YOU WIN"})
    }
    if (outcome[0] === "tie"){
      this.setState({resultMessage: "IT'S A TIE"})
    }
    if (outcome[0] === "lose"){
      this.setState({resultMessage: "YOU LOSE"})
    }
  }

  resetButtonHandler = () => {
    this.setState({gameState: 1})
  }
 
  render() {
    if (this.state.gameState === 1) {
      return (
        <div className="App">
          <Score score={this.state.score} />
          <GameStateOne playButtonHandler={this.playButtonHandler}  /> 
        </div>
      );
    }
    if (this.state.gameState === 2) {
      return (
        <div className="App">
          <Score score={this.state.score} />
          <div className="game-state-two-wrapper">
            <GameStateTwo resetButtonHandler={this.resetButtonHandler} playerChoice={this.state.playerChoice} computerChoice={this.state.computerChoice} resultMessage={this.state.resultMessage} />
          </div>
        </div>
      );
    }
  }
  
}

export default App;
