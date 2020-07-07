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
            this.state.setM(this.state.peli)
            //  CREO QUE NO SE PUEDE PONER DENTRO DEL THEN
            //  POR UN TEMA DE TIEMPOS DE RESPUESTA
            //  YA QUE DIR NECESITA PASARLE EL CONTENIDO A EL TO de LINK
            //  Y DIR AL PRINCIPIO TIENE UNA LISTA DE TITULOS
            //  POR LO QUE PARA MODIFICAR DIR, PRIMERO TIENE QUE EJECUTAR EL SERVICIO API.CHANGEHISTORY
            //  POR LO QUE EL TIEMPO DE RESPUESTA ES MAS LARGO y CUANDO TERMINA DE RESPONDER EL TO LINK YA
            //  CARGO PERO CON TODA LA LISTA DE TITULOS 
            api.changeHistoryMovie(body)
            .then(data=>{console.log('')})
            .catch(error => console.log(error))
            }
    }
    //    .then(data=>{this.state.setM(this.state.peli)})


    render(){
        const dir="/player/"+this.state.peli.titulo
        // console.log('URL :: '+dir)
        return (<Link to={dir} onClick={this.handlerHistoryMovie}><img className="movie"  src={this.state.peli.imagen}></img></Link>);
    }
}