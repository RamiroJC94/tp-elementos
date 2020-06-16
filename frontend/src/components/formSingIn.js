import React from 'react'
import {withRouter} from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class formSingIn extends React.Component{
    contructor(prop){
        super(prop)
        this.state = {
            user: '',
            email: '',
            pss: '',
            isAdm: ''
            ------- ¿QUE MAS NECESITO? CONSULTAR CON LOS CHICOS -------
        }
    }

    render(){
        const {user, email, pss, isAdm} = this.state
        return(
            <div>
                <Form>
                    <Form.Group controlId="formGroupUser">
                        <Form.Label>User Name</Form.Label>
                        <Form.Control placeholder="Enter Your User" />
                    </Form.Group>

                    <Form.Group controlId="formGroupEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Form.Group id="formGridCheckboxAdm">
                        <Form.Check type="checkbox" label="Is Adm?" />
                    </Form.Group>

                     <Button  variant="primary" onClick={this.logear}>Login</Button>
                </Form>
            </div>
        )
}
}

export default withRouter(formSingIn)