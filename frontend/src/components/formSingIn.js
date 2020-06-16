import React from 'react'
import {withRouter} from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class formSingIn extends React.Component{
    render(){
        return(
            <div>
                <Form>

                  <Form.Group as={Row} controlId="formPlaintextEmail">
                    <Form.Label column sm="2">
                      Email
                    </Form.Label>
                    <Col sm="10">
                      <Form.Control plaintext readOnly defaultValue="email@example.com" />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} controlId="formPlaintextPassword">
                    <Form.Label column sm="2">
                      Password
                    </Form.Label>
                    <Col sm="10">
                      <Form.Control type="password" placeholder="Password" />
                    </Col>
                  </Form.Group>

                  <Button  variant="primary" onClick={this.logear}>
                                  Login
                  </Button>

                </Form>
            </div>
        )
}
}

export default withRouter(formSingIn)