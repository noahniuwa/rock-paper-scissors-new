import React from 'react'
import rockImg from '../images/icon-rock.svg'
import paperImg from '../images/icon-paper.svg'
import scissorsImg from '../images/icon-scissors.svg'

const GameStateTwo = ({ resetButtonHandler, playerChoice, computerChoice, resultMessage }) => {
  const images = { rock: rockImg, paper: paperImg, scissors: scissorsImg }
  const playerImg = images[playerChoice]
  const computerImg = images[computerChoice]

  return (
    <div className="game-state-two">
      <div className="player-pick">YOU PICKED</div>
      <div></div>
      <div className="house-pick">THE HOUSE PICKED</div>
      <div className={"img-border " + playerChoice}>
        <div className="btn-wrapper">
          <img className="btn" src={playerImg} alt={playerChoice}></img>
        </div>
      </div>
      <div className="reset-container">
        <div className="game-result">{resultMessage}</div>
        <div onClick={resetButtonHandler} className="reset-button">PLAY AGAIN</div>
      </div>
      <div className={"img-border " + computerChoice}>
        <div className="btn-wrapper">
          <img className="btn" src={computerImg} alt={computerChoice}></img>
        </div>
      </div>
    </div>
  )
}

export default GameStateTwo