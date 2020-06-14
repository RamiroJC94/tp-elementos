import React  from 'react'
import ReactPlayer from 'react-player'
import {withRouter}from 'react-router-dom';
import '../styles/player.css'
import  NavBarPlayer from './navBarPlayer.js'

class Player extends React.Component {
   constructor(props){
     super(props);
     this.state={
       peli:null,
       get:props.getMovie
     }
   
   }
    componentDidMount(){
      this.setState({peli:this.state.get()})
      console.log(this.state.get())
    }
     
    ex=()=>
    this.state.peli== null ? <div></div>: <div>
    <NavBarPlayer></NavBarPlayer>
    <div >
      <div className="movie">
          <h1>{this.state.peli.titulo}</h1>
      </div>
      <div className="centrarMovie">
      <div className="player-wrapper">
      <ReactPlayer
 url={this.state.peli.trailer}
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
     
    render () {
      
    return (<div>{this.ex()}</div>)
    }
  }

  export default withRouter(Player);