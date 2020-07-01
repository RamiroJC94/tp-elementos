import React from 'react';
import  '../styles/movie.css'
import {Link} from 'react-router-dom'
import api from '../api/api';

export default class Movie extends React.Component{
    constructor(props){
        super(props)
        this.state={
           peli:props.movie ,
           setM:props.setPeli,
           userLogeado:props.user
        }
    }

    handlerHistoryMovie=()=>{
        if (this.state.userLogeado == null){
            this.state.setM(this.state.peli)
        }else{
            let body = {username: this.state.userLogeado.username, titulo: this.state.peli.titulo, imagen: this.state.peli.imagen, trailer: this.state.peli.trailer}
            console.log(body)
            this.state.setM(this.state.peli)
            api.changeHistoryMovie(body)
            .then(data=>{console.log(data)})
            .catch(error => console.log(error))
        }
    }
    //    .then(data=>{this.state.setM(this.state.peli)})


    render(){
        const dir="/player/"+this.state.peli.titulo
        return (<Link to={dir} onClick={this.handlerHistoryMovie}><img className="movie"  src={this.state.peli.imagen}></img></Link>);
    }
}