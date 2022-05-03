import React from 'react';
import './Landing.css'
import CountdownTimer from './CountdownTimer/CountdownTimer'

function Landing() {
  return (
  <div className='landing-page'>
    <div className='containerLanding'>
      <div id='HeadID' className='head'>
        <h3 className="main-heading">Le Fiestus '22</h3>
        <h5 className="sub-heading">Biggest Cultural Fest of Juit</h5>
        <CountdownTimer
            countdownTimestampMs={1651775400000}/>
      </div></div>
    </div>
  )
}

export default Landing;