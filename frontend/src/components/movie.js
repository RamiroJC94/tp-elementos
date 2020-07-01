import React from 'react';
import  '../styles/movie.css'
import {Link} from 'react-router-dom'
import api from '../api/api';

export default class Movie extends React.Component{
    constructor(props){
        super(props)
        this.state={
           peli:props.movie ,
           setM:props.setPeli
        }
    }

    HandlerHistoryMovie=()=>{
        let body = {titulo: this.state.titulo, imagen: this.state.imagen, trailer: this.state.trailer}
         api.changeHistoryMovie(body)
        .then(data=>{this.state.setM(this.state.peli)})
        .catch(error=>this.setState({checkEnvio:this.errorLog("algo mal anda capo")}))
    }

    render(){
        const dir="/player/"+this.state.peli.titulo
        return (<Link to={dir} onClick={this.HandlerHistoryMovie}><img className="movie"  src={this.state.peli.imagen}></img></Link>);
    }
}