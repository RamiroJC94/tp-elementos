import React from 'react'
import {withRouter}from 'react-router-dom';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state={
            password:""
        }
    }
    
    render(){
        return(
            <div>
                <Form>
                    <Button  variant="primary">Edit Password</Button>
                </Form>
            </div>
        )
    }
}

export default withRouter(Profile)