import React from 'react'
import Alert from 'react-bootstrap/Alert'
export default class ErrorLogin extends React.Component{
    constructor(props){
        super(props)
        this.state={
            error: props.error
        }
    }

    render(){
        return(
            <div>
                <ErrorMessage error={this.state.error} />
            </div>
        )
    }
}

const ErrorMessage = props => {
    console.log(props)
    return (
        props.error
           ? <div className="alert alert-danger" role="alert">{props.error}</div>
           : null
    )
}