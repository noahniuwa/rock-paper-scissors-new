import React from 'react'
import rockImg from '../images/icon-rock.svg'
import paperImg from '../images/icon-paper.svg'
import scissorsImg from '../images/icon-scissors.svg'

const GameStateTwo = ({resetButtonHandler, playerChoice, computerChoice}) => {
  return(
    <div className="game-state-two">
      <div>You Picked</div>
      <div></div>
      <div>The House Picked</div>
      <div>Player Choice: <img className={"img-border " + playerChoice} src={paperImg} alt={playerChoice}></img></div>
      <div onClick={resetButtonHandler} className="reset-button">PLAY AGAIN</div>
      <div>Computer Choice: <img className={`img-border ${computerChoice}`} src={computerChoice+"Img"} alt={computerChoice}></img></div>
    </div>
  )
}

export default GameStateTwo