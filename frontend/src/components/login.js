import React from 'react'
import {withRouter}from 'react-router-dom';
import  '../styles/login.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import ErrorLogin from './errorLogin'
 class Login extends React.Component{
     constructor(props){
         super(props);
         this.state={
             checkLogin:null
         }
     }

     errorLog = (messageError) => <ErrorLogin error={messageError}/>
    logear= () => 
        true ? this.props.history.push(`/`):this.setState({checkLogin:this.errorLog("email o password incorrectos")});
    
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
                              />
            </Form.Group>
            <Form.Group >
                <Form.Label>Password</Form.Label>
                <Form.Control  type="password" placeholder="Password" />
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
