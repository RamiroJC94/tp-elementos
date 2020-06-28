import React from 'react';
import pikachu from '../imagen/pikachu.jpg'
import Navbar from 'react-bootstrap/Navbar'
import {Link} from 'react-router-dom'
export default class NavBarPlayer extends React.Component{
  constructor(props){
    super(props);
    this.state={
          userLogeado:props.userL,
          setUser:props.setUser
    }
  }

    render(){
      return (<Navbar  variant="dark" >
      <Navbar.Brand >
      <img
          alt=""
          src={pikachu}
          width="90"
          height="75"
        />{' '}
        <strong>MovieMoon</strong>
      </Navbar.Brand>
      <Navbar.Brand >
        <Link to="/">Home</Link>
      </Navbar.Brand >
      <Navbar.Collapse className="justify-content-end">
      <Navbar.Brand> <Link to="/login">Login</Link></Navbar.Brand>
      {this.state.userLogeado!=null ?  (
      <Navbar.Brand> <Link to="/"  onClick={()=>{this.state.setUser(null)}}>Logout</Link>
       {" "}
      <Navbar.Text>
          Signed in as: {this.state.userLogeado.username}
    </Navbar.Text></Navbar.Brand>):  null}
      </Navbar.Collapse>
    </Navbar> )
    }
  }