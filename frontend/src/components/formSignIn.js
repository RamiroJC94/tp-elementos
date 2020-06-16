import React from 'react'
import {withRouter} from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class formSignIn extends React.Component{
    contructor(prop){
        super(prop)
        this.state = {
            user: '',
            email: '',
            pss: '',
            isAdm: ''
//            ------- ¿QUE MAS NECESITO? CONSULTAR CON LOS CHICOS -------
        }
    }

changeHandler = (e) => {
    this.setState({[[e.target.controlId]: e.target.value]})
//    ------- ACA ESTARIA SETEANDO EL JSON A PARTIR DEL CONTROLID & VALUE DEL FORM -------
//    ------- CADA VEZ QUE HAY UN CAMBIO EN EL HANDLER PISA EL VALUE DE ESE CONTROLID -------
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
                        <Form.Control placeholder="Enter Your User" value={user} onchange={this.changeHandler}/>
                    </Form.Group>

                    <Form.Group controlId="formGroupEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" value={email} onchange={this.changeHandler}/>
                    </Form.Group>

                    <Form.Group controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" value={pss} onchange={this.changeHandler}/>
                    </Form.Group>

                    <Form.Group id="formGridCheckboxAdm">
                        <Form.Check type="checkbox" label="Is Adm?" />
                        ------- ACA ME ESTA HACIENDO FALTA UN SET para la const isAdm -------
                        -------     TAMBIEN HACE FALTA EL OnCHANGE a CHANGEHANDLER -------
                    </Form.Group>
                     <Button  type="submit">Sign In</Button>
                </Form>
            </div>
        )
}
}

export default withRouter(formSignIn)