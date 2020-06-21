import React from 'react'
import {withRouter}from 'react-router-dom';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state={
            user: "",
            email:"",
            isAdmin: "",    //  EDITAR -- ACA DEBERIA APARECER LOS VALORES DEL PERFIL ACTUAL
            password:""
        }
    }
    
    render(){
        return(
            <div>
                <div>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Button  variant="primary">Edit Password</Button>
                        </Form.Group>
                    </Form>
                </div>
                <div>
                    <Form>
                        <Form.Group>
                            <Form.Label>User</Form.Label>
                            <Form.Control type="text" placeholder="Edit your user name" />
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Edit your email" />
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Edit your password" />
                            <Form.Label>isAdm?</Form.Label>
                            <Form.Check type="checkbox" placeholder="Edit your password" />
                        </Form.Group>
                    </Form>
                </div>
            </div>
        )
    }
}

export default withRouter(Profile)