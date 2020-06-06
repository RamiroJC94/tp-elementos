import React from 'react';
import {withRouter}from 'react-router-dom';
import api from '../api/api';

class Home extends React.Component{
    constructor(props){
      super(props);
      this.state={url:""}
    }

   componentDidMount(){
       api.getCats()
       .then((data)=> this.setState({url:data[0].url}))
       .catch((error)=> console.log(error))
   } 
   render(){
       return (
          <div>
           <h1>HOlA soy la Home</h1>
           <h3>Soy un gato</h3>
          <img src={this.state.url} alt={true}></img>
           </div>
       );
   }
}

export default withRouter(Home)