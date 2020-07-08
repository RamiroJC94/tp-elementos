import React from 'react'
import {Link, withRouter} from 'react-router-dom';
import  '../styles/login.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import ErrorLogin from './errorLogin'
import api from '../api/api';
import  '../styles/movie.css'
class DeleteMovie extends React.Component{
    constructor(props){
        super(props);
        this.state={
            pelis:[]
        }
    }

    errorLog = (messageError) => <ErrorLogin error={messageError}/>

    delete=(title)=>{
        if(window.confirm("Esta seguro que desea eliminar la peli")){
        let body = {titulo:title};
        api.deleteMovie(body)
            .then(data=>{this.props.history.push("/")})
            .catch(error=>this.setState({checkEnvio:this.errorLog("algo mal anda capo")}))
        }
    }
    componentDidMount(){
        api.getMovies().
        then(data=>{
            const movies= data.map(p=><MovieToDelete src={p.imagen} remove={this.delete} titulo={p.titulo} />) 
            this.setState({pelis:movies})});
    }
    handleTitulo = (event) =>{
        this.setState({titulo:event.target.value})
    }

    render(){
        return(
            <div >
                <h1 className="titul">MovieMoon - Delete Movie</h1>
                <div className="elementos">{this.state.pelis}</div>
           </div>)
    }
}
function MovieToDelete(props){
    return (
      <img src={props.src} onClick={()=>{props.remove(props.titulo)}}className="movie"></img>  
    )
}
export default withRouter(DeleteMovie)