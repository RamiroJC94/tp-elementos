import React from 'react';
import { Switch, Route } from  'react-router'; 
import { BrowserRouter} from 'react-router-dom';
import Home from './components/home';
import Player from './components/player';
import Login from './components/login'
import  NotFoundPage from'./components/notFound'
import AddMovie from "./components/addMovie";
export default class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      movie:"nada"
    }
  } 
  setMovie=(movi)=> {this.setState({movie:movi})}
 
  getMovie=()=>this.state.movie;
render(){
  return (  
    
     <BrowserRouter>
      <Switch>
          <Route exact path="/" render={props =><Home setMovie={this.setMovie} /> } ></Route>
          <Route exact path="/player/:video" render={props=><Player getMovie={this.getMovie}/>}></Route>
          <Route exact path="/login" render={Login}></Route>
          {/*<Route exact path="/notFound" render={NotFoundPage}></Route>*/}
          <Route exact path="/addMovies" render={AddMovie}></Route>
      </Switch>
       </BrowserRouter>
       );
}
}
