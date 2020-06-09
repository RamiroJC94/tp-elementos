import React from 'react';
import pikachu from '../imagen/pikachu.jpg'
import Navbar from 'react-bootstrap/Navbar'
import {Link} from 'react-router-dom'
export default class NavBarPlayer extends React.Component{

    render(){
      return (<Navbar  variant="dark" style={{backgroundColor: "#151515"}}>
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
      </Navbar.Collapse>
    </Navbar> )
    }
  }