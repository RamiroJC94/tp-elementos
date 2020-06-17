import React from 'react'
import {withRouter} from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default class FormSignIn extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            user: '',
            email: '',
            pss: '',
            isAdm: ''
        }
    }

changeUserHandler = (e) => {
    this.setState({user : e.target.value.trim()})
}

changeEmailHandler = (e) => {
    this.setState({Email : e.target.value.trim()})
}
changePssHandler = (e) => {
    this.setState({Pss : e.target.value.trim()})
}

changeIsAdmHandler = (e) => {
    this.setState({Adm : true})
}

submitHandler = e => {
    e.preventDefault()
    console.log(this.state)
//  ------- ¿QUE HACER CUANDO SE MANDA EL SUBMIT? -------
}

    render(){
        const {user, email, pss, isAdm} = this.state
        return(
            <div>
                <Form onSubmit={this.submitHandler}>
                    <Form.Group controlId="formGroupUser">
                        <Form.Label>User Name</Form.Label>
                        <Form.Control placeholder="Enter Your User" value={this.state.user} onchange={this.changeUserHandler}/>
                    </Form.Group>

                    <Form.Group controlId="formGroupEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" value={this.state.email} onchange={this.changeEmailHandler}/>
                    </Form.Group>

                    <Form.Group controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" value={this.state.pss} onchange={this.changePssHandler}/>
                    </Form.Group>

                    <Form.Group id="formGridCheckboxAdm">
                        {/* <Form.Check type="checkbox" label="Is Adm?" /> */}
                        <Button  onclick={this.changeIsAdmHandler}>Is Adm?</Button>
                    </Form.Group>
                     <Button  type="submit">Sign In</Button>
                </Form>
            </div>
        )
    }
}