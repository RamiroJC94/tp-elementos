import React from 'react'
import {withRouter}from 'react-router-dom';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import formSingIn from './formSignIn'

class pageSignIn extends React.Component{
    render(){
        return(
            <div>
                <formSignIn/>
            </div>
        )
    }
}