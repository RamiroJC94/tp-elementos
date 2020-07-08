import React from 'react';
import {withRouter}from 'react-router-dom';
import api from '../api/api';
import  '../styles/home.css'
import Movie from './movie.js'
import NavBarHome from './navBarHome'

class Favorites extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            movies:[],
            set:props.setMovie,
            user: props.user,
            setUser: props.setUser

        }
    }
    resultSearch=(pelis)=>this.setState({pelisBuscadas:pelis})

    render(){
        
        {console.log(this.state.user)}
        let data=this.state.user.favorites;
        let pelis= data.map((elem)=><Movie key={elem.titulo} movie={elem} setPeli={this.state.set}/>);
        return (
          <div >
            <NavBarHome search={this.resultSearch} userL={this.state.user} setU={this.state.setUser}setHome={this.setHome}></NavBarHome>
            <div className="elementos">
              {pelis}
              {pelis.length === 0 ? <div>No hay elementos</div> : null}
            </div>
          </div>
        )
        
    }
}

export default withRouter(Favorites);