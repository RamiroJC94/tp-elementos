import React  from 'react'
import ReactPlayer from 'react-player'
import {withRouter}from 'react-router-dom';
import '../styles/player.css'
import  NavBarPlayer from './navBarPlayer.js'

class Player extends React.Component {
   constructor(props){
     super(props);
   }
    render () {
      return (
        <div>
          <NavBarPlayer></NavBarPlayer>
          <div style={{backgroundColor: "#151515"}}>
            <div className="movie">
                <h1>Avengers Infinity War</h1>
            </div>
            <div className="centrarMovie">
            <div className="player-wrapper">
              <ReactPlayer
                 url='https://www.youtube.com/watch?v=3xk11d9hjp0'
                className='react-player'
                 width='60%'
                height='75%'
                 controls={true}
                  playing={false}
               />
            </div>
            </div>
          </div>
          </div>
      )
    }
  }

  export default withRouter(Player);