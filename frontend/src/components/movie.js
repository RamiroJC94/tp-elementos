import React from 'react';
import api from '../api/api';
import  '../styles/movie.css'
import {Link} from 'react-router-dom'

export default class Movie extends React.Component{
    constructor(props){
        super(props)
        this.state={
            url:"https://1.bp.blogspot.com/-p7Wzjw1BXNk/WtT3NVU1oOI/AAAAAAAAHFI/qjAi1mDHk-Ur0xTWa803uMJzz2uX5Gf4QCLcBGAs/s1600/Avengers.%2BInfinity%2BWar%2B%255B2018%255D.jpg",
            id:props.num
        }
    }
/*  componentDidMount(){
    api.getCats()
    .then((data)=> this.setState({url:data[0].url}))
    .catch((error)=> console.log(error))
  }
*/
    render(){
        const dir="/player/"+this.state.id.toString()
        return (<Link to={dir}><img className="movie"  src={this.state.url}></img></Link>);
    }
}