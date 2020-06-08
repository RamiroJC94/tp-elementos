import React from 'react';
import api from '../api/api';
import  '../styles/movie.css'

export default class Movie extends React.Component{
    constructor(props){
        super(props)
        this.state={
            url:"https://www.tonica.la/__export/1587957633788/sites/debate/img/2020/04/26/avengers-endgame-momentos-epicos-no-podemos-dejar-ver_1.jpg_423682103.jpg"
        }
    }
/*  componentDidMount(){
    api.getCats()
    .then((data)=> this.setState({url:data[0].url}))
    .catch((error)=> console.log(error))
  }
*/
    render(){
        return (<img className="movie"  src={this.state.url}></img>);
    }
}