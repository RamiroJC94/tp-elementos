import React from 'react'
import {withRouter}from 'react-router-dom';
import FormSignIn from './formSignIn'

class signIn extends React.Component{
    render(){
        return(
            <div>
                <FormSignIn/>
            </div>
        )
    }
}

export default withRouter(signIn)