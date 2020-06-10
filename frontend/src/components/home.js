import React from 'react';
import {withRouter}from 'react-router-dom';
import api from '../api/api';
import  '../styles/home.css'
import Movie from './movie.js'
import NavBarHome from './navBarHome'
import axios from 'axios'
class Home extends React.Component{
    constructor(props){
      super(props);
      this.state={movies:[]
      }
    }

  componentDidMount(){ 
  api.getMovies()
    .then(data => {this.setState({movies:data})
    //console.log("info de la data")
    //console.log(data)
   })
    .catch(error => console.log(error))
  }
   render(){
       let data=this.state.movies;
       let pelis= data.map((elem)=><Movie key={elem.titulo} titulo={elem.titulo} imagen={elem.imagen} trailer={elem.trailer}></Movie>);
       return (
         <div className="back">
           <NavBarHome></NavBarHome>
           <div className="elementos">
          {pelis}

           </div>
         </div>
       );
   }
}

export default withRouter(Home)