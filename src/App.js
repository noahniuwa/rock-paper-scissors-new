import React from 'react';
import Score from './components/Score'
import './App.css';
import gameOutcome from './helpers/gameoutcome'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      statusMessage: "Initialized",
      gameChoices: {"1": "rock", "2": "paper", "3": "scissors"},
      score: 0,

    }
    this.gameOutcome = gameOutcome
  }

  startHandler = () => {

    this.setState({
      statusMessage: "Game has begun! Choose rock, paper, or scissors",
      status: "started",
    })
    
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
        <Score score={this.state.score} />
  
        <div onClick={this.playButtonHandler} className="btn" value={"rock"}>
          Rock
        </div>
        <div onClick={this.playButtonHandler} className="btn" value={"paper"}>
          Paper
        </div>
        <div onClick={this.playButtonHandler} className="btn" value={"scissors"}>
          Scissors
        </div>
      </div>
    );
  }
  
}

export default App;
