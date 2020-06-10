import React from 'react';
import api from '../api/api';
import  '../styles/movie.css'
import {Link} from 'react-router-dom'

export default class Movie extends React.Component{
    constructor(props){
        super(props)
        this.state={
            titulo:props.titulo,
            imagen:props.imagen,
            trailer:props.trailer  
        }
    }
/*  componentDidMount(){
    api.getCats()
    .then((data)=> this.setState({url:data[0].url}))
    .catch((error)=> console.log(error))
  }
*/
    render(){
        const dir="/player/"+this.state.titulo
        return (<Link to={dir}><img className="movie"  src={this.state.imagen}></img></Link>);
    }
}