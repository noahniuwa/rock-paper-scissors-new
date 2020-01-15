import React from 'react'
import rockImg from '../images/icon-rock.svg'
import paperImg from '../images/icon-paper.svg'
import scissorsImg from '../images/icon-scissors.svg'

const GameStateOne = ({playButtonHandler}) => {
  return(
    <div>
      <div className="row-one">
        <div className="img-border paper">
          <img onClick={playButtonHandler} className="btn" value={"paper"} src={paperImg} alt="paper"></img>
        </div>
        <div className="img-border scissors">
          <img onClick={playButtonHandler} className="btn" value={"scissors"} src={scissorsImg} alt="scissors"></img>
        </div>
      </div>
      <div className="row-two">
        <div className="img-border rock">
          <img onClick={playButtonHandler} className="btn" value={"rock"} src={rockImg} alt="rock"></img>
        </div>
      </div>
    </div>
  )
}

export default GameStateOne