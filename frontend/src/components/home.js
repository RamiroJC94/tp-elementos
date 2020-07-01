import React from 'react';
import {withRouter}from 'react-router-dom';
import api from '../api/api';
import  '../styles/home.css'
import Movie from './movie.js'
import NavBarHome from './navBarHome'
class Home extends React.Component{
    constructor(props){
      super(props);
      this.state={
        movies:[],
        set:props.setMovie,
        pelisBuscadas:[],
        userLogeado:props.user
      }
    }
  resultSearch=(pelis)=>this.setState({pelisBuscadas:pelis})
  componentDidMount(){ 
    if(this.state.pelisBuscadas.length===0){
  api.getMovies()
    .then(data => {this.setState({movies:data})
      
   })
    .catch(error => console.log(error))
  }
  }
   render(){
       let data=this.state.movies;
       let pelis= data.map((elem)=><Movie key={elem.titulo} movie={elem} setPeli={this.state.set} user={this.state.userLogeado}/>);
       return (
         <div >
           <NavBarHome search={this.resultSearch}></NavBarHome>
           <div className="elementos">
          {this.state.pelisBuscadas.length===0 ? pelis : this.state.pelisBuscadas}

           </div>
         </div>
       );
   }
}

export default withRouter(Home)