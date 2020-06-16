import React from 'react'
import {withRouter}from 'react-router-dom';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import formSingIn from './formSingIn'

class pageSingIn extends React.Component{
    render(){
        return(
            <div>
                <formSingIn/>
            </div>
        )
    }
}