import React from 'react';
import { Switch, Route } from  'react-router'; 
import { BrowserRouter} from 'react-router-dom';
import Home from './components/home';
import Player from './components/player';
export default class App extends React.Component{
render(){
  return (  
     <BrowserRouter>
      <Switch>
        <Route exact path="/" render={Home}></Route>
        <Route exact path="/player" render={Player}></Route>
      </Switch>
    
     
    </BrowserRouter>);
}
}
