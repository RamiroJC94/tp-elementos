import React from 'react'
import {withRouter}from 'react-router-dom';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import NavBarHome from './navBarHome'

import api from '../api/api';
import Movie from './movie.js'

class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state={
            username: "",
            email:"",
            password:"",
            isAdmin: "",
            FormProfileIsVisible: "visible",
            historialIsVisible:"hidden",
            historyProfileMovies:[],
            searchHistoryProfM:[],
            setHPM:props.setHistoryProfileMovie,
            userLogeado:props.user
        }
    }

    componentDidMount(){ 
    if(this.state.searchHistoryProfM.length===0){
        api.getHistoryMovie()
        .then(data => {this.setState({historyProfileMovies:data})})
        .catch(error => console.log(error))
        }
    }

    SearchHistoryMovie=(pelis)=>this.setState({searchHistoryProfM:pelis})

    handleUser = (event) =>{
        this.setState({username:event.target.value.trim()})
    } 
    handleEmail = (event) =>{
        this.setState({email:event.target.value.trim()})
    } 
    handlePassword = (event) =>{
        this.setState({password:event.target.value.trim()})
    } 
    handleCheckBox = (event) =>{
        this.setState({isAdmin:event.target.value.trim()})
    }

    handlerChangeStatusVisibleFormProfile = () => {
        const f = this.state.FormProfileisVisible
        this.setState({FormProfileisVisible:(f==='visible' ? 'hidden': 'visible')})
    }

    handlerChangeStatusVisibleHistorial = () => {
        const f = this.state.historialIsVisible
        this.setState({historialIsVisible:(f==='visible' ? 'hidden': 'visible')})
    } 

    ChangePasswordUser=()=>{
        const body={username:this.state.username,password:this.state.password}
        api.changePasswordUser(body)
       .then(data=>{this.props.history.push("/")})
       .catch(error => console.log(error))
    }

    render(){
        const data=this.state.historyProfileMovies
        const pelis= data.map((elem)=><Movie key={elem.titulo} movie={elem} setHistory={this.state.setHPM}/>);
        return(
            <div className="centrarForm" style={{display: "flex", flexDirection:"row"}}>
                <div style={{width:"15vw", paddingRight:"1vw", alignContent:"center",alignItems:"center", display:"flex", flexDirection:"column", justifyContent:"center"}}>
                    <Form>
                        <Form.Group controlId="formEditProfile">
                            <Button  id="HiddenShow" onClick={this.handlerChangeStatusVisibleFormProfile} variant="primary">Edit Profile</Button>
                        </Form.Group>

                        <Form.Group controlId="formEditFavorites">
                            <Button  id="HiddenShow" variant="primary">Edit Favorites</Button>
                        </Form.Group>

                        {/* onClick={this.handlerChangeStatusVisible(document.getElementById("FormEditProfile"))  */}

                        <Form.Group controlId="formEditHistorial">
                            <Button  id="HiddenShow" onClick={this.handlerChangeStatusVisibleHistorial} variant="primary">Edit Historial</Button>
                        </Form.Group>
                        {/* onClick={this.handlerChangeStatusVisible(document.getElementById("FormEditProfile"))  */}
                    
                    </Form>
                </div>
                <div className="FormEditProfile" id="FormEditProfile" style={{flexDirection:"column", width:"50vw", visibility:this.state.FormProfileisVisible}}>
                    <Form>
                        <Form.Group>
                            <Form.Label>User</Form.Label>
                            <Form.Control type="text" placeholder="Enter your user name" value={this.state.username} onChange={this.handleUser}/>

                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter your email" value={this.state.email} onChange={this.handleEmail}/>

                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter your password" value={this.state.password} onChange={this.handlePassword}/>

                            <Form.Label>isAdm?</Form.Label>
                            <Form.Check type="checkbox" placeholder="Enter your password" value={this.state.isAdmin} onChange={this.handleCheckBox}/>
                        </Form.Group>
                    </Form>
                    {/* onClick={this.signIn} */}
                    <div style={{display:"flex",flexDirection:"row",justifyContent:"space-around", alignItems:"center"}}>
                        <Button  variant="primary" onClick={this.ChangePasswordUser}>ChangePasswordUser</Button>
                        <Button  variant="primary" onClick={()=>this.props.history.push("/")}>Home</Button>
                    </div>
                </div>

                <div id="History" style={{flexDirection:"column", width:"50vw", visibility:this.state.historialIsVisible}}>
                    <div>
                        {/* <NavBarHome search={this.SearchHistoryMovie}></NavBarHome> */}
                        <div className="elementos">
                            {this.state.searchHistoryProfM.length===0 ? pelis : this.state.searchHistoryProfM}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Profile)