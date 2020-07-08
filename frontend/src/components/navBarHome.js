import React from 'react';
import pikachu from '../imagen/pikachu.jpg'
import Navbar from 'react-bootstrap/Navbar'
import {Link} from 'react-router-dom'
import api from '../api/api';
import Movie from './movie.js'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default  class NavBarHome extends React.Component
{
     constructor(props){
         super(props);
         this.state={
           changePelis:props.search,
           input:"",
           busqueda:[],
           userLogeado:props.userL,
           setU:props.setU,
           home:props.setHome
         }
     }
      setInput=(event)=>{this.setState({input:event.target.value.trim()})}
 
      executeSearch=()=>{
          api.search(this.state.input).
          then(data=>{this.state.changePelis(data.map((elem)=><Movie key={elem.titulo} movie={elem} setPeli={this.state.set}/>))})
          .catch(error => console.log(error))
        }       
render(){
    return (
      
       <Navbar  variant="dark" style={{backgroundColor: "#151515"}}>
    <Navbar.Brand >
    <img
        alt=""
        src={pikachu}
        width="90"
        height="75"
      />{' '}
      <strong>MovieMoon</strong>
    </Navbar.Brand>
    <Form inline>
      <Form.Control type="text" placeholder="Search" className="mr-sm-2" onChange={this.setInput} />
      <Button variant="outline-info" onClick={this.executeSearch}>Search</Button>
    </Form>
    <Navbar.Collapse className="justify-content-end">
    <Navbar.Brand> <Link to="/signIn">Sing In</Link></Navbar.Brand>
    <Navbar.Brand> <Link to="/login">Login</Link></Navbar.Brand>
   
    {this.state.userLogeado!=null ?  (<Navbar.Brand> 
      {this.state.userLogeado.isAdmin ? 
        <Link to="/panelAdmin">PanelAdmin</Link> : null }
    {" "} 
    <Link to="/profile">Profile</Link>
    {" "}
    <Link to="/" onClick={()=>{this.state.setU(null)
    window.location.reload(true);
    }}>Logout</Link>
    {" "}
    <Navbar.Brand><Link to="/favorites">Favorites</Link></Navbar.Brand>
    <Navbar.Text>
      Signed in as: {this.state.userLogeado.username}
    </Navbar.Text></Navbar.Brand>):  null}
    </Navbar.Collapse>
  </Navbar> 
  

)
}
}



