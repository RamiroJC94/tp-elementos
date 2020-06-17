import React from 'react'
import {Link, withRouter} from 'react-router-dom';
import  '../styles/login.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import ErrorLogin from './errorLogin'
import api from '../api/api';
class AddMovie extends React.Component{
     constructor(props){
         super(props);
         this.state={
             titulo:"",
             imagen:"",
             trailer:""
         }
     }
     
     errorLog = (messageError) => <ErrorLogin error={messageError}/>

    enviar=()=>{
        let body = {titulo: this.state.titulo, imagen: this.state.imagen, trailer: this.state.trailer}
         api.createMovie(body)
        .then(data=>{this.props.history.push("/")})
        .catch(error=>this.setState({checkEnvio:this.errorLog("algo mal anda capo")}))
    }
    handleTitulo = (event) =>{
        this.setState({titulo:event.target.value})
    }  
    handleTrailer = (event) =>{
        this.setState({trailer:event.target.value})
    }
    handleImagen = (event) =>{
         this.setState({imagen:event.target.value})
    }

    render(){
        return(
         <div >
             <h1 className="titul">MovieMoon</h1>
        <div className="formulario">
        <Form >
        {this.state.checkLogin} 
             <Form.Group >
                <Form.Label>Titulo</Form.Label>
                <Form.Control placeholder="Ingresar Titulo"
                 value={this.state.titulo} onChange={this.handleTitulo}  />
            </Form.Group>
            <Form.Group >
                <Form.Label>Imagen</Form.Label>
                <Form.Control placeholder="Ingresar Url de la Imagen"
                value={this.state.imagen} onChange={this.handleImagen} />
            </Form.Group>
            <Form.Group >
                <Form.Label>Trailer</Form.Label>
                <Form.Control placeholder="Ingresar Url de la Trailer"
                              value={this.state.trailer} onChange={this.handleTrailer} />
            </Form.Group>
            <div style={{textAlign:"center",display: "flex"}}>
            <Button  variant="primary" onClick={this.enviar}>
                Agregar Pelicula
            </Button>
                <Button  variant="secondary" onClick={() => this.props.history.push("/")}>
                    Home
                </Button>
            </div>
            </Form>
            </div>
            </div>)
    }
}
export default withRouter(AddMovie)