import React from 'react'
import rockImg from '../images/icon-rock.svg'
import paperImg from '../images/icon-paper.svg'
import scissorsImg from '../images/icon-scissors.svg'

const GameStateOne = ({ playButtonHandler }) => {
  return (
    <div>
      <div className="row-one">
        <div className="img-border paper">
          <div className="btn-wrapper">
            <img onClick={playButtonHandler} className="btn" value={"paper"} src={paperImg} alt="paper"></img>
          </div>
        </div>
        <div className="img-border scissors">
          <div className="btn-wrapper">
            <img onClick={playButtonHandler} className="btn" value={"scissors"} src={scissorsImg} alt="scissors"></img>
          </div>
        </div>
      </div>
      <div className="row-two">
        <div className="img-border rock">
          <div className="btn-wrapper">
            <img onClick={playButtonHandler} className="btn" value={"rock"} src={rockImg} alt="rock"></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GameStateOne