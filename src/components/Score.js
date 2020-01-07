import React from 'react'
import logo from '../images/logo.svg'

const Score = ({score}) => {
  return(
    <div class='score'>
      <img class='logo' src={logo} alt='logo' />
      <div class='score-panel'>
        <div class='score-title'>
          SCORE
        </div>
        <div class='score-number'>
          {score}
        </div>
      </div> 
    </div>
  )
}

export default Score