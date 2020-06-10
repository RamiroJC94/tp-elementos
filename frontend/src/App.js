import React from 'react';
import { Switch, Route } from  'react-router'; 
import { BrowserRouter,Link} from 'react-router-dom';
import Home from './components/home';
import Player from './components/player';
import Login from './components/login'
import  NotFoundPage from'./components/notFound'
export default class App extends React.Component{
  constructor(props){
    super(props)
  } 

render(){
  return (  
    
     <BrowserRouter>
      <Switch>
        <Route exact path="/" render={Home} ></Route>
        <Route exact path="/player/:video" render={props=><Player {...props}/>}></Route>
        <Route exact path="/login" render={Login}></Route>
        <Route exact path="/notFound" render={NotFoundPage}></Route>
      </Switch>
       </BrowserRouter>
       );
}
}
