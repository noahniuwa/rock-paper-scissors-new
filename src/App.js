import React from 'react';
import Score from './components/Score'
import './App.css';
import gameOutcome from './helpers/gameoutcome'
import rockImg from './images/icon-rock.svg'
import paperImg from './images/icon-paper.svg'
import scissorsImg from './images/icon-scissors.svg'

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
        <div className="row-one">
          <div className="img-border paper">
            <img onClick={this.playButtonHandler} className="btn" value={"paper"} src={paperImg} alt="paper"></img>
          </div>
          <div className="img-border scissors">
            <img onClick={this.playButtonHandler} className="btn" value={"scissors"} src={scissorsImg} alt="scissors"></img>
          </div>
        </div>
        <div className="row-two">
          <div className="img-border rock">
            <img onClick={this.playButtonHandler} className="btn" value={"rock"} src={rockImg} alt="rock"></img>
          </div>
        </div>
      </div>
    );
  }
  
}

export default App;
