import React from 'react';
import { Switch, Route } from  'react-router'; 
import { BrowserRouter} from 'react-router-dom';
import Home from './components/home';
import Player from './components/player';
import Login from './components/login'
import SignIn from './components/signIn'
import AddMovie from "./components/addMovie";
import Profile from "./components/profile";
import UpdateMovie from "./components/updateMovie";
import PanelAdmin from "./components/panelAdmin";
import DeleteMovie from "./components/deleteMovie";

export default class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      movie:"nada",
      user:null
    }
  } 
  setMovie=(movi)=> {this.setState({movie:movi})}
  setUser=(usuario)=>{this.setState({user:usuario})}
  getMovie=()=>this.state.movie;


render(){
  return (  
    
     <BrowserRouter>
      <Switch>
          <Route exact path="/" render={props =><Home setMovie={this.setMovie} user={this.state.user} setUser={this.setUser} /> } ></Route>
          <Route exact path="/player/:video" render={props=><Player getMovie={this.state.movie} user={this.state.user} setUser={this.setUser}/>}></Route>
          <Route exact path="/login" render={props=><Login userLogeado={this.setUser}/>}></Route>
          <Route exact path="/signIn" render={props=><SignIn setUser={this.setUser}></SignIn>}></Route>
          <Route exact path="/addMovies" render={AddMovie}></Route>
          <Route exact path="/updateMovies" render={UpdateMovie}></Route>
          <Route exact path="/panelAdmin" render={PanelAdmin}></Route>
          <Route exact path="/profile" render={props=><Profile user={this.state.user}/>}></Route>
          <Route exact path="/deleteMovies" render={DeleteMovie}></Route>
      </Switch>
       </BrowserRouter>
       );
}
}
