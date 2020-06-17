import React from 'react'
import {withRouter}from 'react-router-dom';
import  '../styles/login.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import ErrorLogin from './errorLogin'
import api from '../api/api';
 class Login extends React.Component{
     constructor(props){
         super(props);
         this.state={
             checkLogin:null,
             email:"",
             password:""
         }
     }
     
     errorLog = (messageError) => <ErrorLogin error={messageError}/>
    
    logear=()=>{
        let body = {username: this.state.email, password: this.state.password}
        api.login(body)
        .then(data=>{this.props.history.push("/addMovies")})
        .catch(error=>this.setState({checkLogin:this.errorLog("email o password incorrectos")}))
    } 
    handleEmail = (event) =>{
        this.setState({email:event.target.value.trim()})
    }  
    handlePassword = (event) =>{
        this.setState({password:event.target.value.trim()})
    }

    render(){
        return(
         <div >
             <h1 className="titul">MovieMoon</h1>
        <div className="formulario">
        <Form >
        {this.state.checkLogin} 
             <Form.Group >
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Ingresar Correo" 
                 value={this.state.email} onChange={this.handleEmail}  />
            </Form.Group>
            <Form.Group >
                <Form.Label>Password</Form.Label>
                <Form.Control  type="password" placeholder="Password"
                value={this.state.password} onChange={this.handlePassword} />
            </Form.Group>
            <div style={{textAlign:"center"}}>
            <Button  variant="primary" onClick={this.logear}>
                Login
            </Button>
            </div>
            </Form>
            </div>
            </div>)
    }
}
export default withRouter(Login)
