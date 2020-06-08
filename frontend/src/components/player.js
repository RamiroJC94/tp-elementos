import React  from 'react'
import ReactPlayer from 'react-player'
import {withRouter}from 'react-router-dom';
import Button from 'react-bootstrap/Button'


 class Player extends React.Component {
    render () {
      return (
          <div className='player-wrapper'>
         <ReactPlayer
            url='https://www.youtube.com/watch?v=U0OP_0twwA4'
            className='react-player'
            playing
            width='50%'
            height='50%'
            controls={true}
          />
          <br></br>

        </div>
      )
    }
  }

  export default withRouter(Player);