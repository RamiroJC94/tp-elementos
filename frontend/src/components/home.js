import React from 'react';
import {withRouter}from 'react-router-dom';
import api from '../api/api';
import  '../styles/home.css'
import Movie from './movie.js'
import NavBarHome from './navBarHome'
class Home extends React.Component{
    constructor(props){
      super(props);
      this.state={url:""
      }
    }
   
   render(){
       let elems=[1,2,3,4,5,6,7,8,9,10];
       let pelis= elems.map((elem)=><Movie key={elem.toString()} num={elem}></Movie>);
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