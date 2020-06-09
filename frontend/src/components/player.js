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
                <h1>Shingeki No Kyoyin</h1>
            </div>
            <div className="centrarMovie">
            <div className="player-wrapper">
              <ReactPlayer
                 url='https://www.youtube.com/watch?v=U0OP_0twwA4'
                className='react-player'
                 width='50%'
                height='50%'
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