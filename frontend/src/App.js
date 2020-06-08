import React from 'react';
import { Switch, Route } from  'react-router'; 
import { BrowserRouter,Link} from 'react-router-dom';
import Home from './components/home';
import Player from './components/player';
import Navbar from 'react-bootstrap/Navbar'
import pikachu from './imagen/pikachu.jpg'
export default class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      mostrar:true
    }
  }
render(){
  return (  
     <BrowserRouter>
       <NavBar mostrar={this.state.mostrar}></NavBar>     
      <Switch>
        <Route exact path="/" render={Home}></Route>
        <Route exact path="/player" render={Player}></Route>
      </Switch>
    
     
    </BrowserRouter>);
}
}

const NavBar = props =>{
  return props.mostrar ?
      (             <Navbar bg="dark" variant="dark">
      <Navbar.Brand >  
       {false ? <img
            alt=""
            src={pikachu}
            width="90"
            height="65"
          />: null}
             <strong classname="titulo">MovieMoon</strong> 
      </Navbar.Brand>
    <Navbar.Collapse className="justify-content-end">
       <Navbar.Text>
        Signed in as: <a href="#login">Mark Otto</a>
       </Navbar.Text>
   </Navbar.Collapse>
 </Navbar>) : null
}