import React from 'react'
import {Link, withRouter} from 'react-router-dom';
import  '../styles/login.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import ErrorLogin from './errorLogin'
import api from '../api/api';
class DeleteMovie extends React.Component{
    constructor(props){
        super(props);
        this.state={
            titulo:""
        }
    }

    errorLog = (messageError) => <ErrorLogin error={messageError}/>

    delete=()=>{
        let body = {titulo:this.state.titulo}
        api.deleteMovie(body)
            .then(data=>{this.props.history.push("/")})
            .catch(error=>this.setState({checkEnvio:this.errorLog("algo mal anda capo")}))
    }

    handleTitulo = (event) =>{
        this.setState({titulo:event.target.value})
    }

    render(){
        return(
            <div >
                <h1 className="titul">MovieMoon - Delete Movie</h1>
                <div className="formulario">
                    <Form >
                        {this.state.checkLogin}
                        <Form.Group >
                            <Form.Label style={{color: "aqua"}} >Titulo</Form.Label>
                            <Form.Control placeholder="Ingresar Titulo"
                                          value={this.state.titulo} onChange={this.handleTitulo}  />
                        </Form.Group>
                        <div style={{textAlign:"center",display: "flex"}}>
                            <Button  variant="primary" onClick={this.delete}>
                                Eliminar Pelicula
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
export default withRouter(DeleteMovie)