import React from 'react'
import {withRouter} from 'react-router-dom';
import  '../styles/login.css'
import Button from 'react-bootstrap/Button'
import ErrorLogin from './errorLogin'
import meme from '../imagen/meme.png'

class PanelAdmin extends React.Component{
     constructor(props){
         super(props);
     }
     
     errorLog = (messageError) => <ErrorLogin error={messageError}/>

 /*   enviar=()=>{
        let body = {titulo: this.state.titulo, imagen: this.state.imagen, trailer: this.state.trailer}
         api.createMovie(body)
        .then(data=>{this.props.history.push("/")})
        .catch(error=>this.setState({checkEnvio:this.errorLog("algo mal anda capo")}))
    }*/


    render(){
        return(
         <div >
             <h1 className="titul">Panel Admin - MovieMoon</h1>
             <div style={{textAlign:"center",display: "flex"}}>
                 <Button  variant="primary" onClick={()=>this.props.history.push("/addMovies")}>Agregar Pelicula</Button>
                 <Button  variant="primary" onClick={()=>this.props.history.push("/updateMovies")}>Editar Pelicula</Button>
                 <Button  variant="danger" onClick={() => this.props.history.push("/")}> Home </Button>
             </div>

            </div>)
    }
}
export default withRouter(PanelAdmin)