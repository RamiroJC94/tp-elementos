import React from 'react';
import api from '../api/api';
import  '../styles/movie.css'
import {Link} from 'react-router-dom'

export default class Movie extends React.Component{
    constructor(props){
        super(props)
        this.state={
           peli:props.movie ,
           setM:props.setPeli
        }
    }

    render(){
        const dir="/player/"+this.state.peli.titulo
        return (<Link to={dir} onClick={()=> this.state.setM(this.state.peli)}><img className="movie"  src={this.state.peli.imagen}></img></Link>);
    }
}