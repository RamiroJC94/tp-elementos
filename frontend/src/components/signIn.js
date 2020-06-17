import React from 'react'
import {withRouter}from 'react-router-dom';

import  '../styles/login.css'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import '../styles/formSignIn.css'
import api from '../api/api';

class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            user: "",
            email:"",
            isAdmin: false,
            password:""
        }
    }


handleUser=(event)=>{
        this.setState({user:event.target.value.trim()})  
      }
handlePassword = (event) =>{
    this.setState({password:event.target.value.trim()})
}
handleEmail = (event) =>{
    this.setState({email:event.target.value.trim()})
}  
handlerCheckbox=()=>{
    this.setState({isAdmin:!this.state.isAdmin})
    }
signIn=()=>{
    const datos={mail:this.state.email,username:this.state.user,password:this.state.password,idAdmin:this.state.isAdmin}
    api.signIn(datos)
   .then(data => this.props.history.push("/"))
   .catch(error=>console.log(error))
}
    render(){
        
        return(
            <div className="centrarForm">
                <h1 className="titul">MovieMoon</h1>
                <Form >
                <Form.Group >
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Ingresar Correo" 
                   value={this.state.email} onChange={this.handleEmail}  />
                </Form.Group>
                <Form.Group >
                  <Form.Label>Username</Form.Label>
                  <Form.Control  placeholder="Username" 
                   value={this.state.user} onChange={this.handleUser}  />
                </Form.Group>
           
                  
          <Form.Group >
                <Form.Label>Password</Form.Label>
                <Form.Control  type="password" placeholder="Password"
                value={this.state.password} onChange={this.handlePassword} />
            </Form.Group>

                    <Form.Group >
                      
                        <Form.Check type="checkbox" label="idAdmin" onClick={this.handlerCheckbox} />
                    </Form.Group>
                     <Button  variant="primary" onClick={this.signIn}>Sign In</Button>
                     <Button  variant="primary" onClick={()=>this.props.history.push("/")}>Home</Button>

                </Form>
            </div>
        )
    }
}
export default withRouter(SignIn)