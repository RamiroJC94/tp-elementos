import React from 'react';
import { Switch, Route } from  'react-router'; 
import { BrowserRouter,Link} from 'react-router-dom';
import Home from './components/home';
import Player from './components/player';
import Login from './components/login'
export default class App extends React.Component{
  constructor(props){
    super(props)
  } 

render(){
  return (  
    
     <BrowserRouter>
      <Switch>
        <Route exact path="/" render={Home} ></Route>
        <Route exact path="/player/:idMovie" render={Player}></Route>
        <Route exact path="/login" render={Login}></Route>
      </Switch>
       </BrowserRouter>
       );
}
}
